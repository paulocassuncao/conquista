// UTMify Hook and Utilities

declare global {
  interface Window {
    utmify: any;
  }
}

// Definindo tipos para os parâmetros UTM
export interface UTMData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  fbclid?: string;
  gclid?: string;
  affiliate?: string;
  source?: string;
  [key: string]: any;
}

export const useUTMify = () => {
  // Função para verificar se estamos no cliente
  const isClient = typeof window !== 'undefined';

  // Função para obter todos os dados UTM capturados pelo UTMify
  const getUTMData = (): UTMData => {
    if (isClient && window.utmify) {
      try {
        return window.utmify.getAllUTMs() || {};
      } catch (error) {
        console.error('Error getting UTM data from UTMify:', error);
        return {};
      }
    }
    return {};
  };

  // Função para obter um parâmetro UTM específico
  const getUTMParam = (param: string): string | null => {
    if (isClient && window.utmify) {
      try {
        return window.utmify.getUTM(param);
      } catch (error) {
        console.error(`Error getting UTM param ${param}:`, error);
        return null;
      }
    }
    return null;
  };

  // Função para obter dados UTM da URL atual (fallback)
  const getUTMFromURL = (): UTMData => {
    if (!isClient) return {};
    
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utmData: UTMData = {};

      // Capturar parâmetros UTM padrão
      const utmParams = [
        'utm_source',
        'utm_medium', 
        'utm_campaign',
        'utm_term',
        'utm_content',
        'fbclid',
        'gclid'
      ];

      utmParams.forEach(param => {
        const value = urlParams.get(param);
        if (value) {
          utmData[param] = value;
        }
      });

      return utmData;
    } catch (error) {
      console.error('Error getting UTM data from URL:', error);
      return {};
    }
  };

  // Função para salvar UTMs no localStorage
  const saveUTMToStorage = (utmData: UTMData) => {
    if (isClient) {
      try {
        localStorage.setItem('utmify_data', JSON.stringify(utmData));
        localStorage.setItem('utmify_timestamp', Date.now().toString());
      } catch (error) {
        console.error('Error saving UTM data to localStorage:', error);
      }
    }
  };

  // Função para recuperar UTMs do localStorage
  const getUTMFromStorage = (): UTMData => {
    if (isClient) {
      try {
        const storedData = localStorage.getItem('utmify_data');
        return storedData ? JSON.parse(storedData) : {};
      } catch (error) {
        console.error('Error getting UTM data from localStorage:', error);
        return {};
      }
    }
    return {};
  };

  // Função para obter dados UTM com fallbacks
  const getAllUTMData = (): UTMData => {
    if (!isClient) return {};

    // Primeiro tenta pegar do UTMify
    let utmData = getUTMData();
    
    // Se não tiver dados, tenta da URL
    if (Object.keys(utmData).length === 0) {
      utmData = getUTMFromURL();
    }
    
    // Se ainda não tiver, tenta do localStorage
    if (Object.keys(utmData).length === 0) {
      utmData = getUTMFromStorage();
    }

    // Salva os dados encontrados
    if (Object.keys(utmData).length > 0) {
      saveUTMToStorage(utmData);
    }

    return utmData;
  };

  // Função para formatar dados UTM para eventos do Facebook Pixel
  const formatUTMForPixel = (utmData: UTMData) => {
    return {
      utm_source: utmData.utm_source || 'direct',
      utm_medium: utmData.utm_medium || 'organic',
      utm_campaign: utmData.utm_campaign || 'not_set',
      utm_content: utmData.utm_content || 'not_set',
      utm_term: utmData.utm_term || 'not_set',
      fbclid: utmData.fbclid || 'not_set',
      gclid: utmData.gclid || 'not_set'
    };
  };

  // Função para determinar a fonte de tráfego
  const getTrafficSource = (utmData: UTMData): string => {
    if (utmData.fbclid) return 'facebook';
    if (utmData.gclid) return 'google';
    if (utmData.utm_source) return utmData.utm_source;
    return 'direct';
  };

  // Função para aguardar o UTMify carregar
  const waitForUTMify = (timeout: number = 5000): Promise<boolean> => {
    if (!isClient) return Promise.resolve(false);

    return new Promise((resolve) => {
      if (window.utmify) {
        resolve(true);
        return;
      }

      const startTime = Date.now();
      const checkInterval = setInterval(() => {
        if (window.utmify) {
          clearInterval(checkInterval);
          resolve(true);
        } else if (Date.now() - startTime > timeout) {
          clearInterval(checkInterval);
          resolve(false);
        }
      }, 100);
    });
  };

  return {
    getUTMData,
    getUTMParam,
    getUTMFromURL,
    getAllUTMData,
    saveUTMToStorage,
    getUTMFromStorage,
    formatUTMForPixel,
    getTrafficSource,
    waitForUTMify
  };
};

// Constantes para fontes de tráfego comuns
export const TRAFFIC_SOURCES = {
  FACEBOOK: 'facebook',
  GOOGLE: 'google',
  INSTAGRAM: 'instagram',
  YOUTUBE: 'youtube',
  TIKTOK: 'tiktok',
  DIRECT: 'direct',
  ORGANIC: 'organic',
  EMAIL: 'email',
  REFERRAL: 'referral'
} as const;

// Constantes para mídias UTM comuns
export const UTM_MEDIUMS = {
  CPC: 'cpc',
  SOCIAL: 'social',
  EMAIL: 'email',
  ORGANIC: 'organic',
  REFERRAL: 'referral',
  DIRECT: 'direct',
  AFFILIATE: 'affiliate'
} as const; 