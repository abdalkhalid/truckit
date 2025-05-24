
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import CtaBanner from '../components/CtaBanner';
import HeroSection from '../components/HeroSection';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our operations, from customer service to delivery execution."
    },
    {
      title: "Integrity",
      description: "We conduct our business with the highest standards of honesty, transparency, and ethical behavior."
    },
    {
      title: "Innovation",
      description: "We continuously seek innovative solutions to improve efficiency and provide better service to our clients."
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices that reduce our carbon footprint."
    },
    {
      title: "Customer Focus",
      description: "We put our customers at the center of everything we do, tailoring our services to meet their unique needs."
    },
    {
      title: "Teamwork",
      description: "We foster a collaborative environment where diverse perspectives drive better results for our clients."
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "TruckIt was established with a vision to revolutionize global logistics."
    },
    {
      year: "2013",
      title: "International Expansion",
      description: "Opened our first international offices in Europe and Asia to serve global clients."
    },
    {
      year: "2015",
      title: "Technology Integration",
      description: "Launched our proprietary logistics management platform for real-time tracking and analytics."
    },
    {
      year: "2018",
      title: "Sustainability Initiative",
      description: "Implemented comprehensive green logistics program to reduce environmental impact."
    },
    {
      year: "2020",
      title: "Strategic Partnerships",
      description: "Formed strategic alliances with major carriers and technology providers worldwide."
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple awards for excellence in logistics service and innovation."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection
        title="About Truckit"
        subtitle="Your trusted partner in global logistics since 2010"
        backgroundImage="https://image.lexica.art/full_webp/9b090e8c-a2e4-464a-99cc-bdbce0551454"
      />
      
      {/* Our Story */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollToReveal>
              <div>
                <h2 className="section-title">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, TruckIt began with a simple mission: to provide businesses with reliable, 
                  efficient, and innovative logistics solutions that empower global trade.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small team with big ambitions has grown into a global logistics provider serving 
                  clients across industries and continents. Our journey has been defined by a relentless focus on 
                  customer service, technological innovation, and operational excellence.
                </p>
                <p className="text-gray-600">
                  Today, we leverage our extensive network, industry expertise, and cutting-edge technology to deliver 
                  customized logistics solutions that help our clients navigate the complexities of global supply chains 
                  with confidence and ease.
                </p>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200}>
              <div className="relative h-0 pb-[75%] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://image.lexica.art/full_webp/68ce504c-c69f-4211-be3a-9fda530d964b" 
                  alt="Team meeting" 
                  className="absolute h-full w-full object-cover"
                />
              </div>
            </ScrollToReveal>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Our Mission & Vision</h2>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollToReveal delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="mb-4 p-4 bg-accent-100 inline-block rounded-full text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver innovative and efficient logistics solutions that connect businesses to markets worldwide, 
                  enabling our clients to focus on their core operations while we take care of their supply chain needs.
                </p>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="mb-4 p-4 bg-accent-100 inline-block rounded-full text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the global leader in logistics services, recognized for our operational excellence, 
                  technological innovation, and commitment to sustainability, while creating value for our clients, 
                  employees, and the communities we serve.
                </p>
              </div>
            </ScrollToReveal>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="section">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Our Core Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                These principles guide our actions and decisions, shaping our company culture and defining how we interact with our clients, partners, and each other.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <ScrollToReveal delay={index * 100} key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="flex items-start mb-4">
                    <CheckCircle2 className="text-accent mr-3 mt-1" size={20} />
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollToReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Timeline */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Our Journey</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Since our founding, we've been on a path of continuous growth and innovation.
                Here are some key milestones from our journey.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent-200 hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <ScrollToReveal key={index} delay={index * 100}>
                <div className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year bubble */}
                  <div className="mb-4 md:mb-0 md:mx-8 z-10">
                    <div className="bg-accent text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-white p-6 rounded-lg shadow-md md:w-5/12 ${index % 2 === 0 ? 'text-right md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </ScrollToReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our experienced leadership team brings decades of industry expertise and a shared commitment to excellence.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollToReveal delay={100}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <img 
                    src="https://cdn.vectorstock.com/i/500p/01/16/business-man-icon-vector-2050116.jpg" 
                    alt="CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">Muhammad Ali Khan</h3>
                  <p className="text-accent">Chief Executive Officer</p>
                </div>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <img 
                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" 
                    alt="COO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">Ayesha Ahmed</h3>
                  <p className="text-accent">Director of Operations</p>
                </div>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={300}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <img 
                    src="https://cdn.vectorstock.com/i/500p/01/16/business-man-icon-vector-2050116.jpg" 
                    alt="CTO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">Farhan Qadir</h3>
                  <p className="text-accent">Head of Technology</p>
                </div>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={400}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <img 
                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" 
                    alt="CFO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">Sana Malik</h3>
                  <p className="text-accent">Financial Director</p>
                </div>
              </div>
            </ScrollToReveal>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CtaBanner />
      
      <Footer />
    </div>
  );
};

export default About;
