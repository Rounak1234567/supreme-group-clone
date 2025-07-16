'use client';
import { useVehicle } from '../../context/VehicleContext';

const VehicleTabs = () => {
  const { activeVehicle, setActiveVehicle, setVideoSrc, setView } = useVehicle();

  return (
    <div className="relative flex flex-col pl-4 mb-6 lg:ml-12 h-[266px] justify-center">
      {/* Vertical Left Bar */}
      <div className="absolute left-0 top-0 h-full w-0.5 flex flex-col">
        <div
          className={`flex-1 ${activeVehicle === 'passenger' ? 'bg-white' : 'bg-gray-600'}`}
        />
        <div
          className={`flex-1 ${activeVehicle === 'commercial' ? 'bg-white' : 'bg-gray-600'}`}
        />
      </div>

      <button
        onClick={() => {
          setActiveVehicle('passenger');
          setVideoSrc('./Passenger-CompleteBody.mp4');
          setView('Complete body');
        }}
        className={`text-left text-3xl font-medium ${activeVehicle === 'passenger' ? 'text-white' : 'text-gray-600'} ml-8`}
      >
        Passenger vehicles
      </button>
      <div className="mt-2">
        <div
          className={`text-l ${activeVehicle === 'passenger' ? 'text-white' : 'text-gray-600'} ml-8`}
        >
          Revving up innovation from
        </div>
        <div
          className={`text-l mb-8 ${activeVehicle === 'passenger' ? 'text-white' : 'text-gray-600'} ml-8`}
        >
          interior to exterior.
        </div>
      </div>

      <button
        onClick={() => {
          setActiveVehicle('commercial')
          setVideoSrc('./Commercial-CompleteBody.mp4')
          setView('Complete body');
        }}
        className={`text-left mt-6 text-2xl font-medium ${activeVehicle === 'commercial' ? 'text-white' : 'text-gray-600'} ml-8`}
      >
        Commercial vehicles
      </button>
      <div className="mt-2">
        <div
          className={`text-sm ${activeVehicle === 'commercial' ? 'text-white' : 'text-gray-600'} ml-8`}
        >
          Advancing engineering
        </div>
        <div
          className={`text-sm ${activeVehicle === 'commercial' ? 'text-white' : 'text-gray-600'} ml-8`}
        >
          for heavy-duty vehicles.
        </div>
      </div>
    </div>
  );
};

export default VehicleTabs;
