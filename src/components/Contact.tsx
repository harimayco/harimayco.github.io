import React, { useState } from 'react'
import { Mail, Copy, Check, Send, MapPin, MessageSquare } from 'lucide-react'
import { GithubIcon, TwitterIcon, FacebookIcon } from './Icons'
import { PERSONAL_INFO } from '../data/portfolioData'
import { playClayClick } from '../utils/audioFeedback'

interface ContactProps {
  onShowToast: (message: string) => void
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCopyEmail = () => {
    playClayClick('pop')
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopied(true)
    onShowToast('Email address copied to clipboard!')
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    playClayClick('down')
    setIsSubmitting(true)

    // Simulate sending with friendly response
    setTimeout(() => {
      setIsSubmitting(false)
      playClayClick('pop')
      onShowToast('Thank you! Opening your email client to complete transmission.')
      // Open client's email client as mailto with subject & body prefilled
      const subject = encodeURIComponent(`Inquiry from ${formState.name} via harimayco.github.io`)
      const body = encodeURIComponent(`${formState.message}\n\nSender: ${formState.name} (${formState.email})`)
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`
      setFormState({ name: '', email: '', message: '' })
    }, 600)
  }

  return (
    <section className="clay-section" id="contact">
      <div className="clay-container">
        
        {/* Header */}
        <div className="clay-section-header clay-reveal">
          <div className="clay-badge clay-badge-teal" style={{ marginBottom: '12px' }}>
            <MessageSquare size={14} />
            <span>Contact & Collaboration</span>
          </div>
          <h2 className="clay-section-title">Let's Build Something Meaningful Together</h2>
          <p className="clay-section-subtitle">
            Whether you have an upcoming project, are looking to discuss fullstack architectures, or want to explore contract opportunities, my inbox is always open.
          </p>
        </div>

        <div className="clay-grid-2" style={{ alignItems: 'start' }}>
          
          {/* Left: Contact Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Primary Email Clay Box */}
            <div className="clay-card clay-card-blue clay-reveal-left delay-1">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div className="clay-icon on-colored">
                  <Mail size={26} color="#FFFFFF" />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#FFFFFF' }}>Direct Email</h3>
                  <span style={{ fontSize: '14px', opacity: 0.9, color: '#FFFFFF' }}>Typically replying within 24 business hours</span>
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '12px 18px',
                  borderRadius: '14px',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '20px',
                  wordBreak: 'break-all'
                }}
              >
                {PERSONAL_INFO.email}
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="clay-btn clay-btn-white"
                  style={{ flex: 1 }}
                  onClick={handleCopyEmail}
                >
                  {copied ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="clay-btn clay-btn-green"
                  style={{ flex: 1 }}
                  onClick={() => playClayClick('down')}
                >
                  <Send size={16} />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Location & Social Box */}
            <div className="clay-card clay-reveal-left delay-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div className="clay-icon clay-icon-sm clay-icon-green">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: 800 }}>Location</h4>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '14px', color: 'var(--text-heading)' }}>
                Social & Code Profiles
              </h4>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn clay-btn-sm clay-btn-purple"
                  title="GitHub"
                  onClick={() => playClayClick('pop')}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn clay-btn-sm clay-btn-blue"
                  title="Twitter / X"
                  onClick={() => playClayClick('pop')}
                >
                  <TwitterIcon size={16} />
                  <span>Twitter</span>
                </a>

                <a
                  href={PERSONAL_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn clay-btn-sm clay-btn-teal"
                  title="Facebook"
                  onClick={() => playClayClick('pop')}
                >
                  <FacebookIcon size={16} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Interactive Message Form */}
          <div className="clay-card clay-reveal-right delay-1">
            <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '8px', color: 'var(--text-heading)' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Fill out the form below to start a conversation regarding your project scope, engineering consultation, or inquiry.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label htmlFor="contact-name" style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '6px' }}>
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Alex Morgan"
                  className="clay-input"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="contact-email" style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '6px' }}>
                  Your Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="name@company.com"
                  className="clay-input"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '6px' }}>
                  Project Scope or Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Share a brief overview of your project requirements, target timeline, or inquiry..."
                  className="clay-input"
                  style={{ resize: 'vertical' }}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="clay-btn clay-btn-blue"
                disabled={isSubmitting}
                style={{ marginTop: '8px', width: '100%' }}
              >
                <Send size={17} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message Now'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
