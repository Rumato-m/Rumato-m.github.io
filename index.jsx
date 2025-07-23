import React from "react";
import { useState } from "react";

export default function Homepage() {
  const [activeMenu, setActiveMenu] = useState("home");

  const navItems = [
    {
      title: "Office",
      submenu: ["Empfangstresen", "Wartebereich", "Regalsysteme", "Schränke"],
    },
    {
      title: "Polstermöbel",
      submenu: ["Betten", "Kinderbetten", "Sofas"],
    },
    {
      title: "Beauty Salon",
      submenu: ["Pedikürstühle", "Manikürtische", "Regalsysteme"],
    },
    {
      title: "Wandpaneele",
      submenu: ["Metallisch", "Holz"],
    },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* Sticky Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold">Rumato</div>
          <nav className="flex gap-6 text-base">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <button
                  onClick={() => setActiveMenu(item.title)}
                  className={`pb-1 border-b-2 transition-all duration-200 ${
                    activeMenu === item.title ? "border-black" : "border-transparent"
                  }`}
                >
                  {item.title}
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2 rounded">
                  {item.submenu.map((sub, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="text-center text-white bg-black bg-opacity-40 p-10 rounded-xl">
          <h1 className="text-5xl font-bold mb-6">Designmöbel für moderne Räume</h1>
          <p className="text-lg">Rumato – Exklusive Möbel aus München</p>
        </div>
      </section>

      {/* "We Are" Block */}
      <section className="max-w-5xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold mb-6">Wir sind Rumato</h2>
        <p className="text-lg leading-relaxed mb-8">
          Mit Sitz in München entwerfen und fertigen wir hochwertige Möbel für Büros, Salons und moderne Wohnräume. Unser Fokus liegt auf durchdachtem Design, langlebigen Materialien und maßgeschneiderten Lösungen. Jedes Stück erzählt eine Geschichte von Funktionalität und Ästhetik – geschaffen, um zu inspirieren.
        </p>
        <p className="text-lg leading-relaxed">
          Bei Rumato verbinden wir Handwerkskunst mit moderner Technologie, um Möbel zu schaffen, die nicht nur schön, sondern auch funktional sind. Von stilvollen Empfangstresen über elegante Wandpaneele bis hin zu komfortablen Polstermöbeln – entdecken Sie unsere Kollektionen für Ihre Einrichtung.
        </p>
      </section>

      <footer className="bg-black text-white py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Rumato GmbH</h3>
            <p>Designmöbel aus München</p>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} Rumato. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
