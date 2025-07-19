import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Check, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    // Smooth scroll to form section (to be implemented)
    const formSection = document.getElementById('inscricao');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "✅ Como criar robôs de trading do zero (mesmo sem saber programar)",
    "✅ As estratégias mais lucrativas do mercado automatizadas",
    "✅ Configuração completa para começar a operar hoje mesmo",
    "✅ Acesso ao grupo VIP de traders automatizados",
    "✅ Material de apoio exclusivo avaliado em R$ 1.500",
    "✅ Scripts prontos para MetaTrader 5",
    "✅ Suporte técnico por 30 dias"
  ];

  const learningPoints = [
    {
      icon: "🎯",
      title: "Configuração de Robôs",
      description: "Aprenda a configurar robôs de trading profissionais mesmo sem conhecimento técnico"
    },
    {
      icon: "📊",
      title: "Estratégias Automatizadas",
      description: "Descubra as estratégias mais lucrativas do mercado totalmente automatizadas"
    },
    {
      icon: "💰",
      title: "Gerenciamento de Risco",
      description: "Domine as técnicas de gerenciamento de risco para proteger seu capital"
    },
    {
      icon: "⚡",
      title: "Execução em Tempo Real",
      description: "Configure seus robôs para executar operações 24/7 sem sua intervenção"
    }
  ];

  const faqs = [
    {
      question: "Preciso ter experiência no mercado financeiro?",
      answer: "Não! A aula foi desenvolvida especialmente para iniciantes. Você aprenderá desde o básico até configurações avançadas."
    },
    {
      question: "Preciso saber programar?",
      answer: "Absolutamente não! Mostraremos como usar robôs prontos e configurá-los sem nenhuma linha de código."
    },
    {
      question: "Quanto capital preciso para começar?",
      answer: "Você pode começar com valores baixos para testar. Mostraremos estratégias para diferentes perfis de investimento."
    },
    {
      question: "Os robôs realmente funcionam?",
      answer: "Sim! Apresentaremos cases reais e resultados comprovados de alunos que já implementaram."
    },
    {
      question: "Vou receber suporte após a aula?",
      answer: "Sim, você terá acesso ao suporte técnico e comunidade exclusiva por 30 dias."
    },
    {
      question: "A aula ficará gravada?",
      answer: "A aula é ao vivo e interativa. Recomendamos participar no horário para não perder nenhum detalhe."
    },
    {
      question: "Funciona para qualquer corretora?",
      answer: "Focaremos nas principais plataformas como MetaTrader 5 e mostraremos compatibilidade com corretoras parceiras."
    },
    {
      question: "É realmente gratuito?",
      answer: "Sim, totalmente gratuito! A XP está patrocinando esta aula como forma de democratizar o acesso ao trading automatizado."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background via-muted to-background"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop&crop=center')`
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
          {/* Logos */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="bg-white px-4 py-2 rounded">
              <span className="text-black font-bold text-xl">XP</span>
            </div>
            <span className="text-primary">+</span>
            <div className="bg-primary px-4 py-2 rounded">
              <span className="text-black font-bold">PARCEIRO</span>
            </div>
          </div>

          {/* Tag */}
          <div className="bg-primary/20 border border-primary text-primary px-6 py-2 rounded-full inline-block">
            <span className="font-semibold">AULA AO VIVO E ONLINE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            A XP ESTÁ{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-trading-gold-dark bg-clip-text text-transparent">
              PATROCINANDO
            </span>{" "}
            QUEM QUER PARAR DE OPERAR MANUALMENTE
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            E COLOCAR ROBÔS PARA TRABALHAR NO MERCADO
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra como ser 'patrocinado' pela XP e aprenda gratuitamente como criar e usar robôs de trading 
            para automatizar suas operações na Bolsa — mesmo que você nunca tenha investido antes ou saiba programar.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-accent to-trading-green-light hover:from-accent/90 hover:to-trading-green-light/90 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            SIM, QUERO MINHA VAGA AGORA
          </Button>
        </div>
      </section>

      {/* Reserve em sua Agenda */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            RESERVE EM SUA AGENDA
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3 text-lg">
              <Calendar className="text-primary" size={24} />
              <span>📆 Data: 25 de Janeiro</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Clock className="text-primary" size={24} />
              <span>⏰ Horário: 20h00</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <MapPin className="text-primary" size={24} />
              <span>📍 Evento 100% Online</span>
            </div>
          </div>

          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-accent to-trading-green-light hover:from-accent/90 hover:to-trading-green-light/90 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            SIM, QUERO MINHA VAGA AGORA
          </Button>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
            O QUE VOCÊ VAI APRENDER:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPoints.map((point, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{point.icon}</div>
                  <CardTitle className="text-lg">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {point.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-12 text-lg">
            Tudo isso com o apoio técnico de especialistas e uma comunidade exclusiva de traders automatizados.
          </p>
        </div>
      </section>

      {/* Presente de Alto Valor */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              PRESENTE DE ALTO VALOR DA XP PARA VOCÊ!
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold">
              SE INSCREVA AGORA E ACESSE GRATUITAMENTE UM PACOTE AVALIADO EM MAIS DE R$ 3.500
            </h3>
            
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-lg flex items-start gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>{benefit.replace('✅ ', '')}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=400&fit=crop"
              alt="Notebook com trading"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* CTA com Escassez */}
      <section className="py-20 px-4 bg-gradient-to-r from-background via-muted to-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg text-muted-foreground">
            Tudo isso será liberado somente durante a aula. As instruções completas de acesso serão apresentadas ao vivo.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold">
            Vagas limitadas.
          </h2>
          
          <div className="space-y-4">
            <div className="text-2xl text-muted-foreground line-through">
              De R$ 3.500
            </div>
            <div className="text-5xl md:text-6xl font-bold text-primary">
              por R$ 0
            </div>
          </div>
          
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-accent to-trading-green-light hover:from-accent/90 hover:to-trading-green-light/90 text-white font-bold text-xl px-12 py-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            SIM, QUERO MINHA VAGA AGORA
          </Button>
        </div>
      </section>

      {/* Sobre Danilo Leandro */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              SOBRE DANILO LEANDRO:
            </h2>
            
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                Especialista em Trading Automatizado com mais de 10 anos de experiência no mercado financeiro. 
                Desenvolveu estratégias que já geraram milhões em lucros para traders ao redor do mundo.
              </p>
              <p>
                Formado em Engenharia de Software e pós-graduado em Mercado Financeiro, Danilo combina 
                conhecimento técnico com expertise prática para criar soluções inovadoras de trading automatizado.
              </p>
              <p>
                Já treinou mais de 5.000 pessoas em trading automatizado e é reconhecido como uma das principais 
                autoridades em robôs de trading no Brasil.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
              alt="Danilo Leandro"
              className="rounded-lg shadow-xl w-80 h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Por que é gratuita */}
      <section 
        className="py-20 px-4 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1920&h=800&fit=crop')`
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            POR QUE ESSA AULA É GRATUITA?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A XP está investindo na democratização do trading automatizado no Brasil. 
            Nosso objetivo é mostrar como a tecnologia pode trabalhar a seu favor, 
            tornando o mercado financeiro mais acessível para todos. Esta é nossa forma 
            de retribuir à comunidade e formar uma nova geração de traders automatizados.
          </p>
          
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-accent to-trading-green-light hover:from-accent/90 hover:to-trading-green-light/90 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            SIM, EU QUERO PARTICIPAR
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            PERGUNTAS FREQUENTES (FAQ)
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-left text-lg">
                      {faq.question}
                    </CardTitle>
                    <ChevronDown 
                      className={`transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="inscricao" className="py-20 px-4 bg-gradient-to-r from-background via-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            GARANTE SUA VAGA AGORA!
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Últimas vagas disponíveis para a aula ao vivo
          </p>
          
          <Button 
            className="bg-gradient-to-r from-accent to-trading-green-light hover:from-accent/90 hover:to-trading-green-light/90 text-white font-bold text-xl px-12 py-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            SIM, QUERO MINHA VAGA AGORA
          </Button>
        </div>
      </section>
    </div>
  );
}