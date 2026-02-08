import { Button } from "@/components/ui/button";
import { Star, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-section-image.jpg";
import confetti from 'canvas-confetti';

const badges = [
  { icon: Shield, label: "HMDA Approved", type: "HMDA", color: "bg-black/40 border-cream/30 text-cream hover:bg-black/50", iconColor: "text-gold" },
  { icon: Shield, label: "YTDA Approved", type: "YTDA", color: "bg-black/40 border-cream/30 text-cream hover:bg-black/50", iconColor: "text-gold" },
  { icon: Shield, label: "DTCP Approved", type: "DTCP", color: "bg-black/40 border-cream/30 text-cream hover:bg-black/50", iconColor: "text-gold" },
  { icon: Shield, label: "FCDA Approved", type: "FCDA", color: "bg-black/40 border-cream/30 text-cream hover:bg-black/50", iconColor: "text-gold" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleAction = (path: string) => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#DAA520', '#228B22', '#32CD32']
    });
    setTimeout(() => navigate(path), 600);
  };

  return (
    <section className="relative min-h-[100dvh] lg:h-screen flex items-center pt-20 lg:pt-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Premium open plots"
          className="w-full h-full object-cover"
        />
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent lg:from-black/80 lg:via-black/40 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-12 lg:py-0">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gold px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-3 h-3 md:w-4 md:h-4 text-gold-foreground fill-current" />
            <span className="text-[10px] md:text-sm font-semibold text-gold-foreground">
              Trusted by 500+ Happy Families
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6"
          >
            Your Dream Plot, Approved &{" "}
            <span className="text-gradient-gold">Ready for a Better Tomorrow</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cream/90 text-base md:text-xl mb-8 max-w-2xl"
          >
            Explore HMDA, YTDA, DTCP & FCDA approved open plots with clear documentation and peaceful locations. Start your journey to owning land today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black hover:text-white font-bold border-2 border-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 group px-8 py-6 h-auto"
              onClick={() => handleAction('/ventures')}
            >
              <motion.div
                className="absolute top-0 -left-[100%] w-[50%] h-full bg-white/40 skew-x-[-25deg]"
                animate={{ left: ['100%', '-100%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
              />
              <span className="relative z-10">Explore Ventures</span>
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="w-full sm:w-auto relative overflow-hidden border-2 border-amber-400 bg-black/40 text-amber-400 hover:text-white font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 group px-8 py-6 h-auto"
              onClick={() => handleAction('/book-site-visit')}
            >
              <motion.div
                className="absolute top-0 -left-[100%] w-[50%] h-full bg-white/20 skew-x-[-25deg]"
                animate={{ left: ['100%', '-100%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 1.5 }}
              />
              <span className="relative z-10">Get Free Site Visit</span>
            </Button>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2 md:gap-3"
          >
            {badges.map((badge, index) => (
              <div
                key={index}
                onClick={() => {
                  confetti({
                    particleCount: 40,
                    spread: 50,
                    origin: { y: 0.8, x: 0.5 },
                    colors: ['#FFD700', '#228B22']
                  });
                  navigate(`/ventures?type=${badge.type}`);
                }}
                className={`group relative overflow-hidden flex items-center gap-2 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full cursor-pointer transition-all hover:scale-105 active:scale-95 border-2 border-amber-500/40 bg-black/60 text-cream hover:border-amber-400 hover:bg-black/80`}
              >
                <motion.div
                  className="absolute top-0 -left-[100%] w-full h-full bg-white/10 skew-x-[-25deg]"
                  animate={{ left: ['100%', '-100%'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: index * 0.5 }}
                />
                <badge.icon className={`w-3 h-3 md:w-4 md:h-4 text-amber-500 relative z-10`} />
                <span className="text-[10px] md:text-sm font-semibold tracking-wide relative z-10">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Transparent Bottom Footer Overlay - Hide on mobile to save space or keep it static */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-black/50 backdrop-blur-sm lg:bg-black/30 lg:backdrop-blur-none">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-center items-center gap-1">
          <p className="text-white/80 text-[10px] text-center">
            © {currentYear} Daivaansh Infra. All rights reserved.
          </p>
          <p className="text-white/80 text-[10px] text-center">
            Designed by <a href="https://hashtagheros.in/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline font-medium">Hashtag Heros Digital Solutions</a>
          </p>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
