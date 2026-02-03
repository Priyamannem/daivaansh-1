import { useState } from "react";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@/components/SocialIcons";
import { motion } from "framer-motion";
import logoImg from "@/assets/logo.jpg";
import contactHero from "@/assets/contact-hero.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Contact Request*
    
Name: ${formData.name}
Mobile: ${formData.mobile}
Message: ${formData.message}

Please contact me.`;

    const whatsappUrl = `https://wa.me/919441621551?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast.success("Redirecting to WhatsApp...");
    setFormData({ name: "", mobile: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={contactHero}
              alt="Contact Support"
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
              className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-cream/80 text-lg max-w-2xl mx-auto"
            >
              Get in touch with us to schedule a free site visit or learn more about हमारा ventures.
            </motion.p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Side - Info & Quote */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest">Get in Touch</h2>
                  <div className="w-20 h-1 bg-gold"></div>
                </div>

                <blockquote className="border-l-4 border-gold pl-4 italic text-muted-foreground text-lg">
                  "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world."
                  <footer className="text-sm font-semibold text-forest mt-2 not-italic">- Franklin D. Roosevelt</footer>
                </blockquote>

                <div className="space-y-6 pt-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Phone className="w-6 h-6 text-forest group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-forest">Call Us</h3>
                      <p className="text-muted-foreground">+91 9441621551</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Mail className="w-6 h-6 text-forest group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-forest">Email Us</h3>
                      <p className="text-muted-foreground">contact@daivaanshinfra.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <MapPin className="w-6 h-6 text-forest group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-forest">Visit Us</h3>
                      <p className="text-muted-foreground">
                        2nd Floor, Pragati Nivas, Opposite to Anand Eye Hospital,<br />
                        Habsiguda, Hyderabad - 500007
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-cream p-8 rounded-2xl shadow-lg border border-gold/20"
              >
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-forest">Send us a Message</h3>
                  <p className="text-muted-foreground text-sm mt-1">Fill out the form below and we'll get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-forest">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white border-forest/20 focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-sm font-medium text-forest">Mobile Number</label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="Enter mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="bg-white border-forest/20 focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-forest">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px] bg-white border-forest/20 focus:border-gold resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gold" className="w-full font-bold shadow-md hover:shadow-lg transition-all py-6">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-[450px] relative z-0">
          <iframe
            src="https://maps.google.com/maps?q=Anand+Eye+Hospital+Habsiguda+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%)" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Daivaansh Infra Location"
          ></iframe>
        </section>

        {/* Footer Content Section with White Background */}
        <section className="bg-background text-foreground">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Company Info */}
              <div>
                <Link to="/" className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-lg border border-gray-100">
                    <img src={logoImg} alt="Daivaansh Logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-xl text-foreground">Daivaansh</span>
                    <span className="text-xs text-muted-foreground tracking-widest uppercase">Infra</span>
                  </div>
                </Link>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Building Trust, One Plot at a Time. Your trusted partner for HMDA, YTDA, and DTCP approved open plots in prime locations.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: FacebookLogo, label: "Facebook", href: "https://www.facebook.com/daivaanshinfra" },
                    { icon: InstagramLogo, label: "Instagram", href: "https://www.instagram.com/bonthalasampath?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                    { icon: YoutubeLogo, label: "YouTube", href: "https://www.youtube.com/@daivaansh_infra" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gold/20 transition-all cursor-pointer text-foreground hover:scale-110 shadow-sm"
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-serif font-semibold text-lg mb-6 text-foreground">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { name: "Home", path: "/" },
                    { name: "Ventures", path: "/ventures" },
                    { name: "About Us", path: "/about" },
                    { name: "Contact", path: "/contact" },
                  ].map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-gold transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Ventures */}
              <div>
                <h4 className="font-serif font-semibold text-lg mb-6 text-foreground">Our Ventures</h4>
                <ul className="space-y-3">
                  {[
                    { name: "Mahadev ORR Enclave", id: 1 },
                    { name: "Green Rich Homes", id: 2 },
                    { name: "Elegant Square", id: 3 },
                    { name: "Harmony Woods", id: 4 },
                    { name: "Mahateja Hill View", id: 5 },
                  ].map((venture) => (
                    <li key={venture.id}>
                      <Link
                        to={`/venture-details/${venture.id}`}
                        className="text-muted-foreground hover:text-gold transition-colors text-sm"
                      >
                        {venture.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h4 className="font-serif font-semibold text-lg mb-6 text-foreground">Contact Us</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="text-foreground">+91 9441621551</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">contact@daivaanshinfra.in</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      2nd Floor, Pragati Nivas, Opposite to Anand Eye Hospital, Habsiguda<br />
                      Hyderabad - 500007
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-cream/10 bg-primary">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-cream/60 text-sm">
                © {currentYear} Daivaansh Infra. All rights reserved. Designed and developed by <a href="https://hashtagheros.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Hashtag Heros Digital Solutions</a>
              </p>
              <p className="text-cream/60 text-sm italic">
                "Daivaansh Infra – Building Trust, One Plot at a Time."
              </p>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
