import { useApp } from '@/contexts/AppContext';
import { GEMS, getGemById, getRarityLabel, getRarityColor } from '@/lib/gems';
import { motion } from 'framer-motion';

/**
 * CollectionView Component
 * 
 * Design: Apple HIG grid layout
 * - Clean card-based grid
 * - Collected vs uncollected states
 * - Progress indicator
 * - Smooth animations
 */
export default function CollectionView() {
  const { collectedGems, totalPoints } = useApp();

  // Get unique collected gem IDs
  const collectedGemIds = new Set(collectedGems.map(c => c.gemId));
  const collectedCount = collectedGemIds.size;
  const totalGems = GEMS.length;
  const progressPercent = (collectedCount / totalGems) * 100;

  return (
    <div className="h-full overflow-auto bg-background">
      {/* Header Stats */}
      <div className="sticky top-0 z-10 nav-bar px-4 py-4 safe-area-top">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-xl font-semibold">コレクション</h1>
          <div className="flex items-center gap-1 text-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">{totalPoints} pt</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>収集進捗</span>
            <span>{collectedCount} / {totalGems}</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* Gem Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {GEMS.map((gem, index) => {
            const isCollected = collectedGemIds.has(gem.id);
            const collectionEntry = collectedGems.find(c => c.gemId === gem.id);

            return (
              <motion.div
                key={gem.id}
                className={`relative rounded-2xl overflow-hidden ${
                  isCollected ? 'bg-card' : 'bg-secondary'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Card Content */}
                <div className="p-4">
                  {/* Gem Image */}
                  <div
                    className={`relative w-full aspect-square rounded-xl mb-3 flex items-center justify-center ${
                      isCollected ? 'bg-secondary' : 'bg-muted'
                    }`}
                  >
                    <img
                      src={gem.image}
                      alt={gem.name}
                      className={`w-3/4 h-3/4 object-contain transition-all ${
                        isCollected ? '' : 'grayscale opacity-30'
                      }`}
                    />
                    
                    {/* Lock icon for uncollected */}
                    {!isCollected && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-muted-foreground/20 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-muted-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Collected badge */}
                    {isCollected && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-[#34C759] rounded-full flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-white"
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
                    )}
                  </div>

                  {/* Gem Info */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3
                        className={`font-medium ${
                          isCollected ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {gem.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          backgroundColor: isCollected
                            ? `${getRarityColor(gem.rarity)}20`
                            : '#E5E5EA',
                          color: isCollected
                            ? getRarityColor(gem.rarity)
                            : '#8E8E93',
                        }}
                      >
                        {getRarityLabel(gem.rarity)}
                      </span>
                      <span
                        className={`text-xs ${
                          isCollected ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        {gem.points} pt
                      </span>
                    </div>

                    {/* Collection date */}
                    {isCollected && collectionEntry && (
                      <p className="text-xs text-muted-foreground pt-1">
                        {new Date(collectionEntry.collectedAt).toLocaleDateString('ja-JP', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty state hint */}
        {collectedCount === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm">
              マップで宝石を見つけて収集しましょう！
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
