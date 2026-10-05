import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, X, CheckCircle, Share, PlusSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const { isLight, isSepia } = useTheme();

  // If already running as an installed PWA (standalone mode), hide button
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    setIsInstalling(true);
    try {
      await install();
    } finally {
      setIsInstalling(false);
    }
  };

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={handleInstallClick}
        disabled={isInstalling}
        title="Cài đặt FlashGeography Class 7 để học ngoại tuyến"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
      >
        <Download className="w-3.5 h-3.5 animate-bounce" />
        <span className="hidden sm:inline">Cài đặt App</span>
        <span className="sm:hidden">Cài PWA</span>
      </button>
    );
  }

  // iOS Safari flow (beforeinstallprompt is not supported by WebKit)
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
            isLight
              ? 'border-stone-300 bg-white/80 text-stone-700 hover:bg-stone-100'
              : isSepia
                ? 'border-[#D9CDB8] bg-[#F7F0E3] text-[#4A3B28] hover:bg-[#EFE5D3]'
                : 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
          }`}
          title="Hướng dẫn cài đặt ứng dụng trên iPhone / iPad"
        >
          <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden sm:inline">Cài trên iOS</span>
          <span className="sm:hidden">iOS App</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className={`w-full max-w-sm rounded-2xl p-6 shadow-2xl border transition-colors ${
              isLight
                ? 'bg-white border-stone-200 text-slate-800'
                : isSepia
                  ? 'bg-[#FDF9F0] border-[#DECFAF] text-[#2C2114]'
                  : 'bg-slate-900 border-slate-800 text-white'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-inherit/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    7
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Cài đặt trên iOS / iPadOS</h3>
                    <p className="text-[11px] opacity-70">FlashGeography Class 7</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1.5 rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs leading-relaxed">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <Share className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Bước 1:</strong> Nhấn nút <strong>Chia sẻ (Share)</strong> trên thanh công cụ Safari (biểu tượng mũi tên hướng lên).
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <PlusSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Bước 2:</strong> Cuộn danh sách xuống và chọn <strong>"Thêm vào Màn hình chính" (Add to Home Screen)</strong>.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Bước 3:</strong> Nhấn <strong>"Thêm" (Add)</strong> ở góc trên bên phải. Ứng dụng sẽ xuất hiện như app bản địa và hoạt động ngoại tuyến!
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition shadow-md shadow-indigo-600/30"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
