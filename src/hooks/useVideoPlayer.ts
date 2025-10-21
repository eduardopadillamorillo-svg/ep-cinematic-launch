import { useRef, useState, useEffect } from 'react';

export const useVideoPlayer = (autoPlay = false) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlay) return;

    const handleCanPlay = () => {
      video.play().catch(() => {
        // Autoplay blocked - user interaction needed
      });
      setIsLoaded(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, [autoPlay]);

  return { videoRef, isLoaded, setIsLoaded };
};
