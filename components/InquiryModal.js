'use client';

import { useState } from 'react';

export default function InquiryModal({ isOpen, onClose, productName = null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: productName || '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (not connected to API yet)
    console.log('Inquiry submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        productInterest: productName || '',
      });
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#164b35] to-[#10281e] px-6 py-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">
              {submitted ? 'Thank You!' : 'Product Inquiry'}
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:text-[#eef7ee] text-2xl font-light w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-[#164b35] mb-2">Inquiry Submitted!</h3>
                <p className="text-[#58705f]">
                  Thank you for your interest. Our team will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#164b35] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#dfe8de] rounded-lg focus:outline-none focus:border-[#164b35] focus:ring-2 focus:ring-[#eef7ee]"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#164b35] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#dfe8de] rounded-lg focus:outline-none focus:border-[#164b35] focus:ring-2 focus:ring-[#eef7ee]"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[#164b35] mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#dfe8de] rounded-lg focus:outline-none focus:border-[#164b35] focus:ring-2 focus:ring-[#eef7ee]"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-[#164b35] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#dfe8de] rounded-lg focus:outline-none focus:border-[#164b35] focus:ring-2 focus:ring-[#eef7ee]"
                    placeholder="Your Company"
                  />
                </div>

                {/* Product Interest */}
                {productName && (
                  <div>
                    <label className="block text-sm font-semibold text-[#164b35] mb-2">
                      Product of Interest
                    </label>
                    <input
                      type="text"
                      value={productName}
                      disabled
                      className="w-full px-4 py-2 border border-[#dfe8de] rounded-lg bg-[#f8faf5] text-[#164b35]"
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#164b35] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-[#dfe8de] rounded-lg focus:outline-none focus:border-[#164b35] focus:ring-2 focus:ring-[#eef7ee] resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#164b35] to-[#10281e] text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 mt-6"
                >
                  Send Inquiry
                </button>

                <p className="text-xs text-[#58705f] text-center">
                  We'll get back to you within 24 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
