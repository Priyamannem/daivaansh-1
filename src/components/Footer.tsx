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
    <footer className="bg-forest-gradient text-cream">
      {!minimal && (
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg border border-gold/20 transition-transform group-hover:scale-105">
                  <img src={logoImg} alt="Daivaansh Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl text-cream">Daivaansh</span>
                  <span className="text-xs text-cream/60 tracking-widest uppercase">Infra</span>
                </div>
              </Link>
              <p className="text-cream/80 text-sm leading-relaxed mb-6">
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
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-all cursor-pointer shadow-md hover:scale-110"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
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
                      className="text-cream/80 hover:text-gold transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Ventures */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-6">Our Ventures</h4>
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
                      className="text-cream/80 hover:text-gold transition-colors text-sm"
                    >
                      {venture.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-cream">+91 9441621551</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-cream/80 text-sm">contact@daivaanshinfra.in</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-cream/80 text-sm">
                    2nd Floor, Pragati Nivas, Opposite to Anand Eye Hospital,Habsiguda<br />
                    Hyderabad - 500007
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div className="border-t border-cream/10 bg-black/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm">
            © {currentYear} Daivaansh Infra. All rights reserved. Designed and developed by <a href="https://hashtagheros.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Hashtag Heros Digital Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
