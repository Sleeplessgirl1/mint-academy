import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Laura Pérez",
      role: "Emprendedora Digital",
      content: "Gracias a los cursos de MarketingPro, logré incrementar las ventas de mi tienda online en un 300% en solo 6 meses. La calidad del contenido es excepcional.",
      rating: 5,
      avatar: "LP"
    },
    {
      id: 2,
      name: "Miguel Torres",
      role: "Director de Marketing",
      content: "Los conocimientos adquiridos me ayudaron a liderar campañas más efectivas en mi empresa. El curso de SEO cambió completamente nuestra estrategia digital.",
      rating: 5,
      avatar: "MT"
    },
    {
      id: 3,
      name: "Carmen Jiménez",
      role: "Consultora de Negocios",
      content: "Curso muy completo y práctico. Los instructores son expertos reales y los ejemplos son aplicables inmediatamente. Lo recomiendo 100%.",
      rating: 5,
      avatar: "CJ"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Estudiantes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miles de profesionales han transformado sus carreras con nuestros cursos. Conoce sus historias de éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-gradient-card border-border hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3 pt-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;