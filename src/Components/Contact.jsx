import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Send, Briefcase, Users, Clock } from 'lucide-react';

// General contact information (Customer Support, Location)
const generalDetails = [
  { icon: Mail, label: "General Inquiries", value: "info@reviewmate.com", href: "mailto:info@reviewmate.com" },
  { icon: Phone, label: "Customer Support Line", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Headquarters Location", value: "123 Review Blvd, Insight City, CA 90210" },
];

// Department-specific contacts (Press, Partnerships)
const departmentContacts = [
  { icon: Briefcase, label: "Press & Media", value: "press@reviewmate.com", href: "mailto:press@reviewmate.com" },
  { icon: Users, label: "Partnerships", value: "partner@reviewmate.com", href: "mailto:partner@reviewmate.com" },
];

// Business hours data
const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM – 5:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM – 2:00 PM PST" },
    { day: "Sunday", hours: "Closed" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Start submission process
    setIsSubmitting(true);
    setSuccessMessage(null);

    // Simulate API call/network delay (1.5 seconds)
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      
      // Update state upon successful submission
      setSuccessMessage("Thank you! Your message has been sent successfully. We will respond within 48 hours.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);

      // Optionally clear the success message after a few seconds
      setTimeout(() => setSuccessMessage(null), 8000); 

    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans py-16 sm:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message or find us using the details below.
          </p>
        </div>

        {/* Two-Column Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Details (Expanded) */}
          <div className="space-y-12 p-8 md:p-10 bg-white rounded-2xl shadow-xl border border-gray-100">
            
            {/* General Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-200 pb-2 inline-block">
                General Contact
              </h2>
              <div className="space-y-6">
                {generalDetails.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <item.icon className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{item.label}</h4>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-indigo-600 hover:text-indigo-800 transition duration-150"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Contacts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-200 pb-2 inline-block">
                Department Contacts
              </h2>
              <div className="space-y-6">
                {departmentContacts.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <item.icon className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{item.label}</h4>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-indigo-600 hover:text-indigo-800 transition duration-150"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Business Hours */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-200 pb-2 inline-block">
                Business Hours
              </h2>
              <div className="space-y-3">
                {businessHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-gray-700">
                        <div className="flex items-center space-x-2">
                             <Clock className="w-5 h-5 text-indigo-500" />
                             <span className="font-medium">{item.day}</span>
                        </div>
                        <span className={`${item.hours === 'Closed' ? 'text-red-500 font-semibold' : 'text-gray-800'}`}>
                            {item.hours}
                        </span>
                    </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Column: Contact Form (Unchanged) */}
          <div className="p-8 md:p-10 bg-white rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-200 pb-2 inline-block">
              Send Us a Message
            </h2>
            
            {/* Success Message */}
            {successMessage && (
              <div className="flex items-center p-4 mb-6 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50" role="alert">
                <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                <div>
                  <span className="font-medium">{successMessage}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm"
                  disabled={isSubmitting}
                />
              </div>
              
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm"
                  disabled={isSubmitting}
                />
              </div>
              
              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm resize-none"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01] text-lg disabled:bg-indigo-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
