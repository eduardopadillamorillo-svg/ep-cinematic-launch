import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import VideoCard from "./VideoCard";

const videos = [
  {
    id: "1",
    videoUrl: "https://lxyueinuklyestlpuhoo.supabase.co/storage/v1/object/public/Video%20PUBLICOS/WEB/Thumbnail/15%20WEB.mp4",
    aspectRatio: "16:9" as const,
  },
  {
    id: "2",
    videoUrl: "https://lxyueinuklyestlpuhoo.supabase.co/storage/v1/object/public/Video%20PUBLICOS/WEB/30%20WEB.mp4",
    aspectRatio: "16:9" as const,
  },
  {
    id: "3",
    videoUrl: "https://lxyueinuklyestlpuhoo.supabase.co/storage/v1/object/public/Video%20PUBLICOS/WEB/09%20WEB.mp4",
    aspectRatio: "16:9" as const,
  },
];

const VideosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background with film grain */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background film-grain" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 glow-text">
            Mi Trabajo
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiencias cinematográficas que cuentan historias
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
