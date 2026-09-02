import React, { useState, useMemo } from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/projects';

const FILTERS = ['Todos', 'Django', 'Laravel', 'Spring Boot'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') return projectsData;
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const getCategoryCount = (cat) => {
    if (cat === 'Todos') return projectsData.length;
    return projectsData.filter((p) => p.category === cat).length;
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50 dark:bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfólio & Roadmap"
          title="Projetos & Arquitetura de Software"
          subtitle="Projetos estruturados sob princípios de microsserviços, Clean Architecture, APIs REST e automação."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            const count = getCategoryCount(filter);

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                    : 'bg-white dark:bg-dark-surface text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[11px] font-mono ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Architectural Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
