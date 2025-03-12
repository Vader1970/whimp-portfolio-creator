
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand and Description */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold">Bernard Whimp</h3>
            <p className="text-gray-300 max-w-md">
              Over 30 years' experience in share investment, commercial property, 
              investment and development, property and securities law.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-gold-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@bernardwhimp.com" 
                className="text-gray-300 hover:text-gold-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/chance-voight" className="text-gray-300 hover:text-white transition-colors">Chance Voight</Link>
              <Link to="/media" className="text-gray-300 hover:text-white transition-colors">Media</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Auckland, New Zealand</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+64 (0) 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>contact@bernardwhimp.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Bernard Whimp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
