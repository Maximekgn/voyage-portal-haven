
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Hotel, Star } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-travel-800">
              Nos Services
            </h1>
            <p className="text-lg text-travel-600 mb-8 max-w-2xl mx-auto">
              Des services personnalisés pour répondre à tous vos besoins de voyage, du plus simple au plus extraordinaire.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-travel-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-travel-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-travel-700">
                      <Star className="h-4 w-4 mr-2 text-travel-800" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-travel-800 hover:bg-travel-700"
                >
                  En savoir plus
                  <ArrowRight className="ml-2" />
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

const servicesData = [
  {
    icon: <Plane className="h-10 w-10 text-travel-800" />,
    title: "Voyages sur Mesure",
    description: "Créez votre voyage idéal avec nos experts dédiés.",
    features: [
      "Itinéraires personnalisés",
      "Conseils d'experts",
      "Assistance 24/7",
      "Flexibilité totale",
    ],
  },
  {
    icon: <Hotel className="h-10 w-10 text-travel-800" />,
    title: "Hébergements de Luxe",
    description: "Les meilleurs hôtels et resorts pour votre confort.",
    features: [
      "Sélection premium",
      "Avantages exclusifs",
      "Service conciergerie",
      "Expériences uniques",
    ],
  },
  {
    icon: <Star className="h-10 w-10 text-travel-800" />,
    title: "Services VIP",
    description: "Une expérience de voyage exclusive et privilégiée.",
    features: [
      "Transport privé",
      "Guide personnel",
      "Accès privilégié",
      "Service premium",
    ],
  },
];

export default Services;
