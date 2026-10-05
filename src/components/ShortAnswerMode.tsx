import React, { useState } from 'react';
import { SHORT_ANSWER_DATA } from '../data/questions';
import { UserStats } from '../types';
import { 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  RotateCcw,
  Check
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface ShortAnswerModeProps {
  stats: UserStats;
  updateStats: (updater: (prev: UserStats) => UserStats) => void;
}

export const ShortAnswerMode: React.FC<ShortAnswerModeProps> = ({ updateStats }) => {
  const { isLight, isSepia } = useTheme();
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [checkedResults, setCheckedResults] = useState<Record<number, boolean | null>>({});

  const handleInputChange = (id: number, val: string) => {
    setInputs(prev => ({ ...prev, [id]: val }));
    setCheckedResults(prev => ({ ...prev, [id]: null }));
  };

  const handleCheckQuestion = (id: number) => {
    const q = SHORT_ANSWER_DATA.find(item => item.id === id);
    if (!q) return;

    const rawInput = (inputs[id] || '').trim().toLowerCase();
    const isCorrect = q.accepted_answers.some(ans => {
      const cleanAns = ans.trim().toLowerCase();
      return rawInput === cleanAns || rawInput === cleanAns.replace('%', '').trim();
    });

    setCheckedResults(prev => ({ ...prev, [id]: isCorrect }));

    if (isCorrect) {
      sounds.playCorrect();
      updateStats(prev => ({
        ...prev,
        xp: prev.xp + 25
      }));
    } else {
      sounds.playWrong();
    }
  };

  const handleReset = () => {
    sounds.playClick();
    setInputs({});
    setCheckedResults({});
  };

  const headingColor = isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white";
  const mutedTextColor = isLight ? "text-slate-500" : isSepia ? "text-[#65543D]" : "text-slate-400";

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-black bg-pink-500/15 text-pink-700 dark:text-pink-300 border border-pink-500/30">
              TRANG 6 ĐỀ ÔN TẬP
            </span>
            <h2 className={`text-2xl font-black flex items-center gap-2 ${headingColor}`}>
              <FileText className="w-6 h-6 text-pink-500" />
              <span>Phần Điền Số / Trả lời ngắn</span>
            </h2>
          </div>
          <p className={`text-xs mt-1 ${mutedTextColor}`}>
            Gõ số liệu chính xác vào ô trống (chấp nhận cả dấu phẩy ',' hoặc chấm '.')
          </p>
        </div>

        <button
          onClick={handleReset}
          className={`p-2 rounded-xl border transition-colors ${
            isLight 
              ? "bg-white hover:bg-stone-100 text-slate-700 border-stone-300 shadow-sm" 
              : isSepia 
                ? "bg-[#FAF5EA] hover:bg-[#EFE7D8] text-[#2C2114] border-[#D8CCB5]" 
                : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
          }`}
          title="Làm lại từ đầu"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Cards List */}
      <div className="space-y-5">
        {SHORT_ANSWER_DATA.map((q) => {
          const userVal = inputs[q.id] || '';
          const result = checkedResults[q.id];

          return (
            <div 
              key={q.id}
              className={`p-6 rounded-3xl border-2 transition-all space-y-4 shadow-sm ${
                result === true
                  ? (isLight ? "bg-emerald-50/60 border-emerald-400" : "bg-emerald-950/20 border-emerald-500/50 shadow-lg shadow-emerald-950/30")
                  : result === false
                    ? (isLight ? "bg-rose-50/60 border-rose-400" : "bg-red-950/20 border-red-500/50 shadow-lg shadow-red-950/30")
                    : (isLight 
                        ? "bg-white border-stone-200" 
                        : isSepia 
                          ? "bg-[#FAF5EA] border-[#D8CCB5]" 
                          : "bg-slate-800/60 border-slate-700/80 hover:border-slate-600")
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-xl bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-black text-xs border border-indigo-500/30">
                  CÂU {q.id} (TRANG 6)
                </span>
                <span className={`text-xs font-bold ${mutedTextColor}`}>
                  {q.title}
                </span>
              </div>

              <p className={`text-base font-bold leading-relaxed ${headingColor}`}>
                {q.question_text}
              </p>

              {/* Input Form */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={userVal}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleCheckQuestion(q.id);
                    }}
                    placeholder={`Nhập đáp án số (Ví dụ: 50${q.unit ? ' ' + q.unit : ''})...`}
                    className={`w-full px-4 py-3 rounded-2xl border-2 font-bold text-sm focus:outline-none focus:border-indigo-500 shadow-xs ${
                      isLight 
                        ? "bg-stone-50 border-stone-300 text-slate-900 placeholder-slate-400" 
                        : isSepia 
                          ? "bg-[#EFE8D8] border-[#D8CCB5] text-[#2C2114] placeholder-[#8C7A65]" 
                          : "bg-slate-900 border-slate-700 text-white placeholder-slate-500"
                    }`}
                  />
                  {q.unit && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                      {q.unit}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleCheckQuestion(q.id)}
                  disabled={!userVal.trim()}
                  className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/25 transition-all hover:scale-102 flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Kiểm tra</span>
                </button>
              </div>

              {/* Result & Feedback */}
              {result !== null && result !== undefined && (
                <div className={`p-4 rounded-2xl border space-y-2 text-xs sm:text-sm ${
                  result
                    ? (isLight ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-emerald-500/10 border-emerald-500/40 text-emerald-200")
                    : (isLight ? "bg-rose-50 border-rose-300 text-rose-950" : "bg-red-500/10 border-red-500/40 text-red-200")
                }`}>
                  <div className="flex items-center justify-between font-black">
                    <div className="flex items-center gap-1.5">
                      {result ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          <span>CHÍNH XÁC (+25 XP)</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600 dark:text-red-400" />
                          <span>CHƯA CHÍNH XÁC!</span>
                        </>
                      )}
                    </div>
                    <span className="font-extrabold">
                      Đáp án chuẩn: <strong className={isLight ? "text-amber-800" : "text-amber-300"}>{q.standard_answer}</strong>
                    </span>
                  </div>

                  <p className={`leading-relaxed pt-1 border-t ${
                    isLight ? "border-stone-200 text-slate-700" : "border-slate-700/50 text-slate-300"
                  }`}>
                    <strong className={headingColor}>Giải thích:</strong> {q.explanation}
                  </p>

                  <p className={`italic pt-1 ${isLight ? "text-amber-800 font-medium" : "text-amber-300"}`}>
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
