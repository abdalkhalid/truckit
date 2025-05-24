import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToReveal from '../components/ScrollToReveal';
import CtaBanner from '../components/CtaBanner';
import HeroSection from '../components/HeroSection';
import { useToast } from '../hooks/use-toast';

interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverletter: '',
    linkedin: ''
  });
  const [submitting, setSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobOpenings: JobPosition[] = [
    {
      id: "logistics-coordinator",
      title: "Logistics Coordinator",
      location: "Dallas, TX",
      type: "Full-time",
      department: "Operations",
      description: "We are looking for a skilled Logistics Coordinator to oversee and coordinate shipping operations, ensuring efficient delivery of goods to customers.",
      requirements: [
        "Bachelor's degree in Supply Chain, Logistics, or related field",
        "2+ years of experience in logistics coordination",
        "Strong knowledge of transportation management systems",
        "Excellent communication and problem-solving skills",
        "Ability to work under pressure and handle multiple priorities"
      ],
      responsibilities: [
        "Coordinate and monitor shipping schedules and delivery routes",
        "Track shipments and ensure timely delivery",
        "Communicate with carriers and clients regarding shipment status",
        "Resolve shipping issues and discrepancies",
        "Prepare shipping documentation and ensure compliance with regulations",
        "Generate and analyze logistics reports"
      ]
    },
    {
      id: "customs-specialist",
      title: "Customs Compliance Specialist",
      location: "New York, NY",
      type: "Full-time",
      department: "Compliance",
      description: "We are seeking a Customs Compliance Specialist to ensure all imports and exports comply with customs regulations and trade laws.",
      requirements: [
        "Bachelor's degree in International Trade, Business, or related field",
        "3+ years of experience in customs compliance",
        "Knowledge of customs regulations and international trade laws",
        "Excellent attention to detail and analytical skills",
        "Strong communication skills and ability to work with cross-functional teams"
      ],
      responsibilities: [
        "Prepare and review customs documentation for accuracy and compliance",
        "Ensure proper classification of goods and determination of duties",
        "Monitor changes in customs regulations and update internal procedures",
        "Assist with customs audits and respond to inquiries from customs authorities",
        "Train staff on customs compliance requirements",
        "Develop and implement best practices for customs compliance"
      ]
    },
    {
      id: "warehouse-manager",
      title: "Warehouse Operations Manager",
      location: "Chicago, IL",
      type: "Full-time",
      department: "Warehousing",
      description: "We are looking for an experienced Warehouse Operations Manager to oversee daily warehouse activities and ensure efficient operations.",
      requirements: [
        "Bachelor's degree in Supply Chain, Logistics, or related field",
        "5+ years of experience in warehouse management",
        "Strong knowledge of warehouse management systems and procedures",
        "Excellent leadership and team management skills",
        "Ability to optimize warehouse operations and improve efficiency"
      ],
      responsibilities: [
        "Oversee daily warehouse operations and staff",
        "Develop and implement warehouse policies and procedures",
        "Monitor inventory accuracy and coordinate cycle counts",
        "Ensure compliance with safety regulations and quality standards",
        "Analyze and improve warehouse processes for efficiency",
        "Coordinate with other departments to ensure smooth operations"
      ]
    },
    {
      id: "supply-chain-analyst",
      title: "Supply Chain Analyst",
      location: "Remote",
      type: "Full-time",
      department: "Supply Chain",
      description: "We are seeking a Supply Chain Analyst to analyze supply chain data and identify opportunities for improvement and cost savings.",
      requirements: [
        "Bachelor's degree in Supply Chain, Analytics, or related field",
        "2+ years of experience in supply chain analysis",
        "Strong analytical skills and proficiency in data analysis tools",
        "Experience with ERP systems and supply chain software",
        "Excellent problem-solving skills and attention to detail"
      ],
      responsibilities: [
        "Analyze supply chain data to identify trends and opportunities",
        "Develop and implement strategies to improve supply chain efficiency",
        "Create regular reports on key performance indicators",
        "Work with cross-functional teams to implement improvements",
        "Monitor supplier performance and recommend improvements",
        "Support inventory optimization initiatives"
      ]
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.files?.[0] || null }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.resume) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application Submitted Successfully!",
        description: `Thank you for applying to the ${selectedJob?.title} position. We'll review your application and get back to you soon.`,
        duration: 5000
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverletter: '',
        linkedin: ''
      });
      
      setSelectedJob(null);
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection
        title="Join Our Team"
        subtitle="Build your career with a company that values innovation, excellence, and growth"
        backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
      />
      
      {/* Why Work With Us */}
      <section className="section">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Why Work With Us</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At TruckIt, we believe our people are our greatest asset. We're committed to creating 
                a supportive, inclusive workplace where every team member can grow and thrive.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollToReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="mb-4 p-4 bg-accent-100 inline-block rounded-full text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
                <p className="text-gray-600">
                  With our global presence and continual expansion, we offer numerous opportunities for 
                  career advancement and professional development at all levels.
                </p>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="mb-4 p-4 bg-accent-100 inline-block rounded-full text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">
                  We understand the importance of balance. Our flexible work arrangements and generous 
                  time-off policies ensure you can perform at your best both at work and at home.
                </p>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="mb-4 p-4 bg-accent-100 inline-block rounded-full text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Benefits</h3>
                <p className="text-gray-600">
                  We offer competitive compensation, health and wellness programs, retirement plans, 
                  and continuous learning opportunities to support your overall wellbeing.
                </p>
              </div>
            </ScrollToReveal>
          </div>
        </div>
      </section>
      
      {/* Current Openings */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Current Openings</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our current job opportunities and find a role where you can make an impact
                and grow your career in the logistics industry.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollToReveal delay={100} className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Job Openings</h3>
                  <div className="space-y-4">
                    {jobOpenings.map((job) => (
                      <div 
                        key={job.id} 
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedJob?.id === job.id ? 'border-accent bg-accent-100' : 'border-gray-200 hover:border-accent hover:bg-accent-50'}`}
                        onClick={() => setSelectedJob(job)}
                      >
                        <h4 className="font-semibold">{job.title}</h4>
                        <div className="flex flex-wrap text-sm text-gray-600 mt-1">
                          <span className="mr-4">{job.location}</span>
                          <span className="mr-4">{job.department}</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200} className="lg:col-span-2">
              {selectedJob ? (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-primary">{selectedJob.title}</h3>
                    <div className="flex flex-wrap text-gray-600 mt-1">
                      <span className="mr-4">{selectedJob.location}</span>
                      <span className="mr-4">{selectedJob.department}</span>
                      <span>{selectedJob.type}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Job Description</h4>
                    <p className="text-gray-600">{selectedJob.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Responsibilities</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {selectedJob.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Requirements</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {selectedJob.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h4 className="text-lg font-semibold mb-3">Apply Now</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <input
                          type="text"
                          name="name"
                          placeholder=" "
                          className="form-input"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label">Full Name*</label>
                      </div>
                      
                      <div className="form-control">
                        <input
                          type="email"
                          name="email"
                          placeholder=" "
                          className="form-input"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label">Email Address*</label>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <input
                          type="tel"
                          name="phone"
                          placeholder=" "
                          className="form-input"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        <label className="form-label">Phone Number</label>
                      </div>
                      
                      <div className="form-control">
                        <input
                          type="text"
                          name="linkedin"
                          placeholder=" "
                          className="form-input"
                          value={formData.linkedin}
                          onChange={handleChange}
                        />
                        <label className="form-label">LinkedIn Profile</label>
                      </div>
                    </div>
                    
                    <div className="form-control">
                      <label className="block text-gray-700 mb-2">Resume/CV*</label>
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      />
                      <div className="text-sm text-gray-500 mt-1">
                        Accepted formats: PDF, DOC, DOCX
                      </div>
                    </div>
                    
                    <div className="form-control">
                      <textarea
                        name="coverletter"
                        rows={4}
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        value={formData.coverletter}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">* Required fields</p>
                      <button
                        type="submit"
                        className="btn btn-accent"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Select a Job</h3>
                  <p className="text-gray-600 text-center">
                    Click on a job listing to view details and apply.
                  </p>
                </div>
              )}
            </ScrollToReveal>
          </div>
        </div>
      </section>
      
      {/* Employee Testimonials */}
      <section className="section">
        <div className="container mx-auto px-4">
          <ScrollToReveal>
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Life at TruckIt</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from our team members about what it's like to work at TruckIt
                and be part of our global logistics community.
              </p>
            </div>
          </ScrollToReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollToReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Employee"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">David Rodriguez</h4>
                    <p className="text-sm text-gray-500">
                      Logistics Manager, 5 years
                    </p>
                  </div>
                </div>
                <p className="italic text-gray-600">
                  "Working at TruckIt has given me incredible opportunities to grow professionally. 
                  The collaborative environment and mentorship from leadership have helped me develop 
                  skills I never thought I'd have. The company truly invests in its people."
                </p>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Employee"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Thompson</h4>
                    <p className="text-sm text-gray-500">
                      Supply Chain Analyst, 3 years
                    </p>
                  </div>
                </div>
                <p className="italic text-gray-600">
                  "The work-life balance at TruckIt is exceptional. I appreciate how the company 
                  respects our time and wellbeing while still delivering excellence to our clients. 
                  The flexible work arrangements have made a huge difference in my quality of life."
                </p>
              </div>
            </ScrollToReveal>
            
            <ScrollToReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Employee"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-gray-500">
                      Operations Director, 7 years
                    </p>
                  </div>
                </div>
                <p className="italic text-gray-600">
                  "I started as a coordinator and have grown into a leadership role over the years. 
                  TruckIt truly recognizes and rewards hard work and dedication. The global 
                  nature of our business means there's always something new to learn and exciting 
                  challenges to tackle."
                </p>
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

export default Careers;
