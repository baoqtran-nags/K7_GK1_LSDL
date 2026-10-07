import { Question, OptionKey } from '../types';
import { QUESTIONS_DATA } from '../data/questions';

export interface ShuffleConfig {
  shuffleQuestions?: boolean;
  shuffleChoices?: boolean;
}

/**
 * Standard Fisher-Yates array shuffle algorithm (unbiased, O(n))
 */
export function fisherYatesShuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Shuffles questions order and optionally choices A, B, C, D while keeping correct_answer synchronized.
 * Creates a brand new 40-question set every time.
 */
export function generateShuffledQuestions(
  source: Question[] = QUESTIONS_DATA,
  config: ShuffleConfig = { shuffleQuestions: true, shuffleChoices: true }
): Question[] {
  const { shuffleQuestions = true, shuffleChoices = true } = config;

  // 1. Shuffle order of questions
  let questionPool = shuffleQuestions ? fisherYatesShuffle(source) : [...source];

  // 2. If choices shuffling is not enabled, return with question order only
  if (!shuffleChoices) {
    return questionPool;
  }

  const optionKeys: OptionKey[] = ['A', 'B', 'C', 'D'];

  // 3. Shuffle choices A, B, C, D for each question
  return questionPool.map((q) => {
    // Preserve the original correct answer text
    const originalCorrectText = q.options[q.correct_answer];

    // Gather all 4 option texts
    const choices = [q.options.A, q.options.B, q.options.C, q.options.D];
    
    // Shuffle the option texts
    const shuffledChoices = fisherYatesShuffle(choices);

    // Map to new options object
    const newOptions: Record<OptionKey, string> = {
      A: shuffledChoices[0],
      B: shuffledChoices[1],
      C: shuffledChoices[2],
      D: shuffledChoices[3],
    };

    // Locate which new letter corresponds to the correct answer text
    const newCorrectKey = (optionKeys.find(
      (key) => newOptions[key] === originalCorrectText
    ) || 'A') as OptionKey;

    return {
      ...q,
      options: newOptions,
      correct_answer: newCorrectKey,
    };
  });
}
