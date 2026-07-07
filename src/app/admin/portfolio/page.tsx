'use client';

import { useState, useEffect } from 'react';
import {
  Briefcase,
  Search,
  Plus,
  Trash2,
  AlertCircle,
  X,
  Edit2,
  Upload,
  Globe,
  ImageIcon
} from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  featured?: boolean;
}

const CATEGORIES = [
  { id: 'web', name: 'Web Development' },
  { id: 'ecommerce', name: 'E-Commerce' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'dashboard', name: 'Dashboards' },
  { id: 'edtech', name: 'EdTech' },
];

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Form State
  const [isOpen, setIsOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('web');
  const [image, setImage] = useState('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techInput, setTechInput] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [featured, setFeatured] = useState(false);
  
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/projects');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      } else {
        setError('Failed to fetch projects list');
      }
    } catch (err) {
      setError('Connection failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleOpenAdd = () => {
    setEditingProject(null);
    setTitle('');
    setDescription('');
    setCategory('web');
    setImage('');
    setTechnologies([]);
    setTechInput('');
    setLiveUrl('');
    setFeatured(false);
    setFormError('');
    setIsOpen(true);
  };

  const handleOpenEdit = (proj: Project) => {
    setEditingProject(proj);
    setTitle(proj.title);
    setDescription(proj.description);
    setCategory(proj.category);
    setImage(proj.image || '');
    setTechnologies(proj.technologies || []);
    setTechInput('');
    setLiveUrl(proj.liveUrl || '');
    setFeatured(!!proj.featured);
    setFormError('');
    setIsOpen(true);
  };

  const handleAddTech = () => {
    if (!techInput.trim()) return;
    setTechnologies(prev => [...prev, techInput.trim()]);
    setTechInput('');
  };

  const handleRemoveTech = (idx: number) => {
    setTechnologies(prev => prev.filter((_, i) => i !== idx));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setFormError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setImage(data.url);
      } else {
        setFormError(data.error || 'Upload failed');
      }
    } catch (err) {
      setFormError('Upload server error');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !image.trim()) {
      setFormError('Title, description, and image URL are required.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const isEdit = !!editingProject;
      const url = '/api/admin/projects';
      const method = isEdit ? 'PUT' : 'POST';

      const payload = {
        id: isEdit ? editingProject.id : Date.now().toString(),
        title,
        description,
        image,
        category,
        technologies,
        liveUrl,
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
          setProjects(prev => prev.map(p => p.id === editingProject.id ? data.project : p));
        } else {
          setProjects(prev => [...prev, data.project]);
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
    if (!confirm('Are you sure you want to delete this portfolio project showcase?')) return;

    try {
      const res = await fetch('/api/admin/projects', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setProjects(prev => prev.filter(p => p.id !== id));
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete project');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredProjects = projects.filter(
    p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white tracking-tight">
            Portfolio Showcase
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Publish client case studies, dashboards, applications, and links to live demos.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-750 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/10 self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Add Project</span>
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
            placeholder="Search projects by title, stack keywords..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all text-sm"
          />
        </div>
      </div>

      {/* Projects Grid List */}
      {isLoading ? (
        <div className="p-20 flex items-center justify-center">
          <span className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(proj => (
            <div
              key={proj.id}
              className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Cover */}
              <div className="relative h-44 w-full bg-slate-950 flex items-center justify-center">
                {proj.image ? (
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <ImageIcon className="text-slate-800" size={40} />
                )}
                {proj.featured && (
                  <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-indigo-500 shadow">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                    {CATEGORIES.find(c => c.id === proj.category)?.name || proj.category}
                  </span>
                  <h3 className="font-heading font-bold text-white text-base mt-1 line-clamp-1">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5">
                  <div className="flex flex-wrap gap-1">
                    {proj.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/5 text-slate-350 text-[10px] rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    {proj.liveUrl ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                      >
                        <Globe size={12} />
                        <span>Live Preview</span>
                      </a>
                    ) : (
                      <span className="text-slate-500">Local Only</span>
                    )}

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleOpenEdit(proj)}
                        className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
                        title="Edit Project"
                      >
                        <Edit2 size={13} />
                      </button>
                      <button
                        onClick={() => handleDelete(proj.id)}
                        className="p-1.5 text-red-400 hover:text-red-300 rounded hover:bg-red-500/5"
                        title="Delete Project"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-900 border border-white/5 rounded-2xl p-20 text-center text-slate-500 flex flex-col items-center">
          <Briefcase size={40} className="text-slate-700 mb-3 animate-pulse" />
          <p className="font-heading font-semibold text-white">No Projects Found</p>
          <p className="text-xs text-slate-450 mt-1">Click &quot;Add Project&quot; to add your first work sample.</p>
        </div>
      )}

      {/* Editor Modal Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-white/5 w-full max-w-xl rounded-3xl p-6 shadow-2xl relative space-y-6 my-8">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-lg text-white">
                {editingProject ? 'Edit Showcase Details' : 'Add New Portfolio Project'}
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
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Project Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="e.g. AI Content Writer SaaS"
                  className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-medium"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Project Description</label>
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Describe the problem solved, tech used, and results..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-medium resize-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Category Type</label>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white focus:outline-none focus:border-indigo-500 text-sm"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c.id} value={c.id} className="bg-slate-950">
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Live Demo Link (Optional)</label>
                  <input
                    type="text"
                    value={liveUrl}
                    onChange={e => setLiveUrl(e.target.value)}
                    placeholder="e.g. https://www.limbu.ai/"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm"
                  />
                </div>
              </div>

              {/* Image URL & File Upload */}
              <div className="space-y-2 border-t border-white/5 pt-4">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Project Preview Image</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    placeholder="Enter image URL or upload a file..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white text-sm"
                    required
                  />
                  <label className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-750 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0 transition-colors">
                    {isUploading ? (
                      <span className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Upload size={14} />
                        <span>Upload File</span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={isUploading}
                    />
                  </label>
                </div>
                {image && (
                  <div className="relative w-36 h-20 rounded-xl overflow-hidden border border-white/5 mt-2 bg-slate-950">
                    <img src={image} alt="Preview" className="object-cover w-full h-full" />
                  </div>
                )}
              </div>

              {/* Technologies / Tags */}
              <div className="space-y-2 border-t border-white/5 pt-4">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Technologies Employed</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={techInput}
                    onChange={e => setTechInput(e.target.value)}
                    placeholder="Add tools/langs e.g. React, Next.js"
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
                  Feature this project prominently on homepage
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
                  {isSubmitting ? 'Saving...' : 'Save Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
