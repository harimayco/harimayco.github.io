import React from 'react'
import { MapPin, Mail, Globe, Code2, Smartphone, Terminal, Quote } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'
import { playClayClick } from '../utils/audioFeedback'

export const About: React.FC = () => {
  return (
    <section className="clay-section" id="about">
      <div className="clay-container">
        
        {/* Section Header */}
        <div className="clay-section-header">
          <div className="clay-badge clay-badge-purple" style={{ marginBottom: '12px' }}>
            <Terminal size={14} />
            <span>Engineering Background</span>
          </div>
          <h2 className="clay-section-title">Architecting Resilient Software Systems</h2>
          <p className="clay-section-subtitle">
            A decade of pragmatic engineering blending dependable backend architectures with tactile, interactive web interfaces.
          </p>
        </div>

        {/* Signature Steve Jobs Quote Card */}
        <div className="quote-card">
          <div className="quote-icon-bg">
            <Quote size={140} />
          </div>
          <p className="quote-text">
            &ldquo;{PERSONAL_INFO.quote.text}&rdquo;
          </p>
          <div className="quote-author">
            — {PERSONAL_INFO.quote.author} ({PERSONAL_INFO.quote.role})
          </div>
        </div>

        {/* 2-Column Story and Quick Details */}
        <div className="clay-grid-2" style={{ alignItems: 'start', marginBottom: '32px' }}>
          
          {/* Left Column: Bio Narrative */}
          <div className="clay-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div className="clay-icon clay-icon-blue">
                <Code2 size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800 }}>Professional Overview</h3>
                <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 600 }}>Decade-Long Engineering Path</span>
              </div>
            </div>

            <p style={{ marginBottom: '16px', lineHeight: '1.7', color: 'var(--text-body-alt)' }}>
              {PERSONAL_INFO.bio}
            </p>
            <p style={{ marginBottom: '16px', lineHeight: '1.7', color: 'var(--text-body-alt)' }}>
              My technical foundation formed in industrial automation (writing deterministic PLC logic in 2012), which instilled an early obsession with stability, fault tolerance, and clean interfaces. I later leveraged that discipline across dozens of production web platforms at PT. Avasoft Solutions, before advancing to enterprise insurance systems at AIA Indonesia.
            </p>
            <p style={{ lineHeight: '1.7', color: 'var(--text-body-alt)' }}>
              My current focus centers on high-throughput backend services (Go, Node.js, Spring Boot), cross-platform mobile runtimes (Flutter), and interactive browser experiences built with modern CSS and tactile 3D Soft Clay aesthetics.
            </p>
          </div>

          {/* Right Column: Key Focus Areas & Contact Quick-Pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Quick Contact Card */}
            <div className="clay-card">
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px', color: 'var(--text-heading)' }}>
                Quick Details
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="clay-icon clay-icon-sm clay-icon-green">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-heading)' }}>{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="clay-icon clay-icon-sm clay-icon-coral">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' }}>Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      style={{ fontSize: '15px', fontWeight: 700, color: 'var(--shadow-coral)' }}
                      onClick={() => playClayClick('down')}
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="clay-icon clay-icon-sm clay-icon-purple">
                    <Globe size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' }}>GitHub Repository</div>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '15px', fontWeight: 700, color: 'var(--shadow-purple)' }}
                      onClick={() => playClayClick('pop')}
                    >
                      github.com/harimayco
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar Card: Mobile & Backend */}
            <div className="clay-card clay-card-teal" style={{ color: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <div className="clay-icon on-colored" style={{ width: '48px', height: '48px' }}>
                  <Smartphone size={24} color="#FFFFFF" />
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF' }}>Cross-Platform & Native Mobile</h4>
                  <span style={{ fontSize: '13px', opacity: 0.9 }}>Flutter, Swift & Kotlin</span>
                </div>
              </div>
              <p style={{ fontSize: '14px', opacity: 0.95, lineHeight: '1.6', color: '#FFFFFF' }}>
                Extensive hands-on experience shipping performant mobile applications on iOS and Android—handling push notifications, state machines, offline caching, and real-time backend integrations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
