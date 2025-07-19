
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChartIcon } from "@/components/icons/ChartIcon";
import { PlayIcon } from "@/components/icons/PlayIcon";
import { LaptopIcon } from "@/components/icons/LaptopIcon";
import { ArrowDownIcon } from "@/components/icons/ArrowDownIcon";
import { GoldLineIcon } from "@/components/icons/GoldLineIcon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-gold-light/5"></div>
        
        <div className="relative container mx-auto px-4 py-16 mobile:py-12 tablet:py-20 desktop:py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main heading */}
            <div className="mb-12 mobile:mb-8">
              <h1 className="text-6xl mobile:text-4xl tablet:text-5xl desktop:text-7xl font-bold mb-6 mobile:mb-4">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  SatXP
                </span>
              </h1>
              <div className="flex justify-center mb-6">
                <GoldLineIcon width={120} height={4} className="mobile:w-20" />
              </div>
              <p className="text-2xl mobile:text-xl tablet:text-2xl desktop:text-3xl text-muted-foreground font-light">
                Sistema de Gestão Empresarial
              </p>
            </div>

            {/* Main feature card */}
            <Card className="p-12 mobile:p-6 tablet:p-8 desktop:p-16 shadow-gold backdrop-blur-sm border-border/50 mb-16 mobile:mb-12">
              <div className="space-y-8 mobile:space-y-6">
                <div className="flex justify-center mb-8 mobile:mb-6">
                  <ChartIcon size={80} />
                </div>
                
                <div className="space-y-6 mobile:space-y-4">
                  <h2 className="text-3xl mobile:text-2xl tablet:text-3xl desktop:text-4xl font-semibold text-foreground">
                    Gestão Inteligente para Sua Empresa
                  </h2>
                  <p className="text-lg mobile:text-base tablet:text-lg desktop:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Transforme a gestão da sua empresa com nossa solução completa. 
                    Controle financeiro, vendas, estoque e muito mais em uma única plataforma.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 mobile:gap-4 justify-center items-center pt-6">
                  <Button 
                    size="lg"
                    className="gradient-gold hover:opacity-90 transition-smooth text-white font-semibold px-8 py-4 mobile:px-6 mobile:py-3 text-lg mobile:text-base shadow-gold"
                  >
                    Começar Agora
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="transition-smooth border-gold-secondary/30 hover:border-gold-secondary/60 hover:bg-gold-primary/5 px-8 py-4 mobile:px-6 mobile:py-3 text-lg mobile:text-base flex items-center gap-3"
                  >
                    <PlayIcon size={24} />
                    Ver Demonstração
                  </Button>
                </div>
              </div>
            </Card>

            {/* Scroll indicator */}
            <div className="flex justify-center">
              <div className="animate-bounce-slow">
                <ArrowDownIcon size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 mobile:py-12 tablet:py-16 desktop:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 mobile:mb-12">
            <h2 className="text-4xl mobile:text-3xl tablet:text-4xl desktop:text-5xl font-bold mb-6 mobile:mb-4">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Recursos Principais
              </span>
            </h2>
            <div className="flex justify-center mb-6">
              <GoldLineIcon width={160} height={4} />
            </div>
            <p className="text-xl mobile:text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo que sua empresa precisa em um só lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mobile:gap-6 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="p-8 mobile:p-6 shadow-card border-border/30 hover:shadow-gold/20 transition-smooth group">
              <div className="text-center space-y-4">
                <div className="flex justify-center group-hover:scale-105 transition-smooth">
                  <ChartIcon size={64} />
                </div>
                <h3 className="font-semibold text-foreground text-xl mobile:text-lg">
                  Análise Financeira
                </h3>
                <p className="text-sm mobile:text-xs text-muted-foreground leading-relaxed">
                  Dashboards completos e relatórios detalhados para controle total das finanças.
                </p>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 mobile:p-6 shadow-card border-border/30 hover:shadow-gold/20 transition-smooth group">
              <div className="text-center space-y-4">
                <div className="flex justify-center group-hover:scale-105 transition-smooth">
                  <LaptopIcon size={64} />
                </div>
                <h3 className="font-semibold text-foreground text-xl mobile:text-lg">
                  Tecnologia Avançada
                </h3>
                <p className="text-sm mobile:text-xs text-muted-foreground leading-relaxed">
                  Plataforma moderna e intuitiva, desenvolvida com as melhores tecnologias.
                </p>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 mobile:p-6 shadow-card border-border/30 hover:shadow-gold/20 transition-smooth group md:col-span-2 lg:col-span-1">
              <div className="text-center space-y-4">
                <div className="flex justify-center group-hover:scale-105 transition-smooth">
                  <div className="relative">
                    <PlayIcon size={64} />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground text-xl mobile:text-lg">
                  Suporte Completo
                </h3>
                <p className="text-sm mobile:text-xs text-muted-foreground leading-relaxed">
                  Treinamento, implementação e suporte técnico especializado para sua equipe.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 mobile:py-12 tablet:py-16 desktop:py-24">
        <div className="container mx-auto px-4">
          <Card className="p-12 mobile:p-6 tablet:p-8 desktop:p-16 shadow-gold backdrop-blur-sm border-gold-secondary/20 max-w-4xl mx-auto text-center">
            <div className="space-y-8 mobile:space-y-6">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <LaptopIcon size={80} />
                  <div className="absolute -top-2 -right-2">
                    <ChartIcon size={32} />
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl mobile:text-2xl tablet:text-3xl desktop:text-4xl font-bold mb-4">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Pronto para Transformar Sua Gestão?
                </span>
              </h2>
              
              <div className="flex justify-center mb-6">
                <GoldLineIcon width={200} height={4} />
              </div>
              
              <p className="text-lg mobile:text-base tablet:text-lg desktop:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Junte-se a centenas de empresas que já confiam no SatXP para otimizar seus processos.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mobile:gap-4 justify-center pt-6">
                <Button 
                  size="lg"
                  className="gradient-gold hover:opacity-90 transition-smooth text-white font-semibold px-10 py-4 mobile:px-8 mobile:py-3 text-lg mobile:text-base shadow-gold"
                >
                  Solicitar Demonstração
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="transition-smooth border-gold-secondary/30 hover:border-gold-secondary/60 hover:bg-gold-primary/5 px-10 py-4 mobile:px-8 mobile:py-3 text-lg mobile:text-base"
                >
                  Falar com Consultor
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 mobile:py-8 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl mobile:text-xl font-bold">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  SatXP
                </span>
              </h3>
              <div className="flex justify-center mt-2">
                <GoldLineIcon width={80} height={2} />
              </div>
            </div>
            <p className="text-muted-foreground text-sm mobile:text-xs">
              © 2024 SatXP. Sistema de Gestão Empresarial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
