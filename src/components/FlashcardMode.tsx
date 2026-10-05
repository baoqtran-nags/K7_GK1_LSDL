import React, { useState, useEffect } from 'react';
import { Question, SubjectType, UserStats } from '../types';
import { QUESTIONS_DATA } from '../data/questions';
import { 
  RotateCw, 
  Check, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Shuffle, 
  Sparkles, 
  Lightbulb, 
  BookOpen, 
  HelpCircle
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface FlashcardModeProps {
  stats: UserStats;
  updateStats: (updater: (prev: UserStats) => UserStats) => void;
}

export const FlashcardMode: React.FC<FlashcardModeProps> = ({ stats, updateStats }) => {
  const { isLight, isSepia } = useTheme();
  const [filterSubject, setFilterSubject] = useState<'All' | SubjectType>('All');
  const [cardList, setCardList] = useState<Question[]>(QUESTIONS_DATA);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Update card list when filter changes
  useEffect(() => {
    const list = filterSubject === 'All' 
      ? QUESTIONS_DATA 
      : QUESTIONS_DATA.filter(q => q.subject === filterSubject);
    setCardList(list);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [filterSubject]);

  const currentQuestion = cardList[currentIndex] || cardList[0];
  const total = cardList.length;

  const handleFlip = () => {
    sounds.playClick();
    setIsFlipped(prev => !prev);
  };

  const handleNext = () => {
    sounds.playClick();
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % total);
  };

  const handlePrev = () => {
    sounds.playClick();
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + total) % total);
  };

  const handleShuffle = () => {
    sounds.playClick();
    const shuffled = [...cardList].sort(() => Math.random() - 0.5);
    setCardList(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const markMastered = () => {
    sounds.playCorrect();
    const id = currentQuestion.id;

    updateStats(prev => {
      const alreadyMastered = prev.masteredIds.includes(id);
      const newMastered = alreadyMastered ? prev.masteredIds : [...prev.masteredIds, id];
      const newMistakes = prev.mistakeIds.filter(mId => mId !== id);
      return {
        ...prev,
        xp: prev.xp + 10,
        masteredIds: newMastered,
        mistakeIds: newMistakes
      };
    });

    handleNext();
  };

  const markNeedReview = () => {
    sounds.playWrong();
    const id = currentQuestion.id;

    updateStats(prev => {
      const alreadyMistake = prev.mistakeIds.includes(id);
      const newMistakes = alreadyMistake ? prev.mistakeIds : [...prev.mistakeIds, id];
      const newMastered = prev.masteredIds.filter(mId => mId !== id);
      return {
        ...prev,
        masteredIds: newMastered,
        mistakeIds: newMistakes
      };
    });

    handleNext();
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFlipped) {
      const answerText = currentQuestion.options[currentQuestion.correct_answer];
      sounds.speakVietnamese(`Đáp án đúng là ${currentQuestion.correct_answer}. ${answerText}. Giải thích: ${currentQuestion.explanation}`);
    } else {
      sounds.speakVietnamese(`Câu số ${currentQuestion.id}: ${currentQuestion.question_text}`);
    }
  };

  if (!currentQuestion) return null;

  const isMastered = stats.masteredIds.includes(currentQuestion.id);
  const isMistake = stats.mistakeIds.includes(currentQuestion.id);

  const headingColor = isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white";
  const mutedTextColor = isLight ? "text-slate-500" : isSepia ? "text-[#65543D]" : "text-slate-400";

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      
      {/* Top Controller */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className={`text-2xl font-black flex items-center gap-2 ${headingColor}`}>
            <BookOpen className="w-6 h-6 text-indigo-500" />
            <span>Thẻ Ghi Nhớ (Flashcard 3D)</span>
          </h2>
          <p className={`text-xs ${mutedTextColor}`}>
            Chạm vào thẻ để lật xem đáp án, giải thích chi tiết & mẹo nhớ thần tốc
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2">
          <div className={`flex rounded-xl p-1 border text-xs font-bold ${
            isLight ? "bg-stone-200 border-stone-300" : isSepia ? "bg-[#E0D5BE] border-[#D0C2A5]" : "bg-slate-800 border-slate-700"
          }`}>
            {(['All', 'Địa lý', 'Lịch sử'] as const).map(sub => (
              <button
                key={sub}
                onClick={() => setFilterSubject(sub)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterSubject === sub
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : isLight ? "text-slate-700 hover:text-slate-900" : "text-slate-400 hover:text-white"
                }`}
              >
                {sub === 'All' ? 'Tất cả 40 câu' : sub}
              </button>
            ))}
          </div>

          <button
            onClick={handleShuffle}
            title="Xáo trộn câu hỏi ngẫu nhiên"
            className={`p-2 rounded-xl border transition-colors ${
              isLight 
                ? "bg-white border-stone-300 text-slate-700 hover:bg-stone-100 shadow-sm" 
                : isSepia 
                  ? "bg-[#FAF5EA] border-[#D8CCB5] text-[#2C2114] hover:bg-[#EFE7D8]" 
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
            }`}
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className={mutedTextColor}>
            Thẻ số <strong className={headingColor}>{currentIndex + 1}</strong> / {total}
          </span>
          <div className="flex items-center gap-2">
            {isMastered && (
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/30">
                ✓ Đã thuộc
              </span>
            )}
            {isMistake && (
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-500/15 text-red-700 dark:text-red-400 font-bold border border-red-500/30">
                ! Cần ôn lại
              </span>
            )}
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">
              {Math.round(((currentIndex + 1) / total) * 100)}%
            </span>
          </div>
        </div>
        <div className={`w-full h-2 rounded-full overflow-hidden border ${
          isLight ? "bg-stone-200 border-stone-300" : isSepia ? "bg-[#E0D5BE] border-[#D0C2A5]" : "bg-slate-800 border-slate-700/60"
        }`}>
          <div 
            className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* 3D Flashcard Container */}
      <div 
        onClick={handleFlip}
        className="perspective-1000 cursor-pointer min-h-[380px] sm:min-h-[420px] select-none"
      >
        <div 
          className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{ minHeight: '380px' }}
        >
          {/* FRONT OF CARD */}
          <div className={`absolute inset-0 backface-hidden rounded-3xl border-2 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all ${
            isLight
              ? "bg-white border-stone-200/90 hover:border-indigo-300 shadow-stone-200/50"
              : isSepia
                ? "bg-[#FAF5EA] border-[#D8CCB5] hover:border-[#BFAF93]"
                : "bg-gradient-to-br from-slate-800 via-slate-800/90 to-slate-900 border-indigo-500/30 hover:border-indigo-500/60"
          }`}>
            
            {/* Header info */}
            <div>
              <div className={`flex items-center justify-between pb-4 border-b ${
                isLight ? "border-stone-200" : isSepia ? "border-[#D8CCB5]" : "border-slate-700/60"
              }`}>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-extrabold text-xs border border-indigo-500/30">
                    CÂU {currentQuestion.id}
                  </span>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                    currentQuestion.subject === 'Địa lý' 
                      ? "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20" 
                      : "bg-purple-500/15 text-purple-800 dark:text-purple-300 border border-purple-500/20"
                  }`}>
                    {currentQuestion.subject}
                  </span>
                  {currentQuestion.id === 14 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-cyan-500 text-white">
                      LƯU Ý ĐẶC BIỆT
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSpeak}
                    title="Nghe đọc câu hỏi bằng tiếng Việt"
                    className={`p-2 rounded-xl border transition-colors ${
                      isLight 
                        ? "bg-stone-100 hover:bg-stone-200 text-slate-700 border-stone-200" 
                        : isSepia 
                          ? "bg-[#EFE8D8] hover:bg-[#E5DAC3] text-[#2C2114] border-[#D8CCB5]" 
                          : "bg-slate-700/60 hover:bg-indigo-600 text-slate-300 hover:text-white border-transparent"
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <span className={`text-xs font-medium ${mutedTextColor}`}>
                    {currentQuestion.topic}
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <div className="py-6 sm:py-8">
                <p className={`text-lg sm:text-xl font-bold leading-relaxed ${headingColor}`}>
                  {currentQuestion.question_text}
                </p>
              </div>

              {/* 4 Choices Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {(['A', 'B', 'C', 'D'] as const).map(key => (
                  <div 
                    key={key}
                    className={`p-2.5 rounded-xl border flex items-start gap-2 ${
                      isLight 
                        ? "bg-stone-50 border-stone-200 text-slate-700" 
                        : isSepia 
                          ? "bg-[#EFE8D8] border-[#D8CCB5] text-[#2C2114]" 
                          : "bg-slate-900/60 border-slate-800 text-slate-300"
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-md font-bold flex items-center justify-center shrink-0 border ${
                      isLight 
                        ? "bg-white border-stone-300 text-indigo-700 shadow-xs" 
                        : isSepia 
                          ? "bg-[#FAF5EA] border-[#D8CCB5] text-[#8C6D3F]" 
                          : "bg-slate-800 border-slate-700 text-indigo-300"
                    }`}>
                      {key}
                    </span>
                    <span className="line-clamp-2">{currentQuestion.options[key]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tip to Flip */}
            <div className={`pt-4 border-t flex items-center justify-center gap-2 text-xs font-semibold ${
              isLight 
                ? "border-stone-200 text-indigo-600" 
                : isSepia 
                  ? "border-[#D8CCB5] text-[#8C6D3F]" 
                  : "border-slate-700/60 text-indigo-400"
            }`}>
              <RotateCw className="w-4 h-4 animate-spin-slow" />
              <span>Chạm hoặc bấm vào thẻ để xem đáp án đúng</span>
            </div>
          </div>

          {/* BACK OF CARD */}
          <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl border-2 p-6 sm:p-8 flex flex-col justify-between shadow-xl ${
            isLight
              ? "bg-[#FDFEFE] border-emerald-300/80 shadow-stone-200/50"
              : isSepia
                ? "bg-[#FAF5EA] border-[#BFAF93]"
                : "bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 border-emerald-500/40"
          }`}>
            
            <div>
              <div className={`flex items-center justify-between pb-4 border-b ${
                isLight ? "border-stone-200" : isSepia ? "border-[#D8CCB5]" : "border-slate-700/60"
              }`}>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 font-black text-xs border border-emerald-500/40 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    ĐÁP ÁN ĐÚNG
                  </span>
                  <span className={`text-xs ${mutedTextColor}`}>
                    Câu {currentQuestion.id} • {currentQuestion.topic}
                  </span>
                </div>

                <button
                  onClick={handleSpeak}
                  title="Nghe đọc giải thích"
                  className={`p-2 rounded-xl border transition-colors ${
                    isLight 
                      ? "bg-stone-100 hover:bg-stone-200 text-slate-700 border-stone-200" 
                      : isSepia 
                        ? "bg-[#EFE8D8] hover:bg-[#E5DAC3] text-[#2C2114] border-[#D8CCB5]" 
                        : "bg-slate-700/60 hover:bg-emerald-600 text-slate-300 hover:text-white border-transparent"
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Correct Answer Highlight */}
              <div className="py-4">
                <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                  isLight 
                    ? "bg-emerald-50 border-emerald-300 text-slate-900" 
                    : isSepia 
                      ? "bg-[#E9F3EB] border-[#B5D5BC] text-[#1E3A26]" 
                      : "bg-emerald-500/10 border-emerald-500/30 text-white"
                }`}>
                  <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                    {currentQuestion.correct_answer}
                  </span>
                  <div>
                    <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold block uppercase tracking-wider">
                      Lựa chọn chính xác
                    </span>
                    <p className="text-base font-bold mt-0.5">
                      {currentQuestion.options[currentQuestion.correct_answer]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Detailed Explanation */}
              <div className={`space-y-1.5 text-xs sm:text-sm leading-relaxed rounded-2xl p-3.5 border ${
                isLight 
                  ? "bg-stone-50 border-stone-200 text-slate-700" 
                  : isSepia 
                    ? "bg-[#EFE8D8] border-[#D8CCB5] text-[#2C2114]" 
                    : "bg-slate-800/40 border-slate-700/50 text-slate-300"
              }`}>
                <span className="font-bold flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-300">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Giải thích khoa học:
                </span>
                <p>{currentQuestion.explanation}</p>
              </div>

              {/* Gen Z Memory Tip */}
              <div className={`mt-3 p-3 rounded-2xl border flex items-start gap-2.5 ${
                isLight 
                  ? "bg-amber-50 border-amber-300 text-amber-950" 
                  : isSepia 
                    ? "bg-[#FAF1D9] border-[#E5CA8F] text-[#4A3816]" 
                    : "bg-amber-500/10 border-amber-500/30 text-amber-100"
              }`}>
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wide block">
                    Mẹo ghi nhớ Gen Z:
                  </span>
                  <p className="text-xs font-semibold italic">
                    "{currentQuestion.memory_tip}"
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Tip to Flip back */}
            <div className={`pt-3 border-t flex items-center justify-center gap-2 text-xs font-semibold ${
              isLight ? "border-stone-200 text-slate-500" : isSepia ? "border-[#D8CCB5] text-[#7A6953]" : "border-slate-700/60 text-slate-400"
            }`}>
              <RotateCw className="w-3.5 h-3.5" />
              <span>Chạm để lật lại câu hỏi</span>
            </div>

          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        {/* Prev / Next */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handlePrev}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs border transition-colors shadow-sm ${
              isLight 
                ? "bg-white hover:bg-stone-100 text-slate-700 border-stone-300" 
                : isSepia 
                  ? "bg-[#FAF5EA] hover:bg-[#EFE7D8] text-[#2C2114] border-[#D8CCB5]" 
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Câu trước</span>
          </button>

          <button
            onClick={handleNext}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs border transition-colors shadow-sm ${
              isLight 
                ? "bg-white hover:bg-stone-100 text-slate-700 border-stone-300" 
                : isSepia 
                  ? "bg-[#FAF5EA] hover:bg-[#EFE7D8] text-[#2C2114] border-[#D8CCB5]" 
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
            }`}
          >
            <span>Câu sau</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mastered / Need Review Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={markNeedReview}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-700 dark:text-rose-300 font-bold text-xs sm:text-sm border border-rose-400/40 transition-all hover:scale-102 active:scale-98 shadow-sm"
          >
            <X className="w-4 h-4" />
            <span>Cần ôn lại</span>
          </button>

          <button
            onClick={markMastered}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-102 active:scale-98"
          >
            <Check className="w-4 h-4" />
            <span>Đã thuộc (+10 XP)</span>
          </button>
        </div>
      </div>

    </div>
  );
};
