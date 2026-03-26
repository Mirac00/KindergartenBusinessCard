"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tutaj będzie logika wysyłania formularza w przyszłości
    alert("Dziękujemy za wiadomość! Skontaktujemy się wkrótce.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-secondary">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Kontakt</h1>
          <p className="text-xl mt-2">Skontaktuj się z nami</p>
        </div>
      </section>

      {/* Dane kontaktowe i formularz */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informacje kontaktowe */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Skontaktuj się z nami</h2>
              <p className="text-gray-600 mb-8">
                Jesteśmy do Twojej dyspozycji. Chętnie odpowiemy na wszystkie pytania 
                dotyczące naszego przedszkola.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-600">ul. Przykładowa 123</p>
                    <p className="text-gray-600">00-000 Miasto</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">+48 123 456 789</p>
                    <p className="text-gray-600">+48 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">kontakt@przedszkolesloneczko.pl</p>
                    <p className="text-gray-600">dyrekcja@przedszkolesloneczko.pl</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Godziny otwarcia</h3>
                    <p className="text-gray-600">Poniedziałek - Piątek: 7:00 - 17:00</p>
                    <p className="text-gray-600">Sobota - Niedziela: Zamknięte</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formularz kontaktowy */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Wyślij wiadomość</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Imię i nazwisko *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="jan.kowalski@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Wiadomość *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1"
                    rows={5}
                    placeholder="W czym możemy pomóc?"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Google */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Jak do nas trafić
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.365742748753!2d21.01223931591574!3d52.22968007975761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa%2C%20Poland!5e0!3m2!1sen!2spl!4v1647856482234!5m2!1sen!2spl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mapa lokalizacji przedszkola"
            ></iframe>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            * Mapa pokazuje przykładową lokalizację. Należy zaktualizować współrzędne do faktycznego adresu przedszkola.
          </p>
        </div>
      </section>
    </div>
  );
}
