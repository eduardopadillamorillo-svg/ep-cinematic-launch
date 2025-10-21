import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

interface Video {
  id: string;
  videoUrl: string;
  aspectRatio: "16:9" | "9:16" | "4:3" | "1:1";
}

interface VideoCardProps {
  video: Video;
  index: number;
  isInView: boolean;
}

const VideoCard = ({ video, index, isInView }: VideoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedMetadata = () => {
      // Set video to first second for better thumbnail
      videoElement.currentTime = 1;
    };

    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    videoElement.addEventListener("loadeddata", handleLoadedData);

    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={
          isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="group relative cursor-pointer rounded-lg overflow-hidden"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Video Thumbnail */}
        <div className="relative aspect-video bg-muted">
          {!isLoaded && (
            <div className="absolute inset-0 animate-pulse bg-muted/50" />
          )}
          
          <video
            ref={videoRef}
            preload="metadata"
            muted
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={video.videoUrl} type="video/mp4" />
          </video>

          {/* Overlay with glass effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Film grain */}
          <div className="absolute inset-0 film-grain opacity-30 pointer-events-none" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <motion.div
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full glass flex items-center justify-center"
              style={{
                boxShadow: "0 0 30px hsl(var(--primary) / 0.5)",
              }}
            >
              <Play className="w-8 h-8 text-primary fill-primary ml-1" />
            </motion.div>
          </div>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 border-2 border-primary/50 rounded-lg" />
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                boxShadow: "inset 0 0 40px hsl(var(--primary) / 0.3)",
              }}
            />
          </div>
        </div>
      </motion.div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={video.videoUrl}
      />
    </>
  );
};

export default VideoCard;
