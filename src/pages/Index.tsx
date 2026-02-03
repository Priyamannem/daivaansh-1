import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatsAppButton from "@/components/WhatsAppButton";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header transparent={true} />
      <main>
        <HeroSection />
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
