'use client';

import { useState, useEffect } from 'react';
import {
  Inbox,
  Search,
  CheckCircle,
  Clock,
  Trash2,
  AlertCircle,
  Eye,
  X,
  Phone,
  Mail,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  status: 'Pending' | 'In-Progress' | 'Resolved';
  createdAt: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null);

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/contacts');
      if (res.ok) {
        const data = await res.json();
        setContacts(data);
      } else {
        setError('Failed to fetch contact requests');
      }
    } catch (err) {
      setError('Connection error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch('/api/admin/contacts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });

      if (res.ok) {
        setContacts(prev =>
          prev.map(c => (c.id === id ? { ...c, status: status as any } : c))
        );
        if (selectedContact && selectedContact.id === id) {
          setSelectedContact(prev => prev ? { ...prev, status: status as any } : null);
        }
      }
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact lead?')) return;

    try {
      const res = await fetch('/api/admin/contacts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setContacts(prev => prev.filter(c => c.id !== id));
        if (selectedContact && selectedContact.id === id) {
          setSelectedContact(null);
        }
      }
    } catch (err) {
      console.error('Failed to delete lead', err);
    }
  };

  const filteredContacts = contacts.filter(
    c =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.service && c.service.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const statusColors = {
    'Pending': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    'In-Progress': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Resolved': 'bg-green-500/10 text-green-400 border-green-500/20',
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white tracking-tight">
            Client Leads
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Track and resolve customer requests submitted through the contact form.
          </p>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2.5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      {/* Toolbar */}
      <div className="bg-slate-900 border border-white/5 rounded-2xl p-4 flex items-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search leads by name, email, or content..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all text-sm"
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* Table List (8 cols) */}
        <div className="xl:col-span-8 bg-slate-900 border border-white/5 rounded-2xl overflow-hidden">
          {isLoading ? (
            <div className="p-20 flex items-center justify-center">
              <span className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filteredContacts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02] text-xs font-semibold text-slate-400 uppercase">
                    <th className="p-4">Contact</th>
                    <th className="p-4">Requested Service</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {filteredContacts.map(lead => (
                    <tr
                      key={lead.id}
                      className={`hover:bg-white/[0.01] transition-colors cursor-pointer ${
                        selectedContact?.id === lead.id ? 'bg-indigo-600/5' : ''
                      }`}
                      onClick={() => setSelectedContact(lead)}
                    >
                      <td className="p-4">
                        <div className="font-semibold text-white">{lead.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{lead.email}</div>
                      </td>
                      <td className="p-4 text-slate-350">{lead.service || 'General Inquiry'}</td>
                      <td className="p-4">
                        <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full border ${statusColors[lead.status]}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4 text-right" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setSelectedContact(lead)}
                            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                            title="View message details"
                          >
                            <Eye size={15} />
                          </button>
                          <button
                            onClick={() => handleDelete(lead.id)}
                            className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/5"
                            title="Delete query"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-20 text-center text-slate-550 flex flex-col items-center">
              <Inbox size={40} className="text-slate-600 mb-3" />
              <p className="font-heading font-semibold text-white">No Leads Found</p>
              <p className="text-xs text-slate-450 mt-1">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>

        {/* Selected Query Details Panel (4 cols) */}
        <div className="xl:col-span-4">
          {selectedContact ? (
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 space-y-6 sticky top-24">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-white text-base">Lead Details</h3>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="p-1 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1.5">Client</div>
                  <div className="font-bold text-white text-base">{selectedContact.name}</div>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="flex items-center gap-2.5 text-slate-300 hover:text-indigo-400 transition-colors"
                  >
                    <Mail size={15} className="text-indigo-400 flex-shrink-0" />
                    <span className="truncate">{selectedContact.email}</span>
                  </a>
                  {selectedContact.phone && (
                    <a
                      href={`tel:${selectedContact.phone}`}
                      className="flex items-center gap-2.5 text-slate-300 hover:text-indigo-400 transition-colors"
                    >
                      <Phone size={15} className="text-indigo-400 flex-shrink-0" />
                      <span>{selectedContact.phone}</span>
                    </a>
                  )}
                  <div className="flex items-center gap-2.5 text-slate-350 text-xs">
                    <Calendar size={15} className="text-indigo-400 flex-shrink-0" />
                    <span>Submitted {new Date(selectedContact.createdAt).toLocaleString()}</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <div className="text-slate-550 text-xs font-semibold uppercase tracking-wider mb-2">Message</div>
                  <div className="bg-slate-950 border border-white/5 p-4 rounded-xl text-slate-300 text-sm whitespace-pre-wrap leading-relaxed max-h-[220px] overflow-y-auto">
                    {selectedContact.message}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 space-y-3">
                  <div className="text-slate-550 text-xs font-semibold uppercase tracking-wider">Update Status</div>
                  <div className="flex gap-2">
                    {['Pending', 'In-Progress', 'Resolved'].map(st => (
                      <button
                        key={st}
                        onClick={() => handleUpdateStatus(selectedContact.id, st)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                          selectedContact.status === st
                            ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                            : 'bg-slate-950 border-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900/40 border border-dashed border-white/5 rounded-2xl p-12 text-center text-slate-550 flex flex-col items-center justify-center sticky top-24 h-[300px]">
              <Eye size={24} className="text-slate-700 mb-2" />
              <div className="font-heading font-semibold text-slate-400">No Lead Selected</div>
              <p className="text-xs text-slate-500 mt-1 max-w-[200px] mx-auto">Select a row in the table to view the message content and change status.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
