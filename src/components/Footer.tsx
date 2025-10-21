import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      className="relative py-12 glass border-t border-primary/10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © 2025 EP Filmmaker | Una experiencia visual creada por Eduardo Padilla.
          </p>
          
          {/* Powered by */}
          <p className="text-sm text-muted-foreground text-center">
            Powered by{" "}
            <a
              href="https://www.solware.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
            >
              Solware
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
