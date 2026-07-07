'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Layers,
  MapPin,
  Inbox,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

interface SidebarLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active: boolean;
  onClick?: () => void;
}

function SidebarLink({ href, icon: Icon, label, active, onClick }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
        active
          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/15'
          : 'text-slate-400 hover:text-white hover:bg-slate-900'
      }`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span>{label}</span>
    </Link>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // If we are on the login page, don't show the sidebar or admin wrapper
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const navItems = [
    { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/blogs', icon: FileText, label: 'Blogs' },
    { href: '/admin/portfolio', icon: Briefcase, label: 'Portfolio' },
    { href: '/admin/services', icon: Layers, label: 'Services' },
    { href: '/admin/locations', icon: MapPin, label: 'SEO Locations' },
    { href: '/admin/contacts', icon: Inbox, label: 'Leads' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row">
      {/* Mobile Header Bar */}
      <header className="lg:hidden h-16 border-b border-white/5 bg-slate-900/60 backdrop-blur-md flex items-center justify-between px-4 z-40 sticky top-0">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-md">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="font-heading font-extrabold text-sm tracking-tight text-white">
            SK<span className="text-indigo-400">Admin</span>
          </span>
        </Link>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          aria-label="Toggle Navigation Sidebar"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`w-72 border-r border-white/5 bg-slate-900 flex flex-col p-6 fixed inset-y-0 left-0 z-50 transform lg:transform-none transition-transform duration-300 lg:sticky lg:h-screen ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/10">
              <Sparkles size={18} className="text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base leading-none text-white tracking-tight">
                SK<span className="text-indigo-400">Admin</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1">Control Panel</span>
            </div>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-1.5 text-slate-450 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X size={16} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 space-y-1.5">
          {navItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))}
              onClick={() => setIsSidebarOpen(false)}
            />
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-white/5 space-y-2 mt-auto">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between w-full px-4 py-2.5 text-xs text-slate-450 hover:text-slate-200 transition-colors group"
          >
            <span className="font-medium">Go to Website</span>
            <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-all"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
