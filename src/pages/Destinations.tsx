
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import destinations from "@/data/destinations.json";
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
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};



export default Destinations;
