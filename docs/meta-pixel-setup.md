# Meta Pixel - Implementação

## Visão Geral

O Meta Pixel do Facebook foi implementado na página de vendas "O Segredo da Conquista" para rastrear conversões e otimizar campanhas publicitárias.

**ID do Pixel:** `1384209646109917`

## Eventos Rastreados

### Eventos Automáticos
- **PageView**: Carregado automaticamente em todas as páginas
- **ViewContent**: Rastreado quando a página de vendas é visualizada

### Eventos de Conversão
- **InitiateCheckout**: Quando usuário clica em "COMEÇAR AGORA" (Oferta Básica - R$ 10,00)
- **InitiateCheckout**: Quando usuário clica em "QUERO O PACOTE COMPLETO" (Oferta Premium - R$ 27,90)
- **Lead**: Quando usuário demonstra interesse (scroll para CTA)

### Eventos Personalizados
- **LandingPageView**: Visualização específica da landing page
- **ClickOfertaBasica**: Clique na oferta básica
- **ClickOfertaCompleta**: Clique na oferta premium
- **InteresseNoProduto**: Demonstração de interesse
- **ViewProblemSection**: Visualização da seção de problemas
- **ViewTestimonials**: Visualização dos depoimentos

## Estrutura de Implementação

### 1. Layout Principal (`app/layout.tsx`)
```typescript
// Meta Pixel é carregado usando Next.js Script component
<Script
  id="facebook-pixel"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1384209646109917');
      fbq('track', 'PageView');
    `,
  }}
/>
```

### 2. Hook Personalizado (`lib/facebook-pixel.ts`)
```typescript
export const useFacebookPixel = () => {
  const trackEvent = (eventName: FacebookPixelEvent, parameters?: FacebookPixelParameters) => {
    // Implementação segura com verificações
  };
  
  const trackPurchase = (value: number, currency: string = 'BRL', contentName?: string) => {
    // Rastreamento específico para compras
  };
  
  // Outros métodos...
};
```

### 3. Componente de Rastreamento (`components/pixel-tracker.tsx`)
```typescript
export const PixelTracker: React.FC<PixelTrackerProps> = ({
  eventName,
  eventData,
  children,
  threshold = 0.5,
  triggerOnce = true
}) => {
  // Usa Intersection Observer para rastrear visualizações de seções
};
```

## Dados Enviados

### Estrutura Padrão dos Eventos
```javascript
{
  value: 10.00,           // Valor em reais
  currency: "BRL",        // Moeda brasileira
  content_name: "O Segredo da Conquista - Oferta Básica",
  content_type: "product",
  content_category: "e-book"
}
```

### Eventos de Conversão
- **Oferta Básica**: R$ 10,00
- **Oferta Premium**: R$ 27,90

## Como Testar

### 1. Meta Pixel Helper (Extensão do Chrome)
- Instale a extensão "Facebook Pixel Helper"
- Navegue pela página de vendas
- Verifique se os eventos estão sendo disparados

### 2. Console do Navegador
- Abra o DevTools (F12)
- Verifique os logs do console
- Procure por mensagens como: `Facebook Pixel: ViewContent tracked`

### 3. Events Manager do Facebook
- Acesse https://business.facebook.com/events_manager
- Verifique se os eventos estão sendo recebidos em tempo real

## Configuração de Campanhas

### Eventos para Otimização
1. **Topo do Funil**: ViewContent, LandingPageView
2. **Meio do Funil**: Lead, InteresseNoProduto
3. **Fundo do Funil**: InitiateCheckout, Purchase (quando implementado)

### Audiências Personalizadas
- Visitantes da página de vendas (ViewContent)
- Pessoas que demonstraram interesse (Lead)
- Pessoas que iniciaram checkout (InitiateCheckout)

## Integração com UTMify

✅ **Meta Pixel + UTMify**: Todos os eventos incluem dados UTM automaticamente
- Fonte de tráfego identificada inteligentemente
- Parâmetros UTM enriquecidos em todos os eventos
- Fallbacks para captura mesmo sem UTMify
- Documentação completa em `docs/utmify-setup.md`

## Próximos Passos

1. **Implementar evento Purchase**: Quando integrar com gateway de pagamento
2. **AddToCart**: Se implementar carrinho de compras
3. **CompleteRegistration**: Para formulários de cadastro
4. **Subscribe**: Para newsletter ou lista de e-mail

## Monitoramento

### KPIs Importantes
- Taxa de conversão: ViewContent → InitiateCheckout
- Custo por lead (CPL)
- Retorno sobre investimento publicitário (ROAS)
- Frequência de eventos por usuário

### Relatórios Sugeridos
- Funil de conversão por evento
- Performance por tipo de oferta (Básica vs Premium)
- Análise de cohort de usuários

## Troubleshooting

### Problemas Comuns
1. **Eventos não aparecem**: Verificar se fbq está carregado
2. **Parâmetros incorretos**: Validar estrutura dos dados
3. **Duplicação de eventos**: Verificar implementação de triggerOnce

### Debug
```javascript
// No console do navegador
window.fbq('track', 'ViewContent', {
  content_name: 'Test',
  value: 10,
  currency: 'BRL'
});
``` 