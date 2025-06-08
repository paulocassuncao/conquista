"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ScrollToCTAProps {
  children?: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const handleScrollToCTA = () => {
  const ctaSection = document.querySelector('#cta-section')
  if (ctaSection) {
    ctaSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export const ScrollToCTA: React.FC<ScrollToCTAProps> = ({ 
  children, 
  className,
  variant = "default",
  size = "default"
}) => {
  return (
    <Button 
      onClick={handleScrollToCTA}
      className={className}
      variant={variant}
      size={size}
    >
      {children || (
        <>
          <Download className="mr-2 h-5 w-5" />
          Quero Transformar Minha Vida
        </>
      )}
    </Button>
  )
} 