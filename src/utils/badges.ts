import { Badge, UserStats } from '../types';

export interface BadgeDefinition {
  id: string;
  name: string;
  englishTitle: string;
  description: string;
  icon: string;
  category: 'quiz' | 'mastery' | 'streak' | 'special';
  tier: 'bronze' | 'silver' | 'gold' | 'diamond';
  milestoneTarget: number;
  conditionDescription: string;
  xpReward: number;
  checkUnlocked: (stats: UserStats) => boolean;
  getProgress: (stats: UserStats) => number;
}

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  // 1. MILESTONE: First Step
  {
    id: 'first_step',
    name: 'Tân Binh Thám Hiểm',
    englishTitle: 'First Step',
    description: 'Bắt đầu hành trình khai phá tri thức Lịch sử & Địa lý Châu Âu Lớp 7.',
    icon: '🌍',
    category: 'special',
    tier: 'bronze',
    milestoneTarget: 1,
    conditionDescription: 'Khởi động ứng dụng ôn tập',
    xpReward: 50,
    checkUnlocked: () => true,
    getProgress: () => 1
  },

  // 2. MILESTONE: First Quiz Done
  {
    id: 'quiz_first',
    name: 'Tập Sự Luyện Đề',
    englishTitle: 'First Quiz',
    description: 'Hoàn thành bài thi trắc nghiệm 40 câu đầu tiên.',
    icon: '📝',
    category: 'quiz',
    tier: 'bronze',
    milestoneTarget: 1,
    conditionDescription: 'Hoàn thành 1 bài thi trắc nghiệm',
    xpReward: 50,
    checkUnlocked: (stats) => (stats.completedQuizzesCount || 0) >= 1,
    getProgress: (stats) => Math.min(1, stats.completedQuizzesCount || 0)
  },

  // 3. MILESTONE: 5 Quizzes
  {
    id: 'quiz_expert_5',
    name: 'Chuyên Gia Luyện Đề',
    englishTitle: '5 Quizzes Completed',
    description: 'Rèn luyện phản xạ với 5 bài thi trắc nghiệm được hoàn tất.',
    icon: '⚡',
    category: 'quiz',
    tier: 'silver',
    milestoneTarget: 5,
    conditionDescription: 'Hoàn thành 5 bài thi trắc nghiệm',
    xpReward: 150,
    checkUnlocked: (stats) => (stats.completedQuizzesCount || 0) >= 5,
    getProgress: (stats) => Math.min(5, stats.completedQuizzesCount || 0)
  },

  // 4. MILESTONE (Required): Completed 10 Quizzes
  {
    id: 'completed_10_quizzes',
    name: 'Chiến Binh 10 Đề',
    englishTitle: 'Completed 10 Quizzes',
    description: 'Bền bỉ chinh phục 10 bài thi trắc nghiệm toàn diện, tạo nền tảng vững chắc cho kỳ thi giữa kì.',
    icon: '🎯',
    category: 'quiz',
    tier: 'gold',
    milestoneTarget: 10,
    conditionDescription: 'Hoàn thành 10 bài thi trắc nghiệm',
    xpReward: 300,
    checkUnlocked: (stats) => (stats.completedQuizzesCount || 0) >= 10,
    getProgress: (stats) => Math.min(10, stats.completedQuizzesCount || 0)
  },

  // 5. MILESTONE (Required): Perfect Score
  {
    id: 'perfect_score',
    name: 'Điểm Tuyệt Đối',
    englishTitle: 'Perfect Score',
    description: 'Đạt điểm số tuyệt đối 40/40 (100%) trong bài thi trắc nghiệm không sai sót.',
    icon: '💯',
    category: 'quiz',
    tier: 'diamond',
    milestoneTarget: 40,
    conditionDescription: 'Đạt 40/40 câu đúng trong 1 lần thi trắc nghiệm',
    xpReward: 500,
    checkUnlocked: (stats) => (stats.bestQuizScore || 0) >= 40 || (stats.perfectScoresCount || 0) > 0,
    getProgress: (stats) => Math.min(40, stats.bestQuizScore || 0)
  },

  // 6. MILESTONE: Halfway Explorer (20 Mastered)
  {
    id: 'halfway_explorer',
    name: 'Nhà Thám Hiểm 50%',
    englishTitle: 'Halfway Explorer',
    description: 'Đã học thuộc và làm chủ từ 20 câu hỏi trọng tâm trở lên.',
    icon: '🧭',
    category: 'mastery',
    tier: 'silver',
    milestoneTarget: 20,
    conditionDescription: 'Làm chủ 20 câu hỏi kiến thức',
    xpReward: 200,
    checkUnlocked: (stats) => (stats.masteredIds?.length || 0) >= 20,
    getProgress: (stats) => Math.min(20, stats.masteredIds?.length || 0)
  },

  // 7. MILESTONE (Required): Mastered All Topics
  {
    id: 'mastered_all_topics',
    name: 'Bậc Thầy Toàn Tri',
    englishTitle: 'Mastered All Topics',
    description: 'Làm chủ toàn bộ 40 chủ đề kiến thức Lịch sử & Địa lý Châu Âu không còn lỗ hổng.',
    icon: '👑',
    category: 'mastery',
    tier: 'diamond',
    milestoneTarget: 40,
    conditionDescription: 'Làm chủ toàn bộ 40/40 chủ đề kiến thức',
    xpReward: 600,
    checkUnlocked: (stats) => (stats.masteredIds?.length || 0) >= 40,
    getProgress: (stats) => Math.min(40, stats.masteredIds?.length || 0)
  },

  // 8. MILESTONE: 3-Day Streak
  {
    id: 'streak_3_days',
    name: 'Thói Quen Vàng',
    englishTitle: '3-Day Streak',
    description: 'Giữ ngọn lửa học tập bùng cháy liên tục trong 3 ngày.',
    icon: '🔥',
    category: 'streak',
    tier: 'silver',
    milestoneTarget: 3,
    conditionDescription: 'Duy trì chuỗi Streak 3 ngày liên tiếp',
    xpReward: 150,
    checkUnlocked: (stats) => (stats.streak || 0) >= 3,
    getProgress: (stats) => Math.min(3, stats.streak || 1)
  },

  // 9. MILESTONE: 7-Day Streak
  {
    id: 'streak_7_days',
    name: 'Bền Bỉ Thép',
    englishTitle: '7-Day Streak',
    description: 'Học tập kiên định trọn vẹn 1 tuần 7 ngày liên tục.',
    icon: '🏆',
    category: 'streak',
    tier: 'gold',
    milestoneTarget: 7,
    conditionDescription: 'Duy trì chuỗi Streak 7 ngày liên tiếp',
    xpReward: 350,
    checkUnlocked: (stats) => (stats.streak || 0) >= 7,
    getProgress: (stats) => Math.min(7, stats.streak || 1)
  },

  // 10. MILESTONE: Special River & Canal Master (Question 14)
  {
    id: 'special_river_master',
    name: 'Thống Lĩnh Thủy Văn',
    englishTitle: 'River & Canal Master',
    description: 'Nắm vững kiến thức cốt lõi Câu 14: Kênh đào kết nối các lưu vực tạo mạng lưới sông ngòi dày đặc.',
    icon: '🌊',
    category: 'special',
    tier: 'gold',
    milestoneTarget: 1,
    conditionDescription: 'Thuộc lòng Câu 14 (Kênh đào & Mạng lưới sông ngòi)',
    xpReward: 100,
    checkUnlocked: (stats) => stats.masteredIds?.includes(14) || false,
    getProgress: (stats) => (stats.masteredIds?.includes(14) ? 1 : 0)
  },

  // 11. MILESTONE: Zero Mistakes
  {
    id: 'clean_mistakes',
    name: 'Dũng Sĩ Diệt Lỗi',
    englishTitle: 'Zero Mistakes',
    description: 'Đã ôn tập sạch sẽ mọi câu sai trong ngân hàng sau khi đã học ít nhất 15 câu.',
    icon: '🛡️',
    category: 'mastery',
    tier: 'silver',
    milestoneTarget: 1,
    conditionDescription: 'Xóa sạch câu sai khi đã thuộc ≥ 15 câu',
    xpReward: 120,
    checkUnlocked: (stats) => (stats.mistakeIds?.length === 0 && (stats.masteredIds?.length || 0) >= 15),
    getProgress: (stats) => ((stats.mistakeIds?.length === 0 && (stats.masteredIds?.length || 0) >= 15) ? 1 : 0)
  }
];

/**
 * Calculates current badge collection state from stats
 */
export function getBadgesWithStatus(stats: UserStats): Badge[] {
  const unlockedIds = new Set([
    ...(stats.unlockedBadgeIds || []),
    // Also include badges mapped from legacy string badges array
    ...mapLegacyBadgesToIds(stats.badges || [])
  ]);

  return BADGE_DEFINITIONS.map(def => {
    const isUnlockedByCondition = def.checkUnlocked(stats);
    const isUnlocked = isUnlockedByCondition || unlockedIds.has(def.id);
    const currentProgress = def.getProgress(stats);

    return {
      id: def.id,
      name: def.name,
      englishTitle: def.englishTitle,
      description: def.description,
      icon: def.icon,
      category: def.category,
      tier: def.tier,
      milestoneTarget: def.milestoneTarget,
      currentProgress,
      isUnlocked,
      conditionDescription: def.conditionDescription,
      xpReward: def.xpReward
    };
  });
}

function mapLegacyBadgesToIds(badges: string[]): string[] {
  const ids: string[] = [];
  badges.forEach(b => {
    if (b.includes('Tân binh') || b.includes('first_step')) ids.push('first_step');
    if (b.includes('Quán quân 40/40') || b.includes('perfect_score')) ids.push('perfect_score');
    if (b.includes('Chiến thần Địa lý') || b.includes('halfway')) ids.push('halfway_explorer');
    if (b.includes('Chiến Binh 10 Đề') || b.includes('completed_10_quizzes')) ids.push('completed_10_quizzes');
    if (b.includes('Bậc Thầy Toàn Tri') || b.includes('mastered_all_topics')) ids.push('mastered_all_topics');
  });
  return ids;
}

/**
 * Checks for any newly unlocked badges and returns updated stats with bonus XP
 */
export function syncBadgeProgress(stats: UserStats): {
  updatedStats: UserStats;
  newlyUnlockedBadges: Badge[];
} {
  const existingUnlocked = new Set([
    ...(stats.unlockedBadgeIds || []),
    ...mapLegacyBadgesToIds(stats.badges || [])
  ]);

  const badges = getBadgesWithStatus(stats);
  const newlyUnlockedBadges: Badge[] = [];
  let bonusXP = 0;

  badges.forEach(b => {
    if (b.isUnlocked && !existingUnlocked.has(b.id)) {
      newlyUnlockedBadges.push(b);
      bonusXP += b.xpReward;
      existingUnlocked.add(b.id);
    }
  });

  const updatedBadgeNames = Array.from(new Set([
    ...(stats.badges || []),
    ...newlyUnlockedBadges.map(b => `${b.icon} ${b.name}`)
  ]));

  const updatedStats: UserStats = {
    ...stats,
    xp: stats.xp + bonusXP,
    unlockedBadgeIds: Array.from(existingUnlocked),
    badges: updatedBadgeNames,
    lastUnlockedBadgeId: newlyUnlockedBadges.length > 0 
      ? newlyUnlockedBadges[newlyUnlockedBadges.length - 1].id 
      : stats.lastUnlockedBadgeId
  };

  return { updatedStats, newlyUnlockedBadges };
}
