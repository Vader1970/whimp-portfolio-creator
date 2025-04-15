
import React from 'react';
import { Building, ChartBar, Globe, MessageSquare, ShieldCheck, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import InfoSection from '@/components/shared/InfoSection';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Small Business Owner",
    content: "Chance Voight has transformed our investment strategy. Their expertise in the ASX market delivered returns that exceeded our expectations. The team is professional and responsive.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "David Thompson",
    position: "Retiree",
    content: "As someone looking for stable retirement income, their fixed-term investment options have been perfect. The consistent returns allow me to enjoy retirement without financial stress.",
    rating: 5,
    avatar: "DT"
  },
  {
    name: "Emma Wilson",
    position: "Corporate Investor",
    content: "The team at Chance Voight truly understands the Australasian market. Their insights and personalized approach to investment management have been invaluable to our company.",
    rating: 5,
    avatar: "EW"
  },
  {
    name: "Michael Chen",
    position: "Tech Entrepreneur",
    content: "Bernard and his team deliver on their promises. Their deep understanding of market trends and commitment to client success makes them stand out in the investment landscape.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Jessica Parker",
    position: "Family Trust Manager",
    content: "Our trust has been with Chance Voight for three years now. The transparency, professional management, and consistent returns have made this partnership incredibly valuable.",
    rating: 5,
    avatar: "JP"
  },
  {
    name: "Robert Williams",
    position: "Property Developer",
    content: "The diversification strategies suggested by Chance Voight's team helped us weather market fluctuations while maintaining healthy returns. Their expertise is second to none.",
    rating: 5,
    avatar: "RW"
  },
  {
    name: "Olivia Evans",
    position: "Financial Analyst",
    content: "As someone who works in finance, I appreciate the rigorous approach Chance Voight takes with investments. Their research-driven strategy consistently delivers results.",
    rating: 5,
    avatar: "OE"
  },
  {
    name: "James Sullivan",
    position: "Medical Professional",
    content: "With limited time to manage my investments, working with Chance Voight has been the best decision. They handle everything professionally while keeping me informed every step of the way.",
    rating: 5,
    avatar: "JS"
  }
];

const ChanceVoight = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900 z-[-1]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 z-[-1]"></div>
        
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Building New Zealand's ASX Hedge Fund
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Chance Voight Investment Partners Limited
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Company Overview</h2>
              
              <p className="text-navy-700 leading-relaxed">
                Founded in 2018, Chance Voight Investment Partners is a 100% Kiwi-owned investment firm headquartered in North Canterbury. With a team of 40 professionals, we are committed to providing investors with products that achieve attractive returns and a superior investor experience.
              </p>
              
              <p className="text-navy-700 leading-relaxed">
                Bernard Whimp CEO/CIO has the backing of his highly capable corporate team which he has carefully assembled to take the business forward. Set to command an impressive one billion in capital in the next four years, the team continues to be a well-oiled machine and is guided relentlessly by the entrepreneur.
              </p>
              
              <p className="text-navy-700 leading-relaxed">
                The Chance Voight name has been trademarked in all the major financial centres worldwide, which has ensured the firm is well-positioned for its global ambitions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                  alt="Chance Voight Office Building" 
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 glass-panel p-4 md:p-6">
                <p className="font-serif text-navy-900 text-xl font-semibold">Est. 2018</p>
                <p className="text-navy-600">North Canterbury, New Zealand</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Investment Approach</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="mb-4 flex justify-center">
                <ChartBar size={36} className="text-navy-800" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3 text-center">Australian Stock Market Focus</h3>
              <p className="text-navy-600 text-center">
                Focusing primarily on the Australasian financial markets, Chance Voight is a trademarked name for funds management and financial services in several key countries. Our dedicated stock picking team specialises in generating excess returns from the Australian Stock Market (ASX) and private market share offerings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="mb-4 flex justify-center">
                <ShieldCheck size={36} className="text-navy-800" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3 text-center">Fixed-Term Investments</h3>
              <p className="text-navy-600 text-center">
                Additionally, Chance Voight provides wholesale investors with high-yield, fixed-term, interest rate investments. Our funds aim to deliver premium returns and offer investors an opportunity to generate a regular income stream or grow their wealth by compounding their returns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-navy-600 text-lg">
              Chance Voight is a firm dedicated to high quality relationships with everyone it deals with. Our investors expressed nothing but positive feedback about their experience with us.
            </p>
          </motion.div>

          <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                          <p className="text-navy-600 mb-6 italic">"{testimonial.content}"</p>
                        </div>
                        <div className="flex items-center mt-4">
                          <Avatar className="h-10 w-10 mr-4">
                            <AvatarImage src="" alt={testimonial.name} />
                            <AvatarFallback className="bg-navy-100 text-navy-700">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-navy-900">{testimonial.name}</p>
                            <p className="text-sm text-navy-500">{testimonial.position}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="static transform-none bg-white border border-navy-200 hover:bg-navy-50" />
                <CarouselNext className="static transform-none bg-white border border-navy-200 hover:bg-navy-50" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80" 
                  alt="Chance Voight Values" 
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-navy-700 leading-relaxed">
                At Chance Voight Investment Partners, our goal is to create long-term value while managing risk. We are committed to helping New Zealanders make the most of their investment dollar.
              </p>
              
              <ul className="space-y-4 pt-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-navy-100 rounded-full p-2">
                      <Users size={24} className="text-navy-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-navy-900 mb-1">Client-Centered</h3>
                    <p className="text-navy-600">We prioritize our investors' needs and goals, ensuring a superior investor experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-navy-100 rounded-full p-2">
                      <Globe size={24} className="text-navy-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-navy-900 mb-1">Global Vision</h3>
                    <p className="text-navy-600">With trademarks secured in major financial centers, we're positioned for global growth.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-navy-100 rounded-full p-2">
                      <Building size={24} className="text-navy-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-navy-900 mb-1">Kiwi Owned</h3>
                    <p className="text-navy-600">We take pride in being a 100% New Zealand owned and operated investment firm.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Partner with Chance Voight
            </h2>
            <p className="text-navy-700 text-lg mb-8">
              Discover how our expertise can help you achieve your investment goals.
            </p>
            <Button asChild size="lg" className="bg-navy-800 hover:bg-navy-700 text-white">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ChanceVoight;
