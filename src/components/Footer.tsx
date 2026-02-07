import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@/components/SocialIcons";
import logoImg from "@/assets/logo.jpg";

interface FooterProps {
  minimal?: boolean;
}

const Footer = ({ minimal = false }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-cream">
      {!minimal && (
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <Link to="/home" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg border border-gold/20 transition-transform group-hover:scale-105">
                  <img src={logoImg} alt="Daivaansh Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-lg text-cream">Daivaansh</span>
                  <span className="text-[10px] text-cream/60 tracking-widest uppercase">Infra</span>
                </div>
              </Link>
              <p className="text-cream/80 text-xs leading-relaxed mb-6">
                Building Trust, One Plot at a Time. Your trusted partner for HMDA, YTDA, and DTCP approved open plots.
              </p>
              <div className="flex gap-2">
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
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-all cursor-pointer shadow-md hover:scale-110"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold text-base mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "Home", path: "/home" },
                  { name: "Ventures", path: "/ventures" },
                  { name: "About Us", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-cream/80 hover:text-gold transition-colors text-xs"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Ventures */}
            <div>
              <h4 className="font-serif font-semibold text-base mb-4">Our Ventures</h4>
              <ul className="space-y-2">
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
                      className="text-cream/80 hover:text-gold transition-colors text-xs"
                    >
                      {venture.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-serif font-semibold text-base mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-cream text-xs">+91 9441621551</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-cream/80 text-xs">contact@daivaanshinfra.in</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-cream/80 text-xs">
                    Habsiguda, Hyderabad
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div className="border-t border-cream/10 bg-forest-dark/50">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-[10px]">
            © {currentYear} Daivaansh Infra. All rights reserved. Designed and developed by <a href="https://hashtagheros.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Hashtag Heros</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
