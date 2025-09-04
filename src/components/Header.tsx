import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">MarketingPro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#cursos" className="text-foreground hover:text-primary transition-colors">
              Cursos
            </a>
            <a href="#sobre-nosotros" className="text-foreground hover:text-primary transition-colors">
              Sobre Nosotros
            </a>
            <a href="#testimonios" className="text-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Mi Cuenta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#cursos" className="text-foreground hover:text-primary transition-colors">
                Cursos
              </a>
              <a href="#sobre-nosotros" className="text-foreground hover:text-primary transition-colors">
                Sobre Nosotros
              </a>
              <a href="#testimonios" className="text-foreground hover:text-primary transition-colors">
                Testimonios
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <div className="flex items-center space-x-4 pt-4">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </Button>
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Mi Cuenta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;