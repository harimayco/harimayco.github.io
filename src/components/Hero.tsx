import React from 'react'
import { Briefcase, Mail, Sparkles, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from './Icons'
import { PERSONAL_INFO } from '../data/portfolioData'
import { playClayClick } from '../utils/audioFeedback'

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    playClayClick('down')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-wrapper" id="hero">
      <div className="clay-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Clay Avatar with 3D ring & status badge */}
        <div className="hero-avatar-wrap">
          <img
            src={PERSONAL_INFO.avatar}
            alt={PERSONAL_INFO.name}
            className="hero-avatar"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 24 24" fill="%2360A5FA"><circle cx="12" cy="12" r="10"/></svg>'
            }}
          />
          <div className="hero-avatar-badge" title="Open for technical opportunities">
            <Sparkles size={18} />
          </div>
        </div>

        {/* Live Availability Badge */}
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span>Available for Fullstack Engineering & Contracts</span>
        </div>

        {/* Headings */}
        <h1 className="hero-title">
          {PERSONAL_INFO.headline}
        </h1>

        <p className="hero-subtitle">
          Hello, I am <strong>{PERSONAL_INFO.name}</strong> — {PERSONAL_INFO.tagline}
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <button
            type="button"
            className="clay-btn clay-btn-blue"
            onClick={() => scrollTo('projects')}
          >
            <Briefcase size={18} />
            <span>Explore Work</span>
          </button>

          <button
            type="button"
            className="clay-btn clay-btn-white"
            onClick={() => scrollTo('contact')}
          >
            <Mail size={18} />
            <span>Get in Touch</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="clay-btn clay-btn-purple"
            onClick={() => playClayClick('pop')}
          >
            <GithubIcon size={18} />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Stat Cards Row */}
        <div className="hero-stats-grid">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="clay-stat-card">
              <div className="clay-stat-num">{stat.number}</div>
              <div className="clay-stat-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} color="#059669" />
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
