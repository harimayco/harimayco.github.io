import React from 'react'
import { ArrowUp, Heart } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'
import { playClayClick } from '../utils/audioFeedback'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playClayClick('up')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="clay-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        
        {/* Back to top clay button */}
        <button
          type="button"
          className="clay-btn clay-btn-white clay-btn-sm clay-pill"
          onClick={scrollToTop}
          title="Back to Top"
        >
          <ArrowUp size={16} />
          <span>Back to Top</span>
        </button>

        <p className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Crafted with</span>
          <Heart size={15} color="#FB7185" fill="#FB7185" />
          <span>using React, Vite & Claymorphism 3D Soft UI.</span>
        </p>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          Hosted on GitHub Pages • Open Source & Fully Responsive
        </p>

      </div>
    </footer>
  )
}
