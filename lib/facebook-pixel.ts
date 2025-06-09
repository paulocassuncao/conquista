// Facebook Pixel Hook and Utilities

import { useUTMify, type UTMData } from './utmify';

declare global {
  interface Window {
    fbq: any;
  }
}

// Definindo tipos para os eventos do Facebook Pixel
export type FacebookPixelEvent = 
  | 'ViewContent'
  | 'AddToCart'
  | 'InitiateCheckout'
  | 'Purchase'
  | 'Lead'
  | 'CompleteRegistration'
  | 'AddPaymentInfo'
  | 'AddToWishlist'
  | 'Search'
  | 'Contact'
  | 'FindLocation'
  | 'Schedule'
  | 'StartTrial'
  | 'SubmitApplication'
  | 'Subscribe';

interface FacebookPixelParameters {
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  num_items?: number;
  search_string?: string;
  status?: string;
  // Dados UTM
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  traffic_source?: string;
  [key: string]: any;
}

export const useFacebookPixel = () => {
  const { getAllUTMData, formatUTMForPixel, getTrafficSource } = useUTMify();

  // Função para enriquecer eventos com dados UTM
  const enrichEventWithUTM = (parameters: FacebookPixelParameters = {}): FacebookPixelParameters => {
    const utmData = getAllUTMData();
    const formattedUTM = formatUTMForPixel(utmData);
    const trafficSource = getTrafficSource(utmData);

    return {
      ...parameters,
      ...formattedUTM,
      traffic_source: trafficSource
    };
  };

  const trackEvent = (eventName: FacebookPixelEvent, parameters?: FacebookPixelParameters) => {
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        const enrichedParameters = enrichEventWithUTM(parameters);
        window.fbq('track', eventName, enrichedParameters);
        console.log(`Facebook Pixel: ${eventName} tracked`, enrichedParameters);
      } catch (error) {
        console.error('Error tracking Facebook Pixel event:', error);
      }
    }
  };

  const trackCustomEvent = (eventName: string, parameters?: FacebookPixelParameters) => {
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        const enrichedParameters = enrichEventWithUTM(parameters);
        window.fbq('trackCustom', eventName, enrichedParameters);
        console.log(`Facebook Pixel Custom: ${eventName} tracked`, enrichedParameters);
      } catch (error) {
        console.error('Error tracking Facebook Pixel custom event:', error);
      }
    }
  };

  // Eventos específicos para e-commerce
  const trackPurchase = (value: number, currency: string = 'BRL', contentName?: string) => {
    trackEvent('Purchase', {
      value,
      currency,
      content_name: contentName,
      content_type: 'product'
    });
  };

  const trackLead = (contentName?: string) => {
    trackEvent('Lead', {
      content_name: contentName,
      content_category: 'e-book'
    });
  };

  const trackInitiateCheckout = (value: number, currency: string = 'BRL', contentName?: string) => {
    trackEvent('InitiateCheckout', {
      value,
      currency,
      content_name: contentName,
      content_type: 'product'
    });
  };

  const trackViewContent = (contentName?: string, value?: number, currency: string = 'BRL') => {
    trackEvent('ViewContent', {
      content_name: contentName,
      content_type: 'product',
      value,
      currency
    });
  };

  const trackAddToCart = (contentName?: string, value?: number, currency: string = 'BRL') => {
    trackEvent('AddToCart', {
      content_name: contentName,
      content_type: 'product',
      value,
      currency
    });
  };

  // Nova função para rastrear eventos com dados UTM específicos
  const trackEventWithUTM = (
    eventName: FacebookPixelEvent, 
    parameters?: FacebookPixelParameters,
    includeFullUTM: boolean = true
  ) => {
    if (includeFullUTM) {
      trackEvent(eventName, parameters);
    } else {
      // Rastrear sem dados UTM (para casos específicos)
      if (typeof window !== 'undefined' && window.fbq) {
        try {
          window.fbq('track', eventName, parameters);
          console.log(`Facebook Pixel (no UTM): ${eventName} tracked`, parameters);
        } catch (error) {
          console.error('Error tracking Facebook Pixel event:', error);
        }
      }
    }
  };

  return {
    trackEvent,
    trackCustomEvent,
    trackPurchase,
    trackLead,
    trackInitiateCheckout,
    trackViewContent,
    trackAddToCart,
    trackEventWithUTM,
    enrichEventWithUTM
  };
};

// Eventos específicos para a página de vendas
export const PIXEL_EVENTS = {
  PAGE_VIEW: 'PageView',
  VIEW_CONTENT: 'ViewContent',
  ADD_TO_CART: 'AddToCart',
  INITIATE_CHECKOUT: 'InitiateCheckout',
  PURCHASE: 'Purchase',
  LEAD: 'Lead',
  CONTACT: 'Contact'
} as const; 