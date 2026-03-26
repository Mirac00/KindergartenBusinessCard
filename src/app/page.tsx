import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { BookOpen, Heart, Sparkles, Users } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Heart,
      title: "Indywidualne podejście",
      description: "Każde dziecko jest dla nas wyjątkowe. Dostosowujemy program do potrzeb rozwojowych małych uczniów.",
    },
    {
      icon: Users,
      title: "Doświadczony zespół",
      description: "Nasi wykwalifikowani nauczyciele z pasją dbają o rozwój każdego dziecka.",
    },
    {
      icon: BookOpen,
      title: "Bogaty program",
      description: "Zajęcia edukacyjne, artystyczne, muzyczne i sportowe wspierające wszechstronny rozwój.",
    },
    {
      icon: Sparkles,
      title: "Bezpieczne środowisko",
      description: "Nowoczesne sale zabaw, bezpieczny plac zabaw i przyjazna atmosfera.",
    },
  ];

  const activities = [
    {
      name: "Zajęcia artystyczne",
      image: "https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0cyUyMGNyYWZ0cyUyMHBhaW50aW5nfGVufDF8fHx8MTc3MzI5NzA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Zajęcia muzyczne",
      image: "https://images.unsplash.com/photo-1761243839303-618ae0906300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG11c2ljJTIwY2xhc3MlMjBpbnN0cnVtZW50c3xlbnwxfHx8fDE3NzMyOTcwODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Zajęcia edukacyjne",
      image: "https://images.unsplash.com/photo-1705660800046-2113f479369a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzIxMjEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763310225230-6e15b125935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBjaGlsZHJlbiUyMHBsYXlpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzczMjk3MDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Przedszkole"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Przedszkole Słoneczko
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Miejsce pełne radości, nauki i przyjaźni
          </p>
          <a
            href="#dlaczego-my"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Poznaj nas
          </a>
        </div>
      </section>

      {/* Dlaczego my */}
      <section id="dlaczego-my" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Dlaczego nasze przedszkole?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zajęcia */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nasze zajęcia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{activity.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook iframe */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Aktualności z Facebooka
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg p-8">
            <div className="text-center text-gray-600">
              <p className="mb-4">Śledź nasze aktualności na Facebooku!</p>
              <p className="text-sm">
                Aby wyświetlić posty z Facebooka, należy dodać odpowiedni kod iframe z Facebook Page Plugin.
              </p>
              <a
                href="https://developers.facebook.com/docs/plugins/page-plugin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary hover:underline"
              >
                Instrukcje konfiguracji Facebook Plugin →
              </a>
            </div>
            {/* Przykładowy placeholder dla iframe */}
            {/* 
            <iframe 
              src="https://www.facebook.com/plugins/page.php?href=YOUR_PAGE_URL&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="100%"
              height="600"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            */}
          </div>
        </div>
      </section>
    </div>
  );
}
