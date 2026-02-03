import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import LegalAssuranceSection from "@/components/LegalAssuranceSection";
import { motion } from "framer-motion";
import { Users, Award, MapPin, Home, Eye, Target, User } from "lucide-react";
import sampathImg from "@/assets/sampath-bontala.png";

const stats = [
  { icon: Users, value: "500+", label: "Happy Families" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: MapPin, value: "10+", label: "Prime Locations" },
  { icon: Home, value: "5+", label: "Active Ventures" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
              alt="Premium landscapes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-forest/70 backdrop-blur-[1px]" />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6"
            >
              Building Trust, One Plot at a Time
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-cream/90 text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Daivaansh Infra is your trusted partner for HMDA, YTDA, DTCP, and FCDA approved open plots in prime locations.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-forest/10 text-center hover:bg-forest/20 hover:border-forest/40 transition-all duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-forest/10 cursor-pointer group"
                >
                  <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-gold/20">
                    <stat.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-forest mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-serif text-4xl font-bold text-forest mb-6">About Daivaansh Infra</h2>
                <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
              </motion.div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Daivaansh Infra is a dedicated real estate company specializing exclusively in open plot developments. We develop and market HMDA, YTDA, DTCP, and FCDA approved open plots, offering customers safe, transparent, and high-growth land investment opportunities.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  At Daivaansh Infra, we believe open plots are the strongest form of real estate investment—flexible, secure, and future-ready. Every project is carefully planned with a focus on clear titles, proper approvals, strategic locations, and long-term appreciation.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Our open plot ventures are designed with well-structured layouts, wide internal roads, drainage systems, green spaces, and essential infrastructure, making them ideal for both investment and future construction. From layout planning to registration, we follow ethical practices and complete transparency at every stage.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  We take pride in our customer-centric approach, offering honest guidance, clear documentation, and end-to-end support to help customers invest with confidence and peace of mind.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl font-bold text-forest mb-4">Leadership</h2>
                <div className="w-20 h-1 bg-accent mx-auto"></div>
              </motion.div>

              <div className="grid md:grid-cols-5 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="md:col-span-2"
                >
                  <div className="aspect-square rounded-3xl flex items-center justify-center overflow-hidden border-4 border-primary shadow-xl">
                    <img src={sampathImg} alt="Sampath Bontala - Managing Director" className="w-full h-full object-cover" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-3"
                >
                  <h3 className="font-serif text-3xl font-bold text-forest mb-2">Sampath Bontala</h3>
                  <p className="text-accent font-bold text-xl mb-6">Managing Director</p>

                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Sampath Bontala leads Daivaansh Infra with a clear vision focused on trust-based open plot development. His leadership emphasizes legal clarity, quality planning, and long-term customer value.
                    </p>
                    <p>
                      With hands-on involvement in every project, he ensures that Daivaansh Infra delivers only approved, well-planned open plots that meet investor expectations and market standards.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-forest/10 p-10 rounded-3xl border border-forest/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-forest">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become a trusted brand in open plot development by delivering legally compliant, value-driven land projects that secure our customers' future.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-forest/10 p-10 rounded-3xl border border-forest/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-forest">Our Mission</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "To develop approved open plot ventures (HMDA, YTDA, DTCP & FCDA)",
                    "To ensure clear titles and transparent documentation",
                    "To create high-appreciation land assets for investors",
                    "To support planned and sustainable regional development"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-lg">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <WhyChooseUsSection />
        <LegalAssuranceSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;

