'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { ExternalLink, Search, X, Filter } from 'lucide-react';
import { projects, categories, Project } from '@/data/portfolio';

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() =>
    projects.filter((p) => {
      const matchesCat = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    }), [activeCategory, searchQuery]);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Filters */}
        <div className="mb-10">
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by project name or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-7">
          <p className="text-gray-500 text-sm">
            Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> projects
          </p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Filter size={14} />
            {activeCategory === 'all' ? 'All Categories' : categories.find((c) => c.id === activeCategory)?.name}
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Search size={28} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-2">No Projects Found</h2>
            <p className="text-gray-500 text-sm mb-6">Try adjusting your filters or search query.</p>
            <button onClick={() => { setActiveCategory('all'); setSearchQuery(''); }} className="btn-primary">
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const gradients = [
    'from-blue-500 to-indigo-600',
    'from-emerald-500 to-teal-600',
    'from-orange-500 to-red-500',
    'from-purple-500 to-violet-600',
    'from-pink-500 to-rose-500',
    'from-cyan-500 to-blue-600',
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-gray-50">
      {/* Image */}
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-heading font-bold text-white/20">{project.title.charAt(0)}</span>
        </div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gray-50"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        )}

        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm">
            {categories.find((c) => c.id === project.category)?.name || project.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
}
