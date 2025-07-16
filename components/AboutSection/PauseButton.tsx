'use client';

import { useEffect, useRef, useState } from 'react';
import { useVehicle } from '../../context/VehicleContext';

const PauseButton = () => {
  const { isPlaying, setIsPlaying } = useVehicle();
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Get the video element from DOM directly
  useEffect(() => {
    const video = document.getElementById('exploded-car-video') as HTMLVideoElement | null;
    if (video) {
      videoRef.current = video;
      const updateProgress = () => {
        if (video.duration > 0) {
          const percent = (video.currentTime / video.duration) * 100;
          setProgress(percent);
        }
      };
      video.addEventListener('timeupdate', updateProgress);
      return () => {
        video.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, []);

  const radius = 28;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      onClick={() => setIsPlaying(!isPlaying)}
      className="absolute bottom-0 mb-24 lg:right-60 right-2 cursor-pointer"
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#444"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#fff"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: 'stroke-dashoffset 0.25s' }}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {isPlaying ? (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <rect x="4" y="4" width="4" height="12" />
            <rect x="12" y="4" width="4" height="12" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <polygon points="5,3 16,10 5,17" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default PauseButton;
