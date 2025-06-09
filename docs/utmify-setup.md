# UTMify - Implementação

## Visão Geral

O UTMify foi implementado na página de vendas "O Segredo da Conquista" para capturar e rastrear parâmetros UTM, melhorando a atribuição de fontes de tráfego e integração com o Meta Pixel do Facebook.

**Script UTMify:** `https://cdn.utmify.com.br/scripts/utms/latest.js`

## Características do UTMify

- ✅ Captura automática de parâmetros UTM
- ✅ Persistência dos dados em localStorage
- ✅ Detecção de fbclid e gclid
- ✅ Prevenção de códigos de subafiliados (`data-utmify-prevent-subids`)
- ✅ Prevenção de sck códigos (`data-utmify-prevent-xcod-sck`)

## Parâmetros Rastreados

### UTMs Padrão
- `utm_source` - Fonte do tráfego (facebook, google, instagram, etc.)
- `utm_medium` - Meio do tráfego (cpc, social, email, etc.)
- `utm_campaign` - Nome da campanha
- `utm_content` - Variação do anúncio/conteúdo
- `utm_term` - Palavra-chave (Google Ads)

### Parâmetros Especiais
- `fbclid` - Facebook Click ID (rastreamento automático do Facebook)
- `gclid` - Google Click ID (rastreamento automático do Google)

## Estrutura de Implementação

### 1. Script Base (`app/layout.tsx`)
```typescript
<Script
  id="utmify-tracking"
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-xcod-sck=""
  data-utmify-prevent-subids=""
  strategy="afterInteractive"
  async
  defer
/>
```

### 2. Hook Personalizado (`lib/utmify.ts`)
```typescript
export const useUTMify = () => {
  const getUTMData = (): UTMData => {
    // Captura dados do UTMify
  };
  
  const getAllUTMData = (): UTMData => {
    // Múltiplos fallbacks: UTMify → URL → localStorage
  };
  
  const getTrafficSource = (utmData: UTMData): string => {
    // Determina fonte de tráfego inteligentemente
  };
};
```

### 3. Integração com Meta Pixel (`lib/facebook-pixel.ts`)
```typescript
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
```

## Funcionamento

### 1. Captura Automática
- O UTMify carrega automaticamente após o carregamento da página
- Captura parâmetros UTM da URL atual
- Armazena dados no localStorage para persistência

### 2. Fallbacks Inteligentes
1. **UTMify API** - Primeira opção (dados processados)
2. **URL Parameters** - Fallback direto da URL
3. **localStorage** - Dados salvos de visitas anteriores

### 3. Integração com Analytics
- Todos os eventos do Meta Pixel incluem dados UTM automaticamente
- Dados formatados para Facebook Business Manager
- Fonte de tráfego determinada inteligentemente

## Dados Enviados para Meta Pixel

### Estrutura Padrão
```javascript
{
  // Dados do evento
  content_name: "O Segredo da Conquista - Oferta Básica",
  value: 10.00,
  currency: "BRL",
  
  // Dados UTM enriquecidos automaticamente
  utm_source: "facebook",
  utm_medium: "cpc", 
  utm_campaign: "conquista_2024",
  utm_content: "video_1",
  utm_term: "como_conquistar",
  fbclid: "IwAR1...",
  traffic_source: "facebook"
}
```

### Mapeamento de Fontes de Tráfego
- **fbclid presente** → `facebook`
- **gclid presente** → `google`
- **utm_source existe** → valor do `utm_source`
- **nenhum encontrado** → `direct`

## Como Testar

### 1. URLs de Teste
```
# Facebook Ads
https://seusite.com/?utm_source=facebook&utm_medium=cpc&utm_campaign=conquista_2024&utm_content=video_1&fbclid=test123

# Google Ads  
https://seusite.com/?utm_source=google&utm_medium=cpc&utm_campaign=conquista_google&gclid=test456

# Instagram
https://seusite.com/?utm_source=instagram&utm_medium=social&utm_campaign=stories_conquista

# Email Marketing
https://seusite.com/?utm_source=newsletter&utm_medium=email&utm_campaign=lista_conquista
```

### 2. Console do Navegador
```javascript
// Verificar se UTMify carregou
console.log(window.utmify);

// Obter todos os UTMs
console.log(window.utmify.getAllUTMs());

// Verificar localStorage
console.log(localStorage.getItem('utmify_data'));
```

### 3. Componente de Debug
- **Ambiente de desenvolvimento**: Debug automático no canto inferior direito
- **Informações mostradas**: 
  - Status do carregamento do UTMify
  - Fonte de tráfego detectada
  - Todos os parâmetros UTM capturados
  - URL atual com parâmetros

## Configuração de Campanhas

### URLs Recomendadas por Canal

#### Facebook/Instagram Ads
```
?utm_source=facebook&utm_medium=cpc&utm_campaign={campaign.name}&utm_content={ad.name}&utm_term={adset.name}
```

#### Google Ads
```
?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}
```

#### YouTube
```
?utm_source=youtube&utm_medium=video&utm_campaign=conquista_youtube&utm_content=video_titulo
```

#### Email Marketing
```
?utm_source=newsletter&utm_medium=email&utm_campaign=conquista_email&utm_content=link_cta
```

#### Afiliados
```
?utm_source=afiliado&utm_medium=affiliate&utm_campaign=conquista_afiliados&utm_content={affiliate_id}
```

## Benefícios da Implementação

### 1. Atribuição Precisa
- Rastreamento completo da jornada do usuário
- Persistência de dados entre sessões
- Identificação da primeira fonte de tráfego

### 2. Otimização de Campanhas
- Dados UTM no Meta Pixel para otimização
- Audiências personalizadas por fonte de tráfego
- ROI por canal de marketing

### 3. Relatórios Avançados
- Performance por campanha específica
- Análise de cohort por fonte
- Funil de conversão por canal

## Analytics e Relatórios

### KPIs por Fonte de Tráfego
- **Facebook**: Taxa de conversão, CPM, CPC, ROAS
- **Google**: CPC, Taxa de conversão, Qualidade do tráfego
- **Instagram**: Engajamento, Taxa de cliques, Conversões
- **Direto**: Visitantes recorrentes, Conversões orgânicas
- **Email**: Taxa de abertura, Cliques, Conversões

### Segmentação para Meta Pixel
```javascript
// Audiência: Visitantes do Facebook
utm_source = 'facebook'

// Audiência: Cliques em anúncios pagos
utm_medium = 'cpc'

// Audiência: Campanha específica
utm_campaign = 'conquista_2024'
```

## Troubleshooting

### Problemas Comuns

#### 1. UTMify não carrega
```javascript
// Verificar se o script está presente
document.querySelector('#utmify-tracking')

// Verificar erros de rede
// Abrir DevTools > Network > procurar por utmify
```

#### 2. Dados UTM não aparecem
```javascript
// Verificar captura manual
const urlParams = new URLSearchParams(window.location.search);
console.log(Object.fromEntries(urlParams));

// Verificar localStorage
console.log(localStorage.getItem('utmify_data'));
```

#### 3. Meta Pixel não recebe UTMs
```javascript
// Verificar enriquecimento de eventos
import { useFacebookPixel } from '@/lib/facebook-pixel';
const { enrichEventWithUTM } = useFacebookPixel();
console.log(enrichEventWithUTM({}));
```

### Logs de Debug
```javascript
// Ativar logs detalhados (apenas desenvolvimento)
window.utmifyDebug = true;

// Verificar todos os hooks
console.log('UTMify:', window.utmify);
console.log('Facebook Pixel:', window.fbq);
```

## Próximos Passos

1. **Relatórios Personalizados**: Dashboard com métricas por fonte
2. **A/B Testing**: Testar diferentes UTMs para mesma campanha
3. **Automação**: Webhooks para notificar sobre conversões
4. **Machine Learning**: Predição de conversão por fonte

## Conformidade e Privacidade

- ✅ **LGPD**: Dados UTM são técnicos, não pessoais
- ✅ **Cookies**: UTMify usa localStorage, não cookies
- ✅ **Transparência**: Usuário pode ver dados no DevTools
- ✅ **Controle**: Dados podem ser limpos via localStorage.clear() 