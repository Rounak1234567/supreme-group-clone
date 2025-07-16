// context/VehicleContext.tsx
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type VehicleType = 'passenger' | 'commercial';

interface VehicleContextProps {
  activeVehicle: VehicleType;
  setActiveVehicle: (type: VehicleType) => void;
  view: string;
  setView: (view: string) => void;
  videoSrc: string;
  setVideoSrc: (src: string) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const VehicleContext = createContext<VehicleContextProps | undefined>(undefined);

export const VehicleProvider = ({ children }: { children: ReactNode }) => {
  const [activeVehicle, setActiveVehicle] = useState<VehicleType>('passenger');
  const [view, setView] = useState('Complete body');
  const [videoSrc, setVideoSrc] = useState('./Passenger-CompleteBody.mp4');
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <VehicleContext.Provider value={{
      activeVehicle,
      setActiveVehicle,
      view,
      setView,
      videoSrc,
      setVideoSrc,
      isPlaying,
      setIsPlaying
    }}>
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error('useVehicle must be used within a VehicleProvider');
  }
  return context;
};
