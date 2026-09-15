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
import { AnimatedBackground } from './components/AnimatedBackground'
import { useScrollReveal } from './utils/useScrollReveal'
import { Check } from 'lucide-react'

export const App: React.FC = () => {
  const [currentTone, setCurrentTone] = useState<ThemeTone>('lavender')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Initialize global IntersectionObserver for smooth scroll entrance reveals
  useScrollReveal([currentTone])

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3000)
  }

  return (
    <div className="app-wrapper">
      {/* Dynamic Animated Clay Background with Morphing Blobs & 3D Micro-Shapes */}
      <AnimatedBackground currentTone={currentTone} />

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
