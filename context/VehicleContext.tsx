'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type VehicleType = 'passenger' | 'commercial';

interface VehicleContextProps {
  activeVehicle: VehicleType;
  setActiveVehicle: (type: VehicleType) => void;
}

const VehicleContext = createContext<VehicleContextProps | undefined>(undefined);

export const VehicleProvider = ({ children }: { children: ReactNode }) => {
  const [activeVehicle, setActiveVehicle] = useState<VehicleType>('passenger');

  return (
    <VehicleContext.Provider value={{ activeVehicle, setActiveVehicle }}>
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
