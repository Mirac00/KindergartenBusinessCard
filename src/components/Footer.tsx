import { Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Przedszkole Słoneczko</h3>
            <p className="text-gray-600 text-sm">
              Miejsce, gdzie dzieci rozwijają się przez zabawę, naukę i radość każdego dnia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>kontakt@przedszkolesloneczko.pl</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>ul. Przykładowa 123, 00-000 Miasto</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Śledź nas</h3>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5 mr-2" />
              <span className="text-sm">Facebook</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2026 Przedszkole Słoneczko. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
