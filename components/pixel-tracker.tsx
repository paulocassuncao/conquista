"use client"

import { useEffect, useRef } from 'react'
import { useFacebookPixel } from '@/lib/facebook-pixel'

interface PixelTrackerProps {
  eventName: string
  eventData?: Record<string, any>
  children: React.ReactNode
  threshold?: number
  triggerOnce?: boolean
}

export const PixelTracker: React.FC<PixelTrackerProps> = ({
  eventName,
  eventData,
  children,
  threshold = 0.5,
  triggerOnce = true
}) => {
  const { trackCustomEvent } = useFacebookPixel()
  const ref = useRef<HTMLDivElement>(null)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!triggerOnce || !hasTriggered.current)) {
            trackCustomEvent(eventName, eventData)
            hasTriggered.current = true
            
            if (triggerOnce) {
              observer.unobserve(element)
            }
          }
        })
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [eventName, eventData, threshold, triggerOnce, trackCustomEvent])

  return <div ref={ref}>{children}</div>
} 