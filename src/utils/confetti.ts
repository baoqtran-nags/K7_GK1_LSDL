import confetti from 'canvas-confetti';
import { sounds } from './audio';

/**
 * Triggers an authentic, multi-stage fireworks confetti celebration
 * Specifically designed for perfect score milestones (answering all 40 questions correctly).
 */
export function launchFireworksConfetti(durationMs: number = 4500): () => void {
  const animationEnd = Date.now() + durationMs;
  const colors = ['#f59e0b', '#ef4444', '#06b6d4', '#8b5cf6', '#10b981', '#ec4899', '#ffffff', '#fbbf24'];

  // 1. Initial grand center explosion with mixed shapes
  try {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      shapes: ['star', 'circle'],
      scalar: 1.2,
      zIndex: 2000
    });
    sounds.playFireworkBurst();
  } catch {
    // fallback if canvas not available
  }

  // 2. Continuous fireworks volleys launching from left, right, and high sky
  let burstCount = 0;
  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    burstCount++;
    const particleRatio = Math.max(0.25, timeLeft / durationMs);

    try {
      // Occasional burst sound effect
      if (burstCount % 3 === 0) {
        sounds.playFireworkBurst();
      }

      // Firework projectile from bottom left aiming up and right
      confetti({
        particleCount: Math.floor(35 * particleRatio),
        angle: 60,
        spread: 60,
        origin: { x: 0.05, y: 0.75 },
        colors,
        startVelocity: 50,
        zIndex: 2000
      });

      // Firework projectile from bottom right aiming up and left
      confetti({
        particleCount: Math.floor(35 * particleRatio),
        angle: 120,
        spread: 60,
        origin: { x: 0.95, y: 0.75 },
        colors,
        startVelocity: 50,
        zIndex: 2000
      });

      // Sky bursts: Random firework detonations in mid-air
      const randomX = Math.random() * 0.6 + 0.2; // 0.2 to 0.8
      const randomY = Math.random() * 0.35 + 0.1; // 0.1 to 0.45 (high sky)

      confetti({
        particleCount: Math.floor(45 * particleRatio),
        spread: 360,
        ticks: 75,
        gravity: 0.7,
        decay: 0.93,
        startVelocity: 28,
        shapes: ['circle', 'star'],
        origin: { x: randomX, y: randomY },
        colors,
        zIndex: 2000
      });
    } catch {
      // ignore errors
    }
  }, 320);

  return () => {
    clearInterval(interval);
  };
}

/**
 * Standard celebratory burst for normal good scores or milestone badges
 */
export function launchStandardConfetti() {
  try {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 2000
    });
  } catch {
    // fallback
  }
}
