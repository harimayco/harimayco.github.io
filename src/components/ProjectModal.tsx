import React, { useEffect } from 'react'
import { X, ExternalLink, Layers, Sparkles } from 'lucide-react'
import { GithubIcon } from './Icons'
import { Project } from '../data/portfolioData'
import { playClayClick } from '../utils/audioFeedback'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playClayClick('up')
        onClose()
      }
    }
    if (project) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="clay-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          playClayClick('up')
          onClose()
        }
      }}
    >
      <div className="clay-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        {/* Close Button */}
        <button
          type="button"
          className="clay-modal-close"
          aria-label="Close Dialog"
          onClick={() => {
            playClayClick('up')
            onClose()
          }}
        >
          <X size={20} />
        </button>

        {/* Project Image Banner */}
        <div
          style={{
            width: '100%',
            height: '240px',
            borderRadius: '18px',
            overflow: 'hidden',
            marginBottom: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            backgroundColor: '#F1F5F9'
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Badge & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span className="clay-badge clay-badge-purple" style={{ fontSize: '12px' }}>
            <Sparkles size={12} />
            <span>{project.subtitle}</span>
          </span>
        </div>

        <h3 id="modal-title" style={{ fontSize: '24px', fontWeight: 900, marginBottom: '12px', color: 'var(--text-heading)' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-body-alt)', marginBottom: '20px' }}>
          {project.longDescription || project.description}
        </p>

        {/* Tech Stack Badges */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '10px' }}>
            <Layers size={14} />
            <span>Technology Stack</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className="project-tech-badge" style={{ fontSize: '13px', padding: '6px 12px' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-blue"
              onClick={() => playClayClick('pop')}
            >
              <ExternalLink size={17} />
              <span>Launch Live Demo</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-purple"
              onClick={() => playClayClick('pop')}
            >
              <GithubIcon size={17} />
              <span>View on GitHub</span>
            </a>
          )}

          <button
            type="button"
            className="clay-btn clay-btn-white"
            onClick={() => {
              playClayClick('up')
              onClose()
            }}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  )
}
