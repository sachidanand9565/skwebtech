import { Metadata } from 'next';
import Link from 'next/link';
import {
  IndianRupee, XCircle, CheckCircle2, Clock, Ban, Wallet,
  Mail, ArrowRight, AlertTriangle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund Policy - SK WebTech',
  description:
    'Read SK WebTech\'s Refund Policy covering advance payments, project cancellations, milestone payments, and refund timelines for our web development and IT services.',
  keywords: ['refund policy', 'SK WebTech refund', 'cancellation policy', 'web development refund'],
  alternates: { canonical: 'https://www.skwebtech.in/refund-policy' },
  openGraph: {
    title: 'Refund Policy | SK WebTech',
    description: 'Refund and cancellation policy for SK WebTech services.',
    type: 'website',
    url: 'https://www.skwebtech.in/refund-policy',
  },
};

const sections = [
  {
    id: 'overview',
    icon: Wallet,
    title: 'Policy Overview',
    color: 'from-cyan-500 to-blue-600',
    content: [
      {
        heading: 'Our Commitment',
        body: 'At SK WebTech, we aim for complete client satisfaction on every project. Since our services involve dedicated time, custom development, and third-party costs, refunds are governed by the conditions below. This policy applies to all services including web development, e-commerce, SEO, app development, UI/UX design, WhatsApp Business solutions, and maintenance plans.',
      },
      {
        heading: 'Written Agreements First',
        body: 'If a signed proposal or agreement for your project specifies different refund terms, the terms in that agreement will take precedence over this general policy.',
      },
    ],
  },
  {
    id: 'eligible',
    icon: CheckCircle2,
    title: 'When Refunds Apply',
    color: 'from-emerald-500 to-green-600',
    content: [
      {
        heading: 'Project Not Started',
        body: 'If we are unable to start your project within 15 working days of receiving the advance payment (for reasons on our side), you are entitled to a full refund of the advance amount.',
      },
      {
        heading: 'Cancellation Before Work Begins',
        body: 'If you cancel in writing before any work has started, the advance payment will be refunded after deducting any third-party costs already incurred on your behalf (such as domains, hosting, or licenses).',
      },
      {
        heading: 'Inability to Deliver',
        body: 'In the rare case where SK WebTech is unable to deliver the agreed scope and no acceptable alternative is possible, a proportional refund will be issued for the undelivered portion of the work.',
      },
    ],
  },
  {
    id: 'not-eligible',
    icon: XCircle,
    title: 'When Refunds Do Not Apply',
    color: 'from-red-500 to-rose-600',
    content: [
      {
        heading: 'Work Already Completed',
        body: 'Payments for milestones that have been completed, approved, or delivered are non-refundable. Once a design is approved or a development phase is signed off, that portion of the fee is considered earned.',
      },
      {
        heading: 'Change of Mind',
        body: 'Refunds are not provided for change of mind, change in business plans, or project abandonment from the client side after work has started. Work completed up to the cancellation date will be billed.',
      },
      {
        heading: 'Third-Party Costs',
        body: 'Amounts spent on third-party products and services — domain names, hosting, SSL certificates, premium themes/plugins, stock assets, WhatsApp API/Meta charges, and advertising budgets — are strictly non-refundable, as these are governed by the respective providers.',
      },
      {
        heading: 'SEO & Marketing Services',
        body: 'Fees for SEO, digital marketing, and campaign management are non-refundable once the work cycle (audit, optimization, or campaign) has begun, since results depend on continuous effort and factors outside our control. We never guarantee specific rankings or traffic.',
      },
      {
        heading: 'Delays From Client Side',
        body: 'If a project is delayed or paused due to pending content, feedback, or approvals from the client for more than 30 days, the project may be marked as delivered-to-date, and no refund will apply for that period.',
      },
    ],
  },
  {
    id: 'cancellation',
    icon: Ban,
    title: 'Cancellation Process',
    color: 'from-amber-500 to-orange-500',
    content: [
      {
        heading: 'How to Cancel',
        body: 'To cancel a project or service, email us at info@skwebtech.in from your registered email address with your project details. Cancellations are effective from the date we acknowledge the request in writing.',
      },
      {
        heading: 'Settlement on Cancellation',
        body: 'On cancellation, we will calculate the value of work completed till that date. If payments received exceed the completed work value, the difference will be refunded. If completed work exceeds payments received, a final invoice will be raised for the balance.',
      },
      {
        heading: 'Maintenance & Recurring Plans',
        body: 'Monthly maintenance or support plans can be cancelled with 15 days written notice before the next billing cycle. Fees already paid for the current cycle are non-refundable, and support continues until the end of that cycle.',
      },
    ],
  },
  {
    id: 'processing',
    icon: Clock,
    title: 'Refund Processing',
    color: 'from-violet-500 to-purple-600',
    content: [
      {
        heading: 'Timeline',
        body: 'Approved refunds are processed within 7–14 business days from the date of approval. Depending on your bank or payment provider, it may take additional time for the amount to reflect in your account.',
      },
      {
        heading: 'Refund Method',
        body: 'Refunds are issued to the original payment method used for the transaction (bank transfer, UPI, or payment gateway). We do not issue cash refunds or transfers to third-party accounts.',
      },
      {
        heading: 'Taxes',
        body: 'Any government taxes (such as GST) already deposited on invoiced amounts may not be refundable as per applicable tax laws; refunds will be calculated on the base amount where required.',
      },
    ],
  },
  {
    id: 'disputes',
    icon: IndianRupee,
    title: 'Disputes & Chargebacks',
    color: 'from-teal-500 to-cyan-600',
    content: [
      {
        heading: 'Talk to Us First',
        body: 'If you are unhappy with any deliverable, please contact us first — most issues are resolved quickly through revisions or discussion. Raising a payment dispute or chargeback without contacting us may delay resolution and can lead to suspension of services.',
      },
      {
        heading: 'Policy Updates',
        body: 'We may update this Refund Policy from time to time. The latest version will always be published on this page with the updated date. Continued use of our services after an update constitutes acceptance of the revised policy.',
      },
    ],
  },
];

export default function RefundPolicyPage() {
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
            Refund <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Clear, fair terms about advance payments, cancellations, and refunds — so there are no surprises for either side.
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

      {/* Important note */}
      <section className="py-10 bg-void">
        <div className="container-custom max-w-4xl">
          <div className="rounded-3xl border border-amber-500/25 bg-amber-500/[0.05] p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={20} className="text-amber-400" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="font-semibold text-white">In short:</span> advance payments are adjustable against work done, completed milestones are non-refundable, and third-party costs (domains, hosting, API charges) can never be refunded. If we fail to start or deliver from our side, you get your money back.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-14 bg-void">
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
            <Link href="/terms-and-conditions" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium rounded-full hover:border-primary-500/40 hover:text-primary-300 transition-all">
              Terms & Conditions <ArrowRight size={14} />
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
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Need Help With a Refund?</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Write to us with your project details and we&apos;ll respond within 24 hours. We always prefer solving things together.
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
