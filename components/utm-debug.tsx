"use client"

import { useEffect, useState } from 'react'
import { useUTMify, type UTMData } from '@/lib/utmify'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface UTMDebugProps {
  show?: boolean
}

export const UTMDebug: React.FC<UTMDebugProps> = ({ show = false }) => {
  const { getAllUTMData, getTrafficSource, waitForUTMify } = useUTMify()
  const [utmData, setUtmData] = useState<UTMData>({})
  const [trafficSource, setTrafficSource] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentUrl, setCurrentUrl] = useState<string>('')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const loadUTMData = async () => {
      // Aguardar o UTMify carregar
      const loaded = await waitForUTMify(3000)
      setIsLoaded(loaded)
      
      // Obter dados UTM
      const data = getAllUTMData()
      const source = getTrafficSource(data)
      
      setUtmData(data)
      setTrafficSource(source)
      
      // Atualizar URL apenas no cliente
      if (typeof window !== 'undefined') {
        setCurrentUrl(window.location.search || 'No parameters')
      }
    }

    if (show && isMounted) {
      loadUTMData()
    }
  }, [show, isMounted, getAllUTMData, getTrafficSource, waitForUTMify])

  if (!show || process.env.NODE_ENV === 'production' || !isMounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="bg-black/90 text-white border-gray-600">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center justify-between">
            UTM Debug
            <Badge variant={isLoaded ? "default" : "destructive"} className="text-xs">
              {isLoaded ? "Loaded" : "Not Loaded"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2 text-xs">
            <div>
              <strong>Traffic Source:</strong>
              <Badge variant="outline" className="ml-2 text-xs">
                {trafficSource || 'direct'}
              </Badge>
            </div>
            
            {Object.keys(utmData).length > 0 ? (
              <div>
                <strong>UTM Data:</strong>
                <div className="mt-1 space-y-1">
                  {Object.entries(utmData).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-300">{key}:</span>
                      <span className="text-yellow-300 max-w-32 truncate">
                        {value || 'not_set'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-gray-400">No UTM data found</div>
            )}
            
            <div className="pt-2 border-t border-gray-600">
              <strong>URL:</strong>
              <div className="text-gray-300 break-all text-xs">
                {currentUrl || 'Loading...'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 