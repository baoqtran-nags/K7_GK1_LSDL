import React, { useState } from 'react';
import { AppMode, UserStats, ThemeType } from '../types';
import { 
  Flame, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Map, 
  Layers, 
  CheckCircle2, 
  FileText, 
  AlertCircle, 
  Code, 
  BookOpen,
  RotateCcw,
  Sun,
  Moon,
  Book,
  Eye,
  Type,
  Wifi,
  WifiOff,
  HardDrive,
  Trophy
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import { PWAInstallButton } from './PWAInstallButton';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface HeaderProps {
  currentMode: AppMode;
  setMode: (mode: AppMode) => void;
  stats: UserStats;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  onResetProgress: () => void;
  onOpenOfflineModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  setMode,
  stats,
  soundEnabled,
  setSoundEnabled,
  onResetProgress,
  onOpenOfflineModal
}) => {
  const { 
    theme, 
    setTheme, 
    blueLightFilter, 
    setBlueLightFilter, 
    fontSize, 
    setFontSize,
    isLight,
    isSepia
  } = useTheme();

  const isOnline = useOnlineStatus();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.setEnabled(next);
    if (next) sounds.playClick();
  };

  const navItems: { mode: AppMode; label: string; icon: React.ReactNode; badge?: number }[] = [
    { mode: 'home', label: 'Hành trình', icon: <Map className="w-4 h-4" /> },
    { mode: 'exam_sets', label: '04 Bộ Đề Thi (120 câu)', icon: <BookOpen className="w-4 h-4 text-amber-500" /> },
    { mode: 'flashcard', label: 'Flashcard', icon: <Layers className="w-4 h-4" /> },
    { mode: 'quiz', label: 'Luyện đề 40 câu', icon: <CheckCircle2 className="w-4 h-4" /> },
    { mode: 'short_answer', label: 'Điền số', icon: <FileText className="w-4 h-4" /> },
    { mode: 'true_false', label: 'Đúng / Sai', icon: <CheckCircle2 className="w-4 h-4" /> },
    { mode: 'essay', label: 'Tự luận C5', icon: <BookOpen className="w-4 h-4" /> },
    { 
      mode: 'smart_review', 
      label: 'Câu sai', 
      icon: <AlertCircle className="w-4 h-4" />, 
      badge: stats.mistakeIds.length 
    },
    { mode: 'data_pipeline', label: 'JSON Data', icon: <Code className="w-4 h-4" /> },
    { mode: 'tech_spec', label: 'Tài liệu & AI', icon: <Sparkles className="w-4 h-4" /> }
  ];

  // Header background based on theme
  const headerBgClass = isLight 
    ? "bg-[#FAF8F5]/90 border-b border-stone-200 shadow-sm text-slate-800"
    : isSepia 
      ? "bg-[#EFE8D8]/95 border-b border-[#D8CCB5] shadow-sm text-[#2B2114]"
      : "bg-slate-900/90 border-b border-slate-800 shadow-lg text-slate-100";

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Title */}
          <button 
            onClick={() => { sounds.playClick(); setMode('home'); }}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform shrink-0">
              <span className="text-xl font-black text-white tracking-tighter">FG</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`text-base sm:text-lg font-extrabold tracking-tight ${
                  isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white"
                }`}>
                  FlashGeography
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 rounded border border-indigo-500/30">
                  LỚP 7
                </span>
              </div>
              <p className={`text-[11px] font-medium hidden sm:block ${
                isLight ? "text-slate-500" : isSepia ? "text-[#6B5A44]" : "text-slate-400"
              }`}>
                Chuyên đề Châu Âu • Lịch sử & Địa lý 7
              </p>
            </div>
          </button>

          {/* Gamification Bar + Eye Protection Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            
            {/* Eye-Care & Theme Controls Button */}
            <div className="relative">
              <button
                onClick={() => { sounds.playClick(); setShowThemeMenu(!showThemeMenu); }}
                title="Tùy chỉnh Giao diện Sáng Dịu Mắt & Bảo Vệ Thị Lực"
                className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all shadow-sm ${
                  isLight
                    ? "bg-amber-500/15 text-amber-800 border-amber-300 hover:bg-amber-500/25"
                    : isSepia
                      ? "bg-[#D8C7A5]/40 text-[#42311E] border-[#C7B28B] hover:bg-[#D8C7A5]/60"
                      : "bg-slate-800 text-indigo-300 border-slate-700 hover:bg-slate-700"
                }`}
              >
                {theme === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
                {theme === 'sepia' && <Book className="w-4 h-4 text-[#8C6D3F]" />}
                {theme === 'dark' && <Moon className="w-4 h-4 text-indigo-400" />}
                <span className="hidden md:inline font-semibold">
                  {theme === 'light' ? 'Sáng Dịu Mắt' : theme === 'sepia' ? 'Giấy Ấm' : 'Tối Đêm'}
                </span>
                {blueLightFilter && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500" title="Đang bật lọc ánh sáng xanh" />
                )}
              </button>

              {/* Theme Dropdown Menu */}
              {showThemeMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setShowThemeMenu(false)} 
                  />
                  <div className={`absolute right-0 mt-2 w-64 p-3 rounded-2xl border shadow-2xl z-50 space-y-3 animate-fade-in ${
                    isLight 
                      ? "bg-white border-stone-200 text-slate-800" 
                      : isSepia 
                        ? "bg-[#F7F2E7] border-[#D8CCB5] text-[#2C2114]" 
                        : "bg-slate-800 border-slate-700 text-white"
                  }`}>
                    <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-slate-700">
                      <span className="text-xs font-black uppercase tracking-wider">
                        Chế Độ Bảo Vệ Mắt
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-bold">
                        Eye-Care
                      </span>
                    </div>

                    {/* 3 Theme Options */}
                    <div className="space-y-1.5 text-xs">
                      <button
                        onClick={() => { sounds.playClick(); setTheme('light'); setShowThemeMenu(false); }}
                        className={`w-full p-2 rounded-xl flex items-center justify-between transition-colors ${
                          theme === 'light' 
                            ? "bg-amber-500/20 text-amber-900 dark:text-amber-300 font-bold border border-amber-400/40" 
                            : "hover:bg-stone-100 dark:hover:bg-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Sun className="w-4 h-4 text-amber-500" />
                          <span>Sáng Dịu Mắt (Khuyên dùng)</span>
                        </div>
                        {theme === 'light' && <span className="text-amber-500 font-black">✓</span>}
                      </button>

                      <button
                        onClick={() => { sounds.playClick(); setTheme('sepia'); setShowThemeMenu(false); }}
                        className={`w-full p-2 rounded-xl flex items-center justify-between transition-colors ${
                          theme === 'sepia' 
                            ? "bg-[#E6DAC3] text-[#2C2114] font-bold border border-[#C5B396]" 
                            : "hover:bg-stone-100 dark:hover:bg-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Book className="w-4 h-4 text-[#8C6D3F]" />
                          <span>Giấy Ấm (Sách giấy tự nhiên)</span>
                        </div>
                        {theme === 'sepia' && <span className="text-[#8C6D3F] font-black">✓</span>}
                      </button>

                      <button
                        onClick={() => { sounds.playClick(); setTheme('dark'); setShowThemeMenu(false); }}
                        className={`w-full p-2 rounded-xl flex items-center justify-between transition-colors ${
                          theme === 'dark' 
                            ? "bg-indigo-600 text-white font-bold" 
                            : "hover:bg-stone-100 dark:hover:bg-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Moon className="w-4 h-4 text-indigo-400" />
                          <span>Tối Đêm (Phòng tối)</span>
                        </div>
                        {theme === 'dark' && <span className="text-white font-black">✓</span>}
                      </button>
                    </div>

                    {/* Blue Light Filter Switch */}
                    <div className="pt-2 border-t border-stone-200 dark:border-slate-700">
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setBlueLightFilter(!blueLightFilter);
                        }}
                        className="w-full flex items-center justify-between text-xs py-1"
                      >
                        <div className="flex items-center gap-1.5">
                          <Eye className="w-4 h-4 text-emerald-500" />
                          <span className="font-semibold">Lọc Ánh Sáng Xanh</span>
                        </div>
                        <div className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${
                          blueLightFilter ? "bg-emerald-500" : "bg-stone-300 dark:bg-slate-600"
                        }`}>
                          <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                            blueLightFilter ? "translate-x-3.5" : "translate-x-0"
                          }`} />
                        </div>
                      </button>
                    </div>

                    {/* Font Size Selector */}
                    <div className="pt-2 border-t border-stone-200 dark:border-slate-700 flex items-center justify-between text-xs">
                      <span className="font-semibold flex items-center gap-1">
                        <Type className="w-3.5 h-3.5" />
                        Cỡ chữ:
                      </span>
                      <div className="flex items-center gap-1">
                        {(['normal', 'large', 'xlarge'] as const).map(sz => (
                          <button
                            key={sz}
                            onClick={() => { sounds.playClick(); setFontSize(sz); }}
                            className={`px-2 py-0.5 rounded font-bold transition-colors ${
                              fontSize === sz
                                ? "bg-indigo-600 text-white"
                                : "bg-stone-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {sz === 'normal' ? 'A' : sz === 'large' ? 'A+' : 'A++'}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </>
              )}
            </div>

            {/* Streak Counter */}
            <div 
              title="Chuỗi ngày học liên tục"
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-full text-xs sm:text-sm font-bold shadow-sm ${
                isLight 
                  ? "bg-amber-500/15 border border-amber-300 text-amber-800" 
                  : isSepia 
                    ? "bg-[#D8C7A5]/40 border border-[#C7B28B] text-[#5A4020]" 
                    : "bg-amber-500/10 border border-amber-500/30 text-amber-400"
              }`}
            >
              <Flame className="w-4 h-4 text-amber-500 animate-pulse fill-amber-500" />
              <span>{stats.streak} ngày</span>
            </div>

            {/* XP Points */}
            <div 
              title="Điểm kinh nghiệm tích lũy"
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-full text-xs sm:text-sm font-bold shadow-sm ${
                isLight 
                  ? "bg-indigo-50 border border-indigo-200 text-indigo-700" 
                  : isSepia 
                    ? "bg-[#E6DAC3] border border-[#C5B396] text-[#3A2A18]" 
                    : "bg-indigo-500/10 border border-indigo-500/30 text-indigo-300"
              }`}
            >
              <Sparkles className="w-4 h-4 text-indigo-500 fill-indigo-500/20" />
              <span>{stats.xp} XP</span>
            </div>

            {/* Badge Counter */}
            <button 
              onClick={() => {
                sounds.playClick();
                setMode('home');
                setTimeout(() => {
                  const el = document.getElementById('badge-collection-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              title="Bộ sưu tập huy hiệu & thành tựu"
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-105 active:scale-95 ${
                isLight 
                  ? "bg-amber-50 border border-amber-300 text-amber-800 hover:bg-amber-100" 
                  : isSepia 
                    ? "bg-[#E6DAC3] border border-[#C5B396] text-[#3A2A18] hover:bg-[#DBCFB8]" 
                    : "bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25"
              }`}
            >
              <Trophy className="w-4 h-4 text-amber-500 fill-amber-500/30" />
              <span className="hidden sm:inline">{stats.badges?.length || 1} Huy hiệu</span>
              <span className="sm:hidden">{stats.badges?.length || 1}</span>
            </button>

            {/* Offline Cache Manager Trigger */}
            {onOpenOfflineModal && (
              <button
                onClick={() => { sounds.playClick(); onOpenOfflineModal(); }}
                title={isOnline ? "Kho ngoại tuyến: 4 bộ đề & ngân hàng câu sai" : "Đang chạy ngoại tuyến không cần mạng"}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                  !isOnline
                    ? "bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-400 animate-pulse"
                    : isLight
                      ? "bg-emerald-500/10 text-emerald-800 border-emerald-300 hover:bg-emerald-500/20"
                      : isSepia
                        ? "bg-[#DDECD7] text-[#2C4A28] border-[#B8D4B0] hover:bg-[#D2E4CB]"
                        : "bg-slate-800 text-emerald-400 border-slate-700 hover:bg-slate-700"
                }`}
              >
                {isOnline ? (
                  <>
                    <HardDrive className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="hidden lg:inline text-[11px]">Kho Offline</span>
                  </>
                ) : (
                  <>
                    <WifiOff className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[11px] font-bold">Offline</span>
                  </>
                )}
              </button>
            )}

            {/* PWA Install Button */}
            <PWAInstallButton />

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
              className={`p-1.5 sm:p-2 rounded-xl border transition-all ${
                isLight
                  ? "bg-stone-100 hover:bg-stone-200 text-slate-700 border-stone-200"
                  : isSepia
                    ? "bg-[#E6DAC3] hover:bg-[#DCD0B7] text-[#42311E] border-[#C5B396]"
                    : "bg-slate-800 text-indigo-400 border-slate-700 hover:bg-slate-700"
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Reset Progress */}
            <button
              onClick={() => {
                if (window.confirm('Bạn có muốn đặt lại toàn bộ tiến độ làm bài và điểm số?')) {
                  onResetProgress();
                }
              }}
              title="Đặt lại tiến độ học"
              className={`p-1.5 sm:p-2 rounded-xl border transition-colors ${
                isLight 
                  ? "bg-stone-100 hover:bg-red-50 text-slate-500 hover:text-red-600 border-stone-200" 
                  : isSepia 
                    ? "bg-[#E6DAC3] hover:bg-red-100/50 text-[#6B5A44] hover:text-red-700 border-[#C5B396]" 
                    : "bg-slate-800/60 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border-slate-700"
              }`}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs (Scrollable on mobile) */}
        <nav className={`mt-2.5 flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-1 no-scrollbar pt-2 ${
          isLight ? "border-t border-stone-200" : isSepia ? "border-t border-[#D8CCB5]" : "border-t border-slate-800/60"
        }`}>
          {navItems.map((item) => {
            const isActive = currentMode === item.mode;
            
            let btnClass = "";
            if (isActive) {
              btnClass = "bg-indigo-600 text-white shadow-md shadow-indigo-600/30";
            } else if (isLight) {
              btnClass = "bg-stone-100 hover:bg-stone-200 text-slate-700 border border-stone-200";
            } else if (isSepia) {
              btnClass = "bg-[#E6DAC3] hover:bg-[#DCD0B7] text-[#3B2C1A] border border-[#C5B396]";
            } else {
              btnClass = "bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent hover:border-slate-700";
            }

            return (
              <button
                key={item.mode}
                onClick={() => {
                  sounds.playClick();
                  setMode(item.mode);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${btnClass}`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                    isActive ? "bg-white text-indigo-700" : "bg-red-500 text-white animate-pulse"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
