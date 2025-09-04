import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              ¿Listo para Transformar tu Carrera en Marketing Digital?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Únete a nuestra lista VIP y recibe contenido exclusivo, descuentos especiales 
              y acceso anticipado a nuevos cursos.
            </p>

            {/* Email Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Ingresa tu email" 
                    className="pl-10 h-12 bg-background/95 border-0 text-foreground"
                  />
                </div>
                <Button size="lg" variant="cta" className="h-12 px-6">
                  Unirse Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 text-primary-foreground">
                <div className="text-2xl font-bold mb-2">📧</div>
                <h3 className="font-semibold mb-2">Tips Semanales</h3>
                <p className="text-sm text-primary-foreground/80">
                  Estrategias y consejos exclusivos cada semana
                </p>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 text-primary-foreground">
                <div className="text-2xl font-bold mb-2">🎯</div>
                <h3 className="font-semibold mb-2">Descuentos VIP</h3>
                <p className="text-sm text-primary-foreground/80">
                  Hasta 50% de descuento en cursos premium
                </p>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 text-primary-foreground">
                <div className="text-2xl font-bold mb-2">⚡</div>
                <h3 className="font-semibold mb-2">Acceso Temprano</h3>
                <p className="text-sm text-primary-foreground/80">
                  Sé el primero en acceder a nuevos cursos
                </p>
              </div>
            </div>

            <p className="text-sm text-primary-foreground/70">
              * No spam, solo contenido de valor. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;