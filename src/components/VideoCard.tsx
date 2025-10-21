import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";

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
  const { videoRef, isLoaded, setIsLoaded } = useVideoPlayer(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="group relative cursor-pointer rounded-lg overflow-hidden"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Video Thumbnail */}
        <div className="relative aspect-video bg-muted">
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted/20 animate-pulse" />
          )}
          
          <video
            ref={videoRef}
            src={video.videoUrl}
            preload="metadata"
            muted
            playsInline
            onLoadedData={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } group-hover:scale-110`}
          />

          {/* Overlay with glass effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Film grain */}
          <div className="absolute inset-0 film-grain opacity-30 pointer-events-none" />

          {/* Play icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
              <Play className="w-8 h-8 text-primary" fill="currentColor" />
            </div>
          </div>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 border-2 border-primary/50 rounded-lg" />
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
