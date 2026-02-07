import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ConfettiEffect from "@/components/ConfettiEffect";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <ConfettiEffect />
      <Header transparent={true} />
      <main>
        <HeroSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
