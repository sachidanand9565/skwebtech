/**
 * PortfolioContent Component
 * Interactive portfolio grid with category filtering
 */

'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { ExternalLink, Search, X, Filter } from 'lucide-react';
import { projects, categories, Project } from '@/data/portfolio';

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on category and search
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => 
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Filters Header */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects by name or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 rounded-full border border-gray-200 
                         focus:border-primary-500 focus:ring-2 focus:ring-primary-100 
                         outline-none transition-all bg-white shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30 scale-105'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-sm'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> projects
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <Filter size={16} className="mr-2" />
            {activeCategory === 'all' ? 'All Categories' : categories.find(c => c.id === activeCategory)?.name}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-2">
              No Projects Found
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn&apos;t find any projects matching your criteria. Try adjusting
              your filters or search query.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="btn-primary"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover 
                 transition-all duration-500 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
        {/* Placeholder gradient background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-heading font-bold text-primary-300">
            {project.title.charAt(0)}
          </span>
        </div>
        
        {/* Actual image (when available) */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            // Hide broken image
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Live Demo Button */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-accent-500 text-white 
                       rounded-full font-medium text-sm flex items-center gap-2
                       opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0
                       transition-all duration-300 hover:bg-accent-600"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
            {categories.find(c => c.id === project.category)?.name || project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 
                       group-hover:text-primary-600 transition-colors line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
}
