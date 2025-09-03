"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (): Particle => {
      const maxLife = Math.random() * 300 + 200
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        life: 0,
        maxLife,
      }
    }

    const initParticles = () => {
      particlesRef.current = []
      const isMobile = window.innerWidth < 768
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024

      let particleCount
      if (isMobile) {
        // Fewer particles on mobile for better performance
        particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 25000), 30)
      } else if (isTablet) {
        // Medium particle count on tablets
        particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 20000), 50)
      } else {
        // Full particle count on desktop
        particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80)
      }

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle())
      }
    }

    const updateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // Fade in and out based on life cycle
        const lifeCycle = particle.life / particle.maxLife
        if (lifeCycle < 0.1) {
          particle.opacity = (lifeCycle / 0.1) * 0.4
        } else if (lifeCycle > 0.9) {
          particle.opacity = ((1 - lifeCycle) / 0.1) * 0.4
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Reset particle when life ends
        if (particle.life >= particle.maxLife) {
          particlesRef.current[index] = createParticle()
        }
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(156, 163, 175, ${particle.opacity})`
        ctx.fill()
      })

      const isMobile = window.innerWidth < 768
      const connectionDistance = isMobile ? 80 : 120
      const connectionOpacity = isMobile ? 0.05 : 0.1

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * connectionOpacity
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(156, 163, 175, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40 sm:opacity-50 lg:opacity-60"
      style={{ zIndex: 0 }}
    />
  )
}
