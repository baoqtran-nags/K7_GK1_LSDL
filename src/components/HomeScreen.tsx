import React, { useState } from 'react';
import { AppMode, UserStats } from '../types';
import { QUESTIONS_DATA } from '../data/questions';
import { 
  Play, 
  Layers, 
  FileText, 
  CheckCircle2, 
  BookOpen, 
  AlertCircle, 
  Trophy, 
  Compass, 
  MapPin, 
  ChevronRight, 
  Sparkles, 
  Search,
  ExternalLink,
  Flame,
  Award,
  Sun,
  ShieldCheck
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import { BadgeCollection } from './BadgeCollection';
import { getBadgesWithStatus } from '../utils/badges';

interface HomeScreenProps {
  setMode: (mode: AppMode) => void;
  stats: UserStats;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ setMode, stats }) => {
  const { isLight, isSepia, blueLightFilter } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<'All' | 'Địa lý' | 'Lịch sử'>('All');

  const totalQuestions = QUESTIONS_DATA.length;
  const masteredCount = stats.masteredIds.length;
  const progressPercent = Math.min(100, Math.round((masteredCount / totalQuestions) * 100));

  const journeyStages = [
    {
      id: 1,
      range: "Câu 1 - 6",
      title: "Chặng 1: Vị trí & Giới hạn Châu Âu",
      desc: "Vị trí phía tây Á-Âu, diện tích >10 tr km², 4 hướng tiếp giáp đại dương.",
      icon: <Compass className="w-5 h-5 text-indigo-500" />,
      color: "from-blue-600 to-indigo-700",
      startId: 1
    },
    {
      id: 2,
      range: "Câu 7 - 17",
      title: "Chặng 2: Địa hình, Khí hậu & Sông ngòi",
      desc: "Núi An-pơ, khí hậu ôn đới, rừng Tai-ga, đặc biệt Mạng lưới sông dày đặc & Kênh đào (Câu 14)!",
      icon: <MapPin className="w-5 h-5 text-cyan-500" />,
      color: "from-cyan-600 to-blue-700",
      startId: 7,
      isSpecial: true
    },
    {
      id: 3,
      range: "Câu 18 - 21",
      title: "Chặng 3: Dân cư, Đô thị & Khối EU",
      desc: "Dân số già, mật độ 75 người/km², đô thị hóa >75%, thị trường chung EU.",
      icon: <Award className="w-5 h-5 text-amber-500" />,
      color: "from-amber-600 to-orange-700",
      startId: 18
    },
    {
      id: 4,
      range: "Câu 22 - 29",
      title: "Chặng 4: Xã hội Phong kiến Tây Âu",
      desc: "Năm 476 sụp đổ La Mã, Lãnh chúa & Nông nô, Lãnh địa khép kín, Thành thị thế kỉ XI.",
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-600 to-teal-700",
      startId: 22
    },
    {
      id: 5,
      range: "Câu 30 - 40",
      title: "Chặng 5: Phong trào Phục hưng & Cải cách",
      desc: "Khởi phát tại Ý, Chủ nghĩa nhân văn, Leonardo da Vinci, Michelangelo, Shakespeare, Luther.",
      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
      color: "from-purple-600 to-pink-700",
      startId: 30
    }
  ];

  const filteredQuestions = QUESTIONS_DATA.filter(q => {
    const matchSubject = selectedSubjectFilter === 'All' || q.subject === selectedSubjectFilter;
    const matchSearch = q.question_text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        q.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        q.id.toString() === searchQuery.trim();
    return matchSubject && matchSearch;
  });

  // Dynamic Theme Card Styles
  const cardBgClass = isLight 
    ? "bg-white border-stone-200/90 shadow-sm text-slate-800 hover:border-indigo-300" 
    : isSepia 
      ? "bg-[#FAF5EA] border-[#D8CCB5] shadow-sm text-[#2C2114] hover:border-[#BFAF93]" 
      : "bg-slate-800/60 border-slate-700/70 text-slate-100 hover:border-indigo-500/50";

  const subCardBg = isLight 
    ? "bg-stone-50 border-stone-200/80" 
    : isSepia 
      ? "bg-[#EFE8D8] border-[#D8CCB5]" 
      : "bg-slate-900/60 border-slate-800";

  const headingClass = isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white";
  const descClass = isLight ? "text-slate-600" : isSepia ? "text-[#5C4D39]" : "text-slate-400";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      
      {/* Eye-Care Friendly Notification Badge */}
      {isLight && (
        <div className="flex items-center justify-between px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-300/60 text-amber-900 text-xs font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>
              <strong>Giao diện Sáng Dịu Mắt:</strong> Tông màu kem ấm 5500K giảm áp lực điều tiết võng mạc, chống chói lóa khi học bài ban ngày.
            </span>
          </div>
          {blueLightFilter && (
            <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-800 text-[11px] font-bold">
              ✓ Đã bật lọc ánh sáng xanh
            </span>
          )}
        </div>
      )}

      {/* Hero Banner */}
      <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 border shadow-2xl transition-all ${
        isLight
          ? "bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 border-indigo-400/30 text-white"
          : isSepia
            ? "bg-gradient-to-br from-[#4A3B2C] via-[#3D2E20] to-[#2B1F13] border-[#7D664E] text-[#F5EEDB]"
            : "bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-950 border-indigo-500/30 text-white"
      }`}>
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-indigo-100 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Chương trình Lịch sử & Địa lý Lớp 7 (Bộ GD&ĐT)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-200 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                <span>PWA Offline 100% (4 Bộ đề & Ngân hàng câu sai)</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Chinh phục Chuyên đề <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-pink-300 bg-clip-text text-transparent">Châu Âu</span>
            </h1>
            
            <p className="text-indigo-100/90 text-sm sm:text-base max-w-2xl leading-relaxed">
              Trọn bộ 40 câu trắc nghiệm chuẩn khóa đáp án (gồm điểm nhấn Sông ngòi & Kênh đào Câu 14), 
              kết hợp bài tập Điền số, Đúng/Sai và Tự luận vị trí tiếp giáp.
            </p>

            {/* Quick action buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => { sounds.playClick(); setMode('exam_sets'); }}
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:scale-102 active:scale-98 transition-all"
              >
                <BookOpen className="w-5 h-5" />
                <span>04 Bộ Đề SGK (30 câu/đề)</span>
              </button>

              <button
                onClick={() => { sounds.playClick(); setMode('quiz'); }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm sm:text-base border border-white/30 shadow-md hover:scale-102 active:scale-98 transition-all"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Luyện đề 40 câu</span>
              </button>

              <button
                onClick={() => { sounds.playClick(); setMode('flashcard'); }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm border border-white/20 transition-all hover:scale-102 active:scale-98"
              >
                <Layers className="w-5 h-5 text-amber-300" />
                <span>Học qua Flashcard 3D</span>
              </button>

              <button
                onClick={() => { sounds.playClick(); setMode('data_pipeline'); }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-black/20 hover:bg-black/30 text-indigo-100 hover:text-white font-semibold text-sm border border-white/10"
              >
                <span>Xem JSON Data</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stats Widget */}
          <div className="lg:col-span-4 bg-slate-950/60 backdrop-blur-md rounded-2xl p-5 border border-white/15 shadow-xl space-y-4 text-white">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-300">Tiến độ cá nhân</span>
              <div className="flex items-center gap-1 text-amber-300 text-xs font-bold">
                <Flame className="w-4 h-4 fill-amber-400" />
                <span>Streak {stats.streak} ngày</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-2xl font-black text-white">{masteredCount}/{totalQuestions}</span>
                <span className="text-xs font-bold text-amber-300">{progressPercent}% Đã thuộc</span>
              </div>
              <div className="w-full bg-slate-800/80 rounded-full h-3 overflow-hidden p-0.5 border border-white/10">
                <div 
                  className="bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 h-full rounded-full transition-all duration-700"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
              <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
                <p className="text-slate-300">Tổng điểm tích lũy</p>
                <p className="text-lg font-black text-amber-300 mt-0.5">{stats.xp} XP</p>
              </div>
              <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
                <p className="text-slate-300">Câu cần ôn lại</p>
                <p className="text-lg font-black text-rose-300 mt-0.5">{stats.mistakeIds.length} câu</p>
              </div>
            </div>

            {/* Quick Badge Showcase Button in Hero Stats */}
            {(() => {
              const allBadges = getBadgesWithStatus(stats);
              const unlocked = allBadges.filter(b => b.isUnlocked).length;
              return (
                <div 
                  onClick={() => {
                    sounds.playClick();
                    const el = document.getElementById('badge-collection-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="cursor-pointer bg-gradient-to-r from-amber-500/20 to-indigo-500/20 hover:from-amber-500/30 hover:to-indigo-500/30 border border-amber-400/40 rounded-xl p-2.5 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Huy hiệu thành tựu</p>
                      <p className="text-xs font-black text-white">
                        {unlocked} / {allBadges.length} Đã mở khóa
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-amber-300 group-hover:underline flex items-center gap-0.5">
                    Xem kho ↓
                  </span>
                </div>
              );
            })()}

            {stats.mistakeIds.length > 0 && (
              <button
                onClick={() => { sounds.playClick(); setMode('smart_review'); }}
                className="w-full py-2 px-3 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/40 text-rose-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>Ôn ngay {stats.mistakeIds.length} câu làm sai</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Visual Badge Collection System */}
      <div id="badge-collection-section">
        <BadgeCollection stats={stats} setMode={setMode} />
      </div>

      {/* Hành trình ôn tập 5 Chặng (Roadmap) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`text-xl sm:text-2xl font-black flex items-center gap-2 ${headingClass}`}>
              <MapPin className="w-6 h-6 text-indigo-500" />
              <span>Bản đồ Hành trình Ôn tập (5 Chặng)</span>
            </h2>
            <p className={`text-xs sm:text-sm ${descClass}`}>
              Đi theo lộ trình chuẩn từ địa lý tự nhiên đến lịch sử phong trào Phục hưng
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {journeyStages.map((stage) => (
            <div 
              key={stage.id}
              className={`group relative overflow-hidden rounded-2xl border transition-all p-5 flex flex-col justify-between ${cardBgClass} ${
                stage.isSpecial && (isLight ? "ring-2 ring-cyan-500/40" : "")
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${stage.color}`}>
                    {stage.range}
                  </span>
                  {stage.isSpecial && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 uppercase">
                      Lưu ý Câu 14!
                    </span>
                  )}
                </div>

                <h3 className={`text-base font-bold transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-300 ${headingClass}`}>
                  {stage.title}
                </h3>
                <p className={`text-xs mt-1.5 leading-relaxed ${descClass}`}>
                  {stage.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-200 dark:border-slate-700/50 flex items-center justify-between">
                <span className={`text-xs font-medium ${descClass}`}>Bắt đầu ôn chặng</span>
                <button
                  onClick={() => {
                    sounds.playClick();
                    setMode('flashcard');
                  }}
                  className="p-2 rounded-xl bg-stone-100 dark:bg-slate-700/60 group-hover:bg-indigo-600 text-slate-700 dark:text-slate-300 group-hover:text-white transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Hub for Other Exam Modes */}
          <div className={`rounded-2xl border p-5 flex flex-col justify-between ${
            isLight 
              ? "bg-gradient-to-br from-indigo-50 to-amber-50/50 border-indigo-200 shadow-sm" 
              : isSepia 
                ? "bg-[#EFE7D8] border-[#DECFAF] shadow-sm text-[#2C2114]" 
                : "bg-gradient-to-br from-indigo-950/60 to-slate-900 border-indigo-500/30"
          }`}>
            <div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-pink-600 to-rose-700">
                Trang 2 & Trang 6
              </span>
              <h3 className={`text-base font-bold mt-3 ${headingClass}`}>Các Dạng Bài Đặc Biệt</h3>
              <p className={`text-xs mt-1.5 ${descClass}`}>
                Ôn luyện Điền số (64,8%, 75 người/km², 18,05%), Đúng/Sai và Tự luận Câu 5.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-stone-200 dark:border-slate-800">
              <button
                onClick={() => { sounds.playClick(); setMode('short_answer'); }}
                className="py-2 px-1 rounded-xl bg-white dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-[11px] font-bold text-slate-700 dark:text-slate-300 text-center transition-colors border border-stone-200 dark:border-slate-700 shadow-sm"
              >
                Điền số
              </button>
              <button
                onClick={() => { sounds.playClick(); setMode('true_false'); }}
                className="py-2 px-1 rounded-xl bg-white dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-[11px] font-bold text-slate-700 dark:text-slate-300 text-center transition-colors border border-stone-200 dark:border-slate-700 shadow-sm"
              >
                Đúng / Sai
              </button>
              <button
                onClick={() => { sounds.playClick(); setMode('essay'); }}
                className="py-2 px-1 rounded-xl bg-white dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-[11px] font-bold text-slate-700 dark:text-slate-300 text-center transition-colors border border-stone-200 dark:border-slate-700 shadow-sm"
              >
                Tự luận C5
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tra cứu nhanh 40 câu hỏi trắc nghiệm */}
      <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className={`text-xl font-black flex items-center gap-2 ${headingClass}`}>
              <FileText className="w-5 h-5 text-indigo-500" />
              <span>Ngân hàng 40 câu hỏi trắc nghiệm</span>
            </h2>
            <p className={`text-xs ${descClass}`}>
              Xem nhanh nội dung, đáp án khóa và mẹo ghi nhớ cho từng câu
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm câu hỏi, chủ đề, số câu..."
                className={`pl-9 pr-3 py-1.5 rounded-xl border text-xs focus:outline-none focus:border-indigo-500 w-44 sm:w-60 shadow-sm ${
                  isLight 
                    ? "bg-white border-stone-300 text-slate-800 placeholder-slate-400" 
                    : isSepia 
                      ? "bg-[#FAF5EA] border-[#D8CCB5] text-[#2C2114] placeholder-[#8C7A65]" 
                      : "bg-slate-800 border-slate-700 text-white placeholder-slate-400"
                }`}
              />
            </div>

            <div className={`flex rounded-xl p-0.5 border text-xs font-semibold ${
              isLight ? "bg-stone-200 border-stone-300" : isSepia ? "bg-[#E5DAC3] border-[#CFC0A3]" : "bg-slate-800 border-slate-700"
            }`}>
              {(['All', 'Địa lý', 'Lịch sử'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setSelectedSubjectFilter(tab)}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    selectedSubjectFilter === tab 
                      ? "bg-indigo-600 text-white shadow-sm" 
                      : (isLight ? "text-slate-700 hover:text-slate-900" : "text-slate-400 hover:text-white")
                  }`}
                >
                  {tab === 'All' ? 'Tất cả' : tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Questions Grid/List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[560px] overflow-y-auto pr-1">
          {filteredQuestions.map((q) => {
            const isSpecial14 = q.id === 14;
            const isMastered = stats.masteredIds.includes(q.id);
            const isMistake = stats.mistakeIds.includes(q.id);

            return (
              <div 
                key={q.id}
                className={`p-4 rounded-2xl border transition-all ${cardBgClass} ${
                  isSpecial14 
                    ? (isLight ? "border-cyan-400 bg-cyan-50/50" : "border-cyan-500/60 bg-cyan-950/20") 
                    : isMistake 
                      ? (isLight ? "border-rose-300 bg-rose-50/40" : "border-red-500/40 bg-red-950/10") 
                      : ""
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-extrabold text-xs flex items-center justify-center border border-indigo-500/30">
                      {q.id}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                      q.subject === 'Địa lý' ? "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300" : "bg-purple-500/15 text-purple-700 dark:text-purple-300"
                    }`}>
                      {q.subject}
                    </span>
                    <span className={`text-[11px] font-medium truncate max-w-[160px] ${descClass}`}>
                      {q.topic}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {isSpecial14 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-black bg-cyan-500 text-white rounded">
                        ĐẶC BIỆT
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-md font-black text-xs bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                      Đ/A: {q.correct_answer}
                    </span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm font-semibold line-clamp-2 ${headingClass}`}>
                  {q.question_text}
                </p>

                <div className="mt-2.5 pt-2 border-t border-stone-200 dark:border-slate-700/40 text-[11px] flex items-center justify-between">
                  <span className={`italic truncate max-w-[280px] ${isLight ? "text-amber-700" : "text-amber-300/90"}`}>
                    💡 {q.memory_tip}
                  </span>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setMode('flashcard');
                    }}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-bold shrink-0 ml-2"
                  >
                    Xem thẻ →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
