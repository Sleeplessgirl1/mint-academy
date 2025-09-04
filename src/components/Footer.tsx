import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MarketingPro</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Tu plataforma de confianza para dominar el marketing digital. 
              Cursos de calidad, instructores expertos y resultados garantizados.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#cursos" className="hover:text-primary transition-colors">
                  Todos los Cursos
                </a>
              </li>
              <li>
                <a href="#sobre-nosotros" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-primary transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  SEO y SEM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Redes Sociales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Publicidad Digital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-secondary-foreground/80">
                Recibe tips exclusivos y ofertas especiales
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Tu email" 
                  className="bg-background text-foreground border-border"
                />
                <Button variant="default" size="sm">
                  Suscribirse
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Contacto</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@marketingpro.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/80 text-sm">
            © 2024 MarketingPro. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;