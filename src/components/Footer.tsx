import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-dancing text-2xl font-bold mb-4">Healthy Jeewan</h3>
            <p className="text-sage-200">
              Discover the joy of healthy cooking with our delicious recipes and video demonstrations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sage-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-sage-200 hover:text-white transition-colors">Recipes</a></li>
              <li><a href="#" className="text-sage-200 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="text-sage-200 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-sage-200 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-sage-200 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-sage-200 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sage-700 mt-8 pt-8 text-center text-sage-200">
          <p>&copy; {new Date().getFullYear()} Healthy Jeewan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;