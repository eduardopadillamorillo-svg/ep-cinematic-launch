import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--cream) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--cream) / 0.5)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "electric": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(var(--cream) / 0.4), 0 0 40px hsl(var(--cream) / 0.2), inset 0 0 10px hsl(var(--cream) / 0.1)" 
          },
          "50%": { 
            boxShadow: "0 0 30px hsl(var(--cream) / 0.6), 0 0 60px hsl(var(--cream) / 0.3), inset 0 0 20px hsl(var(--cream) / 0.2)" 
          },
        },
        "electric-enhanced": {
          "0%, 100%": { 
            boxShadow: "0 0 25px hsl(var(--cream) / 0.5), 0 0 50px hsl(var(--cream) / 0.25), 0 0 75px hsl(var(--cream) / 0.1), inset 0 0 15px hsl(var(--cream) / 0.15)" 
          },
          "50%": { 
            boxShadow: "0 0 40px hsl(var(--cream) / 0.7), 0 0 80px hsl(var(--cream) / 0.4), 0 0 120px hsl(var(--cream) / 0.2), inset 0 0 25px hsl(var(--cream) / 0.25)" 
          },
        },
        "subtle-pulse": {
          "0%, 100%": { 
            opacity: "0.95", 
            transform: "scale(1)",
            boxShadow: "0 0 8px hsl(var(--cream) / 0.12), 0 0 16px hsl(var(--cream) / 0.06)"
          },
          "50%": { 
            opacity: "1", 
            transform: "scale(1.01)",
            boxShadow: "0 0 12px hsl(var(--cream) / 0.15), 0 0 24px hsl(var(--cream) / 0.08)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "fade-in-slow": "fade-in-slow 1.2s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 4s ease-in-out infinite",
        "electric": "electric 2s ease-in-out infinite",
        "electric-enhanced": "electric-enhanced 2.5s ease-in-out infinite",
        "subtle-pulse": "subtle-pulse 7.2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
