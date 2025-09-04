import CourseCard from "./CourseCard";
import { Course } from "@/contexts/CartContext";
import courseSeaImage from "@/assets/course-seo.jpg";
import courseSocialImage from "@/assets/course-social.jpg";
import courseEmailImage from "@/assets/course-email.jpg";

const PopularCourses = () => {
  const popularCourses: Course[] = [
    {
      id: "1",
      title: "SEO y SEM Avanzado",
      description: "Domina las técnicas de posicionamiento web y publicidad en buscadores para incrementar tu visibilidad online.",
      price: 199,
      image: courseSeaImage,
      instructor: "María González",
      duration: "12 horas",
      level: "Intermedio",
      category: "SEO",
      rating: 4.9,
      students: 247
    },
    {
      id: "2",
      title: "Marketing en Redes Sociales",
      description: "Aprende a crear estrategias efectivas en Instagram, Facebook, TikTok y LinkedIn para hacer crecer tu marca.",
      price: 149,
      image: courseSocialImage,
      instructor: "Carlos Rodríguez",
      duration: "10 horas",
      level: "Principiante",
      category: "Social Media",
      rating: 4.8,
      students: 312
    },
    {
      id: "3",
      title: "Email Marketing Profesional",
      description: "Crea campañas de email marketing que conviertan, desde la segmentación hasta la automatización.",
      price: 129,
      image: courseEmailImage,
      instructor: "Ana Martínez",
      duration: "8 horas",
      level: "Intermedio",
      category: "Email Marketing",
      rating: 4.7,
      students: 189
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cursos Más Populares
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros cursos más demandados y comienza a transformar tu estrategia de marketing digital hoy mismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course, index) => (
            <div 
              key={course.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary-hover font-semibold text-lg underline-offset-4 hover:underline transition-colors">
            Ver Todos los Cursos →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;