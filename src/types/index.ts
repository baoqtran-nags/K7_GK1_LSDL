export type SubjectType = 'Địa lý' | 'Lịch sử';

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: number;
  subject: SubjectType;
  topic: string;
  question_text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct_answer: OptionKey;
  explanation: string;
  memory_tip: string;
}

export interface ShortAnswerQuestion {
  id: number;
  title: string;
  question_text: string;
  standard_answer: string;
  accepted_answers: string[];
  unit?: string;
  explanation: string;
  memory_tip: string;
}

export interface TrueFalseItem {
  id: 'a' | 'b' | 'c' | 'd';
  statement: string;
  is_correct: boolean;
  explanation: string;
}

export interface TrueFalseQuestion {
  id: number;
  title: string;
  context: string;
  items: TrueFalseItem[];
}

export interface EssayTopic {
  id: number;
  title: string;
  subtitle: string;
  location_size: {
    heading: string;
    points: string[];
  };
  borders: {
    heading: string;
    points: { direction: string; border: string; icon: string }[];
  };
  mnemonic: string;
}

export interface UserStats {
  xp: number;
  streak: number;
  lastStudiedDate: string;
  masteredIds: number[];
  mistakeIds: number[];
  completedQuizzesCount: number;
  bestQuizScore: number;
  badges: string[];
}

export interface QuizResult {
  score: number;
  total: number;
  percentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeSpentSeconds: number;
  userAnswers: Record<number, OptionKey>;
  date: string;
}

export type ThemeType = 'light' | 'sepia' | 'dark';
export type FontSizeType = 'normal' | 'large' | 'xlarge';

export type AppMode = 
  | 'home' 
  | 'exam_sets'
  | 'flashcard' 
  | 'quiz' 
  | 'short_answer' 
  | 'true_false' 
  | 'essay' 
  | 'smart_review' 
  | 'data_pipeline' 
  | 'tech_spec';
