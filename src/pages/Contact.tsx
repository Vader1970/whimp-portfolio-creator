
import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900 z-[-1]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 z-[-1]"></div>
        
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Get in Touch
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Reach out to Bernard Whimp or the Chance Voight Investment Partners team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Contact Information</h2>
                <p className="text-navy-700 leading-relaxed">
                  Whether you have questions about investment opportunities, 
                  would like to inquire about our services, or are interested in scheduling a consultation,
                  we would be delighted to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-navy-50 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-navy-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                    <p className="text-navy-700">contact@bernardwhimp.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-navy-50 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-navy-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Phone</h3>
                    <p className="text-navy-700">+64 9 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-navy-50 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-navy-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Office Location</h3>
                    <p className="text-navy-700">
                      Level 15, PWC Tower<br />
                      188 Quay Street<br />
                      Auckland 1010, New Zealand
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-navy-50 p-8 rounded-xl"
            >
              <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-navy-900">
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      className="bg-white border-navy-200"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-navy-900">
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      className="bg-white border-navy-200"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-navy-900">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-white border-navy-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-navy-900">
                    Phone (optional)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+64 21 123 4567"
                    className="bg-white border-navy-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-navy-900">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="min-h-[150px] bg-white border-navy-200"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-navy-800 hover:bg-navy-700 text-white">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Visit Our Office</h2>
            <p className="text-navy-600 leading-relaxed">
              Located in the heart of Auckland's business district.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px] relative"
          >
            {/* Placeholder for a map - in a real implementation, this would be a Google Maps or similar embed */}
            <div className="absolute inset-0 bg-navy-200 flex items-center justify-center">
              <p className="text-navy-600 text-lg">Interactive Map Would Be Displayed Here</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Investment Strategy?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Schedule a personal consultation with Bernard Whimp to discuss your investment goals.
            </p>
            <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
              <Phone className="mr-2 h-4 w-4" /> Schedule a Call
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
