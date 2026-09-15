import React, { useEffect, useRef } from 'react'
import { ThemeTone } from './ThemeSwitcher'

interface AnimatedBackgroundProps {
  currentTone?: ThemeTone
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = () => {
  const blobLayerRef = useRef<HTMLDivElement>(null)
  const shapeLayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax damping state
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let animationFrameId: number | null = null
    let isVisible = true

    // Only apply mouse parallax on desktop / pointing devices
    const isPointerFine = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isPointerFine || prefersReducedMotion) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize from -1 to 1 based on screen center
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      targetX = (e.clientX - centerX) / centerX
      targetY = (e.clientY - centerY) / centerY
    }

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible'
      if (isVisible && !animationFrameId) {
        render()
      }
    }

    const render = () => {
      if (!isVisible) {
        animationFrameId = null
        return
      }

      // Smooth lerp (linear interpolation)
      currentX += (targetX - currentX) * 0.05
      currentY += (targetY - currentY) * 0.05

      if (blobLayerRef.current) {
        // Subtle drift for the background diffuse blobs
        blobLayerRef.current.style.transform = `translate3d(${currentX * 18}px, ${currentY * 18}px, 0)`
      }

      if (shapeLayerRef.current) {
        // Counter-parallax for the tactile micro-shapes to give 3D depth
        shapeLayerRef.current.style.transform = `translate3d(${currentX * -28}px, ${currentY * -28}px, 0)`
      }

      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Start loop
    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div className="animated-bg-container" aria-hidden="true">
      {/* Far Layer: Large Diffuse Morphing Blobs */}
      <div ref={blobLayerRef} className="animated-bg-layer">
        <div className="animated-blob animated-blob-1" />
        <div className="animated-blob animated-blob-2" />
        <div className="animated-blob animated-blob-3" />
        <div className="animated-blob animated-blob-4" />
        <div className="animated-blob animated-blob-5" />
      </div>

      {/* Near Layer: Floating 3D Micro-Clay Shapes */}
      <div ref={shapeLayerRef} className="animated-bg-layer">
        {/* Clay Mini-Sphere - Top Left */}
        <div
          className="clay-floating-shape clay-micro-sphere purple"
          style={{
            width: 32,
            height: 32,
            top: '12%',
            left: '8%',
            animation: 'clayBob 6s ease-in-out infinite'
          }}
        />

        {/* Clay Mini-Sphere - Top Right */}
        <div
          className="clay-floating-shape clay-micro-sphere blue"
          style={{
            width: 44,
            height: 44,
            top: '22%',
            right: '9%',
            animation: 'clayBobReverse 7s ease-in-out infinite 1s'
          }}
        />

        {/* Clay Capsule / Pill - Mid Left */}
        <div
          className="clay-floating-shape clay-micro-pill yellow"
          style={{
            width: 52,
            height: 22,
            top: '48%',
            left: '5%',
            transform: 'rotate(-25deg)',
            animation: 'clayBob 8s ease-in-out infinite 1.5s'
          }}
        />

        {/* Clay Sparkle / Cross - Mid Right */}
        <div
          className="clay-floating-shape clay-micro-sparkle"
          style={{
            top: '42%',
            right: '12%',
            animation: 'claySparkleSpin 12s linear infinite'
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
              fill="#A78BFA"
            />
          </svg>
        </div>

        {/* Clay Mini-Sphere - Lower Left */}
        <div
          className="clay-floating-shape clay-micro-sphere teal"
          style={{
            width: 36,
            height: 36,
            top: '72%',
            left: '11%',
            animation: 'clayBobReverse 6.5s ease-in-out infinite 0.5s'
          }}
        />

        {/* Clay Capsule / Pill - Lower Right */}
        <div
          className="clay-floating-shape clay-micro-pill green"
          style={{
            width: 48,
            height: 20,
            top: '82%',
            right: '7%',
            transform: 'rotate(20deg)',
            animation: 'clayBob 7.5s ease-in-out infinite 2s'
          }}
        />

        {/* Clay Sparkle / Cross - Near Bottom */}
        <div
          className="clay-floating-shape clay-micro-sparkle"
          style={{
            top: '88%',
            left: '16%',
            animation: 'claySparkleSpin 15s linear infinite reverse'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
              fill="#FCD34D"
            />
          </svg>
        </div>

        {/* Clay Mini-Sphere - Center Right */}
        <div
          className="clay-floating-shape clay-micro-sphere coral"
          style={{
            width: 26,
            height: 26,
            top: '64%',
            right: '15%',
            animation: 'clayBob 5.5s ease-in-out infinite 1.2s'
          }}
        />
      </div>
    </div>
  )
}
