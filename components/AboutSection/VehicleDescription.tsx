"use client";

import { useVehicle } from '../../context/VehicleContext';

const VehicleDescription = () => {
  const { activeVehicle } = useVehicle();

  const content = {
    passenger: {
      title: 'Passenger vehicles',
      description: 'Revving up innovation from interior to exterior.',
    },
    commercial: {
      title: 'Commercial vehicles',
      description: 'Advancing engineering for heavy-duty vehicles.',
    },
  };

  return (
    <div className="mt-2">
      <h3 className="text-xl font-semibold mb-2">{content[activeVehicle].title}</h3>
      <p className="text-sm text-white/80">{content[activeVehicle].description}</p>
    </div>
  );
};

export default VehicleDescription;
