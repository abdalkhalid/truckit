
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import CtaBanner from '../components/CtaBanner';
import HeroSection from '../components/HeroSection';
import { Button } from "@/components/ui/button"; 
import { CheckCircle2, Clock, ArrowRight, Truck, Plane, Package, Shield, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Afghanistan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Door-to-Door Shipments",
      description: "Complete logistics solutions from pickup at any global location to final delivery anywhere in Afghanistan.",
      icon: Package
    },
    {
      title: "Air Freight to Afghanistan",
      description: "Fast and reliable air cargo services to Kabul International Airport and other destinations across Afghanistan.",
      icon: Plane
    },
    {
      title: "Overland Transport",
      description: "Secure ground transportation via established corridors through Pakistan, Iran, Uzbekistan and Tajikistan.",
      icon: Truck
    },
    {
      title: "Customs Clearance",
      description: "Expert handling of complex Afghan customs regulations and documentation by our local specialists.",
      icon: Globe
    },
    {
      title: "Secure Logistics",
      description: "Enhanced security protocols for high-value or sensitive cargo throughout the entire supply chain.",
      icon: Shield
    },
    {
      title: "Project Logistics",
      description: "Specialized solutions for NGOs, development agencies and contractors working on reconstruction projects.",
      icon: MapPin
    }
  ];

  const keyPoints = [
    "Over 15 years of experience operating in Afghanistan",
    "Local offices in Kabul, Kandahar, Mazar-i-Sharif and Herat",
    "Multilingual staff fluent in Dari, Pashto and English",
    "Established relationships with local authorities",
    "Compliance with international security standards",
    "Real-time shipment tracking and regular status updates"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection
        title="Afghanistan Logistics Specialists"
        subtitle="Reliable transportation and supply chain solutions in one of the world's most challenging environments"
        backgroundImage="https://images.unsplash.com/photo-1600764664746-748dfe447da0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Introduction Section */}
      <section className="section py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollToReveal>
              <div>
                <h2 className="section-title text-3xl font-bold text-primary mb-6">Your Trusted Partner in Afghanistan</h2>
                <p className="text-gray-600 mb-4">
                  Since 2005, Truckit has successfully managed complex logistics operations throughout Afghanistan, 
                  delivering reliable solutions despite challenging infrastructure and security conditions.
                </p>
                <p className="text-gray-600 mb-4">
                  Our extensive local network, deep understanding of Afghan customs procedures, and 
                  commitment to security make us the preferred logistics partner for businesses, 
                  government agencies, and international organizations operating in Afghanistan.
                </p>
                <p className="text-gray-600">
                  Whether you need to transport humanitarian aid, construction materials, or commercial goods, 
                  our dedicated team provides end-to-end solutions tailored to the unique challenges of the Afghan market.
                </p>
                <div className="mt-6">
                  <Link to="/quote">
                    <Button variant="default" className="bg-accent hover:bg-accent-600 text-white">
                      Get a Customized Afghanistan Solution
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200}>
              <div className="relative h-0 pb-[75%] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                  alt="Afghanistan Logistics Operations" 
                  className="absolute h-full w-full object-cover"
                />
              </div>
            </ScrollToReveal>
          </div>
        </div>
      </section>
      
      {/* Services for Afghanistan */}
      <section className="section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title text-3xl font-bold text-primary mx-auto">Specialized Afghanistan Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our comprehensive logistics solutions are specifically designed to overcome the unique 
                challenges of operating in Afghanistan's complex environment.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollToReveal delay={index * 100} key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                  <div className="flex items-start mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg mr-4">
                      <service.icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </ScrollToReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Routes and Transportation */}
      <section className="section py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollToReveal>
              <div>
                <h2 className="section-title text-3xl font-bold text-primary mb-6">Strategic Routes to Afghanistan</h2>
                <p className="text-gray-600 mb-4">
                  Truckit operates multiple established transportation corridors into Afghanistan, 
                  ensuring reliable and secure delivery options for our clients:
                </p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent mr-3 mt-1" size={18} />
                    <div>
                      <span className="font-medium">Pakistan Route:</span> 
                      <span className="text-gray-600"> Via Karachi Port to Torkham and Chaman border crossings</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent mr-3 mt-1" size={18} />
                    <div>
                      <span className="font-medium">Central Asian Route:</span> 
                      <span className="text-gray-600"> Through Uzbekistan and Tajikistan via Hairatan and Shirkhan border points</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent mr-3 mt-1" size={18} />
                    <div>
                      <span className="font-medium">Iran Route:</span> 
                      <span className="text-gray-600"> Via Bandar Abbas to Islam Qala and Zaranj borders</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent mr-3 mt-1" size={18} />
                    <div>
                      <span className="font-medium">Air Routes:</span> 
                      <span className="text-gray-600"> Direct flights to Kabul, Kandahar, Mazar-i-Sharif and Herat</span>
                    </div>
                  </li>
                </ul>
                
                <p className="text-gray-600">
                  Our logistics experts continually assess these routes for efficiency and security, 
                  selecting the optimal path for your specific cargo needs.
                </p>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-white h-96">
                <iframe
                  title="Afghanistan Logistics Routes"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6575883.475867382!2d61.33003354778233!3d33.8355238015341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16eb6f8ff026d%3A0xc249f3a7b2383089!2sAfghanistan!5e0!3m2!1sen!2sus!4v1722090850253!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </ScrollToReveal>
          </div>
        </div>
      </section>
      
      {/* Key Advantages */}
      <section className="section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollToReveal delay={200}>
              <div className="relative h-0 pb-[75%] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1615824996195-e93e645b5ab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                  alt="Afghanistan Logistics Operations" 
                  className="absolute h-full w-full object-cover"
                />
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal>
              <div>
                <h2 className="section-title text-3xl font-bold text-primary mb-6">Why Choose Truckit for Afghanistan</h2>
                <p className="text-gray-600 mb-6">
                  With over 15 years of experience operating in Afghanistan's challenging environment, 
                  our team has developed unparalleled expertise in navigating the complex logistics landscape.
                </p>
                
                <ul className="space-y-3">
                  {keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="text-accent mr-3 mt-1" size={18} />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-white p-6 rounded-lg shadow-lg mt-8 border-l-4 border-accent">
                  <div className="flex items-center mb-2">
                    <Clock className="text-accent mr-2" size={20} />
                    <h4 className="text-lg font-bold">Estimated Transit Times</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">Air Freight:</span><br />
                        Express: 2-3 business days<br />
                        Standard: 4-7 business days
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">Land Routes:</span><br />
                        Pakistan: 14-21 days<br />
                        Central Asia: 18-25 days<br />
                        Iran: 21-30 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollToReveal>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="section py-16">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title text-3xl font-bold text-primary mx-auto">Client Success Stories</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                See how we've helped organizations overcome complex logistics challenges in Afghanistan.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollToReveal delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                    alt="Aid Distribution" 
                    className="absolute h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Humanitarian Aid Delivery</h3>
                  <p className="text-gray-600 mb-4">
                    Coordinated the delivery of 2,500 tons of emergency supplies to remote provinces
                    during the winter months, overcoming severe weather and security challenges.
                  </p>
                  <Link to="/case-studies" className="text-accent font-medium flex items-center">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                    alt="Telecommunications" 
                    className="absolute h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Telecom Infrastructure</h3>
                  <p className="text-gray-600 mb-4">
                    Successfully transported sensitive electronic equipment and infrastructure components
                    for a major telecommunications expansion project across 12 provinces.
                  </p>
                  <Link to="/case-studies" className="text-accent font-medium flex items-center">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1581012771300-07da9f8261f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                    alt="Construction Project" 
                    className="absolute h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Construction Project Support</h3>
                  <p className="text-gray-600 mb-4">
                    Provided ongoing logistics support for a major infrastructure development project,
                    managing over 200 shipments of heavy machinery and construction materials.
                  </p>
                  <Link to="/case-studies" className="text-accent font-medium flex items-center">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Link>
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

export default Afghanistan;
