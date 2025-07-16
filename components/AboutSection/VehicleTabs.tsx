'use client';
import { useVehicle } from '../../context/VehicleContext';

const VehicleTabs = () => {
  const { activeVehicle, setActiveVehicle } = useVehicle();

  return (
    <div className="flex flex-col border-l-2 border-white pl-4 mb-6">
      <button
        onClick={() => setActiveVehicle('passenger')}
        className={`text-left text-2xl font-medium ${activeVehicle === 'passenger' ? 'text-white' : 'text-gray-600'}`}
      >
        Passenger vehicles
      </button>

      <button
        onClick={() => setActiveVehicle('commercial')}
        className={`text-left mt-6 text-2xl font-medium ${activeVehicle === 'commercial' ? 'text-white' : 'text-gray-600'}`}
      >
        Commercial vehicles
      </button>
    </div>
  );
};

export default VehicleTabs;
