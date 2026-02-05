import { useApp } from '@/contexts/AppContext';
import { getGemById, getRarityLabel, getRarityColor, PARK_ZONES } from '@/lib/gems';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

/**
 * GemDetailSheet Component
 * 
 * Design: iOS-style bottom sheet
 * - Frosted glass background
 * - Smooth slide-up animation
 * - Large gem preview
 * - Collect button with haptic-like feedback
 */
export default function GemDetailSheet() {
  const { selectedLocation, selectLocation, collectGem } = useApp();
  const gem = selectedLocation ? getGemById(selectedLocation.gemId) : null;
  const zone = selectedLocation
    ? PARK_ZONES.find(z => z.id === selectedLocation.zone)
    : null;

  const handleCollect = () => {
    if (selectedLocation) {
      collectGem(selectedLocation.id);
    }
  };

  return (
    <AnimatePresence>
      {selectedLocation && gem && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => selectLocation(null)}
          />

          {/* Sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 glass bottom-sheet safe-area-bottom"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
            </div>

            <div className="px-6 pb-6">
              {/* Gem Preview */}
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  className="relative w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <img
                    src={gem.image}
                    alt={gem.name}
                    className="w-20 h-20 object-contain"
                  />
                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </motion.div>

                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl font-semibold">{gem.name}</h2>
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
                  <p className="text-sm text-muted-foreground mb-2">
                    {gem.nameEn}
                  </p>
                  <div className="flex items-center gap-1 text-sm">
                    <svg
                      className="w-4 h-4 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      {zone?.name || '不明なエリア'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                {gem.description}
              </p>

              {/* Points */}
              <div className="flex items-center justify-between mb-6 p-4 bg-secondary rounded-xl">
                <span className="text-sm text-muted-foreground">獲得ポイント</span>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-primary">
                    +{gem.points}
                  </span>
                  <span className="text-sm text-muted-foreground">pt</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={() => selectLocation(null)}
                >
                  閉じる
                </Button>
                <Button
                  className="flex-1 h-12 font-semibold"
                  onClick={handleCollect}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  ゲットする
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
