"use client"

import { useEffect, useRef } from 'react'
import { useGTM } from '@/lib/gtm'

interface GTMTrackerProps {
  eventName: string
  eventData?: {
    position?: number
    leadType?: string
    category?: string
    action?: string
    label?: string
    value?: number
    customParams?: Record<string, unknown>
  }
  children: React.ReactNode
  threshold?: number
  triggerOnce?: boolean
  trackingType?: 'section_view' | 'custom' | 'lead' | 'click'
}

export const GTMTracker: React.FC<GTMTrackerProps> = ({
  eventName,
  eventData,
  children,
  threshold = 0.5,
  triggerOnce = true,
  trackingType = 'section_view'
}) => {
  const { trackSectionView, trackLead, trackCustomEvent } = useGTM()
  const ref = useRef<HTMLDivElement>(null)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!triggerOnce || !hasTriggered.current)) {
            
            // Escolhe o tipo de rastreamento baseado na prop
            switch (trackingType) {
              case 'section_view':
                trackSectionView(eventName, eventData?.position)
                break
              
              case 'lead':
                trackLead(eventName, eventData?.leadType || 'interest')
                break
              
              case 'custom':
                trackCustomEvent(
                  eventName,
                  eventData?.category || 'engagement',
                  eventData?.action || 'view',
                  eventData?.label,
                  eventData?.value,
                  eventData?.customParams
                )
                break
              
              default:
                trackSectionView(eventName)
            }

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
  }, [eventName, eventData, threshold, triggerOnce, trackingType, trackSectionView, trackLead, trackCustomEvent])

  return <div ref={ref}>{children}</div>
}

// Componente específico para rastrear scroll de seções
interface ScrollTrackerProps {
  sectionName: string
  children: React.ReactNode
  threshold?: number
  position?: number
}

export const ScrollTracker: React.FC<ScrollTrackerProps> = ({
  sectionName,
  children,
  threshold = 0.3,
  position
}) => {
  return (
    <GTMTracker
      eventName={sectionName}
      eventData={{ position }}
      threshold={threshold}
      triggerOnce={true}
      trackingType="section_view"
    >
      {children}
    </GTMTracker>
  )
}

// Componente específico para rastrear interesse (leads)
interface InterestTrackerProps {
  contentName: string
  leadType?: string
  children: React.ReactNode
  threshold?: number
}

export const InterestTracker: React.FC<InterestTrackerProps> = ({
  contentName,
  leadType = 'interest',
  children,
  threshold = 0.5
}) => {
  return (
    <GTMTracker
      eventName={contentName}
      eventData={{ leadType }}
      threshold={threshold}
      triggerOnce={true}
      trackingType="lead"
    >
      {children}
    </GTMTracker>
  )
} 