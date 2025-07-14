import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
