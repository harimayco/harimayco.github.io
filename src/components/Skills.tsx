import React, { useState } from 'react'
import { Cpu, Server, Layout, Smartphone, ShieldCheck, Palette } from 'lucide-react'
import { SKILLS_DATA, Skill } from '../data/portfolioData'
import { playClayClick } from '../utils/audioFeedback'

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Competencies', icon: Cpu },
    { id: 'backend', label: 'Backend Systems', icon: Server },
    { id: 'frontend', label: 'Frontend & UI', icon: Layout },
    { id: 'mobile', label: 'Mobile Engineering', icon: Smartphone },
    { id: 'devops', label: 'Infrastructure & Linux', icon: ShieldCheck },
    { id: 'design', label: 'Interface Design', icon: Palette }
  ]

  const filteredSkills = activeCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory)

  const handleSelectCategory = (id: string) => {
    playClayClick('pop')
    setActiveCategory(id)
  }

  // Get color fill class
  const getFillClass = (color: Skill['color']) => {
    switch (color) {
      case 'purple': return 'clay-fill-purple'
      case 'coral': return 'clay-fill-coral'
      case 'yellow': return 'clay-fill-yellow'
      default: return ''
    }
  }

  const getBadgeClass = (color: Skill['color']) => {
    switch (color) {
      case 'green': return 'clay-badge-green'
      case 'blue': return 'clay-badge-blue'
      case 'purple': return 'clay-badge-purple'
      case 'yellow': return 'clay-badge-yellow'
      default: return 'clay-badge-blue'
    }
  }

  return (
    <section className="clay-section" id="skills">
      <div className="clay-container">
        
        {/* Header */}
        <div className="clay-section-header">
          <div className="clay-badge clay-badge-green" style={{ marginBottom: '12px' }}>
            <Cpu size={14} />
            <span>Technical Toolchain</span>
          </div>
          <h2 className="clay-section-title">Core Technologies & Proficiencies</h2>
          <p className="clay-section-subtitle">
            A comprehensive toolset developed through a decade of production problem-solving across web platforms, mobile runtimes, and distributed services.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-container">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleSelectCategory(cat.id)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="clay-grid-3">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="clay-card clay-card-interactive" style={{ padding: '22px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-heading)' }}>
                  {skill.name}
                </h3>
                {skill.badgeText && (
                  <span className={`clay-badge ${getBadgeClass(skill.color)}`} style={{ fontSize: '11px', padding: '3px 10px' }}>
                    {skill.badgeText}
                  </span>
                )}
              </div>

              {/* Progress Bar (Gamified Clay Component from DESIGN.md) */}
              <div className="clay-track" style={{ marginBottom: '12px' }}>
                <div
                  className={`clay-fill ${getFillClass(skill.color)}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                  Proficiency
                </span>
                <span style={{ fontSize: '14px', fontWeight: 900, color: 'var(--text-heading)' }}>
                  {skill.level}%
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
