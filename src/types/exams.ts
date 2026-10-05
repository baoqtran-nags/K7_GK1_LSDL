import { OptionKey } from '../types';

export type QuestionCategory = 'mcq' | 'true_false' | 'density_calc' | 'percentage_calc' | 'essay';

export interface ExamQuestion {
  id: number;
  category: QuestionCategory;
  subject: 'Địa lý' | 'Lịch sử';
  topic: string;
  question_text: string;
  options?: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct_answer?: OptionKey | string;
  true_false_items?: {
    subId: 'a' | 'b' | 'c' | 'd';
    statement: string;
    is_correct: boolean;
    explanation: string;
  }[];
  calc_data?: {
    formula: string;
    input_unit: string;
    steps: string[];
    result: string;
  };
  essay_rubric?: {
    max_score: number;
    criteria: { point: string; score: number }[];
  };
  explanation: string;
  memory_tip: string;
  image_illustration?: {
    title: string;
    source: string; // e.g. "Hình 1 trang 97 SGK Lịch sử & Địa lí 7"
    type: 'map' | 'chart' | 'diagram' | 'photo';
    description: string;
    svg_badge: string; // SVG visual or rich badge representation
  };
}

export interface ExamSet {
  id: string; // "de-01", "de-02", "de-03", "de-04"
  title: string;
  subtitle: string;
  duration_minutes: number;
  total_questions: number; // 30
  structure: {
    mcq_count: number; // 20
    true_false_count: number; // 4
    density_calc_count: number; // 2
    percentage_calc_count: number; // 2
    essay_count: number; // 2
  };
  questions: ExamQuestion[];
}
