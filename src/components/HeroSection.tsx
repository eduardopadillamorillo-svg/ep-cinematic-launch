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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Quote - Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block text-primary glow-text"
              >
                No busco grabar,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block text-gradient mt-4"
              >
                busco que se sienta.
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-16 tracking-wide"
          >
            Pronto lo vas a entender.
          </motion.p>

          {/* CTA Button with Electric Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="relative px-12 py-6 text-lg font-semibold bg-card/80 text-primary border-2 border-primary/30 hover:border-primary/60 hover:bg-card backdrop-blur-sm transition-all duration-300 animate-electric uppercase tracking-widest"
            >
              Hablemos por WhatsApp
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
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
