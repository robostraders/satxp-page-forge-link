import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export default function Index() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://framerusercontent.com/images/Rjr2J74waBKoYa6RFO5IcGaUAQ.webp')"
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logos */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <img 
              src="https://framerusercontent.com/images/UcOQsP9Z0hU0BKN33eo1D3XK3TI.png" 
              alt="XP Logo" 
              className="h-8"
            />
            <img 
              src="https://framerusercontent.com/images/qy6hMOGcGGY3IXGfMKgBJcJQzk.png" 
              alt="Partner Logo" 
              className="h-8"
            />
          </div>
          
          {/* Tagline */}
          <div className="text-primary font-bold text-lg tracking-wider mb-6">
            AULA AO VIVO E ONLINE
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 text-white">
            A XP Está Patrocinando Quem Quer Parar de Operar Manualmente e Colocar 
            <span className="text-primary block mt-2">
              Robôs para Trabalhar no Mercado
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-secondary leading-relaxed mb-12 max-w-4xl mx-auto">
            Descubra como ser "patrocinado" pela XP e aprenda gratuitamente como criar e usar robôs de trading 
            para automatizar suas operações na Bolsa — mesmo que você nunca tenha investido antes ou saiba programar.
          </p>
          
          {/* CTA Button */}
          <Button 
            onClick={scrollToTop}
            className="bg-gradient-green hover:bg-gradient-green text-white text-xl px-12 py-6 rounded-lg font-bold shadow-glow transition-all duration-300 hover:scale-105"
          >
            SIM, QUERO MINHA VAGA AGORA
          </Button>
        </div>
      </section>

      {/* Reserve Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-primary tracking-wider">
            RESERVE EM SUA AGENDA
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-4">📆</div>
              <p className="text-xl text-white font-semibold">Data:</p>
              <p className="text-lg text-secondary">A ser definida</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <p className="text-xl text-white font-semibold">Horário:</p>
              <p className="text-lg text-secondary">A ser definido</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-xl text-white font-semibold">Local:</p>
              <p className="text-lg text-secondary">Evento 100% Online e Gratuito</p>
            </div>
          </div>
          
          <Button 
            onClick={scrollToTop}
            className="bg-gradient-green hover:bg-gradient-green text-white text-xl px-12 py-6 rounded-lg font-bold shadow-glow transition-all duration-300 hover:scale-105"
          >
            SIM, QUERO MINHA VAGA AGORA
          </Button>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-primary tracking-wider">
            O QUE VOCÊ VAI APRENDER:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-card border-border p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-6">🤖</div>
              <h3 className="text-xl font-bold mb-4 text-primary">Primeiro Robô</h3>
              <p className="text-card-foreground">
                Como criar seu primeiro robô de trading mesmo que você nunca tenha programado antes.
              </p>
            </Card>
            
            <Card className="bg-card border-border p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-6">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-primary">Automação</h3>
              <p className="text-card-foreground">
                Como automatizar suas operações e parar de depender de sinais ruins ou setups confusos.
              </p>
            </Card>
            
            <Card className="bg-card border-border p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-6">💰</div>
              <h3 className="text-xl font-bold mb-4 text-primary">Consistência</h3>
              <p className="text-card-foreground">
                Como começar no mercado com consistência, segurança e sem ficar o dia todo na frente da tela.
              </p>
            </Card>
            
            <Card className="bg-card border-border p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-6">🎁</div>
              <h3 className="text-xl font-bold mb-4 text-primary">Pacote Gratuito</h3>
              <p className="text-card-foreground">
                Como ter acesso GRATUITO a um pacote completo que inclui robôs, sala ao vivo, aulas e mais!
              </p>
            </Card>
          </div>
          
          <p className="text-center text-xl text-secondary max-w-4xl mx-auto">
            Tudo isso com o apoio técnico de especialistas — e sem nenhum custo, 
            graças à iniciativa educacional promovida com o apoio da XP.
          </p>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-primary">
                PRESENTE DE ALTO VALOR DA XP PARA VOCÊ!
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                SE INSCREVA AGORA E ACESSE GRATUITAMENTE UM PACOTE AVALIADO EM MAIS DE R$ 3.500
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-cta-green text-xl">✅</span>
                  <p className="text-secondary">Curso completo "Start Autotrading" com 3 trilhas práticas</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cta-green text-xl">✅</span>
                  <p className="text-secondary">3 robôs prontos para personalizar, com código fonte aberto</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cta-green text-xl">✅</span>
                  <p className="text-secondary">Plataforma profissional de trading (Profit Pro) liberada sem custo</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cta-green text-xl">✅</span>
                  <p className="text-secondary">Corretagem zero em mini contratos e day trade em ações</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cta-green text-xl">✅</span>
                  <p className="text-secondary">Acesso à Sala Ao Vivo com acompanhamento diário (segunda a sexta, das 09h30 às 12h)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cta-green text-xl">✅</span>
                  <p className="text-secondary">Até 3 meses na Comunidade Autotrading com aulas ao vivo exclusivas</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cta-green text-xl">✅</span>
                  <p className="text-secondary">E muito, muito mais que só posso revelar na aula.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="https://framerusercontent.com/images/tMWa7YFcRsPhTvzD2r8HGNfVMY.webp" 
                alt="Notebook com plataforma de trading" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Scarcity */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-xl text-secondary mb-8">
            Tudo isso será liberado somente durante a aula. As instruções completas de acesso serão apresentadas ao vivo.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Vagas limitadas.
          </h2>
          
          <div className="mb-12">
            <p className="text-lg text-secondary mb-4">De</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl md:text-4xl text-secondary line-through">R$ 3.500</span>
              <span className="text-6xl md:text-8xl font-extrabold text-primary">por R$ 0</span>
            </div>
          </div>
          
          <Button 
            onClick={scrollToTop}
            className="bg-gradient-green hover:bg-gradient-green text-white text-xl px-12 py-6 rounded-lg font-bold shadow-glow transition-all duration-300 hover:scale-105"
          >
            SIM, QUERO MINHA VAGA AGORA
          </Button>
        </div>
      </section>

      {/* About Danilo Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-primary">
                SOBRE DANILO LEANDRO:
              </h2>
              
              <p className="text-lg text-secondary leading-relaxed">
                Danilo Leandro é engenheiro, opera no mercado financeiro desde 2007 e é especialista em programação 
                de estratégias automatizadas para bolsa de valores desde 2015. Ao longo de sua carreira, atuou como 
                assessor de investimentos e desenvolveu Robôs para grandes investidores e para os mais renomados 
                analistas do mercado que já faturaram mais de 7 dígitos.
                <br /><br />
                Mentor em trading automatizado, especialista em robôs para o mercado financeiro e parceiro oficial 
                da maior plataforma de trading do Brasil. Já ajudou milhares de pessoas a saírem da frustração das 
                operações manuais e migrarem para uma estratégia lucrativa com automação.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://framerusercontent.com/images/aqKNr7S6k19TXFp3zVHLpuS2XQs.webp" 
                alt="Danilo Leandro" 
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "url('https://framerusercontent.com/images/lCIuHDzT9KdR1A7X21CNqhHK9o.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-primary">
            POR QUE ESSA AULA É GRATUITA?
          </h2>
          
          <p className="text-xl text-white leading-relaxed mb-12">
            Essa aula faz parte de uma iniciativa educacional com apoio da XP, que tem como objetivo democratizar 
            o acesso ao conhecimento sobre trading automatizado. Acreditamos que a tecnologia pode tornar o mercado 
            mais acessível, transparente e profissional — e você pode fazer parte disso agora.
            <br /><br />
            Sem promessas milagrosas. Sem atalhos. Só conhecimento de verdade, aplicado à realidade de quem quer 
            começar a operar com mais clareza e consistência.
            <br /><br />
            Garanta agora sua vaga!
          </p>
          
          <Button 
            onClick={scrollToTop}
            className="bg-gradient-green hover:bg-gradient-green text-white text-xl px-12 py-6 rounded-lg font-bold shadow-glow transition-all duration-300 hover:scale-105"
          >
            SIM, EU QUERO PARTICIPAR
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-primary">
            PERGUNTAS FREQUENTES (FAQ)
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary">
                1. Preciso saber programar para criar um robô de trading?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-base">
                Não! Nossa metodologia foi desenvolvida especificamente para pessoas sem conhecimento em programação. 
                Você aprenderá do zero, de forma didática e prática.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary">
                2. Essa aula é realmente gratuita?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-base">
                Sim, é 100% gratuita! Faz parte de uma iniciativa educacional com apoio da XP para democratizar 
                o acesso ao conhecimento sobre trading automatizado.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary">
                3. Os robôs realmente funcionam?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-base">
                Sim! Nossos robôs são testados e utilizados por milhares de traders. Durante a aula, você verá 
                resultados reais e aprenderá como configurá-los adequadamente.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary">
                4. Preciso pagar alguma taxa para usar a plataforma Profit Pro?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-base">
                Não! A plataforma será liberada gratuitamente para os participantes da aula, sem nenhum custo adicional.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary">
                5. Como funciona a corretagem zero?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-base">
                Através da parceria com a XP, você terá acesso a condições especiais de corretagem zero em mini 
                contratos e day trade em ações.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary">
                6. Até quando posso me inscrever?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-base">
                As vagas são limitadas e podem esgotar a qualquer momento. Recomendamos que se inscreva o quanto antes 
                para garantir sua participação.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary">
                7. E se eu não puder assistir tudo ao vivo?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-base">
                A aula ficará disponível por tempo limitado após o evento ao vivo. Mas recomendamos assistir ao vivo 
                para aproveitar a interação e tirar dúvidas em tempo real.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary">
                8. Existe garantia?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-base">
                Como é um evento gratuito, não há garantia monetária. Mas garantimos que você receberá conteúdo de 
                alta qualidade e ferramentas valiosas para começar no trading automatizado.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-green">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white">
            ÚLTIMA CHANCE!
          </h2>
          <p className="text-xl text-white mb-12">
            Não perca esta oportunidade única de aprender trading automatizado com apoio da XP.
          </p>
          <Button 
            onClick={scrollToTop}
            className="bg-background hover:bg-muted text-foreground text-xl px-12 py-6 rounded-lg font-bold transition-all duration-300 hover:scale-105"
          >
            GARANTIR MINHA VAGA GRATUITA
          </Button>
        </div>
      </section>
    </div>
  );
}