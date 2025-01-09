import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import photo from './assests/abc.jpg';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Hi, I'm Priyal Nagda
            </h1>
            <h2 className="text-2xl text-secondary font-semibold mb-4">Frontend Developer</h2>
            <p className="text-xl text-textPrimary mb-8">
              Passionate about creating beautiful and functional web experiences with modern technologies
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="./src/assests/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-primary/20 border border-primary text-primary rounded-lg hover:bg-primary hover:text-background transition-all"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Resume
              </motion.a>
            </div>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/piyal-nagda/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-primary text-white rounded-full hover:bg-opacity-80 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/priyal-nagda-piyal/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-secondary text-white rounded-full hover:bg-opacity-80 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:priyalmn0703@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-accent text-white rounded-full hover:bg-opacity-80 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-full w-full max-w-md mx-auto overflow-hidden shadow-2xl border-4 border-primary">
              <img
                src={photo} alt="Photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
