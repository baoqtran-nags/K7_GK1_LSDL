import React, { useState } from 'react';
import { ALL_EXAM_SETS } from '../data/allExams';
import { ExamSet, ExamQuestion, QuestionCategory } from '../types/exams';
import { 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  Calculator, 
  Percent, 
  BookOpen, 
  Copy, 
  Check, 
  Download, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  Map, 
  Eye, 
  EyeOff,
  HardDrive,
  DownloadCloud
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import { isExamDownloaded, saveExamForOffline, getDownloadedExamIds } from '../utils/offlineStorage';

interface ExamSetsViewProps {
  onOpenOfflineModal?: () => void;
}

export const ExamSetsView: React.FC<ExamSetsViewProps> = ({ onOpenOfflineModal }) => {
  const { isLight, isSepia } = useTheme();
  const [selectedExamId, setSelectedExamId] = useState<string>('de-01');
  const [categoryFilter, setCategoryFilter] = useState<'all' | QuestionCategory>('all');
  const [showAnswers, setShowAnswers] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [offlineUpdated, setOfflineUpdated] = useState<number>(0);

  const downloadedIds = getDownloadedExamIds();

  const currentExam: ExamSet = ALL_EXAM_SETS.find(e => e.id === selectedExamId) || ALL_EXAM_SETS[0];

  const filteredQuestions = currentExam.questions.filter(q => {
    if (categoryFilter === 'all') return true;
    return q.category === categoryFilter;
  });

  const handleCopyExam = () => {
    sounds.playClick();
    const formattedText = JSON.stringify(currentExam, null, 2);
    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadExam = () => {
    sounds.playClick();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentExam, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${currentExam.id}-bo-de-30-cau.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const headingColor = isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white";
  const mutedTextColor = isLight ? "text-slate-500" : isSepia ? "text-[#65543D]" : "text-slate-400";
  const cardBg = isLight ? "bg-white border-stone-200/90 shadow-sm" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-800/60 border-slate-700/80 shadow-md";

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-xl text-xs font-black bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
              CHƯƠNG TRÌNH KẾT NỐI TRI THỨC
            </span>
            <h2 className={`text-2xl font-black flex items-center gap-2 ${headingColor}`}>
              <Layers className="w-6 h-6 text-indigo-500" />
              <span>Hệ Thống 04 Bộ Đề Chuẩn (Mỗi Bộ 30 Câu)</span>
            </h2>
          </div>
          <p className={`text-xs mt-1 ${mutedTextColor}`}>
            Bao gồm Trắc nghiệm (20 câu), Đúng/Sai (4 câu), Tính Mật độ dân số (2 câu), Tính Tỉ trọng (2 câu) và Tự luận (2 câu).
          </p>
        </div>

        {/* Global Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          {onOpenOfflineModal && (
            <button
              onClick={() => { sounds.playClick(); onOpenOfflineModal(); }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600/15 hover:bg-emerald-600/25 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 transition shadow-xs"
              title="Quản lý bộ nhớ ngoại tuyến PWA"
            >
              <HardDrive className="w-4 h-4 text-emerald-500" />
              <span>Kho Offline ({downloadedIds.length}/4 Đề)</span>
            </button>
          )}

          <button
            onClick={() => { sounds.playClick(); setShowAnswers(!showAnswers); }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors shadow-xs ${
              showAnswers 
                ? "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-300" 
                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-stone-300 dark:border-slate-700"
            }`}
          >
            {showAnswers ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            <span>{showAnswers ? "Đang hiện đáp án" : "Ẩn đáp án để thi"}</span>
          </button>

          <button
            onClick={handleDownloadExam}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors shadow-xs ${
              isLight 
                ? "bg-white hover:bg-stone-100 text-slate-700 border-stone-300" 
                : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Tải JSON Đề</span>
          </button>

          <button
            onClick={handleCopyExam}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Đã sao chép!" : "Sao chép đề"}</span>
          </button>
        </div>
      </div>

      {/* 4 Exam Set Switcher Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {ALL_EXAM_SETS.map((exam, idx) => {
          const isSelected = exam.id === selectedExamId;
          return (
            <button
              key={exam.id}
              onClick={() => {
                sounds.playClick();
                setSelectedExamId(exam.id);
              }}
              className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden shadow-xs ${
                isSelected
                  ? "bg-indigo-600 text-white border-indigo-600 ring-2 ring-indigo-400/40 shadow-lg shadow-indigo-600/25 scale-102"
                  : isLight 
                    ? "bg-white hover:bg-stone-50 border-stone-200 text-slate-800" 
                    : isSepia 
                      ? "bg-[#FAF5EA] hover:bg-[#EFE8D8] border-[#D8CCB5] text-[#2C2114]" 
                      : "bg-slate-800/80 hover:bg-slate-800 border-slate-700 text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                  isSelected ? "bg-white/20 text-white" : "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300"
                }`}>
                  ĐỀ SỐ 0{idx + 1}
                </span>
                <div className="flex items-center gap-1.5">
                  {downloadedIds.includes(exam.id) && (
                    <span className={`text-[10px] font-bold flex items-center gap-0.5 ${
                      isSelected ? "text-emerald-200" : "text-emerald-600 dark:text-emerald-400"
                    }`}>
                      <CheckCircle2 className="w-3 h-3" /> Offline
                    </span>
                  )}
                  <span className={`text-[11px] font-bold ${isSelected ? "text-indigo-100" : mutedTextColor}`}>
                    30 câu
                  </span>
                </div>
              </div>
              <h3 className="font-extrabold text-sm line-clamp-1">{exam.title}</h3>
              <p className={`text-xs mt-1 line-clamp-2 ${isSelected ? "text-indigo-100/90" : mutedTextColor}`}>
                {exam.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Question Type Filter Pills */}
      <div className={`p-3 rounded-2xl border flex flex-wrap items-center gap-2 text-xs font-bold ${
        isLight ? "bg-stone-100/80 border-stone-200" : isSepia ? "bg-[#EAE1D0] border-[#DECFAF]" : "bg-slate-900/60 border-slate-800"
      }`}>
        <span className={`px-2 text-xs font-semibold ${mutedTextColor}`}>Bộ lọc phân dạng:</span>
        
        <button
          onClick={() => { sounds.playClick(); setCategoryFilter('all'); }}
          className={`px-3 py-1.5 rounded-xl transition-all ${
            categoryFilter === 'all'
              ? "bg-indigo-600 text-white shadow-xs"
              : isLight ? "bg-white text-slate-700 border border-stone-200" : "bg-slate-800 text-slate-300"
          }`}
        >
          Tất cả (30 câu)
        </button>

        <button
          onClick={() => { sounds.playClick(); setCategoryFilter('mcq'); }}
          className={`px-3 py-1.5 rounded-xl transition-all ${
            categoryFilter === 'mcq'
              ? "bg-indigo-600 text-white shadow-xs"
              : isLight ? "bg-white text-slate-700 border border-stone-200" : "bg-slate-800 text-slate-300"
          }`}
        >
          Trắc nghiệm (20 câu)
        </button>

        <button
          onClick={() => { sounds.playClick(); setCategoryFilter('true_false'); }}
          className={`px-3 py-1.5 rounded-xl transition-all ${
            categoryFilter === 'true_false'
              ? "bg-indigo-600 text-white shadow-xs"
              : isLight ? "bg-white text-slate-700 border border-stone-200" : "bg-slate-800 text-slate-300"
          }`}
        >
          Đúng / Sai (4 câu)
        </button>

        <button
          onClick={() => { sounds.playClick(); setCategoryFilter('density_calc'); }}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${
            categoryFilter === 'density_calc'
              ? "bg-cyan-600 text-white shadow-xs"
              : isLight ? "bg-white text-cyan-800 border border-cyan-200" : "bg-cyan-950/40 text-cyan-300 border border-cyan-500/30"
          }`}
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Tính Mật độ (2 câu)</span>
        </button>

        <button
          onClick={() => { sounds.playClick(); setCategoryFilter('percentage_calc'); }}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${
            categoryFilter === 'percentage_calc'
              ? "bg-purple-600 text-white shadow-xs"
              : isLight ? "bg-white text-purple-800 border border-purple-200" : "bg-purple-950/40 text-purple-300 border border-purple-500/30"
          }`}
        >
          <Percent className="w-3.5 h-3.5" />
          <span>Tính Tỉ trọng (2 câu)</span>
        </button>

        <button
          onClick={() => { sounds.playClick(); setCategoryFilter('essay'); }}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${
            categoryFilter === 'essay'
              ? "bg-amber-600 text-white shadow-xs"
              : isLight ? "bg-white text-amber-800 border border-amber-200" : "bg-amber-950/40 text-amber-300 border border-amber-500/30"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Tự luận (2 câu)</span>
        </button>
      </div>

      {/* Questions Stream */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => {
          return (
            <div 
              key={q.id}
              className={`p-6 rounded-3xl border transition-all space-y-4 ${cardBg}`}
            >
              {/* Question Header & Category Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-200 dark:border-slate-700/60">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                    {q.id}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                    q.subject === 'Địa lý' ? "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300" : "bg-purple-500/15 text-purple-800 dark:text-purple-300"
                  }`}>
                    {q.subject}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold ${
                    q.category === 'density_calc' ? "bg-cyan-100 text-cyan-900 border border-cyan-300" :
                    q.category === 'percentage_calc' ? "bg-purple-100 text-purple-900 border border-purple-300" :
                    q.category === 'true_false' ? "bg-blue-100 text-blue-900 border border-blue-300" :
                    q.category === 'essay' ? "bg-amber-100 text-amber-900 border border-amber-300" :
                    "bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  }`}>
                    {q.category === 'mcq' && 'Trắc nghiệm nhiều lựa chọn'}
                    {q.category === 'true_false' && 'Trắc nghiệm Đúng - Sai'}
                    {q.category === 'density_calc' && '⚡ Bài toán Tính Mật độ dân số'}
                    {q.category === 'percentage_calc' && '📈 Bài toán Tính Tỉ trọng (%)'}
                    {q.category === 'essay' && '📝 Câu hỏi Tự luận'}
                  </span>
                </div>

                <span className={`text-xs font-medium ${mutedTextColor}`}>
                  {q.topic}
                </span>
              </div>

              {/* Question Prompt */}
              <div className="space-y-2">
                <p className={`text-base font-bold leading-relaxed ${headingColor}`}>
                  {q.question_text}
                </p>
              </div>

              {/* MCQ Options Display */}
              {q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {(['A', 'B', 'C', 'D'] as const).map(key => {
                    const isCorrect = q.correct_answer === key;
                    const optionText = q.options ? q.options[key] : '';
                    return (
                      <div 
                        key={key}
                        className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                          showAnswers && isCorrect
                            ? (isLight ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold" : "bg-emerald-950/40 border-emerald-500 text-white font-bold")
                            : (isLight ? "bg-stone-50 border-stone-200 text-slate-700" : "bg-slate-900/60 border-slate-800 text-slate-300")
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center shrink-0 border ${
                          showAnswers && isCorrect
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : isLight ? "bg-white border-stone-300 text-slate-700" : "bg-slate-800 border-slate-700 text-slate-300"
                        }`}>
                          {key}
                        </span>
                        <span className="leading-relaxed">{optionText}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* True/False Statements Display */}
              {q.true_false_items && (
                <div className="space-y-2 text-xs sm:text-sm">
                  {q.true_false_items.map(item => (
                    <div 
                      key={item.subId}
                      className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${
                        isLight ? "bg-stone-50 border-stone-200" : "bg-slate-900/60 border-slate-800"
                      }`}
                    >
                      <div className="flex items-start gap-2 flex-1">
                        <span className="font-bold text-indigo-600">{item.subId})</span>
                        <span className={isLight ? "text-slate-800 font-medium" : "text-slate-200"}>{item.statement}</span>
                      </div>
                      {showAnswers && (
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-black shrink-0 ${
                          item.is_correct
                            ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40"
                            : "bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/40"
                        }`}>
                          {item.is_correct ? "ĐÚNG" : "SAI"}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Calculation Working Steps */}
              {q.calc_data && showAnswers && (
                <div className={`p-4 rounded-2xl border space-y-2 text-xs sm:text-sm ${
                  isLight ? "bg-cyan-50/70 border-cyan-300 text-cyan-950" : "bg-cyan-950/30 border-cyan-500/40 text-cyan-200"
                }`}>
                  <div className="flex items-center justify-between font-black">
                    <span className="flex items-center gap-1.5">
                      <Calculator className="w-4 h-4 text-cyan-600" />
                      Công thức: {q.calc_data.formula}
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-extrabold text-sm">
                      Kết quả: {q.calc_data.result}
                    </span>
                  </div>
                  <div className="space-y-1 pt-1 border-t border-cyan-200 dark:border-cyan-800/60">
                    <span className="font-bold">Các bước giải chi tiết:</span>
                    <ul className="list-disc list-inside space-y-0.5">
                      {q.calc_data.steps.map((st, sIdx) => (
                        <li key={sIdx}>{st}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Essay Rubric */}
              {q.essay_rubric && showAnswers && (
                <div className={`p-4 rounded-2xl border space-y-2 text-xs sm:text-sm ${
                  isLight ? "bg-amber-50/80 border-amber-300 text-amber-950" : "bg-amber-950/30 border-amber-500/40 text-amber-200"
                }`}>
                  <div className="flex items-center justify-between font-black">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      Hướng dẫn chấm tự luận (Thang điểm: {q.essay_rubric.max_score} điểm)
                    </span>
                  </div>
                  <div className="space-y-1.5 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                    {q.essay_rubric.criteria.map((cr, cIdx) => (
                      <div key={cIdx} className="flex items-start justify-between gap-2">
                        <span className="flex-1">• {cr.point}</span>
                        <span className="font-extrabold text-amber-700 dark:text-amber-400 shrink-0">+{cr.score} đ</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* GEOGRAPHY IMAGE ILLUSTRATION & EXPLANATION */}
              {q.image_illustration && (
                <div className={`p-4 rounded-2xl border space-y-2.5 ${
                  isLight 
                    ? "bg-stone-50 border-stone-300/80" 
                    : isSepia 
                      ? "bg-[#EFE8D8] border-[#DECFAF]" 
                      : "bg-slate-900/70 border-slate-700/80"
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Map className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span className={`text-xs font-black ${headingColor}`}>
                        {q.image_illustration.title}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-400/30">
                      {q.image_illustration.source}
                    </span>
                  </div>

                  <div className={`p-3 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                    isLight ? "bg-white border-stone-200" : "bg-slate-800 border-slate-700"
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🗺️</span>
                      <span className={`font-semibold ${headingColor}`}>{q.image_illustration.description}</span>
                    </div>
                    <span className="px-2 py-1 rounded bg-stone-100 dark:bg-slate-700 text-[10px] font-mono font-bold shrink-0">
                      {q.image_illustration.svg_badge}
                    </span>
                  </div>
                </div>
              )}

              {/* Detailed Explanation & Mnemonic Tip */}
              {showAnswers && (
                <div className={`pt-3 border-t text-xs space-y-1.5 ${
                  isLight ? "border-stone-200" : "border-slate-700/60"
                }`}>
                  <p className={isLight ? "text-slate-700" : "text-slate-300"}>
                    <strong className="text-indigo-600 dark:text-indigo-300">Giải thích chuẩn SGK:</strong> {q.explanation}
                  </p>
                  <p className={`italic ${isLight ? "text-amber-800 font-medium" : "text-amber-300"}`}>
                    <strong>Mẹo nhớ thần tốc:</strong> {q.memory_tip}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
