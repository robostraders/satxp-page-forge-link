
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RegistrationFormData {
  name: string;
  email: string;
  whatsapp: string;
}

export function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Form submitted:", data);
    // Here you'll later connect to your email marketing system
  };

  return (
    <div className="max-w-lg">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-primary leading-tight">
        SE INSCREVA AGORA E ACESSE GRATUITAMENTE UM PACOTE AVALIADO EM MAIS DE R$ 3.500
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-lg font-medium">
            Nome Completo *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Digite seu nome completo"
            className="h-12 text-lg border-primary/30 focus:border-primary bg-background"
            {...register("name", { required: "Nome é obrigatório" })}
          />
          {errors.name && (
            <p className="text-destructive text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-lg font-medium">
            E-mail *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Digite seu melhor e-mail"
            className="h-12 text-lg border-primary/30 focus:border-primary bg-background"
            {...register("email", { 
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "E-mail inválido"
              }
            })}
          />
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="whatsapp" className="text-lg font-medium">
            WhatsApp *
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            placeholder="(11) 99999-9999"
            className="h-12 text-lg border-primary/30 focus:border-primary bg-background"
            {...register("whatsapp", { required: "WhatsApp é obrigatório" })}
          />
          {errors.whatsapp && (
            <p className="text-destructive text-sm">{errors.whatsapp.message}</p>
          )}
        </div>

        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-cta-green to-cta-green-dark hover:from-cta-green-dark hover:to-cta-green text-white px-8 py-6 text-xl font-bold rounded-xl shadow-[0_0_40px_hsl(var(--cta-green)_/_0.4)] hover:shadow-[0_0_60px_hsl(var(--cta-green)_/_0.6)] transition-all duration-300 transform hover:scale-105"
        >
          SIM, QUERO MINHA VAGA AGORA
        </Button>
      </form>
    </div>
  );
}
