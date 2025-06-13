// Google Tag Manager Hook and Utilities

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Tipos para eventos do GTM
export interface GTMEvent {
  event: string;
  event_category?: string;
  event_action?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  content_name?: string;
  content_type?: string;
  content_category?: string;
  content_ids?: string[];
  custom_parameters?: Record<string, any>;
}

// Tipos específicos para e-commerce
export interface GTMEcommerceEvent extends GTMEvent {
  ecommerce?: {
    currency?: string;
    value?: number;
    items?: Array<{
      item_id?: string;
      item_name?: string;
      category?: string;
      quantity?: number;
      price?: number;
    }>;
  };
}

export const useGTM = () => {
  // Função para verificar se estamos no cliente
  const isClient = typeof window !== 'undefined';

  // Função para inicializar o dataLayer se não existir
  const initDataLayer = () => {
    if (isClient && !window.dataLayer) {
      window.dataLayer = [];
    }
  };

  // Função para enviar eventos personalizados para o GTM
  const pushEvent = (eventData: GTMEvent) => {
    if (isClient) {
      initDataLayer();
      try {
        window.dataLayer.push(eventData);
        console.log('GTM Event pushed:', eventData);
      } catch (error) {
        console.error('Error pushing GTM event:', error);
      }
    }
  };

  // Função para rastrear visualização de página
  const trackPageView = (pagePath?: string) => {
    pushEvent({
      event: 'page_view',
      page_path: pagePath || (isClient ? window.location.pathname : ''),
      page_title: isClient ? document.title : '',
      page_location: isClient ? window.location.href : ''
    });
  };

  // Função para rastrear visualização de conteúdo
  const trackViewContent = (contentName: string, value?: number, currency: string = 'BRL') => {
    pushEvent({
      event: 'view_item',
      event_category: 'e-commerce',
      event_action: 'view_content',
      content_name: contentName,
      content_type: 'product',
      content_category: 'e-book',
      value: value,
      currency: currency
    });
  };

  // Função para rastrear início de checkout
  const trackBeginCheckout = (contentName: string, value: number, currency: string = 'BRL') => {
    const ecommerceEvent: GTMEcommerceEvent = {
      event: 'begin_checkout',
      event_category: 'e-commerce',
      event_action: 'begin_checkout',
      content_name: contentName,
      value: value,
      currency: currency,
      ecommerce: {
        currency: currency,
        value: value,
        items: [{
          item_id: 'ebook-conquista',
          item_name: contentName,
          category: 'e-book',
          quantity: 1,
          price: value
        }]
      }
    };
    pushEvent(ecommerceEvent);
  };

  // Função para rastrear compra
  const trackPurchase = (
    transactionId: string,
    contentName: string,
    value: number,
    currency: string = 'BRL'
  ) => {
    const ecommerceEvent: GTMEcommerceEvent = {
      event: 'purchase',
      event_category: 'e-commerce',
      event_action: 'purchase',
      content_name: contentName,
      value: value,
      currency: currency,
      ecommerce: {
        currency: currency,
        value: value,
        items: [{
          item_id: 'ebook-conquista',
          item_name: contentName,
          category: 'e-book',
          quantity: 1,
          price: value
        }]
      },
      custom_parameters: {
        transaction_id: transactionId
      }
    };
    pushEvent(ecommerceEvent);
  };

  // Função para rastrear leads
  const trackLead = (contentName: string, leadType: string = 'interest') => {
    pushEvent({
      event: 'generate_lead',
      event_category: 'lead',
      event_action: 'generate_lead',
      event_label: leadType,
      content_name: contentName,
      content_type: 'lead',
      content_category: 'e-book'
    });
  };

  // Função para rastrear cliques em botões/links
  const trackClick = (
    elementName: string,
    location: string,
    value?: number,
    currency?: string
  ) => {
    pushEvent({
      event: 'click',
      event_category: 'engagement',
      event_action: 'click',
      event_label: elementName,
      content_name: location,
      value: value,
      currency: currency
    });
  };

  // Função para rastrear scroll
  const trackScroll = (percentage: number, section?: string) => {
    pushEvent({
      event: 'scroll',
      event_category: 'engagement',
      event_action: 'scroll',
      event_label: `${percentage}%`,
      content_name: section || 'page',
      custom_parameters: {
        scroll_percentage: percentage
      }
    });
  };

  // Função para rastrear tempo na página
  const trackTimeOnPage = (timeInSeconds: number, pageName?: string) => {
    pushEvent({
      event: 'timing_complete',
      event_category: 'engagement',
      event_action: 'time_on_page',
      value: timeInSeconds,
      content_name: pageName || 'page',
      custom_parameters: {
        time_on_page: timeInSeconds
      }
    });
  };

  // Função para rastrear visualização de seções específicas
  const trackSectionView = (sectionName: string, sectionPosition?: number) => {
    pushEvent({
      event: 'view_item_list',
      event_category: 'engagement',
      event_action: 'section_view',
      event_label: sectionName,
      content_name: sectionName,
      content_type: 'section',
      custom_parameters: {
        section_position: sectionPosition
      }
    });
  };

  // Função para rastrear eventos personalizados
  const trackCustomEvent = (
    eventName: string,
    category: string,
    action: string,
    label?: string,
    value?: number,
    customParams?: Record<string, any>
  ) => {
    pushEvent({
      event: eventName,
      event_category: category,
      event_action: action,
      event_label: label,
      value: value,
      custom_parameters: customParams
    });
  };

  // Função para definir variáveis de usuário (User Properties)
  const setUserProperties = (properties: Record<string, any>) => {
    if (isClient) {
      initDataLayer();
      try {
        window.dataLayer.push({
          event: 'set_user_properties',
          user_properties: properties
        });
        console.log('GTM User Properties set:', properties);
      } catch (error) {
        console.error('Error setting GTM user properties:', error);
      }
    }
  };

  return {
    pushEvent,
    trackPageView,
    trackViewContent,
    trackBeginCheckout,
    trackPurchase,
    trackLead,
    trackClick,
    trackScroll,
    trackTimeOnPage,
    trackSectionView,
    trackCustomEvent,
    setUserProperties
  };
};

// Constantes para eventos comuns
export const GTM_EVENTS = {
  PAGE_VIEW: 'page_view',
  VIEW_ITEM: 'view_item',
  BEGIN_CHECKOUT: 'begin_checkout',
  PURCHASE: 'purchase',
  GENERATE_LEAD: 'generate_lead',
  CLICK: 'click',
  SCROLL: 'scroll',
  SECTION_VIEW: 'view_item_list',
  TIME_ON_PAGE: 'timing_complete'
} as const;

// Constantes para categorias de eventos
export const GTM_CATEGORIES = {
  ECOMMERCE: 'e-commerce',
  ENGAGEMENT: 'engagement',
  LEAD: 'lead',
  NAVIGATION: 'navigation',
  VIDEO: 'video',
  FORM: 'form'
} as const; 