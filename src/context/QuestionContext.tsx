import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { Question } from '../types';
import { QUESTIONS_DATA } from '../data/questions';
import { generateShuffledQuestions } from '../utils/shuffle';
import { sounds } from '../utils/audio';

interface QuestionContextType {
  questions: Question[];
  originalQuestions: Question[];
  isShuffled: boolean;
  shuffleChoices: boolean;
  shuffleGeneration: number;
  shuffleTimestamp: string;
  shuffleNewQuestions: (playSound?: boolean) => void;
  resetToOriginal: () => void;
  toggleShuffle: (enable?: boolean) => void;
  toggleShuffleChoices: (enable?: boolean) => void;
}

const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

export const QuestionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isShuffled, setIsShuffled] = useState<boolean>(true);
  const [shuffleChoices, setShuffleChoices] = useState<boolean>(true);
  const [shuffleGeneration, setShuffleGeneration] = useState<number>(1);
  const [shuffleTimestamp, setShuffleTimestamp] = useState<string>(() => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  });

  // Automatically generate fresh shuffled questions on initial website load
  const [questions, setQuestions] = useState<Question[]>(() => {
    return generateShuffledQuestions(QUESTIONS_DATA, {
      shuffleQuestions: true,
      shuffleChoices: true
    });
  });

  const originalQuestions = useMemo(() => QUESTIONS_DATA, []);

  // Shuffle a brand new set of 40 questions
  const shuffleNewQuestions = useCallback((playSound = true) => {
    if (playSound) sounds.playClick();
    const newShuffled = generateShuffledQuestions(QUESTIONS_DATA, {
      shuffleQuestions: true,
      shuffleChoices
    });
    setQuestions(newShuffled);
    setIsShuffled(true);
    setShuffleGeneration(prev => prev + 1);
    const now = new Date();
    setShuffleTimestamp(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
  }, [shuffleChoices]);

  // Reset back to textbook original order (Câu 1 to Câu 40)
  const resetToOriginal = useCallback(() => {
    sounds.playClick();
    setQuestions(QUESTIONS_DATA);
    setIsShuffled(false);
  }, []);

  // Toggle shuffle mode on/off
  const toggleShuffle = useCallback((enable?: boolean) => {
    sounds.playClick();
    const nextState = enable !== undefined ? enable : !isShuffled;
    setIsShuffled(nextState);
    if (nextState) {
      const newShuffled = generateShuffledQuestions(QUESTIONS_DATA, {
        shuffleQuestions: true,
        shuffleChoices
      });
      setQuestions(newShuffled);
      setShuffleGeneration(prev => prev + 1);
    } else {
      setQuestions(QUESTIONS_DATA);
    }
  }, [isShuffled, shuffleChoices]);

  // Toggle choices (A, B, C, D) shuffle
  const toggleShuffleChoices = useCallback((enable?: boolean) => {
    sounds.playClick();
    const nextChoices = enable !== undefined ? enable : !shuffleChoices;
    setShuffleChoices(nextChoices);
    if (isShuffled) {
      const newShuffled = generateShuffledQuestions(QUESTIONS_DATA, {
        shuffleQuestions: true,
        shuffleChoices: nextChoices
      });
      setQuestions(newShuffled);
      setShuffleGeneration(prev => prev + 1);
    }
  }, [isShuffled, shuffleChoices]);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        originalQuestions,
        isShuffled,
        shuffleChoices,
        shuffleGeneration,
        shuffleTimestamp,
        shuffleNewQuestions,
        resetToOriginal,
        toggleShuffle,
        toggleShuffleChoices,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export function useQuestions() {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error('useQuestions must be used within a QuestionProvider');
  }
  return context;
}
