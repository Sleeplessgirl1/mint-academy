import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, ShoppingCart } from "lucide-react";
import { Course, useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(course);
    toast({
      title: "Curso añadido al carrito",
      description: `${course.title} ha sido añadido a tu carrito.`,
    });
  };

  return (
    <Card className="group bg-gradient-card border-border hover:shadow-hover transition-all duration-300 hover:scale-105 h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              {course.level}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-background/90">
              {course.category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 flex-grow">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {course.description}
          </p>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{course.students} estudiantes</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Instructor:</span> {course.instructor}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          ${course.price}
        </div>
        <Button 
          onClick={handleAddToCart}
          variant="cta" 
          className="flex items-center space-x-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Añadir al Carrito</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;