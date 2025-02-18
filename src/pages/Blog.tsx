
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(
    null
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Blog Header */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-travel-800">
              Notre Blog Voyage
            </h1>
            <p className="text-lg text-travel-600 max-w-2xl mx-auto">
              Découvrez nos derniers articles, conseils de voyage et destinations tendances.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center text-travel-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-travel-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime} min
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-3 text-travel-800 group-hover:text-travel-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-travel-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="text-travel-800 p-0 group-hover:text-travel-600">
                    Lire la suite
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Dialog */}
      <Dialog open={selectedPost !== null} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-3xl h-[90vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                  {selectedPost.title}
                </DialogTitle>
                <DialogDescription>
                  <div className="flex items-center space-x-4 mb-6 text-travel-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {selectedPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {selectedPost.readTime} min de lecture
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="relative h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="prose max-w-none">
                <p className="text-lg text-travel-600 mb-4">{selectedPost.excerpt}</p>
                <p className="text-travel-600 mb-4">{selectedPost.content}</p>
              </div>
              <div className="flex justify-end mt-6">
                <Button onClick={() => setSelectedPost(null)}>
                  Fermer
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

const blogPosts = [
  {
    title: "Les Plus Belles Plages des Maldives",
    excerpt: "Découvrez notre sélection des plages paradisiaques aux Maldives, véritables joyaux de l'océan Indien.",
    content: "Les Maldives sont réputées pour leurs plages de sable blanc immaculé et leurs eaux cristallines. Chaque île offre une expérience unique, mais toutes partagent cette beauté naturelle incomparable qui fait la renommée de l'archipel. Que vous cherchiez une escapade romantique ou une aventure en famille, les Maldives sauront vous séduire avec leurs paysages de carte postale et leur atmosphère paisible.",
    date: "15 Mars 2024",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
  },
  {
    title: "Guide des Alpes Suisses",
    excerpt: "Tout ce que vous devez savoir pour votre prochaine aventure dans les Alpes suisses.",
    content: "Les Alpes suisses offrent certains des plus beaux paysages de montagne au monde. De Zermatt à Grindelwald, chaque destination combine parfaitement nature sauvage et confort moderne. Que vous soyez amateur de ski, de randonnée ou simplement à la recherche de paysages à couper le souffle, les Alpes suisses vous promettent des moments inoubliables.",
    date: "10 Mars 2024",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
  },
  {
    title: "Traditions Japonaises",
    excerpt: "Immergez-vous dans la culture japonaise à travers ses traditions millénaires.",
    content: "Le Japon est un pays où traditions ancestrales et modernité coexistent harmonieusement. Des cérémonies du thé aux festivals traditionnels, en passant par l'art des jardins zen, chaque aspect de la culture japonaise reflète une profonde attention aux détails et un respect pour l'harmonie. Découvrez comment ces traditions continuent de façonner la vie quotidienne au Japon moderne.",
    date: "5 Mars 2024",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?auto=format&fit=crop&q=80",
  },
];

export default Blog;
