
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import destinations from "@/data/destinations.json";
import services from "@/data/services.json";
import DestinationsRow from "@/components/DestinationsRow";
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Découvrez le Monde avec Élégance
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Des voyages sur mesure pour des expériences inoubliables
          </p>
          <Button
            className="bg-white text-travel-800 hover:bg-travel-100 font-semibold text-lg px-8 py-6"
          >
            Découvrir nos destinations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 bg-travel-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Destinations Populaires
          </h2>
          <div className="w-full">
            <DestinationsRow destinations={destinations} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-playfair font-bold mb-4">
                  {service.name}
                </h3>
                <p className="text-travel-600 mb-4">{service.description}</p>
                <Button variant="link" className="text-travel-800 p-0">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};



export default Index;
