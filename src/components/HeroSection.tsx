import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Domina el{" "}
                <span className="text-primary">Marketing Digital</span>{" "}
                y Transforma tu Negocio
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Aprende las estrategias más efectivas del marketing digital con nuestros 
                cursos especializados. Desde SEO hasta redes sociales, te enseñamos todo 
                lo que necesitas para hacer crecer tu negocio online.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Explorar Cursos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <PlayCircle className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Estudiantes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Rating Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Cursos Disponibles</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Marketing Digital Profesional"
                className="w-full h-auto rounded-lg shadow-hover"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-scale-in delay-300">
                🚀 +300% ROI
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-scale-in delay-500">
                ✅ Resultados Garantizados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;