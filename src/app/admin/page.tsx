import Link from 'next/link';
import {
  FileText,
  Briefcase,
  Layers,
  MapPin,
  Inbox,
  ArrowRight,
  PlusCircle,
  Clock,
  User,
  CheckCircle,
  MessageSquare
} from 'lucide-react';
import { getBlogs, getProjects, getServices, getLocations, getContacts } from '@/lib/db';
import ChangePasswordCard from './ChangePasswordCard';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const blogs = await getBlogs();
  const projects = await getProjects();
  const services = await getServices();
  const locations = await getLocations();
  const contacts = await getContacts();

  // Compute stat card data
  const stats = [
    { label: 'Total Blogs', count: blogs.length, icon: FileText, color: 'text-blue-500 bg-blue-500/10' },
    { label: 'Portfolio Items', count: projects.length, icon: Briefcase, color: 'text-emerald-500 bg-emerald-500/10' },
    { label: 'Active Services', count: services.length, icon: Layers, color: 'text-purple-500 bg-purple-500/10' },
    { label: 'SEO Locations', count: locations.length, icon: MapPin, color: 'text-orange-500 bg-orange-500/10' },
    { label: 'Form Leads', count: contacts.length, icon: Inbox, color: 'text-pink-500 bg-pink-500/10' },
  ];

  // Latest 4 contact submissions
  const recentLeads = contacts.slice(0, 4);

  // Status badge colors
  const statusColors = {
    'Pending': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    'In-Progress': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Resolved': 'bg-green-500/10 text-green-400 border-green-500/20',
  };

  return (
    <div className="space-y-10">
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Real-time analytics and management tools for SK WebTech.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-all"
          >
            <PlusCircle size={16} />
            <span>New Post</span>
          </Link>
          <Link
            href="/admin/portfolio"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-xl transition-all border border-white/5"
          >
            <PlusCircle size={16} />
            <span>New Project</span>
          </Link>
        </div>
      </div>

      {/* Grid of stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-900 border border-white/5 rounded-2xl p-5 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                {stat.label}
              </span>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon size={16} />
              </div>
            </div>
            <div className="text-3xl font-bold font-heading text-white mt-4">
              {stat.count}
            </div>
          </div>
        ))}
      </div>

      {/* Main split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left column - Recent Leads */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold font-heading text-white flex items-center gap-2">
              <Inbox size={18} className="text-indigo-400" />
              <span>Recent Client Leads</span>
            </h2>
            <Link
              href="/admin/contacts"
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group"
            >
              <span>View All Leads</span>
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden">
            {recentLeads.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.02] text-xs font-semibold text-slate-400 uppercase">
                      <th className="p-4">Contact</th>
                      <th className="p-4">Service</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm">
                    {recentLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-white/[0.01] transition-colors">
                        <td className="p-4">
                          <div className="font-semibold text-white">{lead.name}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{lead.email}</div>
                        </td>
                        <td className="p-4 text-slate-300">
                          {lead.service || 'General'}
                        </td>
                        <td className="p-4 text-slate-450 text-xs">
                          {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: '2-digit'
                          })}
                        </td>
                        <td className="p-4">
                          <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full border ${statusColors[lead.status]}`}>
                            {lead.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center text-slate-500">
                No contact form submissions recorded yet.
              </div>
            )}
          </div>
        </div>

        {/* Right column - Quick Actions / Platform Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-bold font-heading text-white flex items-center gap-2">
              <CheckCircle size={18} className="text-emerald-400" />
              <span>Quick Shortcuts</span>
            </h2>
            
            <div className="space-y-3">
              {[
                { title: 'Create SEO Landing Page', desc: 'Add new cities for regional marketing targeting', href: '/admin/locations', color: 'from-orange-500/10 to-orange-500/5 hover:border-orange-500/20' },
                { title: 'Update Services Listings', desc: 'Add or modify services showcased on home page', href: '/admin/services', color: 'from-purple-500/10 to-purple-500/5 hover:border-purple-500/20' },
                { title: 'Manage Custom Layouts', desc: 'Configure search engine headers and descriptions', href: '/admin/services', color: 'from-blue-500/10 to-blue-500/5 hover:border-blue-500/20' }
              ].map((act, i) => (
                <Link
                  key={i}
                  href={act.href}
                  className={`block p-5 rounded-2xl bg-gradient-to-r border border-white/5 transition-all ${act.color}`}
                >
                  <div className="font-semibold text-white text-sm">{act.title}</div>
                  <div className="text-slate-450 text-xs mt-1 leading-relaxed">{act.desc}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Admin password management */}
          <ChangePasswordCard />
        </div>
      </div>
    </div>
  );
}
