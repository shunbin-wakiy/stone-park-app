import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { GemLocation, CollectedGem, INITIAL_GEM_LOCATIONS, getGemById } from '@/lib/gems';

interface AppState {
  gemLocations: GemLocation[];
  collectedGems: CollectedGem[];
  totalPoints: number;
  selectedLocation: GemLocation | null;
  showCollectModal: boolean;
  lastCollectedGem: CollectedGem | null;
}

interface AppContextType extends AppState {
  selectLocation: (location: GemLocation | null) => void;
  collectGem: (locationId: string) => void;
  closeCollectModal: () => void;
  resetProgress: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY = 'stone-park-progress';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [gemLocations, setGemLocations] = useState<GemLocation[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      return data.gemLocations || INITIAL_GEM_LOCATIONS;
    }
    return INITIAL_GEM_LOCATIONS;
  });

  const [collectedGems, setCollectedGems] = useState<CollectedGem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      return (data.collectedGems || []).map((g: CollectedGem) => ({
        ...g,
        collectedAt: new Date(g.collectedAt),
      }));
    }
    return [];
  });

  const [selectedLocation, setSelectedLocation] = useState<GemLocation | null>(null);
  const [showCollectModal, setShowCollectModal] = useState(false);
  const [lastCollectedGem, setLastCollectedGem] = useState<CollectedGem | null>(null);

  // Calculate total points
  const totalPoints = collectedGems.reduce((sum, collected) => {
    const gem = getGemById(collected.gemId);
    return sum + (gem?.points || 0);
  }, 0);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      gemLocations,
      collectedGems,
    }));
  }, [gemLocations, collectedGems]);

  const selectLocation = useCallback((location: GemLocation | null) => {
    setSelectedLocation(location);
  }, []);

  const collectGem = useCallback((locationId: string) => {
    const location = gemLocations.find(loc => loc.id === locationId);
    if (!location || location.collected) return;

    // Mark as collected
    setGemLocations(prev => prev.map(loc =>
      loc.id === locationId ? { ...loc, collected: true } : loc
    ));

    // Add to collection
    const newCollected: CollectedGem = {
      gemId: location.gemId,
      locationId: location.id,
      collectedAt: new Date(),
    };
    setCollectedGems(prev => [...prev, newCollected]);
    setLastCollectedGem(newCollected);
    setShowCollectModal(true);
    setSelectedLocation(null);
  }, [gemLocations]);

  const closeCollectModal = useCallback(() => {
    setShowCollectModal(false);
    setLastCollectedGem(null);
  }, []);

  const resetProgress = useCallback(() => {
    setGemLocations(INITIAL_GEM_LOCATIONS);
    setCollectedGems([]);
    setSelectedLocation(null);
    setShowCollectModal(false);
    setLastCollectedGem(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <AppContext.Provider
      value={{
        gemLocations,
        collectedGems,
        totalPoints,
        selectedLocation,
        showCollectModal,
        lastCollectedGem,
        selectLocation,
        collectGem,
        closeCollectModal,
        resetProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
