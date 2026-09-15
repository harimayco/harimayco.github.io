import React from 'react'
import { Briefcase, GraduationCap, Calendar, CheckCircle, Building2 } from 'lucide-react'
import { EXPERIENCES_DATA, EDUCATION_DATA } from '../data/portfolioData'

export const Experience: React.FC = () => {
  return (
    <section className="clay-section" id="experience">
      <div className="clay-container">
        
        {/* Section Header */}
        <div className="clay-section-header clay-reveal">
          <div className="clay-badge clay-badge-coral" style={{ marginBottom: '12px' }}>
            <Briefcase size={14} />
            <span>Career History & Background</span>
          </div>
          <h2 className="clay-section-title">Professional Experience & Education</h2>
          <p className="clay-section-subtitle">
            A track record of engineering delivery spanning industrial control systems, software agency consulting, and enterprise financial platforms.
          </p>
        </div>

        {/* 2 Columns: Experience & Education */}
        <div className="clay-grid-2" style={{ alignItems: 'start' }}>
          
          {/* Column 1: Work Experience */}
          <div>
            <div className="clay-reveal-left delay-1" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div className="clay-icon clay-icon-sm clay-icon-blue">
                <Building2 size={20} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800 }}>Work Experience</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {EXPERIENCES_DATA.map((exp, idx) => (
                <div
                  key={idx}
                  className="clay-card clay-reveal-left"
                  style={{ '--reveal-delay': `${0.15 + idx * 0.12}s` } as React.CSSProperties}
                >
                  {/* Period badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="clay-badge clay-badge-blue" style={{ fontSize: '12px' }}>
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </span>
                    {exp.vendor && (
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' }}>
                        {exp.vendor}
                      </span>
                    )}
                  </div>

                  {/* Title & Company */}
                  <h4 style={{ fontSize: '19px', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '4px' }}>
                    {exp.role}
                  </h4>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--shadow-blue)', marginBottom: '12px' }}>
                    {exp.company}
                  </div>

                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-body-alt)', marginBottom: '16px' }}>
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                    {exp.highlights.map((hl, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'start', gap: '8px', fontSize: '13px', color: 'var(--text-body)' }}>
                        <CheckCircle size={15} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="project-tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education */}
          <div id="education">
            <div className="clay-reveal-right delay-1" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div className="clay-icon clay-icon-sm clay-icon-green">
                <GraduationCap size={20} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800 }}>Academic Foundation</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="clay-card clay-reveal-right"
                  style={{ '--reveal-delay': `${0.15 + idx * 0.12}s` } as React.CSSProperties}
                >
                  {/* Period badge */}
                  <div style={{ marginBottom: '12px' }}>
                    <span className="clay-badge clay-badge-green" style={{ fontSize: '12px' }}>
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </span>
                  </div>

                  <h4 style={{ fontSize: '18px', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '4px' }}>
                    {edu.degree}
                  </h4>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--shadow-green)', marginBottom: '8px' }}>
                    {edu.institution}
                  </div>

                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: edu.details ? '10px' : '0' }}>
                    {edu.location}
                  </div>

                  {edu.details && (
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-body-alt)' }}>
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}

              {/* Learning mindset feature card */}
              <div className="clay-card clay-card-purple" style={{ color: '#FFFFFF' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                  Continuous Engineering Discipline
                </h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.95, color: '#FFFFFF' }}>
                  Technology stacks evolve, but sound engineering principles endure. Regularly benchmarking new runtimes, auditing infrastructure security, and refining concurrency models are foundational habits in my daily work.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
