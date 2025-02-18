
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const Destinations = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-travel-800">
              Nos Destinations
            </h1>
            <p className="text-lg text-travel-600 mb-8 max-w-2xl mx-auto">
              Explorez nos destinations soigneusement sélectionnées pour des expériences de voyage inoubliables.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-white mr-2" />
                    <span className="text-white font-medium">
                      {destination.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-travel-200 mb-4">
                    {destination.description}
                  </p>
                  <Button
                    className="bg-white text-travel-800 hover:bg-travel-100"
                  >
                    Découvrir
                    <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const destinations = [
  {
    name: "Maldives",
    location: "Océan Indien",
    description: "Paradis tropical avec des plages de sable blanc et des eaux cristallines.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
  },
  {
    name: "Alpes Suisses",
    location: "Europe",
    description: "Paysages alpins majestueux et villages pittoresques.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
  },
  {
    name: "Kyoto",
    location: "Japon",
    description: "Immersion dans la culture japonaise traditionnelle.",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?auto=format&fit=crop&q=80",
  },
  {
    name: "Santorini",
    location: "Grèce",
    description: "Îles paradisiaques aux maisons blanches et bleues.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
  },
  {
    name: "Machu Picchu",
    location: "Pérou",
    description: "Site archéologique inca dans les montagnes.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
  },
  {
    name: "Bali",
    location: "Indonésie",
    description: "Culture balinaise, temples et plages de rêve.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
  },
];

export default Destinations;
