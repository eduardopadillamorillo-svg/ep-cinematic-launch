import { useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isOpen) {
      videoElement.play();
    } else {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  }, [isOpen]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.y > 100) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-background/95 backdrop-blur-xl border-primary/20">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Accessibility */}
              <DialogTitle className="sr-only">Reproductor de Video</DialogTitle>
              <DialogDescription className="sr-only">
                Reproductor de video en pantalla completa. Arrastra hacia abajo o presiona cerrar para salir.
              </DialogDescription>

              {/* Close button */}
              <DialogClose className="absolute top-4 right-4 z-50 rounded-full p-2 glass hover:bg-primary/20 transition-colors">
                <X className="w-6 h-6 text-foreground" />
              </DialogClose>

              {/* Video player */}
              <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
                <video
                  ref={videoRef}
                  controls
                  playsInline
                  className="max-w-full max-h-full rounded-lg shadow-2xl"
                  style={{
                    boxShadow: "0 0 60px hsl(var(--primary) / 0.4)",
                  }}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
              </div>

              {/* Film grain overlay */}
              <div className="absolute inset-0 film-grain opacity-20 pointer-events-none rounded-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
