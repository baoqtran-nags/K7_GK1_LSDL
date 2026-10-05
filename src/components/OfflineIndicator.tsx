import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff, Database } from 'lucide-react';

interface OfflineIndicatorProps {
  onOpenOfflineManager?: () => void;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ onOpenOfflineManager }) => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-600/95 backdrop-blur-md px-3.5 py-2 text-xs font-medium text-white shadow-xl shadow-amber-900/30 border border-amber-400/40 animate-in slide-in-from-bottom-2 duration-300">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-100" />
      </span>
      <div className="flex items-center gap-1.5">
        <WifiOff className="w-3.5 h-3.5 shrink-0" />
        <span>Chế độ Ngoại tuyến — Đang dùng dữ liệu đã tải</span>
      </div>
      {onOpenOfflineManager && (
        <button
          onClick={onOpenOfflineManager}
          className="ml-1 underline font-semibold text-amber-100 hover:text-white flex items-center gap-1"
        >
          <Database className="w-3 h-3" />
          <span>Kho offline</span>
        </button>
      )}
    </div>
  );
};
