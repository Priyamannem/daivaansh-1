import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, MapPin, Calendar, Ruler, FileText, X } from "lucide-react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import venture1Cover from "@/assets/mahadev-orr-enclave-gen.png";
import venture2Cover from "@/assets/green-rich-homes-gen.png";
import venture3Cover from "@/assets/elegant-square-gen.png";
import venture4Cover from "@/assets/venture-4.png";
import venture5Cover from "@/assets/mahateja-hill-view-gen.png";
import ventureDetail2 from "@/assets/venture-detail-2.jpg";
import ventureDetail3 from "@/assets/venture-detail-3.jpg";
import venture2Detail1 from "@/assets/venture2-detail-1.jpg";
import venture2Detail2 from "@/assets/venture2-detail-2.jpg";
import venture3Detail1 from "@/assets/venture3-detail-1.jpg";
import venture3Detail2 from "@/assets/venture3-detail-2.jpg";
import venture3Detail3 from "@/assets/venture3-detail-3.jpg";
import venture3Detail4 from "@/assets/venture3-detail-4.jpg";
import venture3Detail5 from "@/assets/venture3-detail-5.jpg";


// Placeholder for missing images
const venture4Detail1 = venture4Cover;
const venture4Detail2 = venture4Cover;

// Venture data configuration
const ventureData = {
    "1": {
        name: "Mahadev ORR Enclave",
        subtitle: "Premium Residential Open Plots in Shameerpet",
        location: "Narasampally, Shameerpet",
        area: "5 Acres",
        plots: "46",
        badge: "HMDA Approved",
        coverPhoto: venture1Cover,
        images: [ventureDetail2, ventureDetail3],
        brochure: "/downloads/mahadev-brochure.pdf?v=3",
        projectHighlights: [
            "HMDA Approved Layout",
            "Main Entrance Beautiful",
            "Entire Layout Compound Wall",
            "All CC Roads",
            "Underground Drainage System",
            "Water Line with Sump",
            "Each Plot with Tap Connection",
            "Rain Water Harvesting Units",
            "Electricity Poles with Street Lights",
            "Avenue Plantation",
            "100% Clear Title, 100% Vasthu",
            "Footpath with Curbing Stones & Tiles",
            "Park & Children Play Area",
            "Walking/Jogging Mud Track"
        ],
        locationHighlights: [
            "Near DRDO and IVY League Academy Schani",
            "1 Min to Nehru Outer Ring Road",
            "3 Min to Leonia & Celebrity Resorts",
            "5 Min to BITS Pilani Campus.",
            "5 Min to Aalankrita Resorts.",
            "5 Min to NALSAR University",
            "5 Min to District Collector Office Medchal-Malkajgiri.",
            "5 Min to Excellencia Jr. College & Infinitum School.",
            "10 Min to Evergreen High School",
            "10 Min to ICICI Knowledge Park (IKP)",
            "10 Min to GENOME Valley (Bharat Bio Tech & Etc)",
            "25 Min to Jubilee Bus Stand",
            "25 Min to Medicity Hospital",
            "25 Min to TCS Adibatla and Aerospace.",
            "30 Min Drive to Gachibowli ORR, Hi-tech City",
            "30 Min to Rajiv Gandhi International Airport.",
            "20 Min to Secunderabad Railway Station."
        ],
    },
    "2": {
        name: "Green Rich Homes",
        subtitle: "Premium Residential Open Plots in Kadthal",
        location: "Kadthal",
        area: "18 Acres",
        plots: "300",
        badge: "DTCP Approved",
        coverPhoto: venture2Cover,
        images: [venture2Detail1, venture2Detail2],
        brochure: "/downloads/green.pdf?v=2",
        projectHighlights: [
            "Boundary wall and Entry Gate with Arch",
            "24x7 Security",
            "Well Designed Footpaths",
            "Flower Garden",
            "Rain water Harvesting",
            "Well Planned Avenue Plantation with Tree Guards",
            "Underground Drainage System",
            "Underground electrification",
            "Beautiful Street Lightings",
            "Landscaped Garden",
            "Water Storage Tank"
        ],
        locationHighlights: [
            "2 Min to Maisigandi Temple",
            "3 Min to Maheshwara Pyramid",
            "5 Min to Pharma City",
            "20 Min to Wonderla",
            "20 Min to Novotel Hotel",
            "20 Min to ORR",
            "20 Min to Fab City",
            "20 Min to TCS Adibatla",
            "20 Min to Rajiv Gandhi International Airport",
            "30 Min to Gachibowli",
            "30 Min to Taj Falaknuma",
            "40 Min to LB Nagar Metro",
            "40 Min to Charminar"
        ]
    },
    "3": {
        name: "Elegant Square",
        subtitle: "Premium Residential Open Plots in Bandlaguda",
        location: "ECIL, Bandlaguda",
        area: "5 Acres",
        plots: "62",
        badge: "HMDA Approved",
        coverPhoto: venture3Cover,
        images: [venture3Detail1, venture3Detail2, venture3Detail3, venture3Detail4, venture3Detail5],
        brochure: "/downloads/elegant.pdf?v=2",
        projectHighlights: [
            "HMDA Approved Layout",
            "Main Entrance Beautiful Arch",
            "Entire Layout Compound Wall",
            "All CC Roads",
            "Underground Drainage System",
            "Water Line with Sump",
            "Each Plot with Tap Connection",
            "Rain Water Harvesting Units",
            "Electricity Poles with Street Lights",
            "Avenue Plantation",
            "100% Clear Title",
            "100% Vasthu",
            "Footpath with Curbing Stones & Tiles",
            "Park & Children Play Area",
            "Greenery Landscape Park & Avenue Plantation on both sides of the Roads"
        ],
        locationHighlights: [
            "1 Min to Nehru Outer Ring Road",
            "3 Min to Leonia & Celebrity Resorts",
            "5 Min to Keesaragutta Temple",
            "5 Min to Cheeryal Sri Lakshminarasimha Swamy Temple",
            "5 Min to Pallavi International School",
            "5 Min to District Collector Office Medchal-Malkajgiri",
            "10 Min to ECIL X Roads",
            "10 Min to Infosys",
            "15 Min to Cherlapally Railway Station",
            "15 Min to Jubilee Bus Stand",
            "30 Min to Medcity Hospital",
            "30 Min to TCS Adibatla and Aerospace",
            "30 Min Drive to Gachibowli ORR, Hi-tech City",
            "30 Min to Rajiv Gandhi International Airport",
            "30 Min to Secunderabad Railway Station",
        ]
    },
    "4": {
        name: "Harmony Woods",
        subtitle: "Premium Residential Open Plots in Future City",
        location: "Tummaluru",
        area: "53 Acres",
        plots: "526",
        badge: "FCDA Approved",
        coverPhoto: venture4Cover,
        images: [venture4Detail1],
        brochure: "/downloads/harmony.pdf?v=2",
        projectHighlights: [
            "Seating Plaza",
            "Courtyard Seating",
            "Yoga Area",
            "Half Basketball Court",
            "Pickleball Court",
            "Flower Garden with Seating Area",
            "Temple",
            "Indoor Games",
            "Meditation Open Lawn Area",
            "Box Cricket",
            "Open Lawn Area",
            "Tree-Shaded Seating Zones",
            "Outdoor Fitness Zone",
            "Elders' Seating Plaza",
            "Children's Play Area",
            "Guest Rooms",
            "Open Stage",
            "Party Lawn near Clubhouse",
            "Pool Deck",
            "Kids' Pool",
            "Swimming Pool",
            "Central Island",
            "Banquet Hall",
            "Fitness Gym",
            "Grade-Levelled CC Roads",
            "Badminton Court",
            "Open Air Theatre"
        ],
        locationHighlights: [
            "2 min from Srisailam Highway",
            "5 min to Upcoming Future City",
            "15 min to ORR Exit 14",
            "10 min to AI City and AI Skill University",
            "10 min to FCDA Headquarters",
            "17 min to Wonderla",
            "15 min to Rajiv Gandhi International Airport",
            "15 min to the Office of the Collector & District Magistrate, Ranga Reddy",
            "16 min to Foxconn Manufacturing Facility",
            "16 min to Kaynes Technology",
            "35 min to Gachibowli/HITEC City",
            "35 min to the Financial District",
            "40 min to Neopolis Knowledge City"
        ]
    },
    "5": {
        name: "Mahateja Hill View",
        subtitle: "Premium Residential Open Plots in Yadadri",
        location: "Yadadri",
        area: "200 - 500 Sq.Yds",
        plots: "300+",
        badge: "YTDA Approved",
        coverPhoto: venture5Cover,
        images: [],
        brochure: "/downloads/mahateja.pdf?v=2",
        projectHighlights: [
            "Main gate with beautiful arch",
            "YTDA approved layout with gated community",
            "30', 40' & 60' CC roads",
            "60' Road central lighting with landscaping",
            "Electricity with street lighting",
            "Over head water tank with water connectivity",
            "Underground sewage treatment plants",
            "Children's play area",
            "Well developed parks and avenue plantation",
            "Under construction duplex villas",
            "Bank loans available",
            "Ready to construction apartments, suite room & duplex villas",
            "24X7 Security",
            "Beautiful cottages with swimming pool",
            "100% Vasthu",
            "100% Clear Title",
            "Spot Registration"

        ],
        locationHighlights: [
            "Beside Rachakonda Police Commissionerate (Yadadri), RTC Depot, Government YTDA Layout",
            "Besides ECIL, KEESARA Road (150 feet 4 Lanes)",
            "Close to 'YADADRI' Main Temple",
            "Close to Sowbagya Resorts & Star hotels",
            "Close to YTDA Surrounding 'YADADRI' Temple Hill",
            "Close to RRR",
            "Near to SURENDRAPURI @ Yadagirigutta",
            "Near to Medical College",
            "Near to 100 Beds Hospital",
            "Near to 'ENTRY AND EXIT' Ghat Roads to temple",
            "3 Mins Drive to Hindu Mythology Museum",
            "5 Mins drive to Raigiri Railway Station (Proposed 'YADADRI' MMTS Near to NH163 Hyderabad - Warangal Highway)",
            "Govt Proposed ABHAYAARAYANAM, DEER PARK, VEDIC UNIVERSITY and VIP Guest Houses"
        ]
    }
};

const VentureDetails = () => {
    const { id } = useParams<{ id: string }>();
    const venture = ventureData[id as keyof typeof ventureData];
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const getBadgeColor = (badge: string) => {
        return "bg-gold text-white border-gold/50";
    };

    const openLightbox = (image: string) => {
        setSelectedImage(image);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage("");
    };

    // If venture not found, show default or redirect
    if (!venture) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <main className="pt-20">
                    <section className="py-16">
                        <div className="container mx-auto px-4 text-center">
                            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Venture Not Found</h1>
                            <p className="text-muted-foreground">The venture you're looking for doesn't exist.</p>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                {/* Hero Banner */}
                <section className="py-16 bg-forest-gradient">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block mb-4"
                        >
                            <span className={`${getBadgeColor(venture.badge)} px-4 py-1.5 rounded-full text-sm font-bold shadow-xl border backdrop-blur-sm`}>
                                {venture.badge}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4"
                        >
                            {venture.name}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-cream/80 text-lg max-w-2xl mx-auto"
                        >
                            {venture.subtitle}
                        </motion.p>
                    </div>
                </section>

                {/* Cover Photo Section */}
                <section className="py-8 bg-background">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={venture.coverPhoto}
                                alt={venture.name}
                                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-12">
                                {/* Project Highlights */}
                                <div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground mb-6 pb-2 border-b border-gold/20">Project Highlights</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {venture.projectHighlights.map((highlight, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 }}
                                                className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                                <span className="text-foreground/80">{highlight}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Location Highlights */}
                                <div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground mb-6 pb-2 border-b border-gold/20">Location Highlights</h2>
                                    <div className="space-y-4">
                                        {venture.locationHighlights.map((highlight, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-gold" />
                                                <span className="text-foreground/80">{highlight}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Info */}
                            <div className="lg:col-span-1">
                                <div className="bg-card p-6 rounded-xl shadow-lg border border-border sticky top-24">
                                    <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Project Information</h3>

                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                                            <div>
                                                <span className="block text-sm text-muted-foreground font-semibold">Location</span>
                                                <span className="text-foreground">{venture.location}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <FileText className="w-5 h-5 text-gold shrink-0 mt-1" />
                                            <div>
                                                <span className="block text-sm text-muted-foreground font-semibold">Property Type</span>
                                                <span className="text-foreground">Residential Open Plots</span>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Ruler className="w-5 h-5 text-gold shrink-0 mt-1" />
                                            <div>
                                                <span className="block text-sm text-muted-foreground font-semibold">Area</span>
                                                <span className="text-foreground">{venture.area}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Calendar className="w-5 h-5 text-gold shrink-0 mt-1" />
                                            <div>
                                                <span className="block text-sm text-muted-foreground font-semibold">Number of Plots</span>
                                                <span className="text-foreground">{venture.plots}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href={venture.brochure}
                                        download
                                        className="w-full block"
                                    >
                                        <Button className="w-full bg-gold hover:bg-gold/90 text-gold-foreground font-bold py-6 text-lg shadow-md hover:shadow-lg transition-all">
                                            <Download className="mr-2 w-5 h-5" />
                                            Download Brochure
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {venture.images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => openLightbox(img)}
                                    className="rounded-xl overflow-hidden shadow-md h-64 cursor-pointer group border-4 border-forest/50 hover:border-forest transition-all duration-300"
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery Image ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10"
                        aria-label="Close lightbox"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        src={selectedImage}
                        alt="Fullscreen view"
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default VentureDetails;
