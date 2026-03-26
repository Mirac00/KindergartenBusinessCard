import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Award, Target, Users2 } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1544772711-57da9c7368fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBraWRzJTIwbGVhcm5pbmclMjBhY3Rpdml0eXxlbnwxfHx8fDE3NzMyOTcwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="O nas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">O nas</h1>
        </div>
      </section>

      {/* Opis przedszkola */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Przedszkole Słoneczko to miejsce, gdzie dzieci rozwijają się w atmosferze radości, 
              bezpieczeństwa i zaufania. Od ponad 15 lat tworzymy przestrzeń, w której małe odkrywcy 
              mogą swobodnie poznawać świat, rozwijać swoje talenty i nawiązywać pierwsze przyjaźnie.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nasz zespół to wykwalifikowani pedagodzy z pasją, którzy wierzą, że każde dziecko jest 
              wyjątkowe i zasługuje na indywidualne podejście. Prowadzimy zajęcia rozwijające wszystkie 
              sfery rozwoju dziecka – emocjonalną, społeczną, poznawczą i fizyczną.
            </p>
            <p className="text-lg text-gray-700">
              Dysponujemy nowoczesnymi salami zabaw, przestronnym placem zabaw oraz bogato wyposażoną 
              salą sportową. W naszym przedszkolu dzieci uczestniczą w zajęciach muzycznych, 
              artystycznych, językowych oraz sportowych. Organizujemy również liczne imprezy, 
              przedstawienia i wycieczki.
            </p>
          </div>
        </div>
      </section>

      {/* Nasze wartości */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nasze wartości
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Misja</h3>
              <p className="text-gray-600">
                Wspieramy wszechstronny rozwój dzieci poprzez zabawę, twórczość i poznawanie 
                świata w bezpiecznym i przyjaznym środowisku.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Doświadczenie</h3>
              <p className="text-gray-600">
                Ponad 15 lat pracy z dziećmi, certyfikowani nauczyciele i uznanie rodziców 
                sprawiają, że jesteśmy jednym z najlepszych przedszkoli w okolicy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Społeczność</h3>
              <p className="text-gray-600">
                Tworzymy silną społeczność dzieci, rodziców i nauczycieli, która wspiera się 
                i rozwija razem poprzez wspólne działania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program dnia */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Przykładowy program dnia
          </h2>
          <div className="space-y-4">
            {[
              { time: "7:00 - 8:30", activity: "Schodzenie się dzieci, swobodne zabawy" },
              { time: "8:30 - 9:00", activity: "Śniadanie" },
              { time: "9:00 - 10:30", activity: "Zajęcia edukacyjne i dydaktyczne" },
              { time: "10:30 - 11:30", activity: "Zabawa na placu zabaw" },
              { time: "11:30 - 12:30", activity: "Obiad" },
              { time: "12:30 - 14:30", activity: "Czas odpoczynku lub zajęcia dodatkowe" },
              { time: "14:30 - 15:00", activity: "Podwieczorek" },
              { time: "15:00 - 17:00", activity: "Zabawy swobodne, odbiór dzieci" },
            ].map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-32 font-semibold text-primary">{item.time}</div>
                <div className="flex-1 text-gray-700">{item.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
