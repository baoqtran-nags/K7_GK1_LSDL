import { ExamSet } from '../types/exams';
import { ALL_EXAM_SETS } from '../data/allExams';
import { QUESTIONS_DATA } from '../data/questions';
import { Question } from '../types';

export interface OfflineExamMeta {
  id: string;
  title: string;
  downloadedAt: string;
  questionCount: number;
  sizeBytes: number;
}

export interface OfflineMistakeRecord {
  questionId: number;
  question: Question;
  addedAt: string;
  attemptCount: number;
  lastUserAnswer?: string;
  notes?: string;
}

const OFFLINE_EXAMS_KEY = 'flashgeography_offline_exams_v1';
const OFFLINE_MISTAKES_KEY = 'flashgeography_offline_mistakes_v1';
const OFFLINE_INIT_FLAG = 'flashgeography_offline_initialized_v1';

/**
 * Automatically initializes default offline storage so students have offline access
 * even if they haven't explicitly clicked download yet.
 */
export function initializeOfflineCache(): void {
  if (typeof window === 'undefined') return;
  try {
    const isInit = localStorage.getItem(OFFLINE_INIT_FLAG);
    if (!isInit) {
      // Pre-download all 4 exam sets by default for seamless offline experience
      ALL_EXAM_SETS.forEach(exam => {
        saveExamForOffline(exam);
      });
      // Pre-sync mistake bank cache
      syncInitialMistakeBank();
      localStorage.setItem(OFFLINE_INIT_FLAG, 'true');
    }
  } catch (err) {
    console.warn('Failed to auto initialize offline cache:', err);
  }
}

/**
 * Get list of all exam IDs stored offline
 */
export function getDownloadedExamIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(OFFLINE_EXAMS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Object.keys(parsed);
  } catch {
    return [];
  }
}

/**
 * Check if a specific exam set is downloaded
 */
export function isExamDownloaded(examId: string): boolean {
  return getDownloadedExamIds().includes(examId);
}

/**
 * Save an exam set for offline access
 */
export function saveExamForOffline(exam: ExamSet): OfflineExamMeta {
  if (typeof window === 'undefined') {
    return {
      id: exam.id,
      title: exam.title,
      downloadedAt: new Date().toISOString(),
      questionCount: exam.questions.length,
      sizeBytes: 0,
    };
  }

  try {
    const raw = localStorage.getItem(OFFLINE_EXAMS_KEY);
    const store = raw ? JSON.parse(raw) : {};

    const serialized = JSON.stringify(exam);
    const sizeBytes = new Blob([serialized]).size;

    store[exam.id] = {
      data: exam,
      meta: {
        id: exam.id,
        title: exam.title,
        downloadedAt: new Date().toISOString(),
        questionCount: exam.questions.length,
        sizeBytes,
      } as OfflineExamMeta,
    };

    localStorage.setItem(OFFLINE_EXAMS_KEY, JSON.stringify(store));
    return store[exam.id].meta;
  } catch (err) {
    console.error('Failed to save exam for offline', err);
    throw err;
  }
}

/**
 * Remove an exam set from offline cache
 */
export function removeExamFromOffline(examId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(OFFLINE_EXAMS_KEY);
    if (!raw) return;
    const store = JSON.parse(raw);
    delete store[examId];
    localStorage.setItem(OFFLINE_EXAMS_KEY, JSON.stringify(store));
  } catch (err) {
    console.error('Failed to remove exam from offline', err);
  }
}

/**
 * Get a downloaded exam set from offline storage
 */
export function getOfflineExam(examId: string): ExamSet | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(OFFLINE_EXAMS_KEY);
    if (!raw) {
      // Fallback to static data
      return ALL_EXAM_SETS.find(e => e.id === examId) || null;
    }
    const store = JSON.parse(raw);
    if (store[examId]?.data) {
      return store[examId].data;
    }
    return ALL_EXAM_SETS.find(e => e.id === examId) || null;
  } catch {
    return ALL_EXAM_SETS.find(e => e.id === examId) || null;
  }
}

/**
 * Download all exam sets in bulk
 */
export function downloadAllExams(): OfflineExamMeta[] {
  return ALL_EXAM_SETS.map(exam => saveExamForOffline(exam));
}

/**
 * Get metadata for all downloaded exam sets
 */
export function getAllOfflineExamMetas(): OfflineExamMeta[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(OFFLINE_EXAMS_KEY);
    if (!raw) return [];
    const store = JSON.parse(raw);
    return Object.values(store).map((item: any) => item.meta);
  } catch {
    return [];
  }
}

/**
 * Mistake Bank Offline Management
 */
function syncInitialMistakeBank(): void {
  // Pre-seed offline mistake storage with default structure
  try {
    const existing = localStorage.getItem(OFFLINE_MISTAKES_KEY);
    if (!existing) {
      localStorage.setItem(OFFLINE_MISTAKES_KEY, JSON.stringify({}));
    }
  } catch {
    // ignore
  }
}

/**
 * Add or update question in offline mistake bank
 */
export function recordOfflineMistake(questionId: number, lastUserAnswer?: string): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(OFFLINE_MISTAKES_KEY);
    const store: Record<number, OfflineMistakeRecord> = raw ? JSON.parse(raw) : {};

    const question = QUESTIONS_DATA.find(q => q.id === questionId);
    if (!question) return;

    const existing = store[questionId];
    store[questionId] = {
      questionId,
      question,
      addedAt: existing ? existing.addedAt : new Date().toISOString(),
      attemptCount: (existing?.attemptCount || 0) + 1,
      lastUserAnswer: lastUserAnswer || existing?.lastUserAnswer,
    };

    localStorage.setItem(OFFLINE_MISTAKES_KEY, JSON.stringify(store));
  } catch (err) {
    console.error('Failed to record offline mistake', err);
  }
}

/**
 * Remove question from offline mistake bank (when mastered)
 */
export function removeOfflineMistake(questionId: number): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(OFFLINE_MISTAKES_KEY);
    if (!raw) return;
    const store = JSON.parse(raw);
    delete store[questionId];
    localStorage.setItem(OFFLINE_MISTAKES_KEY, JSON.stringify(store));
  } catch (err) {
    console.error('Failed to remove offline mistake', err);
  }
}

/**
 * Get all offline mistake records
 */
export function getOfflineMistakes(): OfflineMistakeRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(OFFLINE_MISTAKES_KEY);
    if (!raw) return [];
    const store = JSON.parse(raw);
    return Object.values(store);
  } catch {
    return [];
  }
}

/**
 * Total estimated offline storage used in KB
 */
export function getOfflineStorageSummary(): {
  totalBytes: number;
  totalKb: string;
  examsCount: number;
  mistakesCount: number;
} {
  if (typeof window === 'undefined') {
    return { totalBytes: 0, totalKb: '0 KB', examsCount: 0, mistakesCount: 0 };
  }

  try {
    const examsRaw = localStorage.getItem(OFFLINE_EXAMS_KEY) || '';
    const mistakesRaw = localStorage.getItem(OFFLINE_MISTAKES_KEY) || '';

    const totalBytes = new Blob([examsRaw, mistakesRaw]).size;
    const totalKb = (totalBytes / 1024).toFixed(1) + ' KB';

    const examsCount = getDownloadedExamIds().length;
    const mistakesCount = getOfflineMistakes().length;

    return { totalBytes, totalKb, examsCount, mistakesCount };
  } catch {
    return { totalBytes: 0, totalKb: '0 KB', examsCount: 0, mistakesCount: 0 };
  }
}
