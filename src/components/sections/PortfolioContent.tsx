'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Search, X, Filter } from 'lucide-react';
import { Project } from '@/data/portfolio';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'ecommerce', name: 'E-Commerce' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'dashboard', name: 'Dashboards' },
  { id: 'edtech', name: 'EdTech' },
];

export default function PortfolioContent({ initialProjects }: { initialProjects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() =>
    initialProjects.filter((p) => {
      const matchesCat = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    }), [initialProjects, activeCategory, searchQuery]);

  return (
    <section className="relative py-16 bg-void-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="glow-orb bottom-0 right-[15%] w-[380px] h-[340px] bg-secondary-500/[0.05]" />

      <div className="container-custom relative z-10">
        {/* Filters */}
        <div className="mb-10">
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search by project name or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder-slate-500
                           focus:bg-white/[0.06] focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20
                           outline-none transition-all text-sm"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors">
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
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'text-void'
                    : 'bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="portfolio-filter-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-primary-500 shadow-glow-sm"
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-7">
          <p className="text-slate-500 text-sm">
            Showing <span className="font-semibold text-white">{filteredProjects.length}</span> projects
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Filter size={14} />
            {activeCategory === 'all' ? 'All Categories' : categories.find((c) => c.id === activeCategory)?.name}
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-white/[0.05] border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Search size={28} className="text-slate-500" />
            </div>
            <h2 className="text-xl font-heading font-semibold text-white mb-2">No Projects Found</h2>
            <p className="text-slate-500 text-sm mb-6">Try adjusting your filters or search query.</p>
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
    'from-cyan-500 to-blue-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-violet-500 to-purple-600',
    'from-pink-500 to-rose-500',
    'from-sky-500 to-indigo-600',
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <div className="group h-full flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm
                    transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:border-primary-500/40 hover:shadow-card-hover">
      {/* Image */}
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-heading font-bold text-white/20">{project.title.charAt(0)}</span>
        </div>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2 bg-primary-500 text-void rounded-full text-sm font-heading font-semibold
                       opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-glow-sm hover:bg-primary-400"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        )}

        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-void/70 backdrop-blur-md border border-white/15 rounded-full text-xs font-medium text-white shadow-sm">
            {categories.find((c) => c.id === project.category)?.name || project.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2.5 py-1 bg-primary-500/[0.08] border border-primary-500/15 text-primary-300 rounded-lg text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-primary-300 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
}
