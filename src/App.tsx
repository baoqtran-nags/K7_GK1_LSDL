/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AppMode, UserStats } from './types';
import { loadUserStats, saveUserStats } from './utils/storage';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { ExamSetsView } from './components/ExamSetsView';
import { FlashcardMode } from './components/FlashcardMode';
import { QuizMode } from './components/QuizMode';
import { ShortAnswerMode } from './components/ShortAnswerMode';
import { TrueFalseMode } from './components/TrueFalseMode';
import { EssayMode } from './components/EssayMode';
import { SmartReviewMode } from './components/SmartReviewMode';
import { DataPipelineModal } from './components/DataPipelineModal';
import { TechSpecModal } from './components/TechSpecModal';
import { sounds } from './utils/audio';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function MainContent() {
  const { isLight, isSepia, fontSize } = useTheme();
  const [currentMode, setCurrentMode] = useState<AppMode>('home');
  const [stats, setStats] = useState<UserStats>(() => loadUserStats());
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Sync stats to localStorage whenever they change
  useEffect(() => {
    saveUserStats(stats);
  }, [stats]);

  const updateStats = (updater: (prev: UserStats) => UserStats) => {
    setStats(prev => updater(prev));
  };

  const handleResetProgress = () => {
    const initialStats: UserStats = {
      xp: 0,
      streak: 1,
      lastStudiedDate: new Date().toISOString().split('T')[0],
      masteredIds: [],
      mistakeIds: [],
      completedQuizzesCount: 0,
      bestQuizScore: 0,
      badges: ['🌍 Tân binh thám hiểm']
    };
    setStats(initialStats);
    saveUserStats(initialStats);
    sounds.playClick();
  };

  const appBg = isLight 
    ? "bg-[#F7F5EE] text-slate-800" 
    : isSepia 
      ? "bg-[#EFE6D5] text-[#2C2114]" 
      : "bg-slate-900 text-slate-100";

  const fontSizeClass = fontSize === 'large' 
    ? "font-size-large" 
    : fontSize === 'xlarge' 
      ? "font-size-xlarge" 
      : "";

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 selection:bg-indigo-500 selection:text-white ${appBg} ${fontSizeClass}`}>
      
      {/* Global Header with Eye-Care & Theme Switcher */}
      <Header
        currentMode={currentMode}
        setMode={setCurrentMode}
        stats={stats}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onResetProgress={handleResetProgress}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {currentMode === 'home' && (
          <HomeScreen setMode={setCurrentMode} stats={stats} />
        )}

        {currentMode === 'exam_sets' && (
          <ExamSetsView />
        )}

        {currentMode === 'flashcard' && (
          <FlashcardMode stats={stats} updateStats={updateStats} />
        )}

        {currentMode === 'quiz' && (
          <QuizMode 
            stats={stats} 
            updateStats={updateStats} 
            onOpenSmartReview={() => setCurrentMode('smart_review')}
          />
        )}

        {currentMode === 'short_answer' && (
          <ShortAnswerMode stats={stats} updateStats={updateStats} />
        )}

        {currentMode === 'true_false' && (
          <TrueFalseMode stats={stats} updateStats={updateStats} />
        )}

        {currentMode === 'essay' && (
          <EssayMode />
        )}

        {currentMode === 'smart_review' && (
          <SmartReviewMode 
            stats={stats} 
            updateStats={updateStats} 
            onGoToQuiz={() => setCurrentMode('quiz')}
          />
        )}

        {currentMode === 'data_pipeline' && (
          <DataPipelineModal />
        )}

        {currentMode === 'tech_spec' && (
          <TechSpecModal />
        )}
      </main>

      {/* Theme-Aware Footer */}
      <footer className={`py-4 text-center text-xs transition-colors border-t ${
        isLight 
          ? "bg-[#EFECE3] border-stone-300/80 text-slate-600" 
          : isSepia 
            ? "bg-[#E5DAC3] border-[#DECFAF] text-[#5C4D39]" 
            : "bg-slate-950/80 border-slate-800/80 text-slate-400"
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            FlashGeography Class 7 • Ứng dụng ôn tập Lịch sử & Địa lý Chuyên đề Châu Âu
          </p>
          <div className="flex items-center gap-3">
            <span>40 Câu Trắc Nghiệm Khóa Chuẩn</span>
            <span>•</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-semibold">Khóa Câu 14: Kênh đào & Sông ngòi dày đặc</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
