
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Contact Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-playfair font-bold mb-6 text-travel-800">
                Contactez-nous
              </h2>
              <p className="text-travel-600 mb-8">
                Nous sommes là pour répondre à toutes vos questions et vous aider à planifier votre prochain voyage.
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-travel-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-travel-200 rounded-md focus:outline-none focus:ring-2 focus:ring-travel-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-travel-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-travel-200 rounded-md focus:outline-none focus:ring-2 focus:ring-travel-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-travel-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-travel-200 rounded-md focus:outline-none focus:ring-2 focus:ring-travel-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-travel-800 hover:bg-travel-700">
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-playfair font-bold mb-4 text-travel-800">
                  Nos Bureaux
                </h3>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-travel-800 mt-1" />
                  <div>
                    <p className="font-medium">Paris</p>
                    <p className="text-travel-600">123 Avenue du Voyage</p>
                    <p className="text-travel-600">75008 Paris, France</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-bold mb-4 text-travel-800">
                  Heures d'ouverture
                </h3>
                <p className="text-travel-600">Lundi - Vendredi: 9h00 - 19h00</p>
                <p className="text-travel-600">Samedi: 10h00 - 17h00</p>
                <p className="text-travel-600">Dimanche: Fermé</p>
              </div>

              <div>
                <h3 className="text-xl font-playfair font-bold mb-4 text-travel-800">
                  Contact Direct
                </h3>
                <p className="text-travel-600">Tél: +33 1 23 45 67 89</p>
                <p className="text-travel-600">Email: contact@voyage-elite.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
