import { Shield, FileText, CheckCircle, MapPin, CreditCard, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "100% Approved Layouts",
    description: "All our plots come with HMDA, YTDA, or DTCP approvals ensuring legal security.",
  },
  {
    icon: FileText,
    title: "Transparent Pricing",
    description: "No hidden charges. Clear pricing with complete breakdown of all costs.",
  },
  {
    icon: CheckCircle,
    title: "Clear Documentation",
    description: "Complete paperwork with clear titles and hassle-free registration process.",
  },
  {
    icon: MapPin,
    title: "Prime Growth Locations",
    description: "Strategic locations near developing areas with high appreciation potential.",
  },
  {
    icon: CreditCard,
    title: "Easy EMI Support",
    description: "Flexible payment plans and bank loan assistance for your convenience.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer-Friendly Support",
    description: "Dedicated support team to guide you through every step of your journey.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-primary/20"
          >
            Why Daivaansh Infra?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Building Trust, One Plot at a Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We believe in transparency, quality, and customer satisfaction. Here's why families trust us with their dream plots.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/80 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
