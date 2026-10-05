import React, { useState } from 'react';
import { TECH_SPEC_DATA } from '../data/specification';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Cpu, 
  Palette, 
  Gamepad2, 
  Code2
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const TechSpecModal: React.FC = () => {
  const { isLight, isSepia } = useTheme();
  const [copiedPromptIdx, setCopiedPromptIdx] = useState<number | null>(null);

  const handleCopyPrompt = (prompt: string, idx: number) => {
    sounds.playClick();
    navigator.clipboard.writeText(prompt);
    setCopiedPromptIdx(idx);
    setTimeout(() => setCopiedPromptIdx(null), 2500);
  };

  const headingColor = isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white";
  const mutedTextColor = isLight ? "text-slate-500" : isSepia ? "text-[#65543D]" : "text-slate-400";
  const cardBg = isLight ? "bg-white border-stone-200/90 shadow-sm" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-800/60 border-slate-700/80";

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      
      {/* Header */}
      <div className="pb-4 border-b border-stone-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[11px] font-black bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">
            ENGINEERING SPECIFICATION
          </span>
          <h2 className={`text-2xl font-black flex items-center gap-2 ${headingColor}`}>
            <Cpu className="w-6 h-6 text-purple-500" />
            <span>Tài Liệu Kỹ Thuật & Prompt UI/UX AI</span>
          </h2>
        </div>
        <p className={`text-xs mt-1 ${mutedTextColor}`}>
          Đặc tả kiến trúc hệ thống, cơ chế Gamification, logic Smart Review và bộ Prompt Midjourney v6 / DALL-E 3 chuẩn xác
        </p>
      </div>

      {/* 3 AI UI/UX Prompts (Midjourney / DALL-E 3) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-xl font-black flex items-center gap-2 ${headingColor}`}>
            <Palette className="w-5 h-5 text-amber-500" />
            <span>3 Prompt Thiết Kế Giao Diện UI/UX (Midjourney / DALL-E 3)</span>
          </h3>
          <span className={`text-xs ${mutedTextColor}`}>
            Tiếng Anh chuẩn UI/UX Behance & Dribbble
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {TECH_SPEC_DATA.aiPrompts.map((item, idx) => {
            const isCopied = copiedPromptIdx === idx;

            return (
              <div 
                key={idx}
                className={`p-6 rounded-3xl border shadow-md space-y-3 relative overflow-hidden group hover:border-indigo-400 transition-all ${cardBg}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-xl bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-black text-xs border border-indigo-500/30">
                      MÀN HÌNH {idx + 1}
                    </span>
                    <h4 className={`text-sm font-bold ${headingColor}`}>
                      {item.screen}
                    </h4>
                  </div>

                  <button
                    onClick={() => handleCopyPrompt(item.prompt, idx)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                      isCopied 
                        ? "bg-emerald-600 text-white" 
                        : isLight 
                          ? "bg-stone-100 hover:bg-indigo-600 hover:text-white text-slate-700 border border-stone-200" 
                          : "bg-slate-700/80 hover:bg-indigo-600 text-slate-200 hover:text-white"
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? "Đã chép prompt!" : "Sao chép Prompt"}</span>
                  </button>
                </div>

                <div className={`p-4 rounded-2xl border font-mono text-xs leading-relaxed ${
                  isLight 
                    ? "bg-stone-50 border-stone-200 text-slate-800" 
                    : isSepia 
                      ? "bg-[#251D14] border-[#DECFAF] text-[#F3E7D3]" 
                      : "bg-slate-950/70 border-slate-800 text-amber-200/90"
                }`}>
                  {item.prompt}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Kiến trúc & Tính năng ứng dụng (UX & Logic) */}
      <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-slate-800">
        <h3 className={`text-xl font-black flex items-center gap-2 ${headingColor}`}>
          <Gamepad2 className="w-5 h-5 text-indigo-500" />
          <span>Kiến Trúc Tính Năng & Vòng Lặp Trò Chơi (Gamification Logic)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TECH_SPEC_DATA.modules.map((mod, i) => (
            <div 
              key={i}
              className={`p-5 rounded-2xl border space-y-3 ${
                isLight ? "bg-white border-stone-200 shadow-sm" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-800/40 border-slate-700/60"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-black text-xs flex items-center justify-center">
                  0{i + 1}
                </span>
                <h4 className={`text-sm font-bold ${headingColor}`}>
                  {mod.name}
                </h4>
              </div>

              <p className={`text-xs italic ${mutedTextColor}`}>
                {mod.description}
              </p>

              <ul className={`space-y-1.5 text-xs ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                {mod.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* System Technical Architecture */}
      <div className={`p-6 rounded-3xl border space-y-4 shadow-sm ${
        isLight 
          ? "bg-gradient-to-br from-indigo-50/80 to-amber-50/40 border-indigo-200" 
          : isSepia 
            ? "bg-[#EFE8D8] border-[#DECFAF] text-[#2C2114]" 
            : "bg-gradient-to-br from-indigo-950/40 to-slate-900 border-indigo-500/30 text-white"
      }`}>
        <h3 className={`text-base font-bold flex items-center gap-2 ${headingColor}`}>
          <Code2 className="w-5 h-5 text-indigo-500" />
          <span>Thông Số Kỹ Thuật Nền Tảng (Core Stack)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-stone-200" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-900/60 border-slate-800"}`}>
            <span className={`block font-semibold ${mutedTextColor}`}>Công nghệ lõi:</span>
            <span className={`font-mono font-bold ${headingColor}`}>{TECH_SPEC_DATA.architectureOverview.framework}</span>
          </div>
          <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-stone-200" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-900/60 border-slate-800"}`}>
            <span className={`block font-semibold ${mutedTextColor}`}>Âm thanh & Audio:</span>
            <span className={`font-mono font-bold ${headingColor}`}>{TECH_SPEC_DATA.architectureOverview.audioEngine}</span>
          </div>
          <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-stone-200" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-900/60 border-slate-800"}`}>
            <span className={`block font-semibold ${mutedTextColor}`}>Giọng đọc Tiếng Việt:</span>
            <span className={`font-mono font-bold ${headingColor}`}>{TECH_SPEC_DATA.architectureOverview.speechEngine}</span>
          </div>
          <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-stone-200" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-900/60 border-slate-800"}`}>
            <span className={`block font-semibold ${mutedTextColor}`}>Quản lý trạng thái:</span>
            <span className={`font-mono font-bold ${headingColor}`}>{TECH_SPEC_DATA.architectureOverview.stateManagement}</span>
          </div>
          <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-stone-200" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-900/60 border-slate-800"}`}>
            <span className={`block font-semibold ${mutedTextColor}`}>Đối tượng người dùng:</span>
            <span className={`font-mono font-bold ${headingColor}`}>{TECH_SPEC_DATA.targetAudience}</span>
          </div>
          <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-stone-200" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-900/60 border-slate-800"}`}>
            <span className={`block font-semibold ${mutedTextColor}`}>Khung chương trình:</span>
            <span className={`font-mono font-bold ${headingColor}`}>{TECH_SPEC_DATA.curriculum}</span>
          </div>
        </div>
      </div>

    </div>
  );
};
