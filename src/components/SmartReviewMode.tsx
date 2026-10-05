import React, { useState } from 'react';
import { UserStats, OptionKey } from '../types';
import { QUESTIONS_DATA } from '../data/questions';
import { 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface SmartReviewModeProps {
  stats: UserStats;
  updateStats: (updater: (prev: UserStats) => UserStats) => void;
  onGoToQuiz: () => void;
}

export const SmartReviewMode: React.FC<SmartReviewModeProps> = ({ 
  stats, 
  updateStats,
  onGoToQuiz 
}) => {
  const { isLight, isSepia } = useTheme();
  const mistakeQuestions = QUESTIONS_DATA.filter(q => stats.mistakeIds.includes(q.id));
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, OptionKey>>({});

  const handleSelectOption = (questionId: number, option: OptionKey, correctAnswer: OptionKey) => {
    sounds.playClick();
    setSelectedAnswers(prev => ({ ...prev, [questionId]: option }));

    if (option === correctAnswer) {
      sounds.playCorrect();
      setTimeout(() => {
        updateStats(prev => ({
          ...prev,
          xp: prev.xp + 15,
          mistakeIds: prev.mistakeIds.filter(id => id !== questionId),
          masteredIds: Array.from(new Set([...prev.masteredIds, questionId]))
        }));
      }, 1000);
    } else {
      sounds.playWrong();
    }
  };

  const handleClearAllMistakes = () => {
    if (window.confirm('Bạn có chắc muốn xóa tất cả câu trong ngân hàng câu sai?')) {
      updateStats(prev => ({
        ...prev,
        mistakeIds: []
      }));
    }
  };

  const headingColor = isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white";
  const mutedTextColor = isLight ? "text-slate-500" : isSepia ? "text-[#65543D]" : "text-slate-400";

  if (mistakeQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h2 className={`text-3xl font-black ${headingColor}`}>
            Ngân Hàng Câu Sai Trống!
          </h2>
          <p className={`text-sm max-w-md mx-auto ${mutedTextColor}`}>
            Tuyệt vời! Hiện tại bạn không có câu nào bị đánh dấu sai. 
            Mọi câu bạn trả lời sai trong lúc làm Quiz sẽ tự động xuất hiện tại đây để bạn ôn luyện lại.
          </p>
        </div>

        <button
          onClick={onGoToQuiz}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-102"
        >
          <span>Làm bài Luyện Đề ngay</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-black bg-rose-500/15 text-rose-800 dark:text-rose-300 border border-rose-500/30">
              SMART REVIEW
            </span>
            <h2 className={`text-2xl font-black flex items-center gap-2 ${headingColor}`}>
              <AlertCircle className="w-6 h-6 text-rose-500" />
              <span>Ngân Hàng Câu Sai ({mistakeQuestions.length} câu)</span>
            </h2>
          </div>
          <p className={`text-xs mt-1 ${mutedTextColor}`}>
            Làm lại các câu bạn đã từng chọn sai. Trả lời đúng sẽ tự động xóa câu khỏi danh sách này!
          </p>
        </div>

        <button
          onClick={handleClearAllMistakes}
          className={`text-xs underline font-semibold transition-colors ${
            isLight ? "text-slate-500 hover:text-rose-600" : "text-slate-400 hover:text-red-400"
          }`}
        >
          Xóa tất cả
        </button>
      </div>

      {/* Mistake Questions List */}
      <div className="space-y-5">
        {mistakeQuestions.map((q) => {
          const userChoice = selectedAnswers[q.id];
          const isAnswered = userChoice !== undefined;
          const isCorrect = userChoice === q.correct_answer;

          return (
            <div 
              key={q.id}
              className={`p-6 rounded-3xl border-2 transition-all space-y-4 shadow-sm ${
                isAnswered
                  ? isCorrect
                    ? (isLight ? "bg-emerald-50/70 border-emerald-300" : "bg-emerald-950/20 border-emerald-500/50")
                    : (isLight ? "bg-rose-50/70 border-rose-300" : "bg-red-950/20 border-red-500/50")
                  : (isLight 
                      ? "bg-white border-stone-200/90" 
                      : isSepia 
                        ? "bg-[#FAF5EA] border-[#D8CCB5]" 
                        : "bg-slate-800/60 border-slate-700/80 hover:border-slate-600")
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-xl bg-rose-500/15 text-rose-800 dark:text-rose-300 font-black text-xs border border-rose-500/30">
                    CÂU {q.id}
                  </span>
                  <span className={`text-xs font-bold ${headingColor}`}>
                    {q.subject} • {q.topic}
                  </span>
                </div>
                {q.id === 14 && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-black bg-cyan-500 text-white">
                    LƯU Ý CÂU 14 (ĐÁP ÁN B)
                  </span>
                )}
              </div>

              <p className={`text-base font-bold leading-relaxed ${headingColor}`}>
                {q.question_text}
              </p>

              {/* 4 Options */}
              <div className="space-y-2.5">
                {(['A', 'B', 'C', 'D'] as const).map(key => {
                  const isThisSelected = userChoice === key;
                  const isThisCorrect = key === q.correct_answer;

                  let style = isLight 
                    ? "bg-stone-50 border-stone-200 text-slate-700 hover:bg-stone-100 hover:border-indigo-300" 
                    : isSepia 
                      ? "bg-[#EFE8D8] border-[#D8CCB5] text-[#2C2114] hover:bg-[#E5DAC3]" 
                      : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700";
                  
                  if (isAnswered) {
                    if (isThisCorrect) {
                      style = isLight 
                        ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold" 
                        : "bg-emerald-500/20 border-emerald-500 text-white font-bold";
                    } else if (isThisSelected && !isThisCorrect) {
                      style = isLight 
                        ? "bg-rose-50 border-rose-400 text-rose-950 font-semibold" 
                        : "bg-red-500/20 border-red-500 text-red-200";
                    } else {
                      style = isLight 
                        ? "bg-stone-50/40 border-stone-200/60 text-slate-400 opacity-60" 
                        : "bg-slate-900/30 border-slate-800 text-slate-600 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={key}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(q.id, key, q.correct_answer)}
                      className={`w-full p-3.5 rounded-xl border text-left flex items-start gap-3 text-xs sm:text-sm font-medium transition-all shadow-xs ${style}`}
                    >
                      <span className={`w-6 h-6 rounded-lg font-black text-xs flex items-center justify-center shrink-0 border ${
                        isLight ? "bg-white border-stone-300 text-slate-700" : "bg-slate-800 border-slate-700"
                      }`}>
                        {key}
                      </span>
                      <span className="leading-relaxed">{q.options[key]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {isAnswered && (
                <div className={`p-4 rounded-2xl border text-xs space-y-2 ${
                  isCorrect 
                    ? (isLight ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-emerald-500/10 border-emerald-500/30 text-emerald-200") 
                    : (isLight ? "bg-rose-50 border-rose-300 text-rose-950" : "bg-red-500/10 border-red-500/30 text-red-200")
                }`}>
                  <div className="flex items-center gap-2 font-black">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>CHÍNH XÁC! (+15 XP) Đang xóa khỏi danh sách câu sai...</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600 dark:text-red-400" />
                        <span>VẪN CHƯA ĐÚNG! Đáp án đúng là {q.correct_answer}.</span>
                      </>
                    )}
                  </div>
                  <p className={isLight ? "text-slate-700" : "text-slate-300"}>
                    <strong className={headingColor}>Giải thích:</strong> {q.explanation}
                  </p>
                  <p className={`italic ${isLight ? "text-amber-800 font-medium" : "text-amber-300"}`}>
                    <strong>Mẹo nhớ:</strong> {q.memory_tip}
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
