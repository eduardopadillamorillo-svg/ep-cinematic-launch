import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="https://lxyueinuklyestlpuhoo.supabase.co/storage/v1/object/public/Imagenes%20PUBLICAS/logo/e.p%20filmmaker%20logo%20blanco%20png%20(1).png" 
              alt="EP Filmmaker" 
              className="h-8 md:h-10 w-auto"
            />
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {["Inicio", "Visión", "Contacto"].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => {
                  const sectionMap: { [key: string]: string } = {
                    "Inicio": "hero",
                    "Visión": "about",
                    "Contacto": "contact"
                  };
                  scrollToSection(sectionMap[item]);
                }}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
