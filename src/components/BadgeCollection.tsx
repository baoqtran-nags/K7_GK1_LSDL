import React, { useState } from 'react';
import { Badge, UserStats, AppMode } from '../types';
import { getBadgesWithStatus } from '../utils/badges';
import { 
  Trophy, 
  Award, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Flame, 
  Crown, 
  ArrowRight,
  X,
  Zap,
  Info
} from 'lucide-react';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';

interface BadgeCollectionProps {
  stats: UserStats;
  setMode?: (mode: AppMode) => void;
}

export const BadgeCollection: React.FC<BadgeCollectionProps> = ({ stats, setMode }) => {
  const { isLight, isSepia } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'unlocked' | 'locked' | 'quiz' | 'mastery' | 'streak'>('all');
  const [activeBadgeModal, setActiveBadgeModal] = useState<Badge | null>(null);

  const badges = getBadgesWithStatus(stats);
  const unlockedBadges = badges.filter(b => b.isUnlocked);
  const lockedBadges = badges.filter(b => !b.isUnlocked);
  const totalBadges = badges.length;
  const unlockedCount = unlockedBadges.length;
  const completionPercentage = Math.round((unlockedCount / totalBadges) * 100);

  const totalBadgeXP = unlockedBadges.reduce((acc, b) => acc + b.xpReward, 0);

  const filteredBadges = badges.filter(b => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'unlocked') return b.isUnlocked;
    if (selectedCategory === 'locked') return !b.isUnlocked;
    return b.category === selectedCategory;
  });

  const handleBadgeClick = (badge: Badge) => {
    sounds.playClick();
    setActiveBadgeModal(badge);
    if (badge.isUnlocked) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // fallback
      }
    }
  };

  // Tier styles
  const getTierBadge = (tier: Badge['tier']) => {
    switch (tier) {
      case 'diamond':
        return {
          label: 'Kim Cương',
          pillClass: 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border-cyan-400/40',
          glowClass: 'shadow-cyan-500/30'
        };
      case 'gold':
        return {
          label: 'Hoàng Kim',
          pillClass: 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-400/40',
          glowClass: 'shadow-amber-500/30'
        };
      case 'silver':
        return {
          label: 'Bạch Ngân',
          pillClass: 'bg-slate-300/30 text-slate-700 dark:text-slate-300 border-slate-400/30',
          glowClass: 'shadow-slate-400/20'
        };
      case 'bronze':
      default:
        return {
          label: 'Đồng Thau',
          pillClass: 'bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-400/30',
          glowClass: 'shadow-orange-500/20'
        };
    }
  };

  // Card background styling based on theme
  const cardBgClass = isLight 
    ? "bg-white border-stone-200/90 shadow-sm text-slate-800" 
    : isSepia 
      ? "bg-[#FAF5EA] border-[#D8CCB5] shadow-sm text-[#2C2114]" 
      : "bg-slate-800/80 border-slate-700/80 text-slate-100";

  const headingClass = isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white";
  const descClass = isLight ? "text-slate-600" : isSepia ? "text-[#5C4D39]" : "text-slate-400";

  return (
    <div className="space-y-6">
      
      {/* Header and Progress Overview */}
      <div className={`rounded-3xl border p-5 sm:p-7 shadow-lg relative overflow-hidden transition-all ${
        isLight 
          ? "bg-gradient-to-br from-indigo-50 via-white to-amber-50/40 border-indigo-200/80" 
          : isSepia 
            ? "bg-gradient-to-br from-[#F5EEDB] via-[#EFE6D5] to-[#E5DAC3] border-[#DECFAF]" 
            : "bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border-indigo-500/30"
      }`}>
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-52 h-52 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-bold">
              <Trophy className="w-3.5 h-3.5 fill-current" />
              <span>HỆ THỐNG HUY HIỆU & THÀNH TỰU (BADGE COLLECTION)</span>
            </div>
            
            <h2 className={`text-2xl sm:text-3xl font-black flex items-center gap-2.5 tracking-tight ${headingClass}`}>
              <Award className="w-7 h-7 text-amber-500" />
              <span>Bộ Sưu Tập Vinh Danh</span>
            </h2>
            
            <p className={`text-xs sm:text-sm max-w-xl leading-relaxed ${descClass}`}>
              Mở khóa các cột mốc danh giá: <strong>10 Bài thi trắc nghiệm (Completed 10 Quizzes)</strong>, 
              <strong> Điểm tuyệt đối 40/40 (Perfect Score)</strong> và <strong>Làm chủ toàn bộ 40 chủ đề (Mastered All Topics)</strong>.
            </p>
          </div>

          {/* Overall Stats Progress Pill */}
          <div className={`shrink-0 w-full md:w-auto p-4 rounded-2xl border flex flex-col gap-2 min-w-[260px] ${
            isLight 
              ? "bg-white/80 border-indigo-100 shadow-sm" 
              : isSepia 
                ? "bg-[#FAF5EA]/90 border-[#D8CCB5]" 
                : "bg-slate-950/60 border-white/10"
          }`}>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className={descClass}>Tiến độ bộ sưu tập</span>
              <span className="text-amber-600 dark:text-amber-400 font-black text-sm">
                {unlockedCount} / {totalBadges} Huy hiệu
              </span>
            </div>

            <div className="w-full bg-stone-200 dark:bg-slate-800 rounded-full h-3 overflow-hidden p-0.5">
              <div 
                className="bg-gradient-to-r from-amber-400 via-yellow-400 to-emerald-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1 border-t border-stone-200/60 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400">Hoàn thành: <strong>{completionPercentage}%</strong></span>
              <span className="text-indigo-600 dark:text-indigo-400 font-black">+{totalBadgeXP} XP Đã nhận</span>
            </div>
          </div>
        </div>

        {/* Highlight 3 Key Milestones Requested by User */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-stone-200/80 dark:border-slate-800">
          
          {/* Milestone 1: Completed 10 Quizzes */}
          {(() => {
            const b = badges.find(x => x.id === 'completed_10_quizzes');
            if (!b) return null;
            return (
              <div 
                onClick={() => handleBadgeClick(b)}
                className={`cursor-pointer p-3 rounded-2xl border transition-all hover:scale-102 flex items-center gap-3 ${
                  b.isUnlocked 
                    ? "bg-amber-500/10 border-amber-400/50 shadow-sm" 
                    : isLight 
                      ? "bg-white/60 border-stone-200/80 opacity-85" 
                      : "bg-slate-900/50 border-slate-800 opacity-80"
                }`}
              >
                <div className="text-2xl p-2 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                  {b.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-amber-600 dark:text-amber-400">Cột mốc Luyện đề</span>
                    {b.isUnlocked ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <span className="text-[10px] text-slate-500 font-bold">{b.currentProgress}/{b.milestoneTarget}</span>
                    )}
                  </div>
                  <p className={`text-xs font-bold truncate ${headingClass}`}>{b.name}</p>
                  <p className="text-[10px] text-slate-500 truncate">{b.englishTitle}</p>
                </div>
              </div>
            );
          })()}

          {/* Milestone 2: Perfect Score */}
          {(() => {
            const b = badges.find(x => x.id === 'perfect_score');
            if (!b) return null;
            return (
              <div 
                onClick={() => handleBadgeClick(b)}
                className={`cursor-pointer p-3 rounded-2xl border transition-all hover:scale-102 flex items-center gap-3 ${
                  b.isUnlocked 
                    ? "bg-cyan-500/10 border-cyan-400/50 shadow-sm" 
                    : isLight 
                      ? "bg-white/60 border-stone-200/80 opacity-85" 
                      : "bg-slate-900/50 border-slate-800 opacity-80"
                }`}
              >
                <div className="text-2xl p-2 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center shrink-0">
                  {b.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-cyan-600 dark:text-cyan-400">Cột mốc Điểm số</span>
                    {b.isUnlocked ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <span className="text-[10px] text-slate-500 font-bold">{b.currentProgress}/{b.milestoneTarget}</span>
                    )}
                  </div>
                  <p className={`text-xs font-bold truncate ${headingClass}`}>{b.name}</p>
                  <p className="text-[10px] text-slate-500 truncate">{b.englishTitle}</p>
                </div>
              </div>
            );
          })()}

          {/* Milestone 3: Mastered All Topics */}
          {(() => {
            const b = badges.find(x => x.id === 'mastered_all_topics');
            if (!b) return null;
            return (
              <div 
                onClick={() => handleBadgeClick(b)}
                className={`cursor-pointer p-3 rounded-2xl border transition-all hover:scale-102 flex items-center gap-3 ${
                  b.isUnlocked 
                    ? "bg-purple-500/10 border-purple-400/50 shadow-sm" 
                    : isLight 
                      ? "bg-white/60 border-stone-200/80 opacity-85" 
                      : "bg-slate-900/50 border-slate-800 opacity-80"
                }`}
              >
                <div className="text-2xl p-2 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center shrink-0">
                  {b.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400">Cột mốc Làm chủ</span>
                    {b.isUnlocked ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <span className="text-[10px] text-slate-500 font-bold">{b.currentProgress}/{b.milestoneTarget}</span>
                    )}
                  </div>
                  <p className={`text-xs font-bold truncate ${headingClass}`}>{b.name}</p>
                  <p className="text-[10px] text-slate-500 truncate">{b.englishTitle}</p>
                </div>
              </div>
            );
          })()}

        </div>

      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className={`flex flex-wrap rounded-2xl p-1 border text-xs font-semibold ${
          isLight ? "bg-stone-200/80 border-stone-300/80" : isSepia ? "bg-[#E5DAC3] border-[#CFC0A3]" : "bg-slate-800/90 border-slate-700/80"
        }`}>
          {[
            { id: 'all', label: `Tất cả (${totalBadges})` },
            { id: 'unlocked', label: `Đã mở (${unlockedCount})` },
            { id: 'locked', label: `Đang mở (${lockedBadges.length})` },
            { id: 'quiz', label: 'Luyện đề' },
            { id: 'mastery', label: 'Kiến thức' },
            { id: 'streak', label: 'Chuỗi ngày' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { sounds.playClick(); setSelectedCategory(tab.id as any); }}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                selectedCategory === tab.id 
                  ? "bg-indigo-600 text-white shadow-sm font-bold" 
                  : isLight 
                    ? "text-slate-700 hover:text-slate-900 hover:bg-stone-300/50" 
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <span className={`text-xs font-medium ${descClass}`}>
          Nhấp vào huy hiệu để xem chi tiết & phần thưởng
        </span>
      </div>

      {/* Badges Grid Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredBadges.map((badge) => {
          const tierInfo = getTierBadge(badge.tier);
          const percent = Math.min(100, Math.round((badge.currentProgress / badge.milestoneTarget) * 100));

          return (
            <div
              key={badge.id}
              onClick={() => handleBadgeClick(badge)}
              className={`group relative rounded-3xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:scale-102 hover:shadow-xl ${
                badge.isUnlocked
                  ? `${cardBgClass} ${tierInfo.glowClass} hover:border-indigo-400`
                  : isLight
                    ? "bg-stone-50/90 border-stone-200 text-slate-500 opacity-90 hover:opacity-100"
                    : isSepia
                      ? "bg-[#EFE8D8]/70 border-[#D8CCB5] text-[#5C4D39] opacity-90 hover:opacity-100"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 opacity-80 hover:opacity-100"
              }`}
            >
              <div>
                {/* Top Card Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black border uppercase tracking-wider ${tierInfo.pillClass}`}>
                    {tierInfo.label}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                    <Sparkles className="w-3 h-3" />
                    +{badge.xpReward} XP
                  </span>
                </div>

                {/* Badge Center Graphic */}
                <div className="flex items-center gap-3.5 my-2">
                  <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-inner border transition-transform duration-300 group-hover:scale-110 ${
                    badge.isUnlocked
                      ? "bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-amber-500/20 border-white/30"
                      : "bg-stone-200/50 dark:bg-slate-800/80 border-stone-300/60 dark:border-slate-700/60 grayscale"
                  }`}>
                    <span>{badge.icon}</span>
                    
                    {!badge.isUnlocked && (
                      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] rounded-2xl flex items-center justify-center">
                        <Lock className="w-5 h-5 text-slate-300 drop-shadow" />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className={`text-base font-black tracking-tight leading-tight line-clamp-1 ${
                      badge.isUnlocked ? headingClass : "text-slate-700 dark:text-slate-300"
                    }`}>
                      {badge.name}
                    </h3>
                    {badge.englishTitle && (
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                        {badge.englishTitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Badge Description */}
                <p className={`text-xs mt-2 leading-relaxed line-clamp-2 ${descClass}`}>
                  {badge.description}
                </p>
              </div>

              {/* Card Footer: Progress or Unlocked Banner */}
              <div className="mt-4 pt-3 border-t border-stone-200/70 dark:border-slate-700/50">
                {badge.isUnlocked ? (
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                      <span>Đã đạt được</span>
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Chi tiết →</span>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      <span>Tiến độ:</span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        {badge.currentProgress} / {badge.milestoneTarget} ({percent}%)
                      </span>
                    </div>

                    <div className="w-full bg-stone-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Badge Detail Modal */}
      {activeBadgeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-md rounded-3xl border p-6 sm:p-7 shadow-2xl relative transition-all ${
              isLight ? "bg-white border-stone-200 text-slate-800" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5] text-[#2C2114]" : "bg-slate-900 border-slate-700 text-white"
            }`}
          >
            <button
              onClick={() => { sounds.playClick(); setActiveBadgeModal(null); }}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3 pt-2">
              <div className="inline-block relative">
                <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-5xl shadow-xl border ${
                  activeBadgeModal.isUnlocked
                    ? "bg-gradient-to-br from-amber-400/20 via-indigo-500/20 to-purple-500/20 border-amber-400/40"
                    : "bg-stone-200 dark:bg-slate-800 border-slate-700 grayscale"
                }`}>
                  <span>{activeBadgeModal.icon}</span>
                </div>
                {activeBadgeModal.isUnlocked && (
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-emerald-500 text-white shadow-md">
                    <CheckCircle2 className="w-5 h-5 fill-emerald-500 text-white" />
                  </div>
                )}
              </div>

              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-black border uppercase mb-1 ${
                  getTierBadge(activeBadgeModal.tier).pillClass
                }`}>
                  Huy hiệu Hạng {getTierBadge(activeBadgeModal.tier).label}
                </span>

                <h3 className={`text-2xl font-black ${headingClass}`}>
                  {activeBadgeModal.name}
                </h3>
                {activeBadgeModal.englishTitle && (
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {activeBadgeModal.englishTitle}
                  </p>
                )}
              </div>

              <p className={`text-sm leading-relaxed px-2 ${descClass}`}>
                {activeBadgeModal.description}
              </p>

              {/* Requirement & Status Box */}
              <div className={`p-4 rounded-2xl border text-left space-y-2 mt-4 ${
                isLight ? "bg-stone-50 border-stone-200" : isSepia ? "bg-[#EFE8D8] border-[#D8CCB5]" : "bg-slate-950/60 border-slate-800"
              }`}>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500">Yêu cầu mở khóa:</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">+{activeBadgeModal.xpReward} XP thưởng</span>
                </div>
                
                <p className={`text-xs font-bold ${headingClass}`}>
                  🎯 {activeBadgeModal.conditionDescription}
                </p>

                <div className="pt-2 border-t border-stone-200 dark:border-slate-800">
                  <div className="flex justify-between text-xs mb-1 font-semibold">
                    <span className={descClass}>Trạng thái hiện tại:</span>
                    <span className={activeBadgeModal.isUnlocked ? "text-emerald-600 font-bold" : "text-indigo-600 font-bold"}>
                      {activeBadgeModal.isUnlocked ? "Hoàn thành 100%" : `${activeBadgeModal.currentProgress} / ${activeBadgeModal.milestoneTarget}`}
                    </span>
                  </div>
                  <div className="w-full bg-stone-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        activeBadgeModal.isUnlocked ? "bg-emerald-500" : "bg-indigo-600"
                      }`}
                      style={{ 
                        width: `${Math.min(100, Math.round((activeBadgeModal.currentProgress / activeBadgeModal.milestoneTarget) * 100))}%` 
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                {activeBadgeModal.category === 'quiz' && setMode && (
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveBadgeModal(null);
                      setMode('quiz');
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                  >
                    <span>Luyện đề trắc nghiệm ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                {activeBadgeModal.category === 'mastery' && setMode && (
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveBadgeModal(null);
                      setMode('flashcard');
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                  >
                    <span>Học thẻ Flashcard để làm chủ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                {(activeBadgeModal.category === 'streak' || activeBadgeModal.category === 'special') && (
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveBadgeModal(null);
                    }}
                    className="w-full py-2.5 rounded-xl bg-stone-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-stone-300 dark:hover:bg-slate-700 transition-colors"
                  >
                    Đóng
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
