'use client';

import { useState, useEffect } from 'react';
import {
  Layers,
  Search,
  Plus,
  Trash2,
  AlertCircle,
  X,
  Edit2,
  Check
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  shortDesc: string;
  features: string[];
  technologies: string[];
  color: string;
  href: string;
  featured?: boolean;
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Form State
  const [isOpen, setIsOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [features, setFeatures] = useState<string[]>([]);
  const [featureInput, setFeatureInput] = useState('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techInput, setTechInput] = useState('');
  const [color, setColor] = useState('from-indigo-500 to-indigo-600');
  const [href, setHref] = useState('');
  const [featured, setFeatured] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/services');
      if (res.ok) {
        const data = await res.json();
        setServices(data);
      } else {
        setError('Failed to fetch services list');
      }
    } catch (err) {
      setError('Connection failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleOpenAdd = () => {
    setEditingService(null);
    setTitle('');
    setDescription('');
    setShortDesc('');
    setFeatures([]);
    setFeatureInput('');
    setTechnologies([]);
    setTechInput('');
    setColor('from-indigo-500 to-indigo-600');
    setHref('');
    setFeatured(false);
    setFormError('');
    setIsOpen(true);
  };

  const handleOpenEdit = (serv: Service) => {
    setEditingService(serv);
    setTitle(serv.title);
    setDescription(serv.description);
    setShortDesc(serv.shortDesc);
    setFeatures(serv.features || []);
    setFeatureInput('');
    setTechnologies(serv.technologies || []);
    setTechInput('');
    setColor(serv.color || 'from-indigo-500 to-indigo-600');
    setHref(serv.href || '');
    setFeatured(!!serv.featured);
    setFormError('');
    setIsOpen(true);
  };

  const handleAddFeature = () => {
    if (!featureInput.trim()) return;
    setFeatures(prev => [...prev, featureInput.trim()]);
    setFeatureInput('');
  };

  const handleRemoveFeature = (idx: number) => {
    setFeatures(prev => prev.filter((_, i) => i !== idx));
  };

  const handleAddTech = () => {
    if (!techInput.trim()) return;
    setTechnologies(prev => [...prev, techInput.trim()]);
    setTechInput('');
  };

  const handleRemoveTech = (idx: number) => {
    setTechnologies(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !shortDesc.trim()) {
      setFormError('Title, description, and short description are required.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const isEdit = !!editingService;
      const url = '/api/admin/services';
      const method = isEdit ? 'PUT' : 'POST';

      const payload = {
        id: isEdit ? editingService.id : title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title,
        description,
        shortDesc,
        features,
        technologies,
        color,
        href,
        featured
      };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        if (isEdit) {
          setServices(prev => prev.map(s => s.id === editingService.id ? data.service : s));
        } else {
          setServices(prev => [...prev, data.service]);
        }
        setIsOpen(false);
      } else {
        setFormError(data.error || 'Operation failed');
      }
    } catch (err) {
      setFormError('Server connection error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service listing? This will also disable any references to it.')) return;

    try {
      const res = await fetch('/api/admin/services', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setServices(prev => prev.filter(s => s.id !== id));
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete service');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredServices = services.filter(
    s =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white tracking-tight">
            Services Catalog
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Configure dynamic services showcased on the homepage and custom pages.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-750 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/10 self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Add Service</span>
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
            placeholder="Search services by title, description..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all text-sm"
          />
        </div>
      </div>

      {/* Services Table List */}
      {isLoading ? (
        <div className="p-20 flex items-center justify-center">
          <span className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filteredServices.length > 0 ? (
        <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02] text-xs font-semibold text-slate-400 uppercase">
                  <th className="p-4">Service</th>
                  <th className="p-4">Short Tagline</th>
                  <th className="p-4">Visual Details</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {filteredServices.map(serv => (
                  <tr key={serv.id} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${serv.color || 'from-indigo-500 to-indigo-600'} flex-shrink-0 flex items-center justify-center shadow`}>
                          <Layers size={14} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white flex items-center gap-1.5">
                            {serv.title}
                            {serv.featured && (
                              <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20 font-bold">
                                Featured
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 font-mono mt-0.5">{serv.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-slate-300 max-w-[200px] truncate">{serv.shortDesc}</td>
                    <td className="p-4 text-xs text-slate-400 space-y-1">
                      <div>Features: <span className="font-semibold text-slate-350">{serv.features?.length || 0} items</span></div>
                      <div>Stack: <span className="font-semibold text-slate-350">{serv.technologies?.length || 0} items</span></div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(serv)}
                          className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                          title="Edit details"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(serv.id)}
                          className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/5"
                          title="Delete service"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 border border-white/5 rounded-2xl p-20 text-center text-slate-500 flex flex-col items-center">
          <Layers size={40} className="text-slate-700 mb-3 animate-pulse" />
          <p className="font-heading font-semibold text-white">No Services Found</p>
          <p className="text-xs text-slate-450 mt-1">Add a service mapping to get started.</p>
        </div>
      )}

      {/* Editor Modal Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-white/5 w-full max-w-2xl rounded-3xl p-6 shadow-2xl relative space-y-6 my-8">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-lg text-white">
                {editingService ? 'Modify Service Details' : 'Publish New Service'}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Service Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="e.g. Web Development"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-medium"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Short Subtitle</label>
                  <input
                    type="text"
                    value={shortDesc}
                    onChange={e => setShortDesc(e.target.value)}
                    placeholder="e.g. Custom, fast websites"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-medium"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Description Details</label>
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Describe the service offer..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-medium resize-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Accent Color (Tailwind classes)</label>
                  <input
                    type="text"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                    placeholder="from-blue-500 to-indigo-600"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-mono"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Redirect URL (Optional)</label>
                  <input
                    type="text"
                    value={href}
                    onChange={e => setHref(e.target.value)}
                    placeholder="e.g. /services#web-dev, or https://..."
                    className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm"
                  />
                </div>
              </div>

              {/* Dynamic Features List */}
              <div className="space-y-2 border-t border-white/5 pt-4">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Key Features List</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={featureInput}
                    onChange={e => setFeatureInput(e.target.value)}
                    placeholder="Add item details..."
                    className="flex-1 px-4 py-2 rounded-xl border border-white/5 bg-slate-950 text-white text-sm"
                    onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
                  />
                  <button
                    type="button"
                    onClick={handleAddFeature}
                    className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {features.map((feat, idx) => (
                    <span key={idx} className="flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-xs text-slate-300">
                      <span>{feat}</span>
                      <button type="button" onClick={() => handleRemoveFeature(idx)} className="text-red-400 hover:text-white">
                        <X size={10} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Tech Stack List */}
              <div className="space-y-2 border-t border-white/5 pt-4">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Tech Stack</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={techInput}
                    onChange={e => setTechInput(e.target.value)}
                    placeholder="Add tool/lang name..."
                    className="flex-1 px-4 py-2 rounded-xl border border-white/5 bg-slate-950 text-white text-sm"
                    onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleAddTech())}
                  />
                  <button
                    type="button"
                    onClick={handleAddTech}
                    className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {technologies.map((tech, idx) => (
                    <span key={idx} className="flex items-center gap-1 px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-xs text-indigo-300">
                      <span>{tech}</span>
                      <button type="button" onClick={() => handleRemoveTech(idx)} className="text-indigo-400 hover:text-white">
                        <X size={10} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured toggle */}
              <div className="flex items-center gap-3 pt-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={e => setFeatured(e.target.checked)}
                  className="w-4 h-4 rounded border-white/5 text-indigo-600 bg-slate-950 focus:ring-indigo-500"
                />
                <label htmlFor="featured" className="text-slate-350 text-sm font-semibold selection:bg-transparent cursor-pointer">
                  Feature this service prominently
                </label>
              </div>

              <div className="flex gap-3 pt-6 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3.5 bg-slate-950 border border-white/5 text-slate-400 font-semibold rounded-xl text-sm hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 bg-indigo-600 hover:bg-indigo-750 text-white font-semibold rounded-xl text-sm transition-all"
                >
                  {isSubmitting ? 'Saving...' : 'Save Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
