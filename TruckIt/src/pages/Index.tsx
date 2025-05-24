
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToReveal from '../components/ScrollToReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import IndustryCard from '../components/IndustryCard';
import { Plane, Ship, Truck, Warehouse, Globe, Clock, FileCheck, Users } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection
        title="Premier Logistics Services Along Asia’s Vital Trade Routes"
        subtitle="Comprehensive logistics services for Pakistan, Afghanistan, and Iran—driven by experience, efficiency, and regional expertise."
        backgroundImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80"
      />

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Our Specialized Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                With deep expertise in challenging regions, we deliver comprehensive logistics solutions
                for Afghanistan, Pakistan, Iran and beyond with unmatched regional knowledge.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Air Freight"
              description="Expedited air services to Afghanistan, Pakistan and Iran with specialized handling for challenging destinations."
              icon={Plane}
              delay={100}
              link="/services"
            />
            <ServiceCard
              title="Sea Freight"
              description="Strategic ocean freight connecting Pakistan's ports to global destinations with FCL and LCL solutions."
              icon={Ship}
              delay={200}
              link="/services"
            />
            <ServiceCard
              title="Land Transport"
              description="Specialized land transportation across challenging terrains in Afghanistan and Pakistan with security expertise."
              icon={Truck}
              delay={300}
              link="/services"
            />
            <ServiceCard
              title="Warehousing"
              description="Secure storage facilities in strategic locations with inventory management tailored for regional requirements."
              icon={Warehouse}
              delay={400}
              link="/services"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Regional Expertise</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                With over 15 years of experience navigating the complex logistics landscape of Central Asia and the Middle East,
                our local knowledge ensures your shipments move securely and efficiently through challenging regions.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4 p-4 bg-accent-100 inline-block rounded-full text-accent">
                <Globe size={32} />
              </div>
              <AnimatedCounter end={10} suffix="+" delay={0} />
              <p className="font-semibold mt-2 mb-1">Countries Served</p>
              <p className="text-gray-600 text-sm">Specialized coverage in challenging regions</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4 p-4 bg-accent-100 inline-block rounded-full text-accent">
                <FileCheck size={32} />
              </div>
              <AnimatedCounter end={5000} suffix="+" delay={200} />
              <p className="font-semibold mt-2 mb-1">Successful Deliveries</p>
              <p className="text-gray-600 text-sm">To challenging destinations</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4 p-4 bg-accent-100 inline-block rounded-full text-accent">
                <Users size={32} />
              </div>
              <AnimatedCounter end={250} suffix="+" delay={400} />
              <p className="font-semibold mt-2 mb-1">Regional Partners</p>
              <p className="text-gray-600 text-sm">Local experts in each market</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4 p-4 bg-accent-100 inline-block rounded-full text-accent">
                <Clock size={32} />
              </div>
              <AnimatedCounter end={15} prefix="" suffix=" Years" delay={600} />
              <p className="font-semibold mt-2 mb-1">Regional Experience</p>
              <p className="text-gray-600 text-sm">Deep knowledge of local challenges</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries We Serve */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Specialized Solutions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our tailored logistics solutions address the unique requirements and challenges
                of moving freight to and from Afghanistan, Pakistan, and the Gulf region.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCard
              title="Humanitarian Aid"
              description="Specialized handling for aid deliveries to challenging regions with customs expertise"
              image="https://image.lexica.art/full_webp/3507a2cb-262a-46cc-a107-4dd523ba6bac"
              delay={0}
            />
            <IndustryCard
              title="Construction & Engineering"
              description="Project cargo and heavy equipment transportation to developing infrastructure sites"
              image="https://image.lexica.art/full_webp/f103b901-96ab-4348-9f4e-0c37c206ac4c"
              delay={100}
            />
            <IndustryCard
              title="Defense & Security"
              description="Secure logistics with specialized handling for sensitive materials and equipment"
              image="https://image.lexica.art/full_webp/31aef292-1de6-4dc8-b984-880021731dbb"
              delay={200}
            />
            <IndustryCard
              title="Agricultural Exports"
              description="Cold chain solutions for Afghan and Pakistani agricultural products reaching global markets"
              image="https://image.lexica.art/full_webp/9bd20971-37d4-4ba0-85e4-4de98dd6ebb2"
              delay={300}
            />
            <IndustryCard
              title="Oil & Gas"
              description="Specialized transportation for equipment and materials supporting energy infrastructure"
              image="https://image.lexica.art/full_webp/17f012b1-b2d4-4362-8db3-8e9b2ee22879"
              delay={400}
            />
            <IndustryCard
              title="Textile Industry"
              description="Export logistics for Pakistan's textile sector with customs documentation expertise"
              image="https://image.lexica.art/full_webp/9df315a6-2ee7-4914-a3a4-4dad1b3afd71"
              delay={500}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section">
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </section>
      
      {/* Call to Action */}
      <CtaBanner />
      
      <Footer />
    </div>
  );
};

export default Index;
