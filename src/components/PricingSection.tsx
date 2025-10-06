import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Plan Esencial",
      price: "$200",
      period: "/mes",
      features: [
        "4 videos mensuales (hasta 1 min)",
        "Edición básica profesional",
        "Música y efectos incluidos",
        "Entrega optimizada para redes",
        "1 ronda de ajustes"
      ]
    },
    {
      name: "Plan Premium",
      price: "$350",
      period: "/mes",
      featured: true,
      features: [
        "8 videos mensuales (hasta 1 min)",
        "Edición avanzada + efectos especiales",
        "20 fotos editadas",
        "Música y efectos incluidos",
        "Entrega optimizada para redes y web",
        "2 rondas de ajustes",
        "Prioridad en entregas"
      ]
    },
    {
      name: "Plan Completo",
      price: "$500",
      period: "/mes",
      features: [
        "12 videos mensuales (hasta 1.5 min)",
        "Edición cinematográfica completa",
        "40 fotos editadas",
        "Color grading profesional",
        "Música y efectos incluidos",
        "Entrega en todos los formatos",
        "3 rondas de ajustes",
        "Máxima prioridad"
      ]
    }
  ];

  return (
    <section id="pricing" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Planes Mensuales
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades de contenido
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`glass rounded-2xl p-8 relative ${
                plan.featured ? 'ring-2 ring-primary/50 scale-105' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-lg">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.featured ? "default" : "outline"}
                className="w-full"
                onClick={() => window.open('https://wa.me/584122499554?text=Hola%2C%20quiero%20información%20sobre%20el%20' + encodeURIComponent(plan.name), '_blank')}
              >
                Consultar
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Add-on Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-10 border-2 border-accent/30">
            <div className="flex items-start justify-between gap-8 flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  Add-on único (no recurrente)
                </h3>
                <p className="text-xl text-foreground/80 mb-6">
                  Contenido para la página web
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">15 fotos profesionales (selección y edición básica)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">3 videos de hasta 1 minuto cada uno (edición simple, formato web/loop)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Entrega optimizada para web (peso y tamaño adecuados)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">1 ronda de ajustes menores</span>
                  </li>
                </ul>

                <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-4">
                  Este add-on es independiente de la mensualidad. Se contrata una sola vez para alimentar la web.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-end justify-center gap-4">
                <div className="text-center md:text-right">
                  <div className="text-5xl font-bold text-primary mb-1">$100</div>
                  <div className="text-muted-foreground">Pago único</div>
                </div>
                <Button 
                  className="w-full md:w-auto animate-electric-enhanced"
                  onClick={() => window.open('https://wa.me/584122499554?text=Hola%2C%20quiero%20información%20sobre%20el%20add-on%20de%20contenido%20para%20web', '_blank')}
                >
                  Consultar Add-on
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
