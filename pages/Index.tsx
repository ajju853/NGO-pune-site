import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CTABanner from "@/components/CTABanner";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import SupportersSection from "@/components/SupportersSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CTABanner />
      <StatsSection />
      <ServicesSection />
      <SupportersSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
