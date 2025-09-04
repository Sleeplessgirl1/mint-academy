import { Card, CardContent } from "@/components/ui/card";
import { Clock, Award, Users, Headphones, Download, Infinity } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Aprende a Tu Ritmo",
      description: "Accede al contenido 24/7 y estudia cuando más te convenga. Sin horarios fijos ni presiones."
    },
    {
      icon: Award,
      title: "Certificado de Finalización",
      description: "Obtén un certificado oficial que puedes añadir a tu CV y perfil de LinkedIn."
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Únete a nuestra comunidad de más de 500 estudiantes y networking profesional."
    },
    {
      icon: Headphones,
      title: "Soporte Personalizado",
      description: "Recibe ayuda directa de nuestros instructores expertos cuando lo necesites."
    },
    {
      icon: Download,
      title: "Recursos Descargables",
      description: "Plantillas, guías, checklists y herramientas que podrás usar en tus proyectos."
    },
    {
      icon: Infinity,
      title: "Acceso de Por Vida",
      description: "Una vez que adquieres un curso, tienes acceso ilimitado para siempre, incluidas las actualizaciones."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por Qué Elegir MarketingPro?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos la mejor experiencia de aprendizaje online con beneficios únicos para tu desarrollo profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-border hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;