import { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText, Handshake, CreditCard, Copyright, Layers, ShieldAlert,
  RefreshCw, Scale, Mail, ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions - SK WebTech',
  description:
    'Read the Terms & Conditions for using SK WebTech services including web development, e-commerce, SEO, app development, and WhatsApp Business solutions.',
  keywords: ['terms and conditions', 'SK WebTech terms', 'service agreement', 'web development terms'],
  alternates: { canonical: 'https://www.skwebtech.in/terms-and-conditions' },
  openGraph: {
    title: 'Terms & Conditions | SK WebTech',
    description: 'Terms and conditions for using SK WebTech services.',
    type: 'website',
    url: 'https://www.skwebtech.in/terms-and-conditions',
  },
};

const sections = [
  {
    id: 'acceptance',
    icon: Handshake,
    title: 'Acceptance of Terms',
    color: 'from-cyan-500 to-blue-600',
    content: [
      {
        heading: 'Agreement to Terms',
        body: 'By accessing our website (www.skwebtech.in), requesting a quote, or engaging SK WebTech — owned and operated by Sachhidanand Kushwaha — for any service, you agree to be bound by these Terms & Conditions. All references to "SK WebTech", "we", "us", or "our" in this document mean SK WebTech by Sachhidanand Kushwaha. If you do not agree with any part of these terms, please do not use our services.',
      },
      {
        heading: 'Eligibility',
        body: 'You must be at least 18 years of age and legally capable of entering into a binding contract to engage our services. By engaging us on behalf of a company, you confirm that you have the authority to bind that company to these terms.',
      },
    ],
  },
  {
    id: 'services',
    icon: Layers,
    title: 'Our Services',
    color: 'from-indigo-500 to-purple-600',
    content: [
      {
        heading: 'Scope of Services',
        body: 'SK WebTech provides web development, e-commerce development, SEO optimization, mobile app development, UI/UX design, WhatsApp Business solutions, and website maintenance services. The exact scope, deliverables, timeline, and cost of each project are defined in the written proposal or quotation shared with you before work begins.',
      },
      {
        heading: 'Quotes & Proposals',
        body: 'All quotations are valid for 15 days from the date of issue unless stated otherwise. Any work not explicitly mentioned in the accepted proposal is considered out of scope and may be charged additionally after mutual agreement.',
      },
      {
        heading: 'Project Timelines',
        body: 'Timelines shared in proposals are estimates made in good faith. Delays caused by late feedback, missing content, or delayed approvals from the client side may extend the delivery date proportionally. We will always keep you informed about the project status.',
      },
    ],
  },
  {
    id: 'client-responsibilities',
    icon: FileText,
    title: 'Client Responsibilities',
    color: 'from-emerald-500 to-green-600',
    content: [
      {
        heading: 'Content & Materials',
        body: 'The client is responsible for providing all required content (text, images, logos, product data, credentials) in a timely manner. The client warrants that all materials provided are owned by them or properly licensed, and do not infringe any third-party rights.',
      },
      {
        heading: 'Feedback & Approvals',
        body: 'Timely review and approval of designs, drafts, and milestones is essential. If feedback is not received within 7 working days of a request, the deliverable may be considered approved so the project can move forward.',
      },
      {
        heading: 'Accuracy of Information',
        body: 'The client is responsible for the accuracy and legality of all business information, claims, and offers displayed on their website or application. SK WebTech is not liable for any consequences arising from content provided by the client.',
      },
    ],
  },
  {
    id: 'payments',
    icon: CreditCard,
    title: 'Payments & Billing',
    color: 'from-amber-500 to-orange-500',
    content: [
      {
        heading: 'Payment Structure',
        body: 'Projects typically require an advance payment (usually 30–50% of the project value) before work begins, with the balance due as per the milestones agreed in the proposal. Final deliverables, source code, and credentials are handed over after full and final payment.',
      },
      {
        heading: 'Late Payments',
        body: 'Invoices are payable within 7 days of issue unless agreed otherwise. We reserve the right to pause ongoing work, withhold deliverables, or suspend hosted services for accounts with overdue payments after prior notice.',
      },
      {
        heading: 'Third-Party Costs',
        body: 'Costs for third-party services such as domain names, hosting, SSL certificates, premium plugins, stock assets, WhatsApp API charges, and advertising budgets are separate from our service fees unless explicitly included in the proposal. These are governed by the respective third party’s terms.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    icon: Copyright,
    title: 'Intellectual Property',
    color: 'from-pink-500 to-rose-500',
    content: [
      {
        heading: 'Ownership of Deliverables',
        body: 'Upon receipt of full and final payment, ownership of the final website, application, or design deliverables created specifically for the client is transferred to the client. Until full payment is received, all work remains the property of SK WebTech.',
      },
      {
        heading: 'Our Tools & Frameworks',
        body: 'Pre-existing code libraries, frameworks, internal tools, and know-how used to build your project remain the property of SK WebTech or their respective open-source licensors and are licensed to you for use within the delivered project.',
      },
      {
        heading: 'Portfolio Rights',
        body: 'SK WebTech reserves the right to showcase completed projects in our portfolio, case studies, and marketing materials unless the client requests otherwise in writing before project completion.',
      },
    ],
  },
  {
    id: 'warranties',
    icon: ShieldAlert,
    title: 'Warranties & Limitation of Liability',
    color: 'from-red-500 to-rose-600',
    content: [
      {
        heading: 'Service Warranty',
        body: 'We provide a free bug-fixing window of 30 days after project delivery for defects in the work we developed. This does not cover issues caused by third-party services, client-side modifications, hosting problems, or new feature requests.',
      },
      {
        heading: 'No Guarantee of Results',
        body: 'While we follow industry best practices for SEO, marketing, and performance, we cannot guarantee specific search engine rankings, traffic numbers, sales figures, or business outcomes, as these depend on many factors beyond our control.',
      },
      {
        heading: 'Limitation of Liability',
        body: 'To the maximum extent permitted by law, SK WebTech’s total liability for any claim arising out of a project shall not exceed the amount paid by the client for that project. We are not liable for indirect, incidental, or consequential damages including loss of profits, data, or business opportunities.',
      },
    ],
  },
  {
    id: 'termination',
    icon: RefreshCw,
    title: 'Termination & Changes',
    color: 'from-violet-500 to-purple-600',
    content: [
      {
        heading: 'Termination by Client',
        body: 'The client may terminate a project with written notice. Payment will be due for all work completed up to the date of termination, and any advance covering completed work is non-refundable as per our Refund Policy.',
      },
      {
        heading: 'Termination by SK WebTech',
        body: 'We may terminate an engagement if the client breaches these terms, fails to make payments, is unresponsive for more than 30 days, or requests work that is unlawful or unethical. In such cases, completed work will be billed proportionally.',
      },
      {
        heading: 'Changes to These Terms',
        body: 'We may update these Terms & Conditions from time to time. The latest version will always be available on this page, and continued use of our services after changes constitutes acceptance of the updated terms.',
      },
    ],
  },
  {
    id: 'governing-law',
    icon: Scale,
    title: 'Governing Law',
    color: 'from-teal-500 to-cyan-600',
    content: [
      {
        heading: 'Jurisdiction',
        body: 'These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with our services shall be subject to the exclusive jurisdiction of the courts of India.',
      },
      {
        heading: 'Dispute Resolution',
        body: 'We believe in resolving issues amicably. In case of any disagreement, both parties agree to first attempt resolution through good-faith discussion before pursuing any legal remedies.',
      },
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-20 bg-void overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 mask-radial-fade pointer-events-none" />
        <div className="glow-orb top-1/3 left-1/4 w-96 h-96 bg-primary-500/[0.08] animate-aurora" />
        <div className="glow-orb bottom-0 right-1/4 w-72 h-72 bg-secondary-500/[0.09]" />

        <div className="container-custom relative z-10 text-center">
          <span className="badge-chip mb-6">Legal</span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            These terms define how we work together — from proposals and payments to delivery and support. Please read them carefully before engaging our services.
          </p>
          <p className="text-sm text-slate-500 mb-2">
            <span className="text-slate-300 font-medium">SK WebTech</span> · by Sachhidanand Kushwaha
          </p>
          <p className="text-sm text-slate-500">
            Last updated: <span className="text-slate-400 font-medium">July 7, 2026</span>
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-6 bg-void/80 backdrop-blur-xl border-y border-white/[0.06] sticky top-16 z-20">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/[0.04] hover:bg-primary-500/10 border border-white/10 hover:border-primary-500/30 text-slate-400 hover:text-primary-300 text-sm font-medium rounded-full transition-all"
              >
                <s.icon size={14} />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-14 bg-void">
        <div className="container-custom max-w-4xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-44 rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 p-7 border-b border-white/[0.06]">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <section.icon size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-white">{section.title}</h2>
                </div>

                <div className="divide-y divide-white/[0.05]">
                  {section.content.map((item) => (
                    <div key={item.heading} className="p-7">
                      <h3 className="font-heading font-semibold text-slate-200 mb-2 text-base">{item.heading}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Related policies */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="/refund-policy" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium rounded-full hover:border-primary-500/40 hover:text-primary-300 transition-all">
              Refund Policy <ArrowRight size={14} />
            </Link>
            <Link href="/privacy-policy" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium rounded-full hover:border-primary-500/40 hover:text-primary-300 transition-all">
              Privacy Policy <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-16 bg-void overflow-hidden">
        <div className="glow-orb top-0 left-1/3 w-96 h-96 bg-primary-500/[0.08] -translate-y-1/2" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
        <div className="container-custom max-w-3xl text-center relative z-10">
          <div className="w-14 h-14 bg-primary-500/15 border border-primary-500/25 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={26} className="text-primary-400" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Questions About These Terms?</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            If anything is unclear or you need a custom agreement for your project, reach out — we&apos;re happy to walk you through it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent">
              Contact Us <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="mailto:info@skwebtech.in" className="btn-secondary">
              <Mail size={16} className="mr-2" />
              info@skwebtech.in
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
