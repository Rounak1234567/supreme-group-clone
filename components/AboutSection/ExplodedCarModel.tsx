'use client';

import { useEffect, useRef } from 'react';
import { useVehicle } from '../../context/VehicleContext';

const ExplodedCarModel = () => {
  const { videoSrc, isPlaying } = useVehicle();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch((err) => console.error('Play error:', err));
    } else {
      video.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => console.error('Play error:', err));
    }
  }, [videoSrc]);

  return (
    <div className="relative w-full h-[200px]">
      <video
        id='exploded-car-video'
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        loop
        muted
        src={videoSrc}
      />
    </div>
  );
};

export default ExplodedCarModel;
