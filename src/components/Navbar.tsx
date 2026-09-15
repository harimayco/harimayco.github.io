import React, { useState } from 'react'
import { Menu, X, Send } from 'lucide-react'
import { ThemeSwitcher, ThemeTone } from './ThemeSwitcher'
import { playClayClick } from '../utils/audioFeedback'
import { PERSONAL_INFO } from '../data/portfolioData'

interface NavbarProps {
  currentTone: ThemeTone
  onSelectTone: (tone: ThemeTone) => void
}

export const Navbar: React.FC<NavbarProps> = ({ currentTone, onSelectTone }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleScrollTo = (id: string) => {
    playClayClick('down')
    setActiveSection(id)
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="site-navbar">
        <div
          className="nav-brand"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            playClayClick('pop')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img
            src={PERSONAL_INFO.avatar}
            alt={PERSONAL_INFO.name}
            className="nav-brand-avatar"
            onError={(e) => {
              // fallback if image not loaded yet
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="%2360A5FA"><circle cx="12" cy="12" r="10"/></svg>'
            }}
          />
          <span>{PERSONAL_INFO.name}</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleScrollTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (Theme Switcher + CTA) */}
        <div className="nav-actions">
          <ThemeSwitcher currentTone={currentTone} onSelectTone={onSelectTone} />

          <button
            type="button"
            className="clay-btn clay-btn-blue clay-btn-sm"
            onClick={() => handleScrollTo('contact')}
          >
            <Send size={15} />
            <span>Contact</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => {
              playClayClick('down')
              setMobileOpen(!mobileOpen)
            }}
          >
            {mobileOpen ? <X size={20} color="#1E1B4B" /> : <Menu size={20} color="#1E1B4B" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="clay-container">
          <div className="mobile-menu-drawer open">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="clay-btn clay-btn-white"
                style={{ justifyContent: 'flex-start', padding: '12px 20px', width: '100%' }}
                onClick={() => handleScrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
