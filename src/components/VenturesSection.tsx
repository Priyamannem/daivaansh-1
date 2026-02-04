import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import venture1 from "@/assets/mahadev-orr-enclave-gen.png";
import venture2 from "@/assets/green-rich-homes-gen.png";
import venture3 from "@/assets/elegant-square-gen.png";
import venture4 from "@/assets/venture-4.png";
import venture5 from "@/assets/mahateja-hill-view-gen.png";

const ventures = [
  {
    id: 1,
    image: venture1,
    name: "Mahadev ORR Enclave",
    location: "Narasampally, Shameerpet",
    badge: "HMDA Approved",
  },
  {
    id: 2,
    image: venture2,
    name: "Green Rich Homes",
    location: "Kadthal",
    badge: "DTCP Approved",
  },
  {
    id: 3,
    image: venture3,
    name: "Elegant Square",
    location: "ECIL, Bandlaguda",
    badge: "HMDA Approved",
  },
  {
    id: 4,
    image: venture4,
    name: "Harmony Woods",
    location: "Tummaluru",
    badge: "FCDA Approved",
  },
  {
    id: 5,
    image: venture5,
    name: "Mahateja Hill View",
    location: "Yadadri",
    badge: "YTDA Approved",
  },
];

interface VenturesSectionProps {
  filterType?: string | null;
}

const VenturesSection = ({ filterType }: VenturesSectionProps) => {
  const navigate = useNavigate();

  const getBadgeColor = (badge: string) => {
    return "bg-primary text-primary-foreground border-primary/50";
  };

  const displayVentures = filterType
    ? ventures.filter(v => v.badge.toLowerCase().includes(filterType.toLowerCase()))
    : ventures;

  return (
    <section className="py-20 bg-background" id="ventures">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-primary/20"
          >
            {filterType ? `${filterType} Projects` : "Featured Projects"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            {filterType ? `Ventures: ${filterType}` : "Explore Our Premium Ventures"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {filterType
              ? `Showing our premium ${filterType} approved ventures in prime locations.`
              : "Discover approved open plots in prime locations with world-class amenities and clear documentation."}
          </motion.p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayVentures.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={venture.image}
                  alt={venture.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${getBadgeColor(venture.badge)} px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg border`}>
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    {venture.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {venture.name}
                </h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>{venture.location}</span>
                </div>

                <Button
                  className="w-full font-bold shadow-md hover:shadow-lg transition-all"
                  onClick={() => navigate(`/venture-details/${venture.id}`)}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {filterType && (
          <div className="mt-12 text-center">
            <Button variant="gold" size="lg" className="px-10 font-bold shadow-lg" onClick={() => navigate('/ventures')}>
              View All Ventures
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VenturesSection;
