# O Segredo da Conquista - Landing Page

Uma landing page profissional e moderna para o e-book "O Segredo da Conquista", focada em homens que buscam conquistar mulheres de forma natural, autêntica e respeitosa.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **Shadcn/UI** - Biblioteca de componentes modernos
- **Lucide React** - Ícones SVG otimizados
- **Radix UI** - Componentes acessíveis e sem estilo

## 📋 Características da Landing Page

### ✨ Design e UX
- Design responsivo e moderno
- Gradientes atraentes e cores harmoniosas
- Animações suaves e transições
- Tipografia otimizada para conversão
- Interface intuitiva e acessível

### 🎯 Estrutura de Conversão
1. **Hero Section** - Título impactante e proposta de valor
2. **Seção de Problemas** - Identificação das dores do público-alvo
3. **Diferenciação** - Por que este e-book é único
4. **Benefícios** - Resultados que o leitor pode esperar
5. **Método** - Como o conteúdo está organizado
6. **Social Proof** - Depoimentos e garantias
7. **CTA Final** - Chamada para ação persuasiva

### 🛠 Funcionalidades
- Scroll suave para seção de compra
- Componentes reutilizáveis
- SEO otimizado
- Meta tags para redes sociais
- Performance otimizada

## 🏗 Estrutura do Projeto

```
conquista/
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx           # Layout principal com metadados
│   └── page.tsx             # Landing page principal
├── components/
│   ├── ui/                  # Componentes Shadcn/UI
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── separator.tsx
│   └── scroll-to-cta.tsx    # Componente de scroll suave
├── lib/
│   └── utils.ts             # Utilitários (cn function)
├── tailwind.config.js       # Configuração do Tailwind
└── package.json
```

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone <repository-url>
   cd conquista
   ```

2. **Instale as dependências**
   ```bash
   bun install
   # ou
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   bun run dev
   # ou
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📦 Scripts Disponíveis

- `bun run dev` - Inicia o servidor de desenvolvimento
- `bun run build` - Cria a build de produção
- `bun run start` - Inicia o servidor de produção
- `bun run lint` - Executa o linter

## 🎨 Customização

### Cores e Tema
As cores podem ser customizadas no arquivo `app/globals.css` através das variáveis CSS:

```css
:root {
  --primary: 240 9% 9%;
  --secondary: 240 4.8% 95.9%;
  /* ... outras variáveis */
}
```

### Componentes
Todos os componentes seguem o padrão Shadcn/UI e podem ser facilmente customizados através das props `className`.

### Conteúdo
O conteúdo da landing page está centralizado no arquivo `app/page.tsx` e pode ser facilmente editado.

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥 Large Desktop (1400px+)

## 🔍 SEO e Performance

- Meta tags otimizadas
- Open Graph para redes sociais
- Twitter Cards
- Estrutura semântica HTML5
- Imagens otimizadas
- Lazy loading
- Core Web Vitals otimizados

## 📈 Métricas de Conversão

A landing page foi estruturada seguindo as melhores práticas de conversão:
- Headlines persuasivos
- Social proof estratégico
- Urgência e escassez
- Garantias e redução de risco
- CTAs claros e visíveis
- Fluxo de leitura otimizado

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através dos issues do GitHub.

---

**Nota**: Este projeto é destinado apenas para fins educacionais. Sempre trate todas as pessoas com respeito e dignidade.
