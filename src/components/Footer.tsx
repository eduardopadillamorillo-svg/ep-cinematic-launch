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

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { name: "Inicio", id: "hero" },
              { name: "Contacto", id: "contact" },
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-wider"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://www.instagram.com/ep.filmmaker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-wider"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
