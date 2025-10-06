import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingSocial = () => {
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
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40 flex flex-col gap-3 md:gap-4"
    >
      {/* WhatsApp */}
      <Button
        onClick={handleWhatsApp}
        size="icon"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full glass border-2 border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300 animate-glow-pulse"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
      </Button>

      {/* Instagram */}
      <Button
        onClick={handleInstagram}
        size="icon"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full glass border-2 border-muted/30 hover:border-primary/50 hover:scale-110 transition-all duration-300"
      >
        <Instagram className="w-5 h-5 md:w-6 md:h-6 text-foreground hover:text-primary transition-colors" />
      </Button>
    </motion.div>
  );
};

export default FloatingSocial;
