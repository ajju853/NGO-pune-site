import { Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const serviceLinks = [
  "Education",
  "Health and Hygiene",
  "Counselling and Life-skill",
  "Youth Empowerment",
  "Shelter and Clothing",
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Matruchhaya Balakashram Logo" className="h-24 w-24 object-contain mb-4" />
            <a
              href="https://www.facebook.com/MatruchhayaBalakashram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm mt-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              Facebook
            </a>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-accent">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About Us", "Services", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="block text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-accent">Useful Services Links</h4>
            <div className="space-y-2">
              {serviceLinks.map((link) => (
                <a
                  key={link}
                  href="#services"
                  className="block text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-accent">About Us</h4>
            <p className="text-accent italic text-sm mb-3">||Bal seva hich Ishwar seva||</p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Home for orphan homeless and single panel children. Join us to be a part of our family.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent" /> Matruchhaya Balakashram © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
