
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Blog = () => {
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
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <p className="text-travel-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-playfair font-bold mb-3 text-travel-800">
                    {post.title}
                  </h3>
                  <p className="text-travel-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="text-travel-800 p-0">
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const blogPosts = [
  {
    title: "Les Plus Belles Plages des Maldives",
    excerpt: "Découvrez notre sélection des plages paradisiaques aux Maldives, véritables joyaux de l'océan Indien.",
    date: "15 Mars 2024",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
  },
  {
    title: "Guide des Alpes Suisses",
    excerpt: "Tout ce que vous devez savoir pour votre prochaine aventure dans les Alpes suisses.",
    date: "10 Mars 2024",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
  },
  {
    title: "Traditions Japonaises",
    excerpt: "Immergez-vous dans la culture japonaise à travers ses traditions millénaires.",
    date: "5 Mars 2024",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?auto=format&fit=crop&q=80",
  },
];

export default Blog;
