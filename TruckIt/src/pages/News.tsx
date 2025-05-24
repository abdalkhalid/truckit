
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ScrollToReveal from '../components/ScrollToReveal';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "Truckit Expands Fleet with 20 New Electric Vehicles",
      date: "May 1, 2025",
      author: "Admin",
      excerpt: "In a major move towards sustainable logistics, Truckit has added 20 new electric vehicles to its delivery fleet, reducing carbon emissions while maintaining delivery efficiency.",
      image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 2,
      title: "New Warehousing Facility Opens in Chicago",
      date: "April 15, 2025",
      author: "Admin",
      excerpt: "Truckit has inaugurated a new state-of-the-art warehousing facility in Chicago, featuring advanced automation systems and sustainable design elements.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
    },
    {
      id: 3,
      title: "Partnership Announced with Global Shipping Line",
      date: "March 22, 2025",
      author: "Admin",
      excerpt: "Truckit has formed a strategic partnership with a leading global shipping line to enhance our intercontinental freight services and provide more competitive rates.",
      image: "https://images.unsplash.com/photo-1517458047551-6766fa5a9314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
    },
    {
      id: 4,
      title: "Truckit Receives Industry Award for Innovation",
      date: "February 10, 2025",
      author: "Admin",
      excerpt: "Our commitment to innovation in logistics has been recognized with a prestigious industry award at the annual Logistics Excellence ceremony.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 5,
      title: "New Digital Platform Enhances Customer Experience",
      date: "January 15, 2025",
      author: "Admin",
      excerpt: "Truckit has launched a new digital platform that provides customers with real-time tracking, instant quotes, and comprehensive shipment management tools.",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 6,
      title: "Truckit Completes Carbon Neutral Certification",
      date: "December 5, 2024",
      author: "Admin",
      excerpt: "After a comprehensive sustainability initiative, Truckit has achieved carbon neutral certification for its operations, setting a new standard in eco-friendly logistics.",
      image: "https://images.unsplash.com/photo-1550565029-9e5114fe98ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection
        title="News & Updates"
        subtitle="Stay informed about our latest developments, industry news, and company announcements"
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
      />
      
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Latest News</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Keep up with the latest happenings at Truckit and important developments in the logistics industry
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <ScrollToReveal key={news.id} delay={index * 100} className="h-full">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 bg-accent text-white py-1 px-3 flex items-center space-x-1">
                      <Calendar size={16} />
                      <span className="text-sm">{news.date}</span>
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <User size={16} className="mr-1" />
                      <span>{news.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-accent transition-colors duration-300">
                      {news.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-grow">{news.excerpt}</p>
                    
                    <Link 
                      to={`/news/${news.id}`}
                      className="text-accent font-medium flex items-center mt-auto group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </ScrollToReveal>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default News;
