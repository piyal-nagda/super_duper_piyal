import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { submitContactForm } from '../services/contact';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const result = await submitContactForm(formData);

    setStatus({
      type: result.success ? 'success' : 'error',
      message: result.message
    });
    
    if (result.success) {
      setFormData({ name: '', email: '', message: '' });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-primary"
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background/30 backdrop-blur-sm p-8 rounded-lg border border-primary/20 shadow-neon"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-textPrimary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-textPrimary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                  ></textarea>
                </div>
                
                {status.message && (
                  <div className={`p-4 rounded-lg ${
                    status.type === 'success' ? 'bg-accent/20 text-accent border border-accent/20' : 'bg-red-500/20 text-red-400 border border-red-500/20'
                  }`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary/20 border border-primary text-primary py-3 px-6 rounded-lg hover:bg-primary hover:text-background transition-all flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};