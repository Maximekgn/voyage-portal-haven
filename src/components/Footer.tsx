
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-travel-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">
              KGN-Voyage
            </h3>
            <p className="text-travel-300 text-sm leading-relaxed">
              Votre partenaire de confiance pour des voyages inoubliables et des expériences uniques à travers le monde.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-travel-300 hover:text-white transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-travel-300 hover:text-white transition-colors duration-200">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-travel-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-travel-300 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-travel-300">
              <li>123 Avenue du Voyage</li>
              <li>75008 Paris, France</li>
              <li>Tél: +33 1 23 45 67 89</li>
              <li>Email: contact@voyage-elite.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-travel-300 hover:text-white transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-travel-300 hover:text-white transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-travel-300 hover:text-white transition-colors duration-200"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-travel-800 mt-8 pt-8 text-center text-travel-400 text-sm">
          © {new Date().getFullYear()}KGN-Voyage. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
