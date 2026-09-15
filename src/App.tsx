import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ThemeTone } from './components/ThemeSwitcher'
import { Check } from 'lucide-react'

export const App: React.FC = () => {
  const [currentTone, setCurrentTone] = useState<ThemeTone>('lavender')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3000)
  }

  return (
    <div className="app-wrapper">
      {/* Background Soft Blobs (2-4 per page as specified in DESIGN.md) */}
      <div className="clay-blob clay-blob-1" />
      <div className="clay-blob clay-blob-2" />
      <div className="clay-blob clay-blob-3" />
      <div className="clay-blob clay-blob-4" />

      {/* Sticky Floating Navbar */}
      <Navbar currentTone={currentTone} onSelectTone={setCurrentTone} />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="clay-toast">
          <Check size={18} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  )
}

export default App
