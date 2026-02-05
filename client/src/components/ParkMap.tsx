import { useApp } from '@/contexts/AppContext';
import { getGemById, PARK_ZONES } from '@/lib/gems';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ParkMap Component
 * 
 * Design: Apple HIG compliant
 * - Clean white/gray map background
 * - Subtle zone indicators
 * - Animated gem markers with pulse effect
 * - Tap feedback on markers
 */
export default function ParkMap() {
  const { gemLocations, selectLocation, selectedLocation } = useApp();

  return (
    <div className="relative w-full h-full bg-secondary overflow-hidden">
      {/* Map Background - Stylized park layout */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Background */}
        <rect width="100" height="100" fill="#F5F5F7" />
        
        {/* Paths */}
        <path
          d="M10 50 Q 30 50 50 30 T 90 50"
          stroke="#E5E5EA"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M50 10 Q 50 30 30 50 T 50 90"
          stroke="#E5E5EA"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M20 20 L 80 80"
          stroke="#E5E5EA"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        
        {/* Entrance Area */}
        <rect x="15" y="20" width="20" height="20" rx="3" fill="#E8F5E9" opacity="0.6" />
        <text x="25" y="32" fontSize="3" fill="#4CAF50" textAnchor="middle" fontWeight="500">
          エントランス
        </text>
        
        {/* Museum Building */}
        <rect x="35" y="45" width="25" height="30" rx="3" fill="#E3F2FD" opacity="0.6" />
        <text x="47.5" y="62" fontSize="3" fill="#2196F3" textAnchor="middle" fontWeight="500">
          博石館
        </text>
        
        {/* Garden Area */}
        <ellipse cx="70" cy="25" rx="18" ry="12" fill="#F3E5F5" opacity="0.6" />
        <text x="70" y="27" fontSize="3" fill="#9C27B0" textAnchor="middle" fontWeight="500">
          鉱石庭園
        </text>
        
        {/* Cave Area */}
        <path
          d="M65 50 Q 80 45 85 55 Q 90 65 80 70 Q 70 75 65 65 Q 60 55 65 50"
          fill="#FFF3E0"
          opacity="0.6"
        />
        <text x="75" y="60" fontSize="3" fill="#FF9800" textAnchor="middle" fontWeight="500">
          水晶洞窟
        </text>
        
        {/* Shop */}
        <rect x="75" y="25" width="15" height="15" rx="2" fill="#FFEBEE" opacity="0.6" />
        <text x="82.5" y="34" fontSize="2.5" fill="#F44336" textAnchor="middle" fontWeight="500">
          ショップ
        </text>
        
        {/* Decorative elements - Trees */}
        <circle cx="10" cy="40" r="3" fill="#A5D6A7" opacity="0.5" />
        <circle cx="15" cy="75" r="4" fill="#A5D6A7" opacity="0.5" />
        <circle cx="90" cy="80" r="3" fill="#A5D6A7" opacity="0.5" />
        <circle cx="5" cy="60" r="2" fill="#A5D6A7" opacity="0.5" />
        
        {/* Water feature */}
        <ellipse cx="25" cy="85" rx="8" ry="5" fill="#BBDEFB" opacity="0.5" />
      </svg>

      {/* Gem Markers */}
      <AnimatePresence>
        {gemLocations.map((location) => {
          const gem = getGemById(location.gemId);
          if (!gem) return null;

          const isSelected = selectedLocation?.id === location.id;

          return (
            <motion.button
              key={location.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 tap-feedback ${
                location.collected ? 'opacity-40' : ''
              }`}
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
              }}
              onClick={() => !location.collected && selectLocation(location)}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 0.9 }}
              disabled={location.collected}
            >
              {/* Marker container */}
              <div className="relative">
                {/* Pulse ring for uncollected gems */}
                {!location.collected && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: gem.color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}
                
                {/* Gem icon */}
                <div
                  className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                    isSelected ? 'ring-2 ring-primary ring-offset-2' : ''
                  }`}
                  style={{
                    backgroundColor: location.collected ? '#E5E5EA' : 'white',
                    boxShadow: location.collected
                      ? 'none'
                      : `0 2px 8px ${gem.color}40`,
                  }}
                >
                  <img
                    src={gem.image}
                    alt={gem.name}
                    className="w-7 h-7 object-contain"
                    style={{
                      filter: location.collected ? 'grayscale(100%)' : 'none',
                    }}
                  />
                </div>

                {/* Collected checkmark */}
                {location.collected && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#34C759] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.button>
          );
        })}
      </AnimatePresence>

      {/* Current location indicator (simulated) */}
      <motion.div
        className="absolute w-4 h-4 bg-primary rounded-full shadow-lg"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
      </motion.div>

      {/* Map legend */}
      <div className="absolute bottom-4 left-4 glass rounded-xl p-3 shadow-sm">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span>現在地</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#34C759] rounded-full" />
            <span>収集済み</span>
          </div>
        </div>
      </div>

      {/* Zoom controls (decorative) */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-1">
        <button className="w-10 h-10 glass rounded-lg shadow-sm flex items-center justify-center text-muted-foreground tap-feedback">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
          </svg>
        </button>
        <button className="w-10 h-10 glass rounded-lg shadow-sm flex items-center justify-center text-muted-foreground tap-feedback">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
