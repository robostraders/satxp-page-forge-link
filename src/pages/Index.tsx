
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, TrendingUp, Users, Shield, DollarSign, PlusIcon } from "lucide-react";
import { RegistrationForm } from "@/components/RegistrationForm";

export default function Index() {
  const faqItems = [
    {
      question: "1. Preciso saber programar para criar um robô de trading?",
      answer: "Não, você não precisa saber programar. Nossa metodologia foi desenvolvida para ser acessível a qualquer pessoa, independente do conhecimento técnico."
    },
    {
      question: "2. Essa aula é realmente gratuita?",
      answer: "Sim, a aula é 100% gratuita graças ao patrocínio da XP. Não há custos ocultos ou taxas."
    },
    {
      question: "3. Os robôs realmente funcionam?",
      answer: "Sim, os robôs são baseados em estratégias testadas e aprovadas por traders profissionais com histórico comprovado."
    },
    {
      question: "4. Preciso pagar alguma taxa para usar a plataforma Profit Pro?",
      answer: "Durante o período promocional apresentado na aula, você terá acesso gratuito à plataforma."
    },
    {
      question: "5. Como funciona a corretagem zero?",
      answer: "A corretagem zero é um benefício oferecido pela XP para mini contratos e day trade em ações durante o período promocional."
    },
    {
      question: "6. Até quando posso me inscrever?",
      answer: "As vagas são limitadas e o evento tem data específica. Recomendamos inscrever-se o quanto antes."
    },
    {
      question: "7. E se eu não puder assistir tudo ao vivo?",
      answer: "Terão materiais complementares e gravações disponibilizadas para os participantes."
    },
    {
      question: "8. Existe garantia?",
      answer: "Como é um evento gratuito educacional, o compromisso é entregar o máximo valor em conhecimento durante a aula."
    }
  ];

  // Notebook Component
  const Notebook = () => (
    <div className="relative mx-auto" style={{ width: '400px', height: '280px' }}>
      {/* Notebook base */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg shadow-2xl"></div>
      
      {/* Screen area */}
      <div className="absolute top-4 left-4 right-4 bottom-12 bg-black rounded-md overflow-hidden">
        <img 
          src="https://framerusercontent.com/images/m1KPOMa0vYhPRD4mSFMyf5HNFdI.png" 
          alt="Trading Chart"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Keyboard area */}
      <div className="absolute bottom-2 left-4 right-4 h-8 bg-gradient-to-b from-gray-200 to-gray-300 rounded-sm"></div>
      
      {/* Apple logo area */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://framerusercontent.com/images/cMEj1l3sgWJgaRGQaN2vnrWehV4.webp')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/80 z-20"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Logos */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <img 
              src="https://framerusercontent.com/images/tscbfudBbSyL8OTKHDemk9KeHkM.png" 
              alt="XP Logo"
              className="h-16 w-auto"
            />
            <div className="text-primary">
              <PlusIcon className="w-8 h-8" />
            </div>
            <img 
              src="https://framerusercontent.com/images/wpkx2gS7lHvfamcDAw5v4ZNFaX8.png" 
              alt="Partner Logo"
              className="h-16 w-16 rounded-full"
            />
          </div>
          
          {/* Tag line with golden lines */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <p className="text-primary font-bold tracking-[0.2em] text-lg">AULA AO VIVO E ONLINE</p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          {/* Main headline with improved responsiveness */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 max-w-6xl mx-auto leading-tight uppercase">
            A <span className="text-primary">XP ESTÁ PATROCINANDO</span> QUEM<br />
            <span className="text-primary">QUER PARAR DE OPERAR MANUALMENTE E COLOCAR ROBÔS</span><br />
            PARA TRABALHAR NO MERCADO
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-secondary mb-12 max-w-5xl mx-auto leading-relaxed">
            Descubra como ser 'patrocinado' pela XP e aprenda gratuitamente como criar e usar robôs de trading 
            para automatizar suas operações na Bolsa — mesmo que você nunca tenha investido antes ou saiba programar.
          </p>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-background relative overflow-hidden -mt-16">
        {/* Gradient from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://framerusercontent.com/images/YFihUE32N3fqSpZxDVrTMYgAz8M.png')"
          }}
        />
        
        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
            {/* Left side - Registration Form */}
            <div className="lg:pl-8 xl:pl-16">
              <RegistrationForm />
            </div>
            
            {/* Right side - Photo positioned to center character */}
            <div className="flex justify-center lg:justify-start xl:justify-center">
              <div className="relative lg:ml-16 xl:ml-0">
                {/* Main photo container - no effects, positioned to show character center */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/7f0c7634-e96d-462e-81ec-14fadf6efbe7.png" 
                    alt="Danilo"
                    className="w-full h-full object-cover object-[60%_center]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 bg-background relative -mt-16">
        {/* Gradient from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        
        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-primary tracking-wider">O QUE VOCÊ VAI APRENDER:</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-to-b from-[#140f00] to-[#131313] border-primary/20 p-10 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)_/_0.3)] transition-all duration-300 hover:border-primary/40">
              <div className="mb-8">
                <TrendingUp className="w-16 h-16 text-primary mb-6" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground leading-tight">
                Como criar seu primeiro robô de trading mesmo que você nunca tenha programado antes.
              </h3>
            </Card>
            
            <Card className="bg-gradient-to-b from-[#140f00] to-[#131313] border-primary/20 p-10 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)_/_0.3)] transition-all duration-300 hover:border-primary/40">
              <div className="mb-8">
                <Shield className="w-16 h-16 text-primary mb-6" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground leading-tight">
                Como automatizar suas operações e parar de depender de sinais ruins ou setups confusos.
              </h3>
            </Card>
            
            <Card className="bg-gradient-to-b from-[#140f00] to-[#131313] border-primary/20 p-10 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)_/_0.3)] transition-all duration-300 hover:border-primary/40">
              <div className="mb-8">
                <Users className="w-16 h-16 text-primary mb-6" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground leading-tight">
                Como começar no mercado com consistência, segurança e sem ficar o dia todo na frente da tela.
              </h3>
            </Card>
            
            <Card className="bg-gradient-to-b from-[#140f00] to-[#131313] border-primary/20 p-10 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)_/_0.3)] transition-all duration-300 hover:border-primary/40">
              <div className="mb-8">
                <DollarSign className="w-16 h-16 text-primary mb-6" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground leading-tight">
                Como ter acesso GRATUITO a um pacote completo que inclui robôs, sala ao vivo, aulas e mais!
              </h3>
            </Card>
          </div>
          
          <p className="text-center text-2xl text-secondary max-w-5xl mx-auto leading-relaxed">
            Tudo isso com o apoio técnico de especialistas — e sem nenhum custo, graças à iniciativa educacional 
            promovida com o apoio da XP.
          </p>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 bg-background relative -mt-12">
        {/* Gradient from previous section */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
        
        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black/60 z-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary leading-tight">
                PRESENTE DE ALTO VALOR DA XP PARA VOCÊ!
              </h2>
              <h3 className="text-xl md:text-2xl font-bold mb-12 text-foreground leading-tight">
                SE INSCREVA AGORA E ACESSE GRATUITAMENTE UM PACOTE AVALIADO EM MAIS DE R$ 3.500
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl">
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-cta-green mt-1 flex-shrink-0" />
                  <span>Curso completo "Start Autotrading" com 3 trilhas práticas</span>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-cta-green mt-1 flex-shrink-0" />
                  <span>3 robôs prontos para personalizar, com código fonte aberto</span>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-cta-green mt-1 flex-shrink-0" />
                  <span>Plataforma profissional de trading (Profit Pro) liberada sem custo</span>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-cta-green mt-1 flex-shrink-0" />
                  <span>Corretagem zero em mini contratos e day trade em ações</span>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-cta-green mt-1 flex-shrink-0" />
                  <span>Acesso à Sala Ao Vivo com acompanhamento diário (segunda a sexta, das 09h30 às 12h)</span>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-cta-green mt-1 flex-shrink-0" />
                  <span>Até 3 meses na Comunidade Autotrading com aulas ao vivo exclusivas</span>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-cta-green mt-1 flex-shrink-0" />
                  <span>E muito, muito mais que só posso revelar na aula.</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Notebook />
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Scarcity */}
      <section className="py-20 bg-background text-center relative -mt-10">
        {/* Gradient from previous section */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
        
        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/40 to-black/70 z-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-10">
          <p className="text-xl md:text-2xl mb-8 text-secondary max-w-4xl mx-auto">
            Tudo isso será liberado somente durante a aula. As instruções completas de acesso serão apresentadas ao vivo.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Vagas limitadas.</h2>
          
          <div className="mb-12">
            <p className="text-2xl md:text-3xl text-secondary line-through mb-4">De R$ 3.500</p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary">por R$ 0</p>
          </div>
          
          <Button className="bg-gradient-to-r from-cta-green to-cta-green-dark hover:from-cta-green-dark hover:to-cta-green text-white px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl font-bold rounded-xl shadow-[0_0_40px_hsl(var(--cta-green)_/_0.4)] hover:shadow-[0_0_60px_hsl(var(--cta-green)_/_0.6)] transition-all duration-300 transform hover:scale-105">
            SIM, QUERO MINHA VAGA AGORA
          </Button>
        </div>
      </section>

      {/* About Danilo */}
      <section className="py-20 bg-background relative overflow-hidden -mt-16">
        {/* Gradient from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-30"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://framerusercontent.com/images/gExDhEXVJtmAxmZJcmwQak4w.png')"
          }}
        />
        <div 
          className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://framerusercontent.com/images/wsVITPyNGHvVJWMfvywyoiU05c.png')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/80" />
        
        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/90 z-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary tracking-wider">SOBRE DANILO LEANDRO:</h2>
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                Danilo Leandro é engenheiro, opera no mercado financeiro desde 2007 e é especialista em programação 
                de estratégias automatizadas para bolsa de valores desde 2015. Ao longo de sua carreira, atuou como 
                assessor de investimentos e desenvolveu Robôs para grandes investidores e para os mais renomados 
                analistas do mercado que já faturaram mais de 7 dígitos. Mentor em trading automatizado, especialista 
                em robôs para o mercado financeiro e parceiro oficial da maior plataforma de trading do Brasil. 
                Já ajudou milhares de pessoas a saírem da frustração das operações manuais e migrarem para uma 
                estratégia lucrativa com automação.
              </p>
            </div>
            
            <div className="lg:opacity-0">
              {/* Spacer for layout - image is in background */}
            </div>
          </div>
        </div>
      </section>

      {/* Why Free */}
      <section className="py-24 relative min-h-screen flex items-center justify-center -mt-16">
        {/* Gradient from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/90 to-transparent z-30"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://framerusercontent.com/images/xeorZ07XvrnO84XMJSWbaqwtSC4.webp')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black/80" />
        
        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 pt-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-primary tracking-wider">POR QUE ESSA AULA É GRATUITA?</h2>
          <p className="text-lg md:text-xl text-foreground max-w-5xl mx-auto leading-relaxed mb-12">
            Essa aula faz parte de uma iniciativa educacional com apoio da XP, que tem como objetivo democratizar 
            o acesso ao conhecimento sobre trading automatizado. Acreditamos que a tecnologia pode tornar o mercado 
            mais acessível, transparente e profissional — e você pode fazer parte disso agora. Sem promessas milagrosas. 
            Sem atalhos. Só conhecimento de verdade, aplicado à realidade de quem quer começar a operar com mais 
            clareza e consistência. Garanta agora sua vaga!
          </p>
          
          <Button className="bg-gradient-to-r from-cta-green to-cta-green-dark hover:from-cta-green-dark hover:to-cta-green text-white px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl font-bold rounded-xl shadow-[0_0_40px_hsl(var(--cta-green)_/_0.4)] hover:shadow-[0_0_60px_hsl(var(--cta-green)_/_0.6)] transition-all duration-300 transform hover:scale-105">
            SIM, EU QUERO PARTICIPAR
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background relative -mt-16">
        {/* Gradient from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        
        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black/50 z-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-primary tracking-wider">
            PERGUNTAS FREQUENTES (FAQ)
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-primary/30 rounded-lg bg-gradient-to-b from-[#140f00] to-[#131313] px-8 py-4">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors py-6 [&[data-state=open]>svg]:rotate-180">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary text-base md:text-lg leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background text-center relative -mt-10">
        {/* Gradient from previous section */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-10">
          <Button className="bg-gradient-to-r from-cta-green to-cta-green-dark hover:from-cta-green-dark hover:to-cta-green text-white px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl font-bold rounded-xl shadow-[0_0_40px_hsl(var(--cta-green)_/_0.4)] hover:shadow-[0_0_60px_hsl(var(--cta-green)_/_0.6)] transition-all duration-300 transform hover:scale-105">
            SIM, QUERO MINHA VAGA AGORA
          </Button>
        </div>
      </section>
    </div>
  );
}
