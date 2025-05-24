import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', { // Changed for Vercel deployment and API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        // Try to get a more specific error message from the server response
        let errorMessage = 'Failed to submit the form. Please try again later.';
        try {
          const errorData = await response.json();
          if (errorData && errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (parseError) {
          // If parsing fails, stick to the generic message
          console.error("Failed to parse error response:", parseError);
        }
        throw new Error(errorMessage);
      }

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
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
            <select
              name="subject"
              className="form-input"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="">Select Subject</option>
              <option value="general">General Inquiry</option>
              <option value="services">Services Information</option>
              <option value="quote">Quote Request</option>
              <option value="support">Customer Support</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="feedback">Feedback</option>
              <option value="complaint">Complaint</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="form-control">
          <textarea
            name="message"
            rows={5}
            placeholder=" "
            className="form-input"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label className="form-label">Your Message*</label>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">* Required fields</p>
          <button
            type="submit"
            className="btn btn-accent"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
