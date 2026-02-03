import { Button } from "@/components/ui/button";
import { Star, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-section-image.jpg";

const badges = [
  { icon: Shield, label: "HMDA Approved", type: "HMDA", color: "bg-black/40 border-cream/30 text-cream hover:bg-black/50", iconColor: "text-gold" },
  { icon: Shield, label: "YTDA Approved", type: "YTDA", color: "bg-black/40 border-cream/30 text-cream hover:bg-black/50", iconColor: "text-gold" },
  { icon: Shield, label: "DTCP Approved", type: "DTCP", color: "bg-black/40 border-cream/30 text-cream hover:bg-black/50", iconColor: "text-gold" },
  { icon: Shield, label: "FCDA Approved", type: "FCDA", color: "bg-black/40 border-cream/30 text-cream hover:bg-black/50", iconColor: "text-gold" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative h-screen flex items-center pt-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Premium open plots"
          className="w-full h-full object-cover"
        />
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gold px-4 py-2 rounded-full mb-4"
          >
            <Star className="w-4 h-4 text-gold-foreground fill-current" />
            <span className="text-sm font-semibold text-gold-foreground">
              Trusted by 500+ Happy Families
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-4"
          >
            Your Dream Plot, Approved &{" "}
            <span className="text-gradient-gold">Ready for a Better Tomorrow</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cream/90 text-lg md:text-xl mb-6 max-w-2xl"
          >
            Explore HMDA, YTDA, DTCP & FCDA approved open plots with clear documentation and peaceful locations. Start your journey to owning land today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <Button
              variant="hero"
              size="lg"
              className="bg-cream text-forest hover:bg-white border-none"
              onClick={() => navigate('/ventures')}
            >
              Explore Ventures
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="border-cream text-cream hover:bg-cream/20"
              onClick={() => navigate('/book-site-visit')}
            >
              Get Free Site Visit
            </Button>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {badges.map((badge, index) => (
              <div
                key={index}
                onClick={() => navigate(`/ventures?type=${badge.type}`)}
                className={`flex items-center gap-2 backdrop-blur-md px-4 py-2 rounded-full border cursor-pointer transition-all hover:scale-105 active:scale-95 ${badge.color}`}
              >
                <badge.icon className={`w-4 h-4 ${badge.iconColor}`} />
                <span className="text-sm font-semibold tracking-wide">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Transparent Bottom Footer Overlay */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t border-cream/10 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/80 text-sm">
            © {currentYear} Daivaansh Infra. All rights reserved. Designed and developed by <a href="https://hashtagheros.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-medium">Hashtag Heros Digital Solutions</a>
          </p>
          <p className="text-cream/60 text-sm italic hidden md:block">
            "Daivaansh Infra – Building Trust, One Plot at a Time."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
