'use client';

import Image from 'next/image';
import { useVehicle } from '../../context/VehicleContext';

const icons_passenger = [
  { label: 'Complete body', icon: '/icons/Passenger-CompleteBody.jpg', selectedIcon:'/icons/Passenger-CompleteBody-selected.jpg', videoSrc: './Passenger-CompleteBody.mp4' },
  { label: 'Front', icon: '/icons/Passenger-Front.jpg', videoSrc: './Passenger-Front.mp4' },
  { label: 'Cabin', icon: '/icons/Passenger-Cabin.jpg', videoSrc: './Passenger-Cabin.mp4' },
  { label: 'Trunk', icon: '/icons/Passenger-Trunk.jpg', videoSrc: './Passenger-Trunk.mp4' },
  { label: 'Exterior', icon: '/icons/Passenger-Exterior.jpg', videoSrc: './Passenger-Exterior.mp4' },
];

const icons_commercial = [
  { label: 'Complete body', icon: '/icons/Commercial-CompleteBody.jpg', videoSrc: './Commercial-CompleteBody.mp4' },
  { label: 'Engine', icon: '/icons/Commercial-Engine.jpg', videoSrc: './Commercial-Engine.mp4' },
  { label: 'Cabin', icon: '/icons/Commercial-Cabin.jpg', videoSrc: './Commercial-Cabin.mp4' },
];

const NavigationIcons = () => {
  const { activeVehicle, view, setView, setVideoSrc } = useVehicle();
  const icons = activeVehicle === 'passenger' ? icons_passenger : icons_commercial;

  return (
    <div className="flex gap-2 lg:gap-10 justify-start lg:justify-center items-center w-full lg:ml-36 mb-20">
      {icons.map(({ label, icon, videoSrc }) => (
        <div
          key={label}
          className="flex flex-col items-center text-sm cursor-pointer"
          onClick={() => {
            setVideoSrc(videoSrc);
            setView(label);
          }}
        >
          <Image width={48} height={48} src={view===label?`${icon.replace(".jpg", "-selected")}.jpg`:icon}alt={label} />
          <span className={`${view === label ? 'text-white' : 'text-gray-600'}`}>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default NavigationIcons;
