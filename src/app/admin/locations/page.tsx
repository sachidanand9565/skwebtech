'use client';

import { useState, useEffect } from 'react';
import {
  MapPin,
  Search,
  Plus,
  Trash2,
  AlertCircle,
  PlusCircle,
  X,
  Edit2
} from 'lucide-react';

interface Location {
  slug: string;
  name: string;
  state: string;
}

export default function AdminLocationsPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Form State
  const [isOpen, setIsOpen] = useState(false);
  const [editingLoc, setEditingLoc] = useState<Location | null>(null);
  const [slug, setSlug] = useState('');
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchLocations = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/locations');
      if (res.ok) {
        const data = await res.json();
        setLocations(data);
      } else {
        setError('Failed to fetch locations list');
      }
    } catch (err) {
      setError('Connection failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleOpenAdd = () => {
    setEditingLoc(null);
    setSlug('');
    setName('');
    setState('');
    setFormError('');
    setIsOpen(true);
  };

  const handleOpenEdit = (loc: Location) => {
    setEditingLoc(loc);
    setSlug(loc.slug);
    setName(loc.name);
    setState(loc.state);
    setFormError('');
    setIsOpen(true);
  };

  const handleNameChange = (val: string) => {
    setName(val);
    if (!editingLoc) {
      // Auto-generate slug from name
      setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!slug.trim() || !name.trim() || !state.trim()) {
      setFormError('All fields are required');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const isEdit = !!editingLoc;
      const url = '/api/admin/locations';
      const method = isEdit ? 'PUT' : 'POST';
      
      const payload = isEdit 
        ? { slug, name, state, originalSlug: editingLoc.slug }
        : { slug, name, state };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        if (isEdit) {
          setLocations(prev => prev.map(l => l.slug === editingLoc.slug ? data.location : l));
        } else {
          setLocations(prev => [...prev, data.location]);
        }
        setIsOpen(false);
      } else {
        setFormError(data.error || 'Operation failed');
      }
    } catch (err) {
      setFormError('Server connection failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (targetSlug: string) => {
    if (!confirm(`Are you sure you want to delete "${targetSlug}" location? This will break any regional SEO landing pages linking to it!`)) return;

    try {
      const res = await fetch('/api/admin/locations', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: targetSlug }),
      });

      if (res.ok) {
        setLocations(prev => prev.filter(l => l.slug !== targetSlug));
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete location');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredLocations = locations.filter(
    l =>
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white tracking-tight">
            SEO Target Locations
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage cities and states. Adding a location automatically spawns dynamically rendered local landing pages (e.g., `/services/web-development-in-[city]`).
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-750 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/10 self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Add Location</span>
        </button>
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
            placeholder="Search locations by name, state, slug..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all text-sm"
          />
        </div>
      </div>

      {/* Locations List Grid */}
      {isLoading ? (
        <div className="p-20 flex items-center justify-center">
          <span className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filteredLocations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredLocations.map(loc => (
            <div
              key={loc.slug}
              className="bg-slate-900 border border-white/5 p-5 rounded-2xl flex items-start justify-between group hover:border-indigo-500/30 transition-all"
            >
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-indigo-400 flex-shrink-0" />
                  <span className="font-bold text-white text-base truncate">{loc.name}</span>
                </div>
                <div className="text-slate-400 text-xs truncate">{loc.state}</div>
                <div className="text-[10px] bg-white/5 text-slate-500 px-2 py-0.5 rounded border border-white/5 w-fit font-mono font-medium">
                  {loc.slug}
                </div>
              </div>

              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                <button
                  onClick={() => handleOpenEdit(loc)}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded"
                  title="Edit details"
                >
                  <Edit2 size={13} />
                </button>
                <button
                  onClick={() => handleDelete(loc.slug)}
                  className="p-1.5 text-red-405 hover:text-red-300 hover:bg-red-500/5 rounded"
                  title="Delete location"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-900 border border-white/5 rounded-2xl p-20 text-center text-slate-500 flex flex-col items-center">
          <MapPin size={40} className="text-slate-700 mb-3 animate-bounce" />
          <p className="font-heading font-semibold text-white">No SEO Targets Configured</p>
          <p className="text-xs text-slate-450 mt-1">Configure cities and states to begin generating regional landing pages.</p>
        </div>
      )}

      {/* Editor Modal Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-white/5 w-full max-w-md rounded-3xl p-4 sm:p-6 shadow-2xl relative space-y-5 sm:space-y-6 my-4 sm:my-8">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-lg text-white">
                {editingLoc ? 'Edit Target Location' : 'Configure New Location'}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {formError && (
                <div className="flex items-center gap-2 p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs">
                  <AlertCircle size={14} className="flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">City/Location Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => handleNameChange(e.target.value)}
                  placeholder="e.g. Noida, Gurgaon, Pune"
                  className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-medium"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">URL Slug</label>
                <input
                  type="text"
                  value={slug}
                  onChange={e => setSlug(e.target.value)}
                  placeholder="e.g. noida, gurgaon, pune"
                  className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-mono font-medium"
                  required
                  disabled={!!editingLoc}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">State/Region</label>
                <input
                  type="text"
                  value={state}
                  onChange={e => setState(e.target.value)}
                  placeholder="e.g. Uttar Pradesh, Maharashtra"
                  className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-medium"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 bg-slate-950 border border-white/5 text-slate-400 font-semibold rounded-xl text-sm hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-750 text-white font-semibold rounded-xl text-sm transition-all"
                >
                  {isSubmitting ? 'Saving...' : 'Save Configuration'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
