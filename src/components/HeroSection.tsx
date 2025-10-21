import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/584122499554?text=Hola%2C%20vi%20tu%20p%C3%A1gina%20y%20quiero%20hablar%20sobre%20una%20producci%C3%B3n.",
      "_blank"
    );
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source 
          src="https://lxyueinuklyestlpuhoo.supabase.co/storage/v1/object/public/Video%20PUBLICOS/Hero/19%20WEB.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Dark Overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-[1]" />
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-[1]" />

      {/* Film Grain */}
      <div className="absolute inset-0 film-grain z-[2]" />
      
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[120px] z-[2]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-screen flex flex-col items-start justify-end pb-20 pl-6 md:pb-24 md:pl-12 lg:pl-16">
          {/* Main Quote - Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8 md:mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight text-left">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="block text-primary glow-text shimmer-text"
              >
                No busco planos,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                className="block text-gradient mt-3 md:mt-4"
              >
                busco emociones.
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 tracking-wide font-light text-left"
            >
              Cada toma tiene una intención.
            </motion.p>
          </motion.div>

          {/* CTA Button with Electric Effect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="relative px-12 py-6 text-lg font-semibold bg-card/80 text-primary border-2 border-primary/40 hover:border-primary/50 hover:bg-card backdrop-blur-sm transition-all duration-500 uppercase tracking-widest"
            >
              Hablemos por WhatsApp
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1 h-3 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
