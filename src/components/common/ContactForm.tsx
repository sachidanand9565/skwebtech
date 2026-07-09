/**
 * Contact Form Component
 * Reusable contact form with validation states
 */

'use client';

import { useState, FormEvent } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ServiceOption {
  id: string;
  title: string;
}

// Fallback when no services are passed from the database
const DEFAULT_SERVICES: ServiceOption[] = [
  { id: 'web-development', title: 'Web Development' },
  // TEMP-WA-DISABLED: { id: 'whatsapp-business', title: 'WhatsApp Business API' },
  { id: 'ecommerce', title: 'E-Commerce Solutions' },
  { id: 'seo', title: 'SEO Optimization' },
  { id: 'app-development', title: 'App Development' },
  { id: 'uiux', title: 'UI/UX Design' },
  { id: 'maintenance', title: 'Maintenance & Support' },
];

export default function ContactForm({ services }: { services?: ServiceOption[] }) {
  const serviceOptions = services && services.length > 0 ? services : DEFAULT_SERVICES;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || 'Unable to send message. Please try again later.');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setErrorMessage('Unable to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Success state
  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-green-500/25 bg-green-500/[0.06] p-8 text-center backdrop-blur-sm">
        <div className="w-16 h-16 bg-green-500/15 border border-green-500/25 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-white mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-green-400/90">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="form-input"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="form-input"
          />
        </div>
      </div>

      {/* Phone and Service Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9654603750"
            className="form-input"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-input [&>option]:bg-void-100 [&>option]:text-white"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="form-textarea"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-accent w-full justify-center text-lg py-4
                 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={20} className="ml-2" />
          </>
        )}
      </button>

      {errorMessage ? (
        <div className="rounded-2xl border border-red-500/25 bg-red-500/[0.07] px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </div>
      ) : null}

      {/* Privacy Note */}
      <p className="text-xs text-slate-500 text-center">
        We respect your privacy and will never share your personal information without your permission.
      </p>
    </form>
  );
}
