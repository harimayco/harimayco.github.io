import React, { useState, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { playClayClick, toggleAudioMute } from '../utils/audioFeedback'

export type ThemeTone = 'lavender' | 'blue' | 'green' | 'peach'

interface ThemeSwitcherProps {
  currentTone: ThemeTone
  onSelectTone: (tone: ThemeTone) => void
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTone, onSelectTone }) => {
  const [muted, setMuted] = useState(false)

  const tones: { id: ThemeTone; label: string; color: string }[] = [
    { id: 'lavender', label: 'Lavender', color: '#DDD6FE' },
    { id: 'blue', label: 'Blue', color: '#BFDBFE' },
    { id: 'green', label: 'Green', color: '#BBF7D0' },
    { id: 'peach', label: 'Peach', color: '#FED7AA' }
  ]

  const handleToneChange = (tone: ThemeTone) => {
    playClayClick('pop')
    onSelectTone(tone)
  }

  const handleSoundToggle = () => {
    const isNowMuted = toggleAudioMute()
    setMuted(isNowMuted)
  }

  useEffect(() => {
    document.body.className = `theme-${currentTone}`
  }, [currentTone])

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Tones */}
      <div className="theme-pill-container" title="Select Background Tone">
        {tones.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-label={`Switch theme to ${t.label}`}
            className={`theme-pill ${currentTone === t.id ? 'active' : ''}`}
            style={{ backgroundColor: t.color }}
            onClick={() => handleToneChange(t.id)}
          />
        ))}
      </div>

      {/* Audio Toggle */}
      <button
        type="button"
        className="nav-link-btn"
        style={{ padding: '6px 10px', display: 'flex', alignItems: 'center' }}
        onClick={handleSoundToggle}
        title={muted ? 'Enable Tactile Sound Feedback' : 'Mute Sound Feedback'}
        aria-label="Toggle tactile sound"
      >
        {muted ? <VolumeX size={18} color="#94A3B8" /> : <Volume2 size={18} color="#10B981" />}
      </button>
    </div>
  )
}
