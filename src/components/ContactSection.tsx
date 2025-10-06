import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/584122499554?text=Hola%2C%20vi%20tu%20p%C3%A1gina%20y%20quiero%20hablar%20sobre%20una%20producci%C3%B3n.",
      "_blank"
    );
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/ep.filmmaker", "_blank");
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-12 leading-tight glow-text"
          >
            ¿Listo para contar una historia que se sienta real?
          </motion.h2>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary WhatsApp Button */}
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="relative px-12 py-6 text-lg font-semibold bg-card/80 text-primary border-2 border-primary/30 hover:border-primary/40 hover:bg-card backdrop-blur-sm transition-all duration-500 animate-subtle-pulse uppercase tracking-widest"
            >
              WhatsApp
            </Button>

            {/* Secondary Instagram Button */}
            <Button
              onClick={handleInstagram}
              size="lg"
              variant="outline"
              className="px-12 py-6 text-lg font-semibold glass border-2 border-muted/30 hover:border-primary/30 text-foreground hover:text-primary transition-all duration-300 uppercase tracking-widest flex items-center gap-3"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
