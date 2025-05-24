import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';
import { submitToGoogleSheetsDirect, submitViaXHR } from './FallbackGoogleSheetsSubmitter';

type FormStage = 'shipment-details' | 'contact-info' | 'confirmation';

const QuoteForm: React.FC = () => {
  const { toast } = useToast();
  const [currentStage, setCurrentStage] = useState<FormStage>('shipment-details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Shipment details
    shipmentType: '',
    origin: '',
    destination: '',
    weight: '',
    dimensions: '',
    serviceType: '',
    // Contact information
    name: '',
    email: '',
    phone: '',
    company: '',
    comments: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const nextStage = () => {
    if (currentStage === 'shipment-details') {
      if (!formData.shipmentType || !formData.origin || !formData.destination) {
        toast({
          title: "Required Fields Missing",
          description: "Please fill in all required fields before proceeding.",
          variant: "destructive"
        });
        return;
      }
      setCurrentStage('contact-info');
    } else if (currentStage === 'contact-info') {
      if (!formData.name || !formData.email || !formData.phone) {
        toast({
          title: "Required Fields Missing",
          description: "Please fill in all required fields before proceeding.",
          variant: "destructive"
        });
        return;
      }
      setCurrentStage('confirmation');
    }
  };
  
  const prevStage = () => {
    if (currentStage === 'contact-info') {
      setCurrentStage('shipment-details');
    } else if (currentStage === 'confirmation') {
      setCurrentStage('contact-info');
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    let emailSent = false;
    let sheetsSent = false;
    
    try {
      // 1. Send email using EmailJS
      console.log('Starting EmailJS submission...');
      // These field names MUST match exactly what's in your EmailJS template
      const emailTemplateParams = {
        from_name: formData.name, // Match EmailJS "Your Name" field
        to_name: 'TruckIt Team',
        to_email: 'abdalkhalid0@gmail.com', // Your email address
        // Shipment details matching exactly what's in the EmailJS template
        shipment_type: formData.shipmentType, // Type field
        origin: formData.origin,
        destination: formData.destination,
        weight: formData.weight || 'N/A',
        dimensions: formData.dimensions || 'N/A',
        service_type: formData.serviceType || 'N/A',
        // Contact information matching exactly what's in the EmailJS template
        name: formData.name, // Contact name field
        email: formData.email,
        phone: formData.phone,
        company: formData.company || 'N/A',
        comments: formData.comments || 'No additional comments',
        reply_to: formData.email
      };
      
      // Replace these with your actual EmailJS service ID, template ID, and user ID
      const emailResult = await emailjs.send(
        'service_8ox7ha8', 
        'template_m9nfdho',
        emailTemplateParams,
        'cJxmHEUOZghJnZYpV'
      );
      console.log('EmailJS success:', emailResult);
      emailSent = true;
      
      // 2. Send data to Google Sheets using a form submission
      console.log('Starting Google Sheets submission...');
      sheetsSent = await submitToGoogleSheets();
      
      // If at least email was sent, consider it a success
      if (emailSent) {
        let message = "Your quote request has been submitted!";
        if (!sheetsSent) {
          // Only log this warning, don't show to user
          console.warn("Email sent but Google Sheets submission may have failed");
        }
        
        toast({
          title: "Quote Request Submitted!",
          description: "We'll get back to you with a quote as soon as possible.",
          duration: 5000
        });
        
        // Reset form after submission
        setFormData({
          shipmentType: '',
          origin: '',
          destination: '',
          weight: '',
          dimensions: '',
          serviceType: '',
          name: '',
          email: '',
          phone: '',
          company: '',
          comments: ''
        });
        setCurrentStage('shipment-details');
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Function to submit data to Google Sheets
  const submitToGoogleSheets = async () => {
    try {
      console.log('Attempting Google Sheets submission...');
      
      // Try the most reliable method first - XMLHttpRequest
      console.log('Trying XHR submission (most reliable)');
      const xhrSuccess = await submitViaXHR(formData);
      if (xhrSuccess) {
        console.log('XHR submission successful');
        return true;
      }
      
      // METHOD 1: Standard fetch with FormData as fallback
      try {
        // Using Google Forms as a proxy to add data to Google Sheets
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScHh33LxA2u5asJXjjMmhzzwjglWd-Hqxya9j3IpzNtV6a9_Q/formResponse';
        
        // Create a new FormData object for Google Forms submission
        const googleFormData = new FormData();
        
        // Map form fields to Google Form entry IDs
        googleFormData.append('entry.1856797307', formData.shipmentType);
        googleFormData.append('entry.1695789924', formData.origin);
        googleFormData.append('entry.2052967420', formData.destination);
        googleFormData.append('entry.626902568', formData.weight || 'N/A');
        googleFormData.append('entry.1366940670', formData.dimensions || 'N/A');
        googleFormData.append('entry.765325030', formData.serviceType || 'N/A');
        googleFormData.append('entry.150434854', formData.name);
        googleFormData.append('entry.1434676431', formData.email);
        googleFormData.append('entry.608874152', formData.phone);
        googleFormData.append('entry.884704380', formData.company || 'N/A');
        googleFormData.append('entry.1566274311', formData.comments || 'N/A');
        
        console.log('Form data prepared for Google Sheets');
        
        console.log('Trying method 1: POST with FormData');
        await fetch(googleFormUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: googleFormData
        });
        console.log('Method 1 completed');
        return true;
      } catch (error) {
        console.error('Method 1 failed:', error);
        
        // METHOD 2: Direct URL approach
        console.log('Trying method 2: Direct URL approach');
        await submitToGoogleSheetsDirect(formData);
        console.log('Method 2 completed');
        return true;
      }
      
      console.log('Google Sheets submission attempts complete');
      return true;
    } catch (error) {
      console.error('All Google Sheets submission methods failed:', error);
      // Don't throw here, we still want to show success if email was sent
      return false;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-primary">Request a Free Quote</h3>
      
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between">
          <div className="text-sm font-medium text-gray-600">Shipment Details</div>
          <div className="text-sm font-medium text-gray-600">Contact Info</div>
          <div className="text-sm font-medium text-gray-600">Confirmation</div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full mt-2">
          <div 
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{
              width: 
                currentStage === 'shipment-details' ? '33%' : 
                currentStage === 'contact-info' ? '66%' : '100%'
            }}
          ></div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Shipment Details Form */}
        {currentStage === 'shipment-details' && (
          <div className="space-y-4 animate-fade-in">
            <div className="form-control">
              <select
                name="shipmentType"
                className="form-input"
                value={formData.shipmentType}
                onChange={handleChange}
                required
              >
                <option value="">Select Shipment Type</option>
                <option value="air">Air Freight</option>
                <option value="sea">Sea Freight</option>
                <option value="land">Land Transport</option>
                <option value="multimodal">Multimodal</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <input
                  type="text"
                  name="origin"
                  placeholder=" "
                  className="form-input"
                  value={formData.origin}
                  onChange={handleChange}
                  required
                />
                <label className="form-label">Origin</label>
              </div>
              
              <div className="form-control">
                <input
                  type="text"
                  name="destination"
                  placeholder=" "
                  className="form-input"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
                <label className="form-label">Destination</label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <input
                  type="text"
                  name="weight"
                  placeholder=" "
                  className="form-input"
                  value={formData.weight}
                  onChange={handleChange}
                />
                <label className="form-label">Weight (kg)</label>
              </div>
              
              <div className="form-control">
                <input
                  type="text"
                  name="dimensions"
                  placeholder=" "
                  className="form-input"
                  value={formData.dimensions}
                  onChange={handleChange}
                />
                <label className="form-label">Dimensions (L x W x H)</label>
              </div>
            </div>
            
            <div className="form-control">
              <select
                name="serviceType"
                className="form-input"
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="">Select Service Type</option>
                <option value="standard">Standard</option>
                <option value="express">Express</option>
                <option value="economy">Economy</option>
                <option value="specialized">Specialized</option>
              </select>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStage}
                className="btn btn-primary" 
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {/* Contact Information Form */}
        {currentStage === 'contact-info' && (
          <div className="space-y-4 animate-fade-in">
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
                <label className="form-label">Full Name</label>
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
                <label className="form-label">Email Address</label>
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
                  required
                />
                <label className="form-label">Phone Number</label>
              </div>
              
              <div className="form-control">
                <input
                  type="text"
                  name="company"
                  placeholder=" "
                  className="form-input"
                  value={formData.company}
                  onChange={handleChange}
                />
                <label className="form-label">Company Name</label>
              </div>
            </div>
            
            <div className="form-control">
              <textarea
                name="comments"
                rows={4}
                placeholder="Additional comments or requirements..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStage}
                className="btn btn-outline" // Changed to use a common outline button style
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStage}
                className="btn btn-primary" // Changed to use a common primary button style
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {/* Confirmation */}
        {currentStage === 'confirmation' && (
          <div className="animate-fade-in">
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2 text-gray-800">Shipment Summary</h4>
              <ul className="space-y-1 text-sm">
                <li><span className="font-medium text-gray-700">Shipment Type:</span> <span className="text-gray-800">{formData.shipmentType}</span></li>
                <li><span className="font-medium text-gray-700">Route:</span> <span className="text-gray-800">{formData.origin} to {formData.destination}</span></li>
                <li><span className="font-medium text-gray-700">Weight:</span> <span className="text-gray-800">{formData.weight || 'N/A'}</span></li>
                <li><span className="font-medium text-gray-700">Dimensions:</span> <span className="text-gray-800">{formData.dimensions || 'N/A'}</span></li>
                <li><span className="font-medium text-gray-700">Service Type:</span> <span className="text-gray-800">{formData.serviceType || 'N/A'}</span></li>
              </ul>
              
              <h4 className="font-semibold mt-4 mb-2 text-gray-800">Contact Information</h4>
              <ul className="space-y-1 text-sm">
                <li><span className="font-medium text-gray-700">Name:</span> <span className="text-gray-800">{formData.name}</span></li>
                <li><span className="font-medium text-gray-700">Email:</span> <span className="text-gray-800">{formData.email}</span></li>
                <li><span className="font-medium text-gray-700">Phone:</span> <span className="text-gray-800">{formData.phone}</span></li>
                <li><span className="font-medium text-gray-700">Company:</span> <span className="text-gray-800">{formData.company || 'N/A'}</span></li>
              </ul>
              
              {formData.comments && (
                <>
                  <h4 className="font-semibold mt-4 mb-2 text-gray-800">Additional Comments</h4>
                  <p className="text-sm text-gray-700">{formData.comments}</p>
                </>
              )}
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStage}
                className="btn btn-outline" // Changed to use a common outline button style
              >
                Back
              </button>
              <button
                type="submit"
                className="btn btn-primary" // Changed to use a common primary button style
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuoteForm;
