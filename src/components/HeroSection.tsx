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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Video Background - ULTRA SIMPLE */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source 
          src="https://lxyueinuklyestlpuhoo.supabase.co/storage/v1/object/public/Video%20PUBLICOS/WEB/19%20WEB.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Overlay oscuro simple */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />

      {/* CONTENIDO */}
      <div className="relative z-10 container mx-auto px-6 lg:px-4">
        <div className="min-h-screen flex flex-col items-start justify-end pb-20 pl-0 lg:pl-6">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-12 lg:mb-8 text-left [line-height:0.65] lg:[line-height:0.85]">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="block text-primary"
              >
                No busco planos,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                className="block text-gradient mt-1 lg:mt-4"
              >
                busco emociones.
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
              className="text-lg lg:text-2xl text-muted-foreground mb-10 tracking-wide font-light text-left"
            >
              Cada toma tiene una intención.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="px-8 lg:px-12 py-6 text-base lg:text-lg font-semibold bg-card/80 text-primary border-2 border-primary/40 hover:border-primary/50 hover:bg-card backdrop-blur-sm transition-all duration-500 uppercase tracking-widest"
            >
              Hablemos por WhatsApp
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
