import React, { useState } from 'react';
import { TRUE_FALSE_DATA } from '../data/questions';
import { UserStats } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Check, 
  X
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface TrueFalseModeProps {
  stats: UserStats;
  updateStats: (updater: (prev: UserStats) => UserStats) => void;
}

export const TrueFalseMode: React.FC<TrueFalseModeProps> = ({ updateStats }) => {
  const { isLight, isSepia } = useTheme();
  const [userAnswers, setUserAnswers] = useState<Record<string, boolean>>({});

  const handleSelect = (questionId: number, itemId: string, value: boolean, correctAnswer: boolean) => {
    sounds.playClick();
    const key = `${questionId}_${itemId}`;
    setUserAnswers(prev => ({ ...prev, [key]: value }));

    if (value === correctAnswer) {
      sounds.playCorrect();
      updateStats(prev => ({
        ...prev,
        xp: prev.xp + 10
      }));
    } else {
      sounds.playWrong();
    }
  };

  const handleReset = () => {
    sounds.playClick();
    setUserAnswers({});
  };

  const headingColor = isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white";
  const mutedTextColor = isLight ? "text-slate-500" : isSepia ? "text-[#65543D]" : "text-slate-400";

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-black bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30">
              TRANG 6 ĐỀ ÔN TẬP
            </span>
            <h2 className={`text-2xl font-black flex items-center gap-2 ${headingColor}`}>
              <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <span>Phần Câu Hỏi Đúng / Sai</span>
            </h2>
          </div>
          <p className={`text-xs mt-1 ${mutedTextColor}`}>
            Chọn ĐÚNG hoặc SAI cho từng nhận định (Khóa chuẩn: a: Đúng, b: Đúng, c: Sai, d: Sai)
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

      {/* Question Groups */}
      <div className="space-y-6">
        {TRUE_FALSE_DATA.map((q) => (
          <div 
            key={q.id}
            className={`p-6 rounded-3xl border shadow-xl space-y-4 ${
              isLight 
                ? "bg-white border-stone-200/90 shadow-sm" 
                : isSepia 
                  ? "bg-[#FAF5EA] border-[#D8CCB5]" 
                  : "bg-slate-800/60 border-slate-700/80 shadow-xl"
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-slate-700/60">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 font-black text-xs border border-cyan-500/30">
                  CÂU {q.id} (TRANG 6)
                </span>
                <span className={`text-xs font-bold ${headingColor}`}>
                  {q.title}
                </span>
              </div>
              <span className={`text-[11px] italic ${mutedTextColor}`}>
                4 nhận định
              </span>
            </div>

            <p className={`text-sm font-semibold ${headingColor}`}>
              {q.context}
            </p>

            {/* Statements List */}
            <div className="space-y-3 pt-1">
              {q.items.map((item) => {
                const key = `${q.id}_${item.id}`;
                const chosen = userAnswers[key];
                const hasAnswered = chosen !== undefined;
                const isCorrect = chosen === item.is_correct;

                return (
                  <div 
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all space-y-2.5 ${
                      hasAnswered 
                        ? isCorrect 
                          ? (isLight ? "bg-emerald-50/70 border-emerald-300" : "bg-emerald-950/20 border-emerald-500/40") 
                          : (isLight ? "bg-rose-50/70 border-rose-300" : "bg-red-950/20 border-red-500/40")
                        : (isLight ? "bg-stone-50 border-stone-200 hover:bg-stone-100" : "bg-slate-900/60 border-slate-800 hover:border-slate-700")
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5 flex-1">
                        <span className={`w-6 h-6 rounded-lg font-black text-xs flex items-center justify-center shrink-0 border mt-0.5 ${
                          isLight ? "bg-white text-indigo-700 border-stone-300 shadow-xs" : "bg-slate-800 text-indigo-300 border-slate-700"
                        }`}>
                          {item.id}
                        </span>
                        <p className={`text-xs sm:text-sm font-medium leading-relaxed ${headingColor}`}>
                          {item.statement}
                        </p>
                      </div>

                      {/* True / False Buttons */}
                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                        <button
                          onClick={() => handleSelect(q.id, item.id, true, item.is_correct)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border shadow-xs ${
                            chosen === true
                              ? item.is_correct
                                ? "bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-600/30"
                                : "bg-rose-600 border-rose-500 text-white"
                              : isLight 
                                ? "bg-white text-slate-700 border-stone-300 hover:bg-stone-100" 
                                : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>ĐÚNG</span>
                        </button>

                        <button
                          onClick={() => handleSelect(q.id, item.id, false, item.is_correct)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border shadow-xs ${
                            chosen === false
                              ? !item.is_correct
                                ? "bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-600/30"
                                : "bg-rose-600 border-rose-500 text-white"
                              : isLight 
                                ? "bg-white text-slate-700 border-stone-300 hover:bg-stone-100" 
                                : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                          }`}
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>SAI</span>
                        </button>
                      </div>
                    </div>

                    {/* Feedback Explanation */}
                    {hasAnswered && (
                      <div className="pt-2 border-t border-stone-200 dark:border-slate-700/50 text-xs flex items-start gap-2">
                        {isCorrect ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Đúng (+10 XP)
                          </span>
                        ) : (
                          <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1 shrink-0">
                            <XCircle className="w-3.5 h-3.5" />
                            Chưa đúng (Đáp án: {item.is_correct ? 'ĐÚNG' : 'SAI'})
                          </span>
                        )}
                        <span className={`italic ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                          — {item.explanation}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
