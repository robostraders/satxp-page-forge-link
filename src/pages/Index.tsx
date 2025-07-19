import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              SatXP
            </h1>
            <p className="text-xl text-muted-foreground">
              Sistema de Gestão Empresarial
            </p>
          </div>

          <Card className="p-8 shadow-elegant backdrop-blur-sm border-border/50">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Projeto Configurado
                </h2>
                <p className="text-muted-foreground">
                  O projeto SatXP está pronto para integração com o GitHub.
                  Conecte seu repositório e comece a desenvolver.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-smooth"
                >
                  Conectar GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="transition-smooth"
                >
                  Ver Documentação
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-card border-border/30">
              <h3 className="font-semibold text-foreground mb-2">Design System</h3>
              <p className="text-sm text-muted-foreground">
                Sistema de design moderno configurado com cores e tokens semânticos.
              </p>
            </Card>
            
            <Card className="p-6 shadow-card border-border/30">
              <h3 className="font-semibold text-foreground mb-2">Componentes</h3>
              <p className="text-sm text-muted-foreground">
                Biblioteca completa de componentes UI prontos para uso.
              </p>
            </Card>
            
            <Card className="p-6 shadow-card border-border/30">
              <h3 className="font-semibold text-foreground mb-2">TypeScript</h3>
              <p className="text-sm text-muted-foreground">
                Projeto configurado com TypeScript para desenvolvimento seguro.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
