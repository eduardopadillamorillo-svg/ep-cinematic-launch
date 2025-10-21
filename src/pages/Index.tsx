import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideosSection from "@/components/VideosSection";
import ContactSection from "@/components/ContactSection";
import FloatingSocial from "@/components/FloatingSocial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideosSection />
      <ContactSection />
      <FloatingSocial />
      <Footer />
    </div>
  );
};

export default Index;
