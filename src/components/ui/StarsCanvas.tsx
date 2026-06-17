'use client'
import { useEffect, useRef } from 'react'

export default function StarsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.6 + 0.3,
      baseOpacity: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      offset: Math.random() * Math.PI * 2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 1

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.offset)
        const opacity = star.baseOpacity * (0.7 + twinkle * 0.3)
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(210, 230, 255, ${opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="stars-canvas" />
}
