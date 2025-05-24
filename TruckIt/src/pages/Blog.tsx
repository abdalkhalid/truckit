import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import CtaBanner from '../components/CtaBanner';
import HeroSection from '../components/HeroSection';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("All Categories");

  const blogPosts = [
    {
      id: 1,
      title: "Pakistan-Iran Trade Corridor: New Opportunities for Regional Logistics",
      excerpt: "Explore the expanding trade corridor between Pakistan and Iran and how recent diplomatic agreements are opening new routes for logistics companies.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHCFSb1xvn-3Tf8maOwHz436lKld7qnj2-A&s",
      date: "May 15, 2025",
      author: "Muhammad Ali Khan",
      category: "Regional Trade",
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Logistics Solutions for the Pak-Afghan Border",
      excerpt: "How logistics companies are implementing eco-friendly practices while navigating the unique challenges of cross-border shipping in the region.",
      image: "https://cbx57v6vu4bo.cdn.shift8web.com/wp-content/uploads/2019/09/Pakistan-Afghan-Transit-Trade-New-Opportunities-and-Challenges.jpg",
      date: "May 2, 2025",
      author: "Ayesha Ahmed",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Digital Transformation of Customs Procedures at Torkham and Chaman",
      excerpt: "Recent technological advancements at key border crossings between Pakistan and Afghanistan that are streamlining the clearance process.",
      image: "data:image/jpeg;base64,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",
      date: "April 20, 2025",
      author: "Farhan Qadir",
      category: "Technology"
    },
    {
      id: 4,
      title: "The China-Pakistan Economic Corridor: Impact on Regional Supply Chains",
      excerpt: "An analysis of how CPEC is transforming logistics networks and creating new opportunities for businesses in Pakistan, Afghanistan, and Iran.",
      image: "https://mywheels.pk/uploads/images/IMG-20180706-WA0004.jpg",
      date: "April 5, 2025",
      author: "Sana Malik",
      category: "Global Markets"
    },
    {
      id: 5,
      title: "Navigating Customs Regulations for the Iran-Pakistan-Afghanistan Triangle",
      excerpt: "Expert guidance on understanding the complex customs regulations between these three countries and strategies for ensuring smooth cross-border shipments.",
      image: "https://thefridaytimes.com/digital_images/large/2024-05-30/amidst-frosty-ties-with-pakistan-afghanistan-turns-to-iran-for-transit-trade-1717072641-4219.jpeg",
      date: "March 22, 2025",
      author: "Hassan Raza",
      category: "Customs & Compliance"
    },
    {
      id: 6,
      title: "Emerging Trade Routes: Gwadar Port's Role in Connecting Central Asia",
      excerpt: "How Pakistan's strategic Gwadar Port is becoming a key logistics hub for trade between Iran, Afghanistan, and Central Asian nations.",
      image: "https://image.lexica.art/full_webp/5b5457cb-34d2-40ea-9b94-e38accd9b051",
      date: "March 10, 2025",
      author: "Zainab Hussain",
      category: "Regional Development"
    },
    {
      id: 7,
      title: "Pakistan-Afghanistan Trade Relations: Challenges and Opportunities",
      excerpt: "An in-depth look at the evolving trade dynamics between Pakistan and Afghanistan and how businesses can capitalize on new opportunities.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuN4lM_H6IUf7tYUEkupKGXCd22pDobW54-w&s",
      date: "May 18, 2025",
      author: "Imran Yousaf",
      category: "Regional Trade"
    },
    {
      id: 8,
      title: "Electric Truck Fleets: The Future of Cross-Border Shipping in South Asia",
      excerpt: "How electric vehicles are transforming the logistics landscape between Pakistan, Iran, and Afghanistan with reduced emissions and operating costs.",
      image: "https://image.lexica.art/full_webp/061cc88a-103a-46b3-afc3-86fad260ec2b",
      date: "May 10, 2025",
      author: "Fatima Rizvi",
      category: "Sustainability"
    },
    {
      id: 9,
      title: "Blockchain for Cross-Border Trade Documentation Between Pakistan and Iran",
      excerpt: "Exploring how blockchain technology is streamlining documentation processes and increasing transparency in regional trade.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWSmPtr8XVXc0gzvqZOWiq47ZBecIILERZX_QYSVi3B804oQeUHe14WS1Ki4AEogug3I&usqp=CAU",
      date: "April 28, 2025",
      author: "Adnan Sheikh",
      category: "Technology"
    },
    {
      id: 10,
      title: "Iran's Energy Exports to Pakistan: Current Status and Future Potential",
      excerpt: "Analysis of the energy trade corridor between Iran and Pakistan and its implications for regional economic development.",
      image: "https://media.tehrantimes.com/d/t/2025/05/18/4/5510296.jpg?ts=1747558374517",
      date: "April 15, 2025",
      author: "Nadia Hashmi",
      category: "Global Markets"
    },
    {
      id: 11,
      title: "Understanding the New Afghan Transit Trade Agreement",
      excerpt: "A comprehensive guide to the revised APTTA and how it affects shipping and logistics companies operating in the region.",
      image: "https://lakhanilogistics.com/wp-content/uploads/2018/06/16.jpg",
      date: "March 30, 2025",
      author: "Omar Khan",
      category: "Customs & Compliance"
    },
    {
      id: 12,
      title: "The Silk Road Revival: Pakistan's Strategic Position in the BRI",
      excerpt: "How Pakistan is leveraging its geographic position to become a key player in China's Belt and Road Initiative connecting South and Central Asia.",
      image: "https://pakistanpolitico.com/wp-content/uploads/2018/08/silk-road.jpg",
      date: "March 18, 2025",
      author: "Asim Malik",
      category: "Regional Development"
    }
  ];

  const categories = [
    "All Categories",
    "Regional Trade",
    "Sustainability",
    "Technology",
    "Global Markets",
    "Customs & Compliance",
    "Regional Development"
  ];

  // Filter posts based on active category
  const filteredPosts = blogPosts.filter(post =>
    activeCategory === "All Categories" || post.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Logistics Insights & News"
        subtitle="Stay informed with expert perspectives and industry updates from the world of global logistics"
        backgroundImage="https://image.lexica.art/full_webp/44d2b892-4983-4961-a8a2-7b042be658c0"
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Logistics Insights & News</h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Expert perspectives, industry updates, and helpful guides to keep you informed about the latest developments in global logistics.
              </p>
            </div>
          </ScrollToReveal>

          {/* Categories */}
          <ScrollToReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${category === activeCategory ? 'bg-accent text-white' : 'bg-gray-100 hover:bg-accent hover:text-white'}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollToReveal>

          {/* Featured Post */}
          {filteredPosts.filter(post => post.featured).map(featuredPost => (
            <ScrollToReveal delay={200} key={featuredPost.id}>
              <div className="mb-12">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-64 md:h-auto relative">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent text-white text-xs uppercase font-semibold px-3 py-1 rounded-md">Featured</span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar size={14} className="mr-1" />
                        <span className="mr-4">{featuredPost.date}</span>
                        <User size={14} className="mr-1" />
                        <span className="mr-4">{featuredPost.author}</span>
                        <Tag size={14} className="mr-1" />
                        <span>{featuredPost.category}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredPost.title}</h2>
                      <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                      <Link to={`/blog/${featuredPost.id}`} className="text-accent font-medium flex items-center hover:underline">
                        Read Full Article
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollToReveal>
          ))}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <ScrollToReveal delay={300 + (index * 100)} key={post.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                  <div className="h-48 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <Calendar size={12} className="mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <Tag size={12} className="mr-1" />
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <User size={14} className="text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500">{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="text-accent font-medium flex items-center text-sm hover:underline">
                        Read More
                        <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollToReveal>
            ))}
          </div>

          {/* No Posts Message */}
          {filteredPosts.length === 0 && (
            <ScrollToReveal>
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No posts in this category yet</h3>
                <p className="text-gray-500">Please check back later or select another category.</p>
                <button
                  className="mt-6 px-6 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors"
                  onClick={() => setActiveCategory("All Categories")}
                >
                  View All Posts
                </button>
              </div>
            </ScrollToReveal>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <ScrollToReveal delay={500}>
              <div className="flex justify-center items-center mt-12">
                <div className="flex space-x-1">
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium bg-accent text-white">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </ScrollToReveal>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <CtaBanner />

      <Footer />
    </div>
  );
};

export default Blog;
