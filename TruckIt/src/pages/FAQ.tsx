
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ScrollToReveal from '../components/ScrollToReveal';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generalFaqs = [
    {
      question: "What services does Truckit offer?",
      answer: "Truckit offers a comprehensive range of logistics services including air freight, sea freight, land transportation, warehousing, customs brokerage, project logistics, and supply chain solutions. We provide end-to-end logistics solutions tailored to your specific business requirements."
    },
    {
      question: "How can I get a quote for shipping?",
      answer: "You can request a quote through our website by visiting the 'Request a Quote' page and filling out the form with your shipment details. Alternatively, you can contact our sales team directly via email or phone, and they will provide you with a competitive quote based on your specific needs."
    },
    {
      question: "Do you handle international shipments?",
      answer: "Yes, we specialize in international shipping and have extensive experience handling shipments across more than 150 countries worldwide. Our global network of partners ensures efficient and reliable service regardless of your shipment's destination."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including retail and e-commerce, pharmaceutical, automotive, food and beverage, electronics, construction, and many more. Our industry-specific solutions are designed to meet the unique requirements and challenges of each sector."
    }
  ];

  const shippingFaqs = [
    {
      question: "How do I track my shipment?",
      answer: "You can track your shipment easily by visiting our 'Track' page and entering your tracking number. Our real-time tracking system provides you with the most up-to-date information about your shipment's status and location throughout its journey."
    },
    {
      question: "What's the difference between FCL and LCL shipping?",
      answer: "FCL (Full Container Load) means you're shipping enough goods to fill an entire container, which is sealed at origin and opened at destination. LCL (Less than Container Load) means you're sharing container space with other shippers. FCL generally offers more security and faster transit times, while LCL can be more cost-effective for smaller shipments."
    },
    {
      question: "What documents are required for international shipping?",
      answer: "Required documents typically include a commercial invoice, packing list, certificate of origin, bill of lading or airway bill, and possibly permits, certificates, or licenses depending on the goods being shipped and the destination country. Our customs brokerage team can assist with ensuring you have all necessary documentation."
    },
    {
      question: "How are shipping rates calculated?",
      answer: "Shipping rates are calculated based on several factors including the shipment's weight and dimensions (volumetric weight), distance, mode of transport, fuel prices, type of goods, insurance, and any special handling requirements. For the most accurate pricing, please request a quote with your specific shipment details."
    }
  ];

  const customsFaqs = [
    {
      question: "What is customs brokerage?",
      answer: "Customs brokerage involves facilitating the import and export of goods across international borders by ensuring compliance with customs regulations and procedures. Our customs brokers handle document preparation, duty and tax calculation, and communication with customs authorities to ensure smooth clearance of your shipments."
    },
    {
      question: "How can I avoid customs delays?",
      answer: "To avoid customs delays, ensure all documentation is complete, accurate, and properly prepared. Work with experienced customs brokers like ours, understand the import regulations of the destination country, classify your goods correctly, and declare accurate values. Our team can guide you through the process to minimize the risk of delays."
    },
    {
      question: "What are incoterms and why are they important?",
      answer: "Incoterms (International Commercial Terms) are standardized terms that define the responsibilities of buyers and sellers in international transactions. They specify who pays for transportation, insurance, and customs clearance, and who bears the risk during different stages of shipping. Using the correct incoterms in your contracts is crucial for avoiding misunderstandings and disputes."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our logistics services and solutions"
        backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      />
      
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Common Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Browse through our frequently asked questions to find quick answers to your inquiries about our services, shipping procedures, and logistics solutions
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollToReveal delay={100}>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-6 text-primary">General Questions</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  {generalFaqs.map((faq, index) => (
                    <AccordionItem value={`general-item-${index}`} key={index}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200}>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-6 text-primary">Shipping & Tracking</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  {shippingFaqs.map((faq, index) => (
                    <AccordionItem value={`shipping-item-${index}`} key={index}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollToReveal>
          </div>
          
          <ScrollToReveal delay={300} className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary">Customs & Regulations</h3>
              
              <Accordion type="single" collapsible className="w-full">
                {customsFaqs.map((faq, index) => (
                  <AccordionItem value={`customs-item-${index}`} key={index}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollToReveal>
          
          <ScrollToReveal delay={400} className="mt-12 text-center">
            <div className="bg-accent text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="mb-6">Our team is ready to assist you with any inquiries you might have.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a href="/contact" className="btn bg-white text-accent hover:bg-gray-100">
                  Contact Us
                </a>
                <a href="tel:+12345678901" className="btn border-2 border-white text-white hover:bg-white hover:text-accent">
                  Call Us Now
                </a>
              </div>
            </div>
          </ScrollToReveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;
