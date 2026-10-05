import React, { useState, useEffect, useRef } from 'react';
import { OptionKey, UserStats } from '../types';
import { QUESTIONS_DATA } from '../data/questions';
import { 
  Timer, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Lightbulb, 
  Trophy, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  RotateCcw, 
  Sparkles, 
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface QuizModeProps {
  stats: UserStats;
  updateStats: (updater: (prev: UserStats) => UserStats) => void;
  onOpenSmartReview: () => void;
}

export const QuizMode: React.FC<QuizModeProps> = ({ stats, updateStats, onOpenSmartReview }) => {
  const { isLight, isSepia } = useTheme();
  const [quizStarted, setQuizStarted] = useState(false);
  const [timerModeMinutes, setTimerModeMinutes] = useState<number>(30); // 15, 30, 45, 0 (no limit)
  const [feedbackMode, setFeedbackMode] = useState<'instant' | 'exam'>('instant');
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, OptionKey>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(30 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Timer countdown
  useEffect(() => {
    if (!quizStarted || isSubmitted) return;

    timerRef.current = setInterval(() => {
      setTimeSpent(prev => prev + 1);

      if (timerModeMinutes > 0) {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [quizStarted, isSubmitted, timerModeMinutes]);

  const startQuiz = () => {
    sounds.playClick();
    setUserAnswers({});
    setCurrentIdx(0);
    setIsSubmitted(false);
    setTimeSpent(0);
    setTimeRemaining(timerModeMinutes > 0 ? timerModeMinutes * 60 : 0);
    setQuizStarted(true);
  };

  const handleSelectOption = (option: OptionKey) => {
    if (isSubmitted) return;
    const qId = QUESTIONS_DATA[currentIdx].id;
    
    // In instant mode, if already answered, don't change
    if (feedbackMode === 'instant' && userAnswers[qId]) return;

    sounds.playClick();
    setUserAnswers(prev => ({
      ...prev,
      [qId]: option
    }));

    if (feedbackMode === 'instant') {
      const isCorrect = option === QUESTIONS_DATA[currentIdx].correct_answer;
      if (isCorrect) {
        sounds.playCorrect();
      } else {
        sounds.playWrong();
      }
    }
  };

  const handleSubmitQuiz = () => {
    if (isSubmitted) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setIsSubmitted(true);
    sounds.playFanfare();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }

    // Evaluate results
    let correctCount = 0;
    const wrongIds: number[] = [];
    const correctIds: number[] = [];

    QUESTIONS_DATA.forEach(q => {
      const ans = userAnswers[q.id];
      if (ans === q.correct_answer) {
        correctCount++;
        correctIds.push(q.id);
      } else {
        wrongIds.push(q.id);
      }
    });

    const gainedXP = correctCount * 20 + 50;

    // Update global user stats
    updateStats(prev => {
      const mergedMistakes = Array.from(new Set([...prev.mistakeIds, ...wrongIds]));
      const updatedMistakes = mergedMistakes.filter(id => !correctIds.includes(id));
      const updatedMastered = Array.from(new Set([...prev.masteredIds, ...correctIds]));

      const newBadges = [...prev.badges];
      if (correctCount === 40 && !newBadges.includes('🏆 Quán quân 40/40')) {
        newBadges.push('🏆 Quán quân 40/40');
      }
      if (correctCount >= 36 && !newBadges.includes('⚡ Chiến thần Địa lý')) {
        newBadges.push('⚡ Chiến thần Địa lý');
      }

      return {
        ...prev,
        xp: prev.xp + gainedXP,
        completedQuizzesCount: prev.completedQuizzesCount + 1,
        bestQuizScore: Math.max(prev.bestQuizScore, correctCount),
        mistakeIds: updatedMistakes,
        masteredIds: updatedMastered,
        badges: newBadges
      };
    });
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = QUESTIONS_DATA[currentIdx];
  const total = QUESTIONS_DATA.length;
  const answeredCount = Object.keys(userAnswers).length;

  const cardBgClass = isLight 
    ? "bg-white border-stone-200/90 shadow-sm text-slate-800" 
    : isSepia 
      ? "bg-[#FAF5EA] border-[#D8CCB5] shadow-sm text-[#2C2114]" 
      : "bg-slate-800/70 border-slate-700/80 text-white shadow-2xl";

  const headingColor = isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white";
  const mutedTextColor = isLight ? "text-slate-500" : isSepia ? "text-[#65543D]" : "text-slate-400";

  // LOBBY SCREEN (Before starting quiz)
  if (!quizStarted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex p-3 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 shadow-sm">
            <Trophy className="w-8 h-8" />
          </div>
          <h1 className={`text-3xl font-black ${headingColor}`}>Phòng Luyện Đề Chuẩn (40 Câu)</h1>
          <p className={`text-sm max-w-xl mx-auto ${mutedTextColor}`}>
            Bộ đề ôn tập trắc nghiệm toàn diện môn Lịch sử & Địa lý 7 chuyên đề Châu Âu, 
            khóa chuẩn 100% đáp án gốc (Đặc biệt Câu 14: Hệ thống kênh đào & mạng lưới sông ngòi dày đặc).
          </p>
        </div>

        {/* Configuration Card */}
        <div className={`p-6 rounded-3xl border shadow-xl space-y-6 ${cardBgClass}`}>
          {/* Select Timer Mode */}
          <div className="space-y-3">
            <label className={`text-xs uppercase tracking-wider font-extrabold flex items-center gap-2 ${headingColor}`}>
              <Timer className="w-4 h-4 text-indigo-500" />
              <span>Thời gian làm bài:</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { label: '15 phút (Cấp tốc)', value: 15 },
                { label: '30 phút (Chuẩn đề)', value: 30 },
                { label: '45 phút (Thư thả)', value: 45 },
                { label: 'Không giới hạn', value: 0 }
              ].map(item => (
                <button
                  key={item.value}
                  onClick={() => { sounds.playClick(); setTimerModeMinutes(item.value); }}
                  className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border shadow-xs ${
                    timerModeMinutes === item.value
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                      : isLight 
                        ? "bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100" 
                        : isSepia 
                          ? "bg-[#EFE8D8] text-[#2C2114] border-[#D8CCB5] hover:bg-[#E5DAC3]" 
                          : "bg-slate-900/60 text-slate-300 border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Select Feedback Mode */}
          <div className="space-y-3">
            <label className={`text-xs uppercase tracking-wider font-extrabold flex items-center gap-2 ${headingColor}`}>
              <HelpCircle className="w-4 h-4 text-indigo-500" />
              <span>Chế độ phản hồi:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => { sounds.playClick(); setFeedbackMode('instant'); }}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  feedbackMode === 'instant'
                    ? "bg-indigo-50 dark:bg-indigo-600/20 border-indigo-500 ring-2 ring-indigo-400/30"
                    : isLight 
                      ? "bg-stone-50 border-stone-200 hover:bg-stone-100" 
                      : isSepia 
                        ? "bg-[#EFE8D8] border-[#D8CCB5] hover:bg-[#E5DAC3]" 
                        : "bg-slate-900/40 border-slate-700/60 text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-bold ${headingColor}`}>Chấm điểm tức thì (Khuyên dùng)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold">Học sâu</span>
                </div>
                <p className={`text-xs leading-relaxed ${mutedTextColor}`}>
                  Hiển thị ngay đáp án đúng/sai, kèm giải thích khoa học và mẹo ghi nhớ sau mỗi câu bạn chọn.
                </p>
              </button>

              <button
                onClick={() => { sounds.playClick(); setFeedbackMode('exam'); }}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  feedbackMode === 'exam'
                    ? "bg-indigo-50 dark:bg-indigo-600/20 border-indigo-500 ring-2 ring-indigo-400/30"
                    : isLight 
                      ? "bg-stone-50 border-stone-200 hover:bg-stone-100" 
                      : isSepia 
                        ? "bg-[#EFE8D8] border-[#D8CCB5] hover:bg-[#E5DAC3]" 
                        : "bg-slate-900/40 border-slate-700/60 text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-bold ${headingColor}`}>Mô phỏng thi thật</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-800 dark:text-amber-300 font-bold">Áp lực thi</span>
                </div>
                <p className={`text-xs leading-relaxed ${mutedTextColor}`}>
                  Chọn đáp án tự do, có thể quay lại sửa câu. Chỉ công bố điểm số và phân tích sau khi nộp bài.
                </p>
              </button>
            </div>
          </div>

          {/* Exam Summary Notice */}
          <div className={`p-4 rounded-2xl border text-xs space-y-1.5 ${
            isLight 
              ? "bg-indigo-50/70 border-indigo-200 text-slate-700" 
              : isSepia 
                ? "bg-[#EAE1D0] border-[#DECFAF] text-[#2C2114]" 
                : "bg-indigo-500/10 border-indigo-500/20 text-slate-300"
          }`}>
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Quy chế tính điểm & thưởng:</span>
            </div>
            <ul className="list-disc list-inside space-y-1">
              <li>Mỗi câu trắc nghiệm đúng: <strong className="text-emerald-600 dark:text-emerald-400">+20 XP</strong></li>
              <li>Hoàn thành bài thi 40 câu: <strong className="text-amber-600 dark:text-amber-400">+50 XP thưởng thêm</strong></li>
              <li>Các câu sai sẽ tự động đưa vào <strong>Ngân hàng câu sai (Smart Review)</strong> để ôn lại</li>
            </ul>
          </div>

          <button
            onClick={startQuiz}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-amber-500 hover:from-indigo-700 hover:to-amber-600 text-white font-black text-base shadow-xl shadow-indigo-600/30 transition-all hover:scale-101 active:scale-99 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>BẮT ĐẦU LÀM BÀI (40 CÂU)</span>
          </button>
        </div>
      </div>
    );
  }

  // RESULT SCREEN (After submission)
  if (isSubmitted) {
    let correctCount = 0;
    QUESTIONS_DATA.forEach(q => {
      if (userAnswers[q.id] === q.correct_answer) correctCount++;
    });
    const percentage = Math.round((correctCount / total) * 100);
    const scoreOn10 = ((correctCount / total) * 10).toFixed(1);
    const wrongCount = total - correctCount;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* Celebration Banner */}
        <div className={`text-center p-8 rounded-3xl border shadow-xl relative overflow-hidden ${
          isLight 
            ? "bg-gradient-to-br from-indigo-50 via-white to-amber-50/50 border-indigo-200 text-slate-800" 
            : isSepia 
              ? "bg-[#FAF5EA] border-[#D8CCB5] text-[#2C2114]" 
              : "bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 border-indigo-500/40 text-white"
        }`}>
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-4xl shadow-xl shadow-amber-400/30 mb-4 animate-bounce">
            🏆
          </div>

          <h2 className={`text-3xl font-black ${headingColor}`}>Hoàn Thành Bài Luyện Đề!</h2>
          <p className={`text-sm mt-1 ${mutedTextColor}`}>
            Bạn đã xuất sắc vượt qua toàn bộ 40 câu hỏi trắc nghiệm Lịch sử & Địa lý Châu Âu
          </p>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mt-6">
            <div className={`p-3.5 rounded-2xl border ${isLight ? "bg-white border-stone-200 shadow-xs" : isSepia ? "bg-[#EFE8D8] border-[#D8CCB5]" : "bg-slate-800/80 border-slate-700"}`}>
              <span className={`text-[11px] uppercase font-bold ${mutedTextColor}`}>Điểm số</span>
              <p className="text-2xl font-black text-amber-500 mt-1">{scoreOn10} / 10</p>
            </div>
            <div className={`p-3.5 rounded-2xl border ${isLight ? "bg-white border-stone-200 shadow-xs" : isSepia ? "bg-[#EFE8D8] border-[#D8CCB5]" : "bg-slate-800/80 border-slate-700"}`}>
              <span className={`text-[11px] uppercase font-bold ${mutedTextColor}`}>Số câu đúng</span>
              <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">{correctCount}/{total}</p>
            </div>
            <div className={`p-3.5 rounded-2xl border ${isLight ? "bg-white border-stone-200 shadow-xs" : isSepia ? "bg-[#EFE8D8] border-[#D8CCB5]" : "bg-slate-800/80 border-slate-700"}`}>
              <span className={`text-[11px] uppercase font-bold ${mutedTextColor}`}>Độ chính xác</span>
              <p className="text-2xl font-black text-indigo-600 dark:text-indigo-300 mt-1">{percentage}%</p>
            </div>
            <div className={`p-3.5 rounded-2xl border ${isLight ? "bg-white border-stone-200 shadow-xs" : isSepia ? "bg-[#EFE8D8] border-[#D8CCB5]" : "bg-slate-800/80 border-slate-700"}`}>
              <span className={`text-[11px] uppercase font-bold ${mutedTextColor}`}>Thời gian</span>
              <p className="text-2xl font-black text-cyan-600 dark:text-cyan-300 mt-1">{formatTimer(timeSpent)}</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {wrongCount > 0 && (
              <button
                onClick={onOpenSmartReview}
                className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 transition-all hover:scale-102"
              >
                Ôn ngay {wrongCount} câu sai trong Smart Review
              </button>
            )}

            <button
              onClick={startQuiz}
              className={`px-6 py-3 rounded-xl font-bold text-sm border transition-all hover:scale-102 flex items-center gap-2 ${
                isLight 
                  ? "bg-white hover:bg-stone-100 text-slate-800 border-stone-300 shadow-sm" 
                  : isSepia 
                    ? "bg-[#FAF5EA] hover:bg-[#EFE7D8] text-[#2C2114] border-[#D8CCB5]" 
                    : "bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại đề mới</span>
            </button>
          </div>
        </div>

        {/* Detailed Review Breakdown */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className={`text-xl font-black ${headingColor}`}>Xem lại chi tiết từng câu (40 câu)</h3>
            <span className={`text-xs ${mutedTextColor}`}>
              {correctCount} đúng • {wrongCount} sai
            </span>
          </div>

          <div className="space-y-3">
            {QUESTIONS_DATA.map((q) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns === q.correct_answer;
              const isSpecial = q.id === 14;

              return (
                <div 
                  key={q.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isCorrect 
                      ? (isLight ? "bg-white border-emerald-300 shadow-xs" : "bg-slate-800/40 border-emerald-500/30") 
                      : (isLight ? "bg-rose-50/40 border-rose-300 shadow-xs" : "bg-red-950/20 border-red-500/40")
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-lg font-black text-xs flex items-center justify-center ${
                        isCorrect ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : "bg-rose-500/15 text-rose-700 dark:text-rose-300"
                      }`}>
                        {q.id}
                      </span>
                      <span className={`text-xs font-bold ${headingColor}`}>
                        {q.subject} • {q.topic}
                      </span>
                      {isSpecial && (
                        <span className="text-[10px] font-black px-2 py-0.5 bg-cyan-500 text-white rounded">
                          LƯU Ý ĐẶC BIỆT
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" />
                          Đúng (+20 XP)
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400">
                          <XCircle className="w-4 h-4" />
                          Sai (Bạn chọn: {userAns || 'Bỏ qua'})
                        </span>
                      )}
                    </div>
                  </div>

                  <p className={`text-sm font-semibold mt-1 ${headingColor}`}>
                    {q.question_text}
                  </p>

                  {/* 4 Choices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                    {(['A', 'B', 'C', 'D'] as const).map(optKey => {
                      const isChoiceCorrect = optKey === q.correct_answer;
                      const isUserChoice = optKey === userAns;

                      let badgeClass = isLight 
                        ? "bg-stone-50 border-stone-200 text-slate-600" 
                        : "bg-slate-900/60 border-slate-800 text-slate-400";
                      
                      if (isChoiceCorrect) {
                        badgeClass = isLight 
                          ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold" 
                          : "bg-emerald-500/20 border-emerald-500/60 text-emerald-200 font-bold";
                      } else if (isUserChoice && !isChoiceCorrect) {
                        badgeClass = isLight 
                          ? "bg-rose-50 border-rose-400 text-rose-950 font-bold" 
                          : "bg-red-500/20 border-red-500/60 text-red-300";
                      }

                      return (
                        <div key={optKey} className={`p-2.5 rounded-xl border flex items-start gap-2 ${badgeClass}`}>
                          <span className={`w-5 h-5 rounded flex items-center justify-center shrink-0 font-bold text-[11px] ${
                            isLight ? "bg-white border border-stone-300" : "bg-slate-800"
                          }`}>
                            {optKey}
                          </span>
                          <span>{q.options[optKey]}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation & Memory Tip */}
                  <div className="mt-3 pt-3 border-t border-stone-200 dark:border-slate-700/50 text-xs space-y-1.5">
                    <p className={isLight ? "text-slate-700" : "text-slate-300"}>
                      <strong className="text-indigo-600 dark:text-indigo-300">Giải thích:</strong> {q.explanation}
                    </p>
                    <p className={`italic ${isLight ? "text-amber-800 font-medium" : "text-amber-300"}`}>
                      <strong>Mẹo nhớ:</strong> {q.memory_tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    );
  }

  // ACTIVE QUIZ INTERFACE
  const selectedAnswer = userAnswers[currentQ.id];
  const isAnswered = selectedAnswer !== undefined;
  const isInstant = feedbackMode === 'instant';

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-6">
      
      {/* Top Status Bar */}
      <div className={`flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl border shadow-sm ${
        isLight 
          ? "bg-white border-stone-200 text-slate-800" 
          : isSepia 
            ? "bg-[#FAF5EA] border-[#D8CCB5] text-[#2C2114]" 
            : "bg-slate-800/80 border-slate-700/80 backdrop-blur shadow-md text-white"
      }`}>
        
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-xl bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-black text-sm border border-indigo-500/30">
            Câu {currentIdx + 1} / {total}
          </span>
          <span className={`text-xs hidden sm:inline ${mutedTextColor}`}>
            Đã làm: <strong className={headingColor}>{answeredCount}</strong>/{total}
          </span>
        </div>

        {/* Timer Pill */}
        {timerModeMinutes > 0 && (
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold border shadow-xs ${
            timeRemaining < 180 
              ? "bg-rose-500/20 border-rose-500/40 text-rose-600 dark:text-rose-400 animate-pulse" 
              : isLight 
                ? "bg-stone-50 border-stone-200 text-cyan-800" 
                : "bg-slate-900 border-slate-700 text-cyan-300"
          }`}>
            <Timer className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Còn lại: {formatTimer(timeRemaining)}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmitQuiz}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all hover:scale-102"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Nộp bài chấm điểm</span>
        </button>
      </div>

      {/* Main Question Card */}
      <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl space-y-6 ${cardBgClass}`}>
        
        {/* Question Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200 dark:border-slate-700/60">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
              currentQ.subject === 'Địa lý' 
                ? "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20" 
                : "bg-purple-500/15 text-purple-800 dark:text-purple-300 border border-purple-500/20"
            }`}>
              {currentQ.subject}
            </span>
            <span className={`text-xs font-semibold ${headingColor}`}>
              {currentQ.topic}
            </span>
          </div>

          {currentQ.id === 14 && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-cyan-500 text-white flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              LƯU Ý ĐẶC BIỆT CÂU 14 (KHÓA ĐÁP ÁN B)
            </span>
          )}
        </div>

        {/* Question Text */}
        <div className="py-2">
          <h2 className={`text-lg sm:text-xl font-bold leading-relaxed ${headingColor}`}>
            {currentQ.question_text}
          </h2>
        </div>

        {/* Options (A, B, C, D) */}
        <div className="space-y-3">
          {(['A', 'B', 'C', 'D'] as const).map(key => {
            const isSelected = selectedAnswer === key;
            const isCorrectOption = key === currentQ.correct_answer;

            let optionStyle = isLight 
              ? "bg-stone-50/70 border-stone-200 text-slate-800 hover:bg-stone-100 hover:border-indigo-300" 
              : isSepia 
                ? "bg-[#EFE8D8] border-[#D8CCB5] text-[#2C2114] hover:bg-[#E5DAC3]" 
                : "bg-slate-900/60 border-slate-700/70 text-slate-200 hover:bg-slate-800/80 hover:border-indigo-500/50";
            
            if (isInstant && isAnswered) {
              if (isCorrectOption) {
                optionStyle = isLight 
                  ? "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs" 
                  : "bg-emerald-500/20 border-emerald-500 text-white shadow-lg shadow-emerald-500/20";
              } else if (isSelected && !isCorrectOption) {
                optionStyle = isLight 
                  ? "bg-rose-50 border-rose-500 text-rose-950 font-semibold" 
                  : "bg-red-500/20 border-red-500 text-red-200";
              } else {
                optionStyle = isLight 
                  ? "bg-stone-50/40 border-stone-200/60 text-slate-400 opacity-60" 
                  : "bg-slate-900/30 border-slate-800 text-slate-500 opacity-60";
              }
            } else if (isSelected) {
              optionStyle = isLight 
                ? "bg-indigo-50 border-indigo-600 text-indigo-950 shadow-sm ring-2 ring-indigo-400/40 font-bold" 
                : "bg-indigo-600/30 border-indigo-500 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-500/40";
            }

            return (
              <button
                key={key}
                disabled={isInstant && isAnswered}
                onClick={() => handleSelectOption(key)}
                className={`w-full p-4 rounded-2xl text-left border-2 flex items-start gap-3.5 transition-all text-sm sm:text-base font-medium shadow-xs ${optionStyle}`}
              >
                <span className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border ${
                  isSelected 
                    ? "bg-indigo-600 text-white border-indigo-500" 
                    : isLight 
                      ? "bg-white border-stone-300 text-slate-700" 
                      : "bg-slate-800 text-slate-300 border-slate-700"
                }`}>
                  {key}
                </span>
                <span className="flex-1 leading-relaxed">
                  {currentQ.options[key]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Instant Feedback Panel */}
        {isInstant && isAnswered && (
          <div className={`p-5 rounded-2xl border-2 space-y-3 animate-fade-in ${
            selectedAnswer === currentQ.correct_answer 
              ? (isLight ? "bg-emerald-50/80 border-emerald-300" : "bg-emerald-950/30 border-emerald-500/50") 
              : (isLight ? "bg-rose-50/80 border-rose-300" : "bg-red-950/30 border-red-500/50")
          }`}>
            <div className="flex items-center gap-2">
              {selectedAnswer === currentQ.correct_answer ? (
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-black text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>CHÍNH XÁC! (+20 XP)</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-black text-sm">
                  <XCircle className="w-5 h-5" />
                  <span>CHƯA ĐÚNG! Đáp án chính xác là: {currentQ.correct_answer}</span>
                </div>
              )}
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? "text-slate-700" : "text-slate-300"}`}>
              <strong className={headingColor}>Giải thích:</strong> {currentQ.explanation}
            </p>

            <div className={`p-3 rounded-xl border flex items-start gap-2 text-xs ${
              isLight ? "bg-amber-50 border-amber-300 text-amber-950" : "bg-amber-500/10 border-amber-500/30 text-amber-200"
            }`}>
              <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Mẹo ghi nhớ:</strong> {currentQ.memory_tip}</span>
            </div>
          </div>
        )}

        {/* Navigation bottom bar */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-slate-700/60">
          <button
            onClick={() => {
              sounds.playClick();
              setCurrentIdx(prev => Math.max(0, prev - 1));
            }}
            disabled={currentIdx === 0}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs border transition-colors shadow-xs disabled:opacity-40 ${
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
            onClick={() => {
              sounds.playClick();
              setCurrentIdx(prev => Math.min(total - 1, prev + 1));
            }}
            disabled={currentIdx === total - 1}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition-all hover:scale-102"
          >
            <span>Câu tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Question Palette (Grid of 40 buttons) */}
      <div className={`p-5 rounded-3xl border shadow-xl space-y-3 ${cardBgClass}`}>
        <div className="flex items-center justify-between">
          <h3 className={`text-xs uppercase tracking-wider font-extrabold ${mutedTextColor}`}>
            Bảng điều hướng câu hỏi (40 câu)
          </h3>
          <span className={`text-[11px] ${mutedTextColor}`}>
            Bấm số câu để nhảy nhanh
          </span>
        </div>

        <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-20 gap-1.5">
          {QUESTIONS_DATA.map((q, idx) => {
            const isCurrent = idx === currentIdx;
            const ans = userAnswers[q.id];
            const isDone = ans !== undefined;
            const isSpecial = q.id === 14;

            let btnStyle = isLight 
              ? "bg-stone-100 text-slate-700 border-stone-200 hover:bg-stone-200" 
              : "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800";
            
            if (isInstant && isDone) {
              if (ans === q.correct_answer) {
                btnStyle = "bg-emerald-600 text-white border-emerald-500";
              } else {
                btnStyle = "bg-rose-600 text-white border-rose-500";
              }
            } else if (isDone) {
              btnStyle = "bg-indigo-600 text-white border-indigo-500";
            }

            if (isCurrent) {
              btnStyle += " ring-2 ring-indigo-500 font-black scale-105 shadow-md";
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  sounds.playClick();
                  setCurrentIdx(idx);
                }}
                className={`h-9 rounded-lg text-xs font-bold transition-all border flex items-center justify-center relative ${btnStyle}`}
              >
                {q.id}
                {isSpecial && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
