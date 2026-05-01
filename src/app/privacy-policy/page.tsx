import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, Lock, Share2, Cookie, UserCheck, Mail, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - SK WebTech',
  description:
    'Read SK WebTech\'s Privacy Policy to understand how we collect, use, and protect your personal information when you use our services.',
  keywords: ['privacy policy', 'SK WebTech privacy', 'data protection', 'personal information'],
  alternates: { canonical: 'https://www.skwebtech.in/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | SK WebTech',
    description: 'Learn how SK WebTech collects, uses, and protects your personal information.',
    type: 'website',
    url: 'https://www.skwebtech.in/privacy-policy',
  },
};

const sections = [
  {
    id: 'information-we-collect',
    icon: Eye,
    title: 'Information We Collect',
    color: 'from-blue-500 to-indigo-600',
    content: [
      {
        heading: 'Information You Provide Directly',
        body: 'When you contact us, request a quote, or use our services, we may collect your name, email address, phone number, company name, and any other information you choose to provide through our contact forms or direct communication.',
      },
      {
        heading: 'Automatically Collected Information',
        body: 'When you visit our website, we automatically collect certain technical information including your IP address, browser type and version, pages visited, time and date of your visit, time spent on each page, and referring website addresses.',
      },
      {
        heading: 'Cookies & Tracking Technologies',
        body: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie settings through your browser preferences.',
      },
    ],
  },
  {
    id: 'how-we-use',
    icon: UserCheck,
    title: 'How We Use Your Information',
    color: 'from-indigo-500 to-purple-600',
    content: [
      {
        heading: 'Providing & Improving Our Services',
        body: 'We use your information to respond to your inquiries, provide quotes and project proposals, deliver the services you have requested, and continuously improve the quality of our work and website experience.',
      },
      {
        heading: 'Communication',
        body: 'With your consent, we may send you updates about our services, relevant industry insights, promotional offers, or newsletters. You can unsubscribe from marketing emails at any time by clicking the unsubscribe link in any email.',
      },
      {
        heading: 'Legal Compliance & Security',
        body: 'We may process your data to comply with applicable laws and regulations, prevent fraud, enforce our terms of service, and protect the rights, property, or safety of SK WebTech, our clients, or others.',
      },
    ],
  },
  {
    id: 'data-sharing',
    icon: Share2,
    title: 'Data Sharing & Disclosure',
    color: 'from-orange-500 to-rose-500',
    content: [
      {
        heading: 'We Do Not Sell Your Data',
        body: 'SK WebTech does not sell, rent, or trade your personal information to third parties for their marketing purposes. Your data is used solely to provide you with our services and improve your experience.',
      },
      {
        heading: 'Trusted Service Providers',
        body: 'We may share your information with carefully selected third-party service providers who assist us in operating our website and delivering services - such as hosting providers, email services, and analytics platforms. These providers are contractually obligated to keep your data confidential.',
      },
      {
        heading: 'Legal Requirements',
        body: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).',
      },
    ],
  },
  {
    id: 'cookies',
    icon: Cookie,
    title: 'Cookies Policy',
    color: 'from-amber-500 to-orange-500',
    content: [
      {
        heading: 'Essential Cookies',
        body: 'These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.',
      },
      {
        heading: 'Analytics Cookies',
        body: 'We use analytics cookies (such as Google Analytics) to understand how visitors interact with our website. This helps us improve our content and user experience. The data collected is aggregated and anonymous.',
      },
      {
        heading: 'Managing Cookies',
        body: 'You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of the website may become inaccessible or not function properly.',
      },
    ],
  },
  {
    id: 'data-security',
    icon: Lock,
    title: 'Data Security',
    color: 'from-green-500 to-emerald-600',
    content: [
      {
        heading: 'How We Protect Your Data',
        body: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website uses SSL/TLS encryption for data in transit.',
      },
      {
        heading: 'Data Retention',
        body: 'We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. When data is no longer needed, it is securely deleted.',
      },
      {
        heading: 'Breach Notification',
        body: 'In the unlikely event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law within the legally mandated timeframe.',
      },
    ],
  },
  {
    id: 'your-rights',
    icon: Shield,
    title: 'Your Rights',
    color: 'from-purple-500 to-violet-600',
    content: [
      {
        heading: 'Access & Correction',
        body: 'You have the right to request access to the personal information we hold about you, and to request that we correct any inaccurate or incomplete data. To make such a request, please contact us using the details below.',
      },
      {
        heading: 'Deletion & Restriction',
        body: 'You may request that we delete your personal data or restrict its processing in certain circumstances - for example, if you believe the data is no longer necessary for the purpose it was collected, or if you withdraw consent.',
      },
      {
        heading: 'Data Portability & Objection',
        body: 'Where technically feasible, you have the right to receive your data in a structured, commonly used format. You also have the right to object to processing of your personal data for direct marketing purposes at any time.',
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-3 py-1.5 bg-white/10 border border-white/20 text-white/80 text-xs font-medium rounded-full mb-6 backdrop-blur-sm">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
            Privacy &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Policy
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Your privacy matters to us. This policy explains how SK WebTech collects, uses, and safeguards your personal information when you visit our website or use our services.
          </p>
          <p className="text-sm text-slate-500">
            Last updated: <span className="text-slate-400 font-medium">April 30, 2026</span>
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-10 bg-white border-b border-gray-100 sticky top-16 z-20 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 text-gray-600 hover:text-indigo-700 text-sm font-medium rounded-xl transition-all"
              >
                <s.icon size={14} />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-14 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 md:p-10">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Shield size={26} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">Our Commitment to Your Privacy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  SK WebTech (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your personal information and your right to privacy. This Privacy Policy applies to all information we collect through our website{' '}
                  <span className="text-indigo-600 font-medium">www.skwebtech.in</span> and any related services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By using our website, you agree to the collection and use of information in accordance with this policy. If you have any concerns about any of our practices described here, please contact us immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="pb-14 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-40 bg-white border border-gray-100 rounded-3xl shadow-card overflow-hidden"
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 p-7 border-b border-gray-50">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <section.icon size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-gray-900">{section.title}</h2>
                </div>

                {/* Section Content */}
                <div className="divide-y divide-gray-50">
                  {section.content.map((item) => (
                    <div key={item.heading} className="p-7">
                      <h3 className="font-heading font-semibold text-gray-800 mb-2 text-base">{item.heading}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Links */}
      <section className="py-14 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-card">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-500 leading-relaxed text-sm mb-4">
              Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-card">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-500 leading-relaxed text-sm">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us so that we can take the necessary actions to remove such information from our records.
            </p>
          </div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-8 pb-14 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-card">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-500 leading-relaxed text-sm mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the &quot;Last updated&quot; date at the top of this page. We encourage you to review this page periodically to stay informed about how we are protecting your data.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Your continued use of our website after any changes are posted constitutes your acceptance of the updated Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div className="container-custom max-w-3xl text-center">
          <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={26} className="text-indigo-400" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Questions About Your Privacy?</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            If you have any questions about this Privacy Policy, how we handle your data, or would like to exercise any of your rights, please reach out - we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent">
              Contact Us <ArrowRight size={18} className="ml-2" />
            </Link>
            <a
              href="mailto:sachi274406@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/8 border border-white/20 text-white font-medium rounded-lg hover:bg-white/15 transition-all"
            >
              <Mail size={16} className="mr-2" />
              sachi274406@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
