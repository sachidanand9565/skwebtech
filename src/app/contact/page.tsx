/**
 * Contact Page
 * Contact form, contact info, and map placeholder
 */

import { Metadata } from 'next';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  Send,
} from 'lucide-react';
import ContactForm from '@/components/common/ContactForm';

// SEO Metadata for Contact page
export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Consultation',
  description:
    'Get in touch with SK WebTech for a free consultation. Contact us for web development, e-commerce, SEO, and IT services. We respond within 24 hours.',
  keywords: [
    'contact SK WebTech',
    'web development quote',
    'IT services consultation',
    'hire developers',
    'get in touch',
    'free consultation',
  ],
  openGraph: {
    title: 'Contact Us | SK WebTech',
    description:
      'Get in touch with us for a free consultation on your next digital project.',
    type: 'website',
    url: 'https://skwebtech.com/contact',
  },
};

// Contact info items
const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (234) 567-890',
    subtext: 'Mon-Fri from 9am to 6pm',
    href: 'tel:+1234567890',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@skwebtech.com',
    subtext: "We'll respond within 24 hours",
    href: 'mailto:hello@skwebtech.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 Tech Street, Suite 456',
    subtext: 'San Francisco, CA 94102',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri: 9:00 AM - 6:00 PM',
    subtext: 'Sat: 10:00 AM - 4:00 PM',
  },
];

// FAQ items
const faqs = [
  {
    question: 'How long does a typical web development project take?',
    answer:
      'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications may take 2-4 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'We offer both fixed-price and hourly engagement models. After understanding your requirements, we provide a detailed quote with no hidden costs. Contact us for a free estimate.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer:
      'Yes! We offer various maintenance and support packages to keep your digital assets running smoothly. Our support includes updates, security patches, and technical assistance.',
  },
  {
    question: 'Can you work with clients in different time zones?',
    answer:
      'Absolutely! We have experience working with clients worldwide. Our team is flexible with communication and can accommodate different time zones to ensure smooth collaboration.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Get in touch and 
              let's discuss how we can help transform your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours 
                with a detailed response to your inquiry.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info & Map */}
            <div>
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="bg-gray-50 rounded-2xl p-6 hover:bg-primary-50 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <info.icon size={24} className="text-primary-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-primary-600 font-medium hover:text-primary-700"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-medium">{info.content}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">{info.subtext}</p>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-white" fill="white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-gray-900 mb-1">
                      Prefer WhatsApp?
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Chat with us directly for quick responses. We typically reply within minutes!
                    </p>
                    <a
                      href="https://wa.me/1234567890?text=Hi%20SK%20WebTech!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-500 text-white px-5 py-2.5 
                               rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
                    >
                      Chat on WhatsApp
                      <ArrowRight size={18} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <div className="bg-gray-100 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500">
                      Interactive map will be displayed here
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline text-sm mt-2 inline-block"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-card"
                >
                  <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Have more questions? We're here to help!
              </p>
              <a
                href="mailto:hello@skwebtech.com"
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
              >
                <Mail size={20} className="mr-2" />
                Email us at hello@skwebtech.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your project. Our team is ready 
            to help you achieve your digital goals.
          </p>
          <a
            href="tel:+1234567890"
            className="btn-accent inline-flex text-lg"
          >
            <Phone size={20} className="mr-2" />
            Call Us: +1 (234) 567-890
          </a>
        </div>
      </section>
    </>
  );
}
