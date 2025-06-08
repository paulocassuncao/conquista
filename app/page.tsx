import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollToCTA } from "@/components/scroll-to-cta"
import { CheckCircle, Download, Heart, Shield, Star, Target, Users, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2">
            🔥 Método Comprovado
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Conquiste uma mulher em até <span className="text-yellow-300">15 dias</span> mesmo sem Papo ou Beleza
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Utilize esse método validado com técnicas simples que realmente funcionam por apenas R$ 10,00
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <ScrollToCTA size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg" />
            <div className="flex items-center gap-2 text-yellow-300">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <span className="ml-2">Mais de 1.000 homens transformados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Você está cansado de...
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="text-red-600 mb-4">❌</div>
                <h3 className="font-semibold mb-2 text-gray-800">Ser rejeitado constantemente</h3>
                <p className="text-gray-600">Sentir aquele frio na barriga e ouvir "não" sempre que tenta se aproximar</p>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="text-red-600 mb-4">❌</div>
                <h3 className="font-semibold mb-2 text-gray-800">Não saber o que falar</h3>
                <p className="text-gray-600">Ficar em branco na hora de puxar assunto ou manter uma conversa interessante</p>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="text-red-600 mb-4">❌</div>
                <h3 className="font-semibold mb-2 text-gray-800">Insegurança e baixa autoestima</h3>
                <p className="text-gray-600">Se sentir inferior e achar que não é "bom o suficiente" para ela</p>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="text-red-600 mb-4">❌</div>
                <h3 className="font-semibold mb-2 text-gray-800">Técnicas falsas que não funcionam</h3>
                <p className="text-gray-600">Usar cantadas prontas, truques de "pickup artist" que só afastam as mulheres</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Por que este e-book é <span className="text-green-600">diferente</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esqueça os manuais de cantadas baratas. Aqui você aprende a abordagem que realmente funciona.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-700">Abordagem Autêntica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Nada de fingir ser quem você não é. Aprenda a ser genuíno e a mostrar sua verdadeira essência.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-700">Respeitosa e Ética</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Baseada no respeito mútuo, consentimento e comunicação saudável. Nada de manipulação.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-purple-700">Resultados Reais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Método testado e aprovado por centenas de homens que transformaram sua vida amorosa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              O que você vai conseguir com este e-book
            </h2>
            <p className="text-xl text-gray-600">
              Transformação completa na sua vida amorosa e pessoal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Perder o medo da rejeição</h3>
                  <p className="text-gray-600">Aprenda a lidar com "não" de forma madura e usar isso como combustível para crescer</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Conversar com naturalidade</h3>
                  <p className="text-gray-600">Dominar a arte da conversa leve, interessante e envolvente em qualquer situação</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Desenvolver segurança genuína</h3>
                  <p className="text-gray-600">Construir uma autoconfiança sólida que vem de dentro, não de técnicas superficiais</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Evitar erros comuns</h3>
                  <p className="text-gray-600">Conhecer os principais equívocos que afastam as mulheres e como corrigi-los</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Linguagem corporal poderosa</h3>
                  <p className="text-gray-600">Comunicar confiança através da sua postura, gestos e presença</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Manter o interesse dela</h3>
                  <p className="text-gray-600">Estratégias para criar e manter atração de forma natural e duradoura</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Conquistar online e offline</h3>
                  <p className="text-gray-600">Aplicar os princípios tanto em conversas presenciais quanto digitais</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Relacionamentos saudáveis</h3>
                  <p className="text-gray-600">Criar conexões genuínas baseadas em respeito mútuo e comunicação clara</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Structure Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Como o método está organizado
            </h2>
            <p className="text-xl text-gray-600">
              Um sistema passo a passo para sua transformação
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle className="text-blue-700">Mindset de Sucesso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Transforme sua mentalidade e construa autoconfiança genuína</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <CardTitle className="text-green-700">Arte da Comunicação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Exemplos práticos de conversas envolventes e naturais</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <CardTitle className="text-purple-700">Linguagem Corporal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Dicas sobre postura, gestos e presença que transmitem segurança</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <CardTitle className="text-orange-700">Prática Aplicada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Exercícios práticos para aplicar tudo que aprendeu no dia a dia</p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              O que outros homens estão dizendo
            </h2>
            <div className="flex justify-center items-center gap-4 mb-8">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="text-xl text-gray-600">+1.000 homens transformados</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Finalmente um método que funciona de verdade! Em 2 meses consegui me relacionar de forma muito mais natural. Obrigado!"
                </p>
                <div className="font-semibold text-gray-800">- Carlos, 28 anos</div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Minha autoconfiança aumentou muito. Agora consigo conversar com qualquer mulher sem nervosismo. Recomendo!"
                </p>
                <div className="font-semibold text-gray-800">- Rafael, 32 anos</div>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Era muito tímido, agora estou namorando uma pessoa incrível. Este e-book mudou minha vida!"
                </p>
                <div className="font-semibold text-gray-800">- Bruno, 25 anos</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg">
              <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Garantia de Satisfação</h3>
              <p className="text-gray-700 text-lg">
                Se você aplicar as técnicas e não ver resultados em 7 dias, 
                devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="px-4 py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Não deixe para amanhã a transformação que você pode começar hoje!
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Milhares de homens já descobriram o segredo. Chegou a sua vez.
          </p>
          
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mb-8 items-center justify-center">
            {/* Oferta Básica */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white flex flex-col w-full max-w-sm mx-auto md:max-w-none">
              <CardHeader className="text-center">
                <h3 className="text-2xl font-bold mb-2">OFERTA BÁSICA</h3>
                <div className="text-4xl font-bold text-yellow-300 mb-4">R$ 10,00</div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm">✅</span>
                    <span className="leading-tight">E-book Método Segredo da Conquista</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm">✅</span>
                    <span className="leading-tight">Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm">✅</span>
                    <span className="leading-tight">Garantia de 7 dias</span>
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 w-full font-bold">
                  <Download className="mr-2 h-5 w-5" />
                  COMEÇAR AGORA
                </Button>
              </div>
            </Card>

            {/* Oferta Premium */}
            <Card className="bg-gradient-to-b from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border-yellow-400/50 text-white relative flex flex-col w-full max-w-sm mx-auto md:max-w-none">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-yellow-400 text-yellow-900 px-4 py-2 text-sm font-bold">
                  🔥 MAIS POPULAR
                </Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <h3 className="text-2xl font-bold mb-2">OFERTA COMPLETA</h3>
                <div className="text-lg opacity-75 line-through mb-1">De R$ 97,00</div>
                <div className="text-4xl font-bold text-yellow-300 mb-4">R$ 27,90</div>
                <Badge className="bg-red-500 text-white px-3 py-1 text-xs">
                  Economia de R$ 69,10
                </Badge>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm">✅</span>
                    <span className="font-semibold leading-tight">E-book Método Segredo da Conquista</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm">✅</span>
                    <span className="font-semibold leading-tight">E-book - Impressione Gastando Pouco</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm">✅</span>
                    <span className="font-semibold leading-tight">E-book - Conquistar com Palavras</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm">✅</span>
                    <span className="font-semibold leading-tight">E-book - 10 Dicas para Matches no Tinder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm">✅</span>
                    <span className="font-semibold leading-tight">E-book - Otimizar Perfil no Tinder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm">✅</span>
                    <span className="leading-tight">Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm">✅</span>
                    <span className="leading-tight">Garantia de 7 dias</span>
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button size="lg" className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 w-full font-bold text-lg py-6">
                  <Download className="mr-2 h-5 w-5" />
                  QUERO O PACOTE COMPLETO
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="text-center text-sm opacity-75 mb-8">
            ✅ Formato PDF para ler em qualquer dispositivo<br />
            ✅ Suporte via WhatsApp<br />
            ✅ Método testado por +1.000 homens
          </div>
          
          <Separator className="my-8 bg-white/20" />
          
          <div className="bg-red-700/30 p-6 rounded-lg border border-red-400">
            <h3 className="text-2xl font-bold mb-4">⚠️ ATENÇÃO: Leia com atenção e coloque em prática!</h3>
            <p className="text-lg">
              Este e-book só funciona se você APLICAR o que ensina. Não é um material para ficar guardado. 
              É um guia de ação. Se você não está disposto a sair da zona de conforto e praticar, 
              este produto não é para você.
            </p>
          </div>
          
          <div className="mt-8 text-lg">
            <p className="mb-4">
              <strong>Seja parte dos homens que escolheram evoluir.</strong>
            </p>
            <p>
              A vida é muito curta para desperdiçar oportunidades. 
              Transforme sua vida amorosa começando hoje mesmo.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <p className="text-gray-400 mb-4">
            © 2024 O Segredo da Conquista. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Este produto é destinado apenas para fins educacionais. 
            Sempre trate todas as pessoas com respeito e dignidade.
          </p>
        </div>
      </footer>
    </div>
  )
}
