import React, { useState } from 'react';
import { ESSAY_TOPIC_DATA } from '../data/questions';
import { 
  BookOpen, 
  Compass, 
  MapPin, 
  Eye, 
  EyeOff, 
  Lightbulb
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const EssayMode: React.FC = () => {
  const { isLight, isSepia } = useTheme();
  const [hideKeywords, setHideKeywords] = useState(false);

  const toggleHide = () => {
    sounds.playClick();
    setHideKeywords(!hideKeywords);
  };

  const headingColor = isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white";
  const mutedTextColor = isLight ? "text-slate-500" : isSepia ? "text-[#65543D]" : "text-slate-400";

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-black bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
              TRANG 2 ĐỀ ÔN TẬP
            </span>
            <h2 className={`text-2xl font-black flex items-center gap-2 ${headingColor}`}>
              <BookOpen className="w-6 h-6 text-amber-500" />
              <span>Phần Tự Luận: Câu 5 (Trang 2)</span>
            </h2>
          </div>
          <p className={`text-xs mt-1 ${mutedTextColor}`}>
            Vị trí địa lý, kích thước và giới hạn 4 hướng tiếp giáp của Châu Âu
          </p>
        </div>

        <button
          onClick={toggleHide}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all shadow-xs ${
            hideKeywords 
              ? "bg-amber-500/20 text-amber-900 dark:text-amber-300 border-amber-500/40" 
              : isLight 
                ? "bg-white text-slate-700 border-stone-300 hover:bg-stone-100" 
                : isSepia 
                  ? "bg-[#FAF5EA] text-[#2C2114] border-[#D8CCB5] hover:bg-[#EFE7D8]" 
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
          }`}
        >
          {hideKeywords ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          <span>{hideKeywords ? "Hiện từ khóa chuẩn" : "Chế độ thử nhớ (Ẩn từ khóa)"}</span>
        </button>
      </div>

      {/* Visual Compass Map Diagram */}
      <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl relative overflow-hidden ${
        isLight 
          ? "bg-white border-stone-200" 
          : isSepia 
            ? "bg-[#FAF5EA] border-[#D8CCB5]" 
            : "bg-slate-800/70 border-slate-700/80 shadow-2xl"
      }`}>
        
        <h3 className={`text-base font-bold text-center mb-6 uppercase tracking-wider flex items-center justify-center gap-2 ${headingColor}`}>
          <Compass className="w-5 h-5 text-indigo-500 animate-spin-slow" />
          <span>Sơ đồ 4 Hướng Tiếp Giáp Tự Nhiên Châu Âu</span>
        </h3>

        {/* 4-Direction Grid Layout */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          
          <div className="hidden sm:block" />

          {/* NORTH (PHÍA BẮC) */}
          <div className={`p-4 rounded-2xl border-2 text-center space-y-1 shadow-sm ${
            isLight ? "bg-cyan-50/70 border-cyan-300" : "bg-cyan-950/40 border-cyan-500/40"
          }`}>
            <span className="text-[11px] font-black uppercase tracking-wider text-cyan-700 dark:text-cyan-300 block">
              ⬆️ PHÍA BẮC
            </span>
            <p className={`text-sm font-extrabold ${headingColor}`}>
              {hideKeywords ? "Giáp: [........?........]" : "Bắc Băng Dương"}
            </p>
            <p className={`text-[11px] ${mutedTextColor}`}>Vùng biển lạnh buốt quanh năm</p>
          </div>

          <div className="hidden sm:block" />

          {/* WEST (PHÍA TÂY) */}
          <div className={`p-4 rounded-2xl border-2 text-center space-y-1 shadow-sm ${
            isLight ? "bg-blue-50/70 border-blue-300" : "bg-blue-950/40 border-blue-500/40"
          }`}>
            <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 dark:text-blue-300 block">
              ⬅️ PHÍA TÂY
            </span>
            <p className={`text-sm font-extrabold ${headingColor}`}>
              {hideKeywords ? "Giáp: [........?........]" : "Đại Tây Dương"}
            </p>
            <p className={`text-[11px] ${mutedTextColor}`}>Gió Tây mang ẩm dồi dào</p>
          </div>

          {/* CENTER: CHÂU ÂU */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-center text-white shadow-xl shadow-indigo-600/30 ring-4 ring-indigo-500/20 space-y-1">
            <span className="text-xs uppercase font-black tracking-widest text-amber-300">
              TRUNG TÂM
            </span>
            <h4 className="text-xl font-black">CHÂU ÂU</h4>
            <p className="text-xs font-semibold text-indigo-100">
              {hideKeywords ? "Diện tích: [.....?.....]" : "Diện tích > 10 triệu km²"}
            </p>
            <p className="text-[11px] text-indigo-200">
              {hideKeywords ? "Vĩ tuyến: [.....?.....]" : "36°B đến 71°B (Đới ôn hòa)"}
            </p>
          </div>

          {/* EAST (PHÍA ĐÔNG) */}
          <div className={`p-4 rounded-2xl border-2 text-center space-y-1 shadow-sm ${
            isLight ? "bg-amber-50/70 border-amber-300" : "bg-amber-950/40 border-amber-500/40"
          }`}>
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 block">
              ➡️ PHÍA ĐÔNG
            </span>
            <p className={`text-sm font-extrabold ${headingColor}`}>
              {hideKeywords ? "Ngăn cách bởi: [........?........]" : "Dãy núi U-ran (Ural)"}
            </p>
            <p className={`text-[11px] ${mutedTextColor}`}>Ranh giới tự nhiên với châu Á</p>
          </div>

          <div className="hidden sm:block" />

          {/* SOUTH (PHÍA NAM) */}
          <div className={`p-4 rounded-2xl border-2 text-center space-y-1 shadow-sm ${
            isLight ? "bg-orange-50/70 border-orange-300" : "bg-orange-950/40 border-orange-500/40"
          }`}>
            <span className="text-[11px] font-black uppercase tracking-wider text-orange-700 dark:text-orange-300 block">
              ⬇️ PHÍA NAM
            </span>
            <p className={`text-sm font-extrabold ${headingColor}`}>
              {hideKeywords ? "Giáp: [........?........]" : "Địa Trung Hải"}
            </p>
            <p className={`text-[11px] ${mutedTextColor}`}>Ngăn cách với châu Phi</p>
          </div>

          <div className="hidden sm:block" />

        </div>
      </div>

      {/* Structured Outline for 10-Point Essay */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Section 1: Vị trí & Kích thước */}
        <div className={`p-6 rounded-3xl border shadow-sm space-y-3 ${
          isLight ? "bg-white border-stone-200" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-800/60 border-slate-700/80"
        }`}>
          <h4 className="text-sm font-black text-indigo-600 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>1. Vị trí địa lý & Kích thước</span>
          </h4>

          <ul className={`space-y-2.5 text-xs sm:text-sm leading-relaxed ${isLight ? "text-slate-700" : "text-slate-300"}`}>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>
                Là bộ phận <strong>phía tây</strong> của lục địa Á - Âu rộng lớn.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>
                Diện tích trên <strong>10 triệu km²</strong> (khoảng 10,5 triệu km²), chỉ lớn hơn châu Đại Dương trong số các châu lục.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>
                Nằm hoàn toàn ở bán cầu Bắc, trải dài giữa các vĩ tuyến <strong>36°B và 71°B</strong>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>
                Chủ yếu thuộc <strong>đới ôn hòa</strong> của bán cầu Bắc.
              </span>
            </li>
          </ul>
        </div>

        {/* Section 2: Tiếp giáp 4 hướng */}
        <div className={`p-6 rounded-3xl border shadow-sm space-y-3 ${
          isLight ? "bg-white border-stone-200" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-800/60 border-slate-700/80"
        }`}>
          <h4 className="text-sm font-black text-emerald-600 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-2">
            <Compass className="w-4 h-4" />
            <span>2. Giới hạn tiếp giáp 4 hướng</span>
          </h4>

          <div className="space-y-2 text-xs sm:text-sm">
            <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
              isLight ? "bg-stone-50 border-stone-200" : isSepia ? "bg-[#EFE8D8] border-[#D8CCB5]" : "bg-slate-900/60 border-slate-700/60"
            }`}>
              <span className={`font-bold ${mutedTextColor}`}>Phía Bắc:</span>
              <span className="font-extrabold text-cyan-600 dark:text-cyan-300">Giáp Bắc Băng Dương</span>
            </div>
            <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
              isLight ? "bg-stone-50 border-stone-200" : isSepia ? "bg-[#EFE8D8] border-[#D8CCB5]" : "bg-slate-900/60 border-slate-700/60"
            }`}>
              <span className={`font-bold ${mutedTextColor}`}>Phía Tây:</span>
              <span className="font-extrabold text-blue-600 dark:text-blue-300">Giáp Đại Tây Dương</span>
            </div>
            <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
              isLight ? "bg-stone-50 border-stone-200" : isSepia ? "bg-[#EFE8D8] border-[#D8CCB5]" : "bg-slate-900/60 border-slate-700/60"
            }`}>
              <span className={`font-bold ${mutedTextColor}`}>Phía Nam:</span>
              <span className="font-extrabold text-orange-600 dark:text-orange-300">Giáp Địa Trung Hải</span>
            </div>
            <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
              isLight ? "bg-stone-50 border-stone-200" : isSepia ? "bg-[#EFE8D8] border-[#D8CCB5]" : "bg-slate-900/60 border-slate-700/60"
            }`}>
              <span className={`font-bold ${mutedTextColor}`}>Phía Đông:</span>
              <span className="font-extrabold text-amber-600 dark:text-amber-300">Ngăn với châu Á bởi dãy U-ran</span>
            </div>
          </div>
        </div>

      </div>

      {/* Mẹo Chốt Điểm 10 */}
      <div className={`p-5 rounded-2xl border-2 flex items-start gap-3 shadow-xs ${
        isLight ? "bg-amber-50 border-amber-300 text-amber-950" : "bg-amber-500/10 border-amber-500/30 text-amber-100"
      }`}>
        <Lightbulb className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wide">
            Mẹo chốt trọn vẹn điểm Tự luận:
          </span>
          <p className="text-xs sm:text-sm font-semibold leading-relaxed">
            {ESSAY_TOPIC_DATA.mnemonic}
          </p>
        </div>
      </div>

    </div>
  );
};
