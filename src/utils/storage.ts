import { UserStats } from '../types';

const STORAGE_KEY = 'flashgeography_class7_stats_v1';

const DEFAULT_STATS: UserStats = {
  xp: 120,
  streak: 1,
  lastStudiedDate: new Date().toISOString().split('T')[0],
  masteredIds: [1, 2, 4],
  mistakeIds: [],
  completedQuizzesCount: 0,
  bestQuizScore: 0,
  badges: ['🌍 Tân binh thám hiểm']
};

export function loadUserStats(): UserStats {
  if (typeof window === 'undefined') return DEFAULT_STATS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATS;
    const parsed = JSON.parse(raw);
    
    // Check streak logic
    const today = new Date().toISOString().split('T')[0];
    if (parsed.lastStudiedDate !== today) {
      const lastDate = new Date(parsed.lastStudiedDate);
      const currentDate = new Date(today);
      const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        parsed.streak = (parsed.streak || 0) + 1;
      } else if (diffDays > 1) {
        parsed.streak = 1; // reset streak
      }
      parsed.lastStudiedDate = today;
      saveUserStats(parsed);
    }
    
    return { ...DEFAULT_STATS, ...parsed };
  } catch {
    return DEFAULT_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (err) {
    console.error('Failed to save stats to localStorage', err);
  }
}
