import React, { useState } from 'react';
import { QUESTIONS_DATA } from '../data/questions';
import { 
  Code, 
  Copy, 
  Check, 
  Download, 
  Database
} from 'lucide-react';
import { sounds } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const DataPipelineModal: React.FC = () => {
  const { isLight, isSepia } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isMinified, setIsMinified] = useState(false);

  const jsonString = isMinified 
    ? JSON.stringify(QUESTIONS_DATA) 
    : JSON.stringify(QUESTIONS_DATA, null, 2);

  const handleCopy = () => {
    sounds.playClick();
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    sounds.playClick();
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flashgeography-class7-questions.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const geoCount = QUESTIONS_DATA.filter(q => q.subject === 'Địa lý').length;
  const histCount = QUESTIONS_DATA.filter(q => q.subject === 'Lịch sử').length;

  const headingColor = isLight ? "text-slate-900" : isSepia ? "text-[#2A1F12]" : "text-white";
  const mutedTextColor = isLight ? "text-slate-500" : isSepia ? "text-[#65543D]" : "text-slate-400";
  const cardBg = isLight ? "bg-white border-stone-200/90 shadow-sm" : isSepia ? "bg-[#FAF5EA] border-[#D8CCB5]" : "bg-slate-800/60 border-slate-700/80";

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-black bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
              DATA PIPELINE OUTPUT
            </span>
            <h2 className={`text-2xl font-black flex items-center gap-2 ${headingColor}`}>
              <Database className="w-6 h-6 text-indigo-500" />
              <span>Dữ Liệu Đầu Ra Chuẩn JSON (40 Câu)</span>
            </h2>
          </div>
          <p className={`text-xs mt-1 ${mutedTextColor}`}>
            Cấu trúc JSON nhất quán: id (1..40), subject, topic, question_text, options (A..D), correct_answer, explanation, memory_tip.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinified(!isMinified)}
            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors shadow-xs ${
              isLight 
                ? "bg-white hover:bg-stone-100 text-slate-700 border-stone-300" 
                : isSepia 
                  ? "bg-[#FAF5EA] hover:bg-[#EFE7D8] text-[#2C2114] border-[#D8CCB5]" 
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
            }`}
          >
            {isMinified ? "Định dạng thụt lề" : "Nén Minified"}
          </button>

          <button
            onClick={handleDownload}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors shadow-xs ${
              isLight 
                ? "bg-white hover:bg-stone-100 text-slate-700 border-stone-300" 
                : isSepia 
                  ? "bg-[#FAF5EA] hover:bg-[#EFE7D8] text-[#2C2114] border-[#D8CCB5]" 
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Tải JSON</span>
          </button>

          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition-all shadow-md ${
              copied
                ? "bg-emerald-600 text-white"
                : "bg-indigo-600 hover:bg-indigo-500 text-white hover:scale-102"
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Đã sao chép!" : "Sao chép JSON (40 câu)"}</span>
          </button>
        </div>
      </div>

      {/* Dataset Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className={`p-4 rounded-2xl border ${cardBg}`}>
          <span className={`text-[11px] uppercase font-bold ${mutedTextColor}`}>Tổng số bản ghi</span>
          <p className={`text-2xl font-black mt-0.5 ${headingColor}`}>40 Objects</p>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">100% khớp khóa đáp án</span>
        </div>

        <div className={`p-4 rounded-2xl border ${cardBg}`}>
          <span className={`text-[11px] uppercase font-bold ${mutedTextColor}`}>Phân môn Địa lý</span>
          <p className="text-2xl font-black text-cyan-600 dark:text-cyan-300 mt-0.5">{geoCount} Câu</p>
          <span className={`text-[10px] ${mutedTextColor}`}>Câu 1 - 21 (Tự nhiên, dân cư)</span>
        </div>

        <div className={`p-4 rounded-2xl border ${cardBg}`}>
          <span className={`text-[11px] uppercase font-bold ${mutedTextColor}`}>Phân môn Lịch sử</span>
          <p className="text-2xl font-black text-purple-600 dark:text-purple-300 mt-0.5">{histCount} Câu</p>
          <span className={`text-[10px] ${mutedTextColor}`}>Câu 22 - 40 (Trung đại, Phục hưng)</span>
        </div>

        <div className={`p-4 rounded-2xl border ${isLight ? "bg-cyan-50/70 border-cyan-200" : "bg-cyan-950/20 border-cyan-500/40"}`}>
          <span className="text-[11px] text-cyan-800 dark:text-cyan-300 uppercase font-bold">Câu 14 (Đặc biệt)</span>
          <p className="text-2xl font-black text-cyan-600 dark:text-cyan-400 mt-0.5">Đáp án B</p>
          <span className={`text-[10px] ${mutedTextColor}`}>Sông ngòi & kênh đào dày đặc</span>
        </div>
      </div>

      {/* JSON Viewer Box */}
      <div className={`relative rounded-3xl border-2 overflow-hidden shadow-xl ${
        isLight 
          ? "bg-slate-900 border-stone-300 text-indigo-200" 
          : isSepia 
            ? "bg-[#251D14] border-[#D8CCB5] text-[#F3E7D3]" 
            : "bg-slate-950 border-slate-800 text-indigo-200"
      }`}>
        <div className={`flex items-center justify-between px-5 py-3 border-b text-xs ${
          isLight ? "bg-slate-800/90 border-slate-700" : isSepia ? "bg-[#33271B] border-[#4A3B2C]" : "bg-slate-900 border-slate-800"
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="font-mono text-slate-300 ml-2">flashgeography_class7_pipeline.json</span>
          </div>

          <span className="text-slate-400 font-mono text-[11px]">
            {QUESTIONS_DATA.length} items • ~22 KB
          </span>
        </div>

        <pre className="p-5 overflow-x-auto text-xs font-mono leading-relaxed max-h-[550px] selection:bg-indigo-700 selection:text-white">
          <code>{jsonString}</code>
        </pre>
      </div>

    </div>
  );
};
