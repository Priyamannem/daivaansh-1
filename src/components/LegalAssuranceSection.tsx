import { Shield, FileText, ClipboardCheck, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const assurances = [
  {
    icon: Shield,
    title: "HMDA / YTDA / DTCP Approvals",
    description: "All layouts approved by respective authorities",
  },
  {
    icon: FileText,
    title: "Layout Permissions",
    description: "Complete layout approval documentation",
  },
  {
    icon: ClipboardCheck,
    title: "Registration Support",
    description: "End-to-end registration assistance",
  },
  {
    icon: Building2,
    title: "Loan Assistance",
    description: "Bank tie-ups for easy financing",
  },
];

const LegalAssuranceSection = () => {
  return (
    <section className="py-20 bg-forest-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-cream/10 text-cream px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-cream/20">
              <Shield className="w-4 h-4 text-gold" />
              Legal Assurance
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              Every Plot is Legally Verified & Future-Ready
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-8">
              We ensure complete legal transparency with all necessary approvals and documentation. Buy with confidence knowing your investment is secure.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold italic">"Your trust is our foundation"</span>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {assurances.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream/5 backdrop-blur-sm p-6 rounded-xl border border-cream/10 hover:bg-cream/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-cream/70 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalAssuranceSection;
