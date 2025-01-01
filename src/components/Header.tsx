import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('');

  const menuItems = ['Home', 'Skills', 'Projects', 'Contact'];

  return (
    <header className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Priyal Nagda
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 text-white transition-all duration-300 hover:text-primary group ${
                  activeItem === item ? 'text-primary' : ''
                }`}
                onHoverStart={() => setActiveItem(item)}
                onHoverEnd={() => setActiveItem('')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"
                  initial={false}
                  animate={activeItem === item ? { scaleX: 1 } : { scaleX: 0 }}
                />
                <motion.div
                  className="absolute -inset-1 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  initial={false}
                  animate={activeItem === item ? { opacity: 1 } : { opacity: 0 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pt-4 pb-2"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 text-white hover:text-primary transition-colors rounded-lg hover:bg-primary/10 mb-1"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};