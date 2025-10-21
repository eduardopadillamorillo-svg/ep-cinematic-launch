import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = [
    "Todo comenzó por curiosidad.",
    "Siempre me consideré una persona creativa, capaz de resolver cualquier reto con imaginación. Cuando grabé por primera vez, entendí que con un solo video podía transmitir una emoción real.",
    "No me mueve solo capturar imágenes, me mueve la dirección: decidir cómo quiero que sientas lo que ves.",
    "Soy autodidacta, curioso y apasionado. Cada proyecto es un nuevo reto, y cada plano me recuerda el día que decidí apostar por mí: compré una cámara y comencé a grabar.",
    "Así nació EP Filmmaker — de la curiosidad, la creatividad y las ganas de hacerte sentir algo real.",
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 glow-text">
              De la curiosidad a la emoción.
            </h2>
          </motion.div>

          {/* Glass Container */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="glass rounded-2xl p-8 md:p-12 space-y-8"
          >
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-20 text-center"
          >
            <blockquote className="text-3xl md:text-5xl font-bold text-gradient italic">
              "No busco planos, busco emociones."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
