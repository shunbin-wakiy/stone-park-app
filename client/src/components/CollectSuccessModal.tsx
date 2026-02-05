import { useApp } from '@/contexts/AppContext';
import { getGemById, getRarityLabel, getRarityColor } from '@/lib/gems';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

/**
 * CollectSuccessModal Component
 * 
 * Design: Celebration modal with confetti
 * - Full-screen overlay
 * - Large gem display with glow effect
 * - Confetti animation on success
 * - Points earned display
 */
export default function CollectSuccessModal() {
  const { showCollectModal, lastCollectedGem, closeCollectModal, totalPoints } = useApp();
  const gem = lastCollectedGem ? getGemById(lastCollectedGem.gemId) : null;

  // Trigger confetti on modal open
  useEffect(() => {
    if (showCollectModal && gem) {
      // Fire confetti
      const colors = [gem.color, '#FFD700', '#FFFFFF'];
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors,
      });

      // Second burst
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        });
      }, 200);
    }
  }, [showCollectModal, gem]);

  return (
    <AnimatePresence>
      {showCollectModal && gem && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-sm bg-background rounded-3xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            {/* Success Header */}
            <div className="relative pt-8 pb-4 text-center">
              {/* Glow background */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at center, ${gem.color} 0%, transparent 70%)`,
                }}
              />
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', damping: 10 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#34C759] rounded-full mb-3 success-pop">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </motion.div>
              
              <motion.h2
                className="text-2xl font-bold text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                やったー！獲得しました
              </motion.h2>
            </div>

            {/* Gem Display */}
            <motion.div
              className="relative px-6 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative mx-auto w-40 h-40 rounded-3xl bg-secondary flex items-center justify-center overflow-hidden">
                {/* Animated glow */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at center, ${gem.color}40 0%, transparent 60%)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                <motion.img
                  src={gem.image}
                  alt={gem.name}
                  className="relative w-32 h-32 object-contain"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: 'spring', damping: 10 }}
                />
              </div>

              {/* Gem Info */}
              <div className="text-center mt-6">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <h3 className="text-xl font-semibold">{gem.name}</h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: `${getRarityColor(gem.rarity)}20`,
                      color: getRarityColor(gem.rarity),
                    }}
                  >
                    {getRarityLabel(gem.rarity)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{gem.nameEn}</p>
              </div>
            </motion.div>

            {/* Points Earned */}
            <motion.div
              className="mx-6 mb-6 p-4 bg-primary/10 rounded-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-muted-foreground mb-1">獲得ポイント</p>
              <div className="flex items-center justify-center gap-1">
                <motion.span
                  className="text-4xl font-bold text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: 'spring', damping: 10 }}
                >
                  +{gem.points}
                </motion.span>
                <span className="text-lg text-muted-foreground">pt</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                合計: {totalPoints} pt
              </p>
            </motion.div>

            {/* Close Button */}
            <div className="px-6 pb-6">
              <Button
                className="w-full h-12 font-semibold"
                onClick={closeCollectModal}
              >
                OK
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
