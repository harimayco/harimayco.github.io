import React, { useState } from 'react'
import { FolderGit2, ExternalLink, Eye, Sparkles } from 'lucide-react'
import { GithubIcon } from './Icons'
import { PROJECTS_DATA, Project } from '../data/portfolioData'
import { ProjectModal } from './ProjectModal'
import { playClayClick } from '../utils/audioFeedback'
import { useScrollReveal } from '../utils/useScrollReveal'

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  // Re-observe cards when filter tab changes
  useScrollReveal([selectedFilter])

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'open-source', label: 'Open Source' },
    { id: 'web', label: 'Web Applications' },
    { id: 'tools', label: 'Interactive Tools' }
  ]

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedFilter)

  const handleFilterChange = (id: string) => {
    playClayClick('pop')
    setSelectedFilter(id)
  }

  const handleOpenModal = (project: Project) => {
    playClayClick('down')
    setActiveProject(project)
  }

  return (
    <section className="clay-section" id="projects">
      <div className="clay-container">
        
        {/* Section Header */}
        <div className="clay-section-header clay-reveal">
          <div className="clay-badge clay-badge-blue" style={{ marginBottom: '12px' }}>
            <FolderGit2 size={14} />
            <span>Selected Works</span>
          </div>
          <h2 className="clay-section-title">Featured Systems & Open Source</h2>
          <p className="clay-section-subtitle">
            A selection of open-source packages, browser-first tools, and client platforms serving real users worldwide.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="filter-container clay-reveal delay-1">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter-btn ${selectedFilter === f.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid (Strictly max 3 per row as specified in DESIGN.md) */}
        <div className="clay-grid-3">
          {filteredProjects.map((project, idx) => {
            // Subtle rotation for playfulness per DESIGN.md: -1.5deg, 0deg, 1.5deg
            const rotation = idx % 3 === 0 ? '-1.5deg' : idx % 3 === 2 ? '1.5deg' : '0deg'

            return (
              <div
                key={project.id}
                className="project-card clay-reveal"
                style={{
                  '--card-rot': rotation,
                  '--reveal-delay': `${(idx % 3) * 0.12}s`
                } as React.CSSProperties}
              >
                {/* Image Wrapper */}
                <div
                  className="project-img-wrapper"
                  onClick={() => handleOpenModal(project)}
                  title="Klik untuk melihat detail proyek"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 24 24" fill="%23CBD5E1"><rect width="24" height="24"/></svg>'
                    }}
                  />
                  <div className="project-tag">
                    {project.category.toUpperCase()}
                  </div>
                </div>

                {/* Card Content */}
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="project-tech-tags">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span key={tIdx} className="project-tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    <button
                      type="button"
                      className="clay-btn clay-btn-white clay-btn-sm"
                      style={{ flex: 1 }}
                      onClick={() => handleOpenModal(project)}
                    >
                      <Eye size={15} />
                      <span>Details</span>
                    </button>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clay-btn clay-btn-blue clay-btn-sm"
                        style={{ padding: '10px 14px' }}
                        title="Live Demo"
                        onClick={() => playClayClick('pop')}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clay-btn clay-btn-purple clay-btn-sm"
                        style={{ padding: '10px 14px' }}
                        title="GitHub Repository"
                        onClick={() => playClayClick('pop')}
                      >
                        <GithubIcon size={15} />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* GitHub Callout Card */}
        <div
          className="clay-card clay-card-yellow clay-reveal delay-2"
          style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="clay-icon clay-icon-purple">
              <Sparkles size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#1E1B4B', marginBottom: '4px' }}>
                Looking for more repositories and experiments?
              </h3>
              <p style={{ fontSize: '15px', color: '#1E1B4B', opacity: 0.9 }}>
                Explore my GitHub profile for additional open-source libraries, automation utilities, and technical prototypes.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/harimayco"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-btn clay-btn-purple"
            onClick={() => playClayClick('pop')}
          >
            <GithubIcon size={18} />
            <span>Explore GitHub @harimayco</span>
          </a>
        </div>

      </div>

      {/* Project Detail Dialog */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
