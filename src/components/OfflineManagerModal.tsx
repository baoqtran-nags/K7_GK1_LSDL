import React, { useState, useEffect } from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { 
  getDownloadedExamIds, 
  saveExamForOffline, 
  removeExamFromOffline, 
  downloadAllExams, 
  getOfflineStorageSummary, 
  getOfflineMistakes
} from '../utils/offlineStorage';
import { ALL_EXAM_SETS } from '../data/allExams';
import { 
  Wifi, 
  WifiOff, 
  DownloadCloud, 
  CheckCircle2, 
  Trash2, 
  HardDrive, 
  AlertCircle, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  X,
  FileCheck2,
  RefreshCw
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { sounds } from '../utils/audio';

interface OfflineManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExam?: (examId: string) => void;
}

export const OfflineManagerModal: React.FC<OfflineManagerModalProps> = ({
  isOpen,
  onClose,
  onSelectExam
}) => {
  const isOnline = useOnlineStatus();
  const { isLight, isSepia } = useTheme();
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);
  const [summary, setSummary] = useState(getOfflineStorageSummary());
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const refreshState = () => {
    setDownloadedIds(getDownloadedExamIds());
    setSummary(getOfflineStorageSummary());
  };

  useEffect(() => {
    if (isOpen) {
      refreshState();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadAll = () => {
    setIsProcessing(true);
    sounds.playClick();
    setTimeout(() => {
      downloadAllExams();
      refreshState();
      setIsProcessing(false);
      sounds.playFanfare();
      setSuccessMessage('Đã tải thành công trọn bộ 4 đề thi và đồng bộ ngân hàng câu sai!');
      setTimeout(() => setSuccessMessage(null), 3000);
    }, 400);
  };

  const handleToggleExam = (examId: string) => {
    sounds.playClick();
    const isDownloaded = downloadedIds.includes(examId);
    if (isDownloaded) {
      removeExamFromOffline(examId);
    } else {
      const exam = ALL_EXAM_SETS.find(e => e.id === examId);
      if (exam) {
        saveExamForOffline(exam);
      }
    }
    refreshState();
  };

  const mistakes = getOfflineMistakes();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className={`w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl border transition-colors overflow-hidden ${
        isLight
          ? 'bg-white border-stone-200 text-slate-800'
          : isSepia
            ? 'bg-[#FDF9F0] border-[#DECFAF] text-[#2C2114]'
            : 'bg-slate-900 border-slate-800 text-white'
      }`}>
        {/* Modal Header */}
        <div className={`p-5 flex items-center justify-between border-b ${
          isLight 
            ? 'bg-stone-50 border-stone-200' 
            : isSepia 
              ? 'bg-[#F5EEDF] border-[#DECFAF]' 
              : 'bg-slate-950/60 border-slate-800'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold">Kho Dữ Liệu Ngoại Tuyến (Offline PWA)</h2>
                {isOnline ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    <Wifi className="w-3 h-3" /> Đang Online
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-600 border border-amber-500/30">
                    <WifiOff className="w-3 h-3" /> Chế độ Ngoại tuyến
                  </span>
                )}
              </div>
              <p className="text-xs opacity-75 mt-0.5">
                Ôn tập mọi lúc mọi nơi không cần kết nối mạng Internet hay 4G
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Success Banner */}
          {successMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-semibold animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-stone-50 border-stone-200' : isSepia ? 'bg-[#F7F1E4] border-[#DECFAF]' : 'bg-slate-800/60 border-slate-700/60'
            }`}>
              <div className="text-[11px] opacity-70">Bộ đề đã lưu</div>
              <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                {summary.examsCount} / 4
              </div>
              <div className="text-[10px] opacity-60">120 câu hỏi có sẵn</div>
            </div>

            <div className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-stone-50 border-stone-200' : isSepia ? 'bg-[#F7F1E4] border-[#DECFAF]' : 'bg-slate-800/60 border-slate-700/60'
            }`}>
              <div className="text-[11px] opacity-70">Ngân hàng câu sai</div>
              <div className="text-lg font-bold text-amber-600 dark:text-amber-400 mt-0.5">
                {mistakes.length} câu
              </div>
              <div className="text-[10px] opacity-60">Tự động đồng bộ</div>
            </div>

            <div className={`p-3.5 rounded-xl border ${
              isLight ? 'bg-stone-50 border-stone-200' : isSepia ? 'bg-[#F7F1E4] border-[#DECFAF]' : 'bg-slate-800/60 border-slate-700/60'
            }`}>
              <div className="text-[11px] opacity-70">Dung lượng bộ nhớ</div>
              <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                {summary.totalKb}
              </div>
              <div className="text-[10px] opacity-60">Lưu trữ siêu nhẹ</div>
            </div>
          </div>

          {/* Action Bar */}
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl border ${
            isLight ? 'bg-indigo-50/70 border-indigo-200' : isSepia ? 'bg-[#F0E6D2] border-[#D9CDB8]' : 'bg-indigo-950/30 border-indigo-800/40'
          }`}>
            <div className="text-xs">
              <span className="font-bold text-indigo-700 dark:text-indigo-300">Tải trọn gói 1 chạm:</span> Tự động nạp toàn bộ 4 bộ đề kèm hình ảnh sơ đồ & lời giải chi tiết.
            </div>
            <button
              onClick={handleDownloadAll}
              disabled={isProcessing}
              className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/20 active:scale-95 transition"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Đang tải xuống...</span>
                </>
              ) : (
                <>
                  <DownloadCloud className="w-3.5 h-3.5" />
                  <span>Tải tất cả 4 bộ đề</span>
                </>
              )}
            </button>
          </div>

          {/* Exam Sets List */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider opacity-70 mb-2.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Danh sách 04 Bộ Đề Lịch sử & Địa lý 7</span>
            </h3>

            <div className="space-y-2">
              {ALL_EXAM_SETS.map(exam => {
                const isDownloaded = downloadedIds.includes(exam.id);
                return (
                  <div
                    key={exam.id}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                      isDownloaded
                        ? isLight
                          ? 'bg-emerald-50/50 border-emerald-200'
                          : isSepia
                            ? 'bg-[#EBF3E8] border-[#CADDC4]'
                            : 'bg-emerald-950/20 border-emerald-800/40'
                        : isLight
                          ? 'bg-white border-stone-200'
                          : isSepia
                            ? 'bg-[#F7F1E4] border-[#DECFAF]'
                            : 'bg-slate-800/50 border-slate-700'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs">{exam.title}</span>
                        {isDownloaded ? (
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="w-3 h-3" /> Đã sẵn sàng Offline
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-stone-500/10 text-stone-600 dark:text-stone-400">
                            Chưa lưu máy
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] opacity-70 truncate mt-0.5">
                        {exam.subtitle} • 30 câu (Tự luận, Trắc nghiệm, Tính mật độ & Tỉ trọng, Hình minh họa)
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {onSelectExam && (
                        <button
                          onClick={() => {
                            onClose();
                            onSelectExam(exam.id);
                          }}
                          className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 transition"
                        >
                          Luyện đề
                        </button>
                      )}

                      <button
                        onClick={() => handleToggleExam(exam.id)}
                        className={`p-1.5 rounded-lg border transition ${
                          isDownloaded
                            ? 'border-red-300 dark:border-red-800/50 text-red-500 hover:bg-red-500/10'
                            : 'border-emerald-300 dark:border-emerald-800/50 text-emerald-600 hover:bg-emerald-500/10'
                        }`}
                        title={isDownloaded ? 'Xóa khỏi bộ nhớ offline' : 'Tải về ngoại tuyến'}
                      >
                        {isDownloaded ? (
                          <Trash2 className="w-4 h-4" />
                        ) : (
                          <DownloadCloud className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mistake Bank Offline Assurance */}
          <div className={`p-4 rounded-xl border ${
            isLight ? 'bg-amber-50/60 border-amber-200' : isSepia ? 'bg-[#F6EEDD] border-[#DECFAF]' : 'bg-amber-950/20 border-amber-800/30'
          }`}>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-1">
                <h4 className="font-bold text-amber-700 dark:text-amber-300">
                  Cơ chế Ngân hàng câu sai thông minh (Smart Mistake Bank)
                </h4>
                <p className="opacity-80 leading-relaxed">
                  Toàn bộ câu bạn trả lời sai trong chế độ Luyện đề hoặc 4 Bộ đề sẽ <strong>tự động lưu vĩnh viễn</strong> trên thiết bị của bạn. Bạn có thể mở mục <em>"Ngân hàng câu sai"</em> bất cứ lúc nào khi đi tàu xe, nông thôn hay khu vực mất mạng để ôn tập lại cho đến khi đạt điểm 10 tuyệt đối!
                </p>
              </div>
            </div>
          </div>

          {/* Service Worker Information */}
          <div className="flex items-center justify-between text-[11px] opacity-60 pt-2 border-t border-inherit/20">
            <span className="flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5 text-indigo-500" />
              PWA Service Worker: Kích hoạt tự động lưu cache trình duyệt
            </span>
            <span className="font-mono">Workbox AutoUpdate v1.0</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className={`p-4 flex items-center justify-end gap-2 border-t ${
          isLight ? 'bg-stone-50 border-stone-200' : isSepia ? 'bg-[#F5EEDF] border-[#DECFAF]' : 'bg-slate-950/60 border-slate-800'
        }`}>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-stone-200 hover:bg-stone-300 dark:bg-slate-800 dark:hover:bg-slate-700 transition"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
