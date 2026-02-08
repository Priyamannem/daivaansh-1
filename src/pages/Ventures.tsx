import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VenturesSection from "@/components/VenturesSection";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import venturesHero from "@/assets/ventures-hero.png";

const Ventures = () => {
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get("type");

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        {/* Hero Banner with Background */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={venturesHero}
              alt="Premium Ventures"
              className="w-full h-full object-cover"
            />
            {/* Green Dominant Transparent Overlay */}
            <div className="absolute inset-0 bg-forest/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/20 to-forest/60" />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-3xl md:text-5xl font-bold text-cream mb-4"
            >
              {filterType ? `${filterType} Ventures` : "Our Ventures"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-cream/80 text-lg max-w-2xl mx-auto"
            >
              Explore our premium HMDA, YTDA, DTCP & FCDA approved open plots in prime locations across Telangana.
            </motion.p>
          </div>
        </section>

        <VenturesSection filterType={filterType} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Ventures;
