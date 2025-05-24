
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import CtaBanner from '../components/CtaBanner';
import HeroSection from '../components/HeroSection';
import { CheckCircle2 } from 'lucide-react';

const Industries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    {
      id: "retail",
      title: "Retail & E-commerce",
      description: "Optimized logistics solutions for retail and e-commerce businesses. We help you manage inventory, streamline fulfillment, and deliver exceptional customer experiences through efficient supply chain management.",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      benefits: [
        "Optimized inventory management",
        "Fast and reliable order fulfillment",
        "Last-mile delivery solutions",
        "Returns management",
        "Scalable solutions for peak seasons",
        "E-commerce platform integration"
      ]
    },
    {
      id: "pharmaceutical",
      title: "Pharmaceutical",
      description: "Specialized logistics for the pharmaceutical industry. Our temperature-controlled shipping and handling ensure the integrity of sensitive medical products throughout the supply chain, with full compliance to regulatory requirements.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2430&q=80",
      benefits: [
        "GDP-compliant transportation",
        "Temperature-controlled shipping",
        "End-to-end supply chain visibility",
        "Regulatory documentation management",
        "Specialized handling for sensitive products",
        "Secure cold chain logistics"
      ]
    },
    {
      id: "automotive",
      title: "Automotive",
      description: "Reliable logistics for the automotive industry. From just-in-time delivery of components to finished vehicle transport, we provide specialized solutions that keep your production lines running smoothly and efficiently.",
      image: "https://images.unsplash.com/photo-1565043589221-2b0b3ff158e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      benefits: [
        "Just-in-time delivery systems",
        "Production line supply management",
        "Specialized automotive parts handling",
        "Finished vehicle transportation",
        "Aftermarket parts distribution",
        "Customs clearance for automotive goods"
      ]
    },
    {
      id: "food",
      title: "Food & Beverage",
      description: "Specialized logistics for perishable goods. Our cold chain solutions ensure that your food and beverage products maintain their quality and safety from source to shelf, with temperature monitoring throughout the journey.",
      image: "https://images.unsplash.com/photo-1570275239925-4af0aa78617c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      benefits: [
        "Temperature-controlled transportation",
        "Shelf-life management",
        "Quality and safety compliance",
        "Rapid distribution for fresh products",
        "Food-grade warehousing facilities",
        "HACCP and other certifications"
      ]
    },
    {
      id: "electronics",
      title: "Electronics",
      description: "Secure logistics for sensitive electronic equipment. We provide specialized handling and transportation for high-value and delicate electronic items, ensuring they reach their destination in perfect condition.",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      benefits: [
        "Anti-static handling protocols",
        "High-security transportation",
        "Climate-controlled environments",
        "Advanced tracking technologies",
        "Insurance options for high-value items",
        "Specialized packaging solutions"
      ]
    },
    {
      id: "construction",
      title: "Construction",
      description: "Heavy equipment and material logistics for construction projects. From transporting oversized machinery to delivering building materials on schedule, we support your construction projects with reliable logistics solutions.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      benefits: [
        "Heavy equipment transportation",
        "Project cargo management",
        "Just-in-time material delivery",
        "Site logistics coordination",
        "Specialized lifting and handling equipment",
        "Permits and escorts for oversized loads"
      ]
    },
    {
      id: "fashion",
      title: "Fashion & Apparel",
      description: "Specialized logistics for the fashion industry. From managing seasonal collections to handling delicate garments, we provide tailored solutions that help you meet the demands of fast-moving fashion retail.",
      image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2235&q=80",
      benefits: [
        "Seasonal inventory management",
        "Garment-on-hanger transportation",
        "Quality control and inspection",
        "Retail distribution and allocation",
        "Fast fashion supply chain solutions",
        "Cross-docking for rapid turnaround"
      ]
    },
    {
      id: "technology",
      title: "Technology & IT",
      description: "Secure and specialized logistics for technology companies. From transporting sensitive server equipment to distributing consumer electronics, we provide tailored solutions for the technology sector.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80",
      benefits: [
        "Data center logistics",
        "Secure chain of custody",
        "New product launch support",
        "Reverse logistics for repairs",
        "IT asset disposition services",
        "Technical installation coordination"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection
        title="Industries We Serve"
        subtitle="Specialized logistics solutions tailored to your industry's unique requirements"
        backgroundImage="https://images.unsplash.com/photo-1561494653-744c43aed0c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2387&q=80"
      />
      
      {/* Industries Overview */}
      <section className="section">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Industry-Specific Logistics Expertise</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We understand that each industry has unique logistics requirements. 
                Our specialized solutions are designed to address the specific challenges 
                and needs of different sectors, delivering tailored services that optimize 
                your supply chain operations.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <ScrollToReveal key={industry.id} delay={index * 100}>
                <a href={`#${industry.id}`} className="block">
                  <div className="relative group overflow-hidden rounded-lg h-64">
                    {/* Background Image with Overlay */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${industry.image})` }}
                    >
                      <div className="absolute inset-0 bg-primary bg-opacity-60 group-hover:bg-opacity-70 transition-all duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative h-full p-6 flex flex-col justify-end text-white z-10">
                      <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                      <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {industry.description.split('.')[0] + '.'}
                      </p>
                      <div 
                        className="text-accent-200 font-medium flex items-center hover:text-white transition-colors"
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
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollToReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Industry Sections */}
      {industries.map((industry, index) => (
        <section 
          id={industry.id} 
          key={industry.id} 
          className={`section ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollToReveal>
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h2 className="section-title">{industry.title}</h2>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">How We Help</h3>
                  <ul className="space-y-3 mb-6">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="text-accent mr-2 mt-1" size={18} />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="/quote" className="btn btn-accent">
                    Get Industry-Specific Solutions
                  </a>
                </div>
              </ScrollToReveal>
              
              <ScrollToReveal delay={200}>
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative h-0 pb-[75%] rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={industry.image}
                      alt={industry.title} 
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

export default Industries;
