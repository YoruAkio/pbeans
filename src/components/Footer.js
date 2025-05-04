import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiFacebook, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-stone-100 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-800">p<span className="text-red-500">豆</span> <span className="font-normal">Coffee</span></h3>
            <p className="text-stone-600 mb-4 text-sm">
              Experience our unique coffee blends that fuse traditional Japanese techniques with rich Indonesian flavors. <span className="text-stone-700">特別な体験をお楽しみください。</span>
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FiInstagram />} />
              <SocialIcon icon={<FiTwitter />} />
              <SocialIcon icon={<FiFacebook />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-800">Opening Hours <span className="text-red-500 text-sm">営業時間</span></h3>
            <p className="text-stone-600 text-sm mb-2">Monday - Friday: 8:00 - 20:00</p>
            <p className="text-stone-600 text-sm mb-2">Saturday: 9:00 - 21:00</p>
            <p className="text-stone-600 text-sm">Sunday: 9:00 - 18:00</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-800">Contact Us</h3>
            <ContactItem icon={<FiMapPin />} text="Magetan, Indonesia" />
            <ContactItem icon={<FiPhone />} text="+62 877 991 56435" />
            <ContactItem icon={<FiMail />} text="hello@akio.lol" />
          </div>
        </div>
        
        <div className="border-t border-stone-200 mt-8 pt-8 text-center">
          <p className="text-sm text-stone-500">© {new Date().getFullYear()} YoruAkio. All rights reserved. <span className="text-red-500">ありがとう</span></p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <motion.a 
      href="#" 
      className="w-8 h-8 rounded-full flex items-center justify-center bg-stone-200 text-stone-700 hover:bg-stone-800 hover:text-white transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

const ContactItem = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-2 mb-3">
      <span className="text-stone-700">{icon}</span>
      <span className="text-sm text-stone-600">{text}</span>
    </div>
  );
};

export default Footer;