import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register service worker with auto-update
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('New PWA content available, reloading...');
  },
  onOfflineReady() {
    console.log('FlashGeography Class 7 is ready to work offline!');
  },
});

createRoot(document.getElementById('root')!).render(<App />);
