import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="https://raw.githubusercontent.com/YoruAkio/ProjectAssets/refs/heads/main/akio/pbeans/3d_beans_compressed.png" 
                alt="PBeans Logo" 
                width={40} 
                height={40}
                className="object-contain rounded-md"
              />
              <span className="font-bold text-xl text-stone-800">p<span className="text-red-500 font-medium">豆</span></span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</NavLink>
            <NavLink href="#about" onClick={(e) => handleScroll(e, 'about')}>About</NavLink>
            <NavLink href="#menu" onClick={(e) => handleScroll(e, 'menu')}>Menu</NavLink>
            <NavLink href="#shop" onClick={(e) => handleScroll(e, 'shop')}>Shop</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              href="#delivery"
              onClick={(e) => handleScroll(e, 'delivery')}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-stone-800 text-white rounded-md hover:bg-stone-700 transition duration-300"
            >
              Order Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden pt-4 pb-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              <MobileNavLink href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</MobileNavLink>
              <MobileNavLink href="#about" onClick={(e) => handleScroll(e, 'about')}>About</MobileNavLink>
              <MobileNavLink href="#menu" onClick={(e) => handleScroll(e, 'menu')}>Menu</MobileNavLink>
              <MobileNavLink href="#shop" onClick={(e) => handleScroll(e, 'shop')}>Shop</MobileNavLink>
              <motion.button
                whileTap={{ scale: 0.95 }}
                href="#delivery"
                onClick={(e) => handleScroll(e, 'delivery')}
                className="px-4 py-2 bg-stone-800 text-white rounded-md w-full text-center"
              >
                Order Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, onClick }) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="text-stone-800 hover:text-stone-600 text-sm font-medium cursor-pointer"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
};

const MobileNavLink = ({ href, onClick, children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-stone-800 hover:text-stone-600 text-sm font-medium py-2 block"
    >
      {children}
    </a>
  );
};

export default Navbar;