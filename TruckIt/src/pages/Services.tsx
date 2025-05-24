
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import CtaBanner from '../components/CtaBanner';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { Plane, Ship, Truck, Warehouse, FileCheck, FileArchive, Globe, Package } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "air-freight",
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air freight services for time-sensitive shipments. We offer global coverage with options for express, standard, and economy services to meet your specific needs.",
      features: [
        "Next-day and express delivery options",
        "Consolidated air freight for cost efficiency",
        "Specialized handling for delicate items",
        "Temperature-controlled solutions",
        "Door-to-door service available",
        "Real-time shipment tracking"
      ],
      image: "https://image.lexica.art/full_webp/9258988f-c3bd-4431-bc1c-84981a0a219d"
    },
    {
      id: "sea-freight",
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective sea freight solutions for large shipments. We offer both FCL (Full Container Load) and LCL (Less than Container Load) options to accommodate shipments of all sizes.",
      features: [
        "FCL and LCL shipping options",
        "Competitive rates with major shipping lines",
        "Specialized container solutions",
        "Port-to-port or door-to-door service",
        "Break-bulk and project cargo handling",
        "NVOCC services"
      ],
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
    },
    {
      id: "land-transport",
      icon: Truck,
      title: "Land Transport",
      description: "Efficient road and rail transportation services with extensive networks across continents. Our land transport options provide flexible and reliable logistics solutions for domestic and cross-border shipments.",
      features: [
        "Full truckload (FTL) and less than truckload (LTL)",
        "Intermodal transportation services",
        "Cross-border expertise",
        "Specialized vehicles for unique cargo",
        "Express and same-day delivery options",
        "Advanced vehicle tracking systems"
      ],
      image: "https://image.lexica.art/full_webp/13286397-2ebc-48fd-a01f-63ccf639cd7b"
    },
    {
      id: "warehousing",
      icon: Warehouse,
      title: "Warehousing",
      description: "Secure warehousing and distribution services with state-of-the-art facilities. Our warehousing solutions include inventory management, order fulfillment, and distribution to streamline your supply chain.",
      features: [
        "Short and long-term storage solutions",
        "Inventory management and control",
        "Pick and pack services",
        "Cross-docking capabilities",
        "Temperature-controlled facilities",
        "24/7 security and monitoring"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
    },
    {
      id: "customs-brokerage",
      icon: FileCheck,
      title: "Customs Brokerage",
      description: "Expert customs clearance services to navigate complex international regulations. Our licensed customs brokers ensure smooth and compliant border crossings for your shipments.",
      features: [
        "Import and export declaration filing",
        "Customs documentation preparation",
        "Tariff classification assistance",
        "Duty and tax calculation",
        "Regulatory compliance guidance",
        "Trade consulting services"
      ],
      image: "https://image.lexica.art/full_webp/0f72d858-e369-4d78-839b-181a4339512f"
    },
    {
      id: "project-logistics",
      icon: FileArchive,
      title: "Project Logistics",
      description: "Specialized logistics solutions for complex projects. We handle oversized, heavy, and high-value cargo with precision planning and execution to ensure successful project delivery.",
      features: [
        "End-to-end project management",
        "Heavy lift and out-of-gauge cargo handling",
        "Detailed route surveys and planning",
        "Specialized equipment procurement",
        "Risk assessment and mitigation",
        "On-site supervision and reporting"
      ],
      image: "https://image.lexica.art/full_webp/e753453a-b120-4960-9155-52d92489a334"
    },
    {
      id: "supply-chain",
      icon: Globe,
      title: "Supply Chain Solutions",
      description: "Comprehensive supply chain management services to optimize your operations. We design and implement solutions that improve efficiency, reduce costs, and enhance visibility across your supply chain.",
      features: [
        "Supply chain design and optimization",
        "Inventory and demand planning",
        "Vendor management",
        "Just-in-time delivery systems",
        "Performance analytics and reporting",
        "Continuous improvement programs"
      ],
      image: "https://image.lexica.art/full_webp/95493648-48a5-4399-9bc9-1e960ea10b4d"
    },
    {
      id: "specialized-shipping",
      icon: Package,
      title: "Specialized Shipping",
      description: "Tailored logistics solutions for unique cargo requirements. We specialize in handling dangerous goods, perishables, high-value items, and other cargo that requires specialized care and expertise.",
      features: [
        "Dangerous goods handling and documentation",
        "Temperature-controlled shipping",
        "High-value cargo security protocols",
        "Pharmaceutical and healthcare logistics",
        "Fine art and antiques transportation",
        "Emergency and time-critical deliveries"
      ],
      image: "https://image.lexica.art/full_webp/33652c4c-40d2-4ead-94cd-ae7e9930c822"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive logistics solutions tailored to your business needs"
        backgroundImage="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
      />
      
      {/* Services Overview */}
      <section className="section">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Comprehensive Logistics Solutions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                From air and sea freight to specialized shipping and supply chain optimization, 
                we offer a complete range of logistics services to meet your business needs.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollToReveal key={service.id} delay={index * 100}>
                <div className="card group h-full flex flex-col">
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-4 p-4 bg-accent-100 inline-block rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{service.description.split('.')[0] + '.'}</p>
                    <a 
                      href={`#${service.id}`} 
                      className="text-accent font-medium flex items-center hover:underline mt-auto"
                    >
                      Learn more
                      <svg 
                        className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollToReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          id={service.id} 
          key={service.id} 
          className={`section ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollToReveal>
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h2 className="section-title">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-accent mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/quote" className="btn btn-accent">
                    Request a Quote
                  </Link>
                </div>
              </ScrollToReveal>
              
              <ScrollToReveal delay={200}>
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative h-0 pb-[75%] rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={service.image}
                      alt={service.title} 
                      className="absolute h-full w-full object-cover"
                    />
                  </div>
                </div>
              </ScrollToReveal>
            </div>
          </div>
        </section>
      ))}
      
      {/* Call to Action */}
      <CtaBanner />
      
      <Footer />
    </div>
  );
};

export default Services;
