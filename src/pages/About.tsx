
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-travel-800">
                Notre Histoire
              </h1>
              <p className="text-lg text-travel-600 mb-8 leading-relaxed">
                Depuis plus de 15 ans, KGN-Voyage s'engage à créer des expériences de voyage uniques et mémorables. Notre passion pour l'excellence et notre attention aux détails nous ont permis de devenir l'une des agences de voyage les plus respectées.
              </p>
              <Button className="bg-travel-800 hover:bg-travel-700">
                Découvrir nos valeurs
                <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
                alt="Notre équipe"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-travel-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-playfair font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-travel-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const values = [
  {
    title: "Excellence",
    description: "Nous nous efforçons d'offrir le meilleur service possible à chaque client.",
  },
  {
    title: "Innovation",
    description: "Nous recherchons constamment de nouvelles façons d'améliorer l'expérience de voyage.",
  },
  {
    title: "Durabilité",
    description: "Nous nous engageons à promouvoir un tourisme responsable et durable.",
  },
];

export default About;
