import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Calendar, MapPin, Users } from "lucide-react";

export default function Gallery() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1763310225230-6e15b125935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBjaGlsZHJlbiUyMHBsYXlpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzczMjk3MDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Sala zabaw",
    },
    {
      url: "https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0cyUyMGNyYWZ0cyUyMHBhaW50aW5nfGVufDF8fHx8MTc3MzI5NzA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Zajęcia artystyczne",
    },
    {
      url: "https://images.unsplash.com/photo-1705660800046-2113f479369a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzIxMjEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Czytanie książek",
    },
    {
      url: "https://images.unsplash.com/photo-1761243839303-618ae0906300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG11c2ljJTIwY2xhc3MlMjBpbnN0cnVtZW50c3xlbnwxfHx8fDE3NzMyOTcwODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Zajęcia muzyczne",
    },
    {
      url: "https://images.unsplash.com/photo-1633762348290-33a37f4d7fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBvdXRkb29yJTIwcGxheWdyb3VuZHxlbnwxfHx8fDE3NzMyODE0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Plac zabaw",
    },
    {
      url: "https://images.unsplash.com/photo-1765780199629-50df915ccb18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBwYXJ0eSUyMGNlbGVicmF0aW9uJTIwaGFwcHl8ZW58MXx8fHwxNzczMjk3MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Świętowanie urodzin",
    },
    {
      url: "https://images.unsplash.com/photo-1571584004609-3b9d08de5755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjB0b3lzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzczMjk3MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Zabawy z zabawkami",
    },
    {
      url: "https://images.unsplash.com/photo-1595348514401-eca68a3bea33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGRhbmNlJTIwcGVyZm9ybWFuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NzMyOTcxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Występy taneczne",
    },
    {
      url: "https://images.unsplash.com/photo-1763855126446-b4535be4ba30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3BvcnRzJTIwZXhlcmNpc2UlMjBwbGF5Z3JvdW5kfGVufDF8fHx8MTc3MzI5NzE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Zajęcia sportowe",
    },
  ];

  const upcomingEvents = [
    {
      title: "Dzień Rodzica",
      date: "25 marca 2026",
      location: "Sala główna",
      description: "Zapraszamy wszystkich rodziców na występy dzieci i poczęstunek.",
    },
    {
      title: "Wiosenny Piknik",
      date: "15 kwietnia 2026",
      location: "Ogród przedszkolny",
      description: "Wspólne świętowanie wiosny z grami, zabawami i grillem.",
    },
    {
      title: "Bal Przebierańców",
      date: "30 kwietnia 2026",
      location: "Sala zabaw",
      description: "Tradycyjny bal z konkursem na najlepszy kostium.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-secondary">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Galeria</h1>
          <p className="text-xl mt-2">Nasze wspomnienia i wydarzenia</p>
        </div>
      </section>

      {/* Nadchodzące wydarzenia */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nadchodzące wydarzenia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria zdjęć */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Zdjęcia z przedszkola
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group cursor-pointer aspect-square"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statystyki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Szczęśliwych dzieci</div>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Wydarzeń rocznie</div>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">15</div>
              <div className="text-gray-600">Lat doświadczenia</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
