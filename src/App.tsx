import React from 'react';
import { Plane, History, Component, Award, BookOpen, HelpCircle as CircleHelp, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Plane className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">AviationHub</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#history" className="hover:bg-blue-800 px-3 py-2 rounded-md">History</a>
                <a href="#categories" className="hover:bg-blue-800 px-3 py-2 rounded-md">Categories</a>
                <a href="#components" className="hover:bg-blue-800 px-3 py-2 rounded-md">Components</a>
                <a href="#notable" className="hover:bg-blue-800 px-3 py-2 rounded-md">Notable Aircraft</a>
                <a href="#terminology" className="hover:bg-blue-800 px-3 py-2 rounded-md">Terminology</a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-blue-800`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#history" className="block px-3 py-2 rounded-md hover:bg-blue-700">History</a>
            <a href="#categories" className="block px-3 py-2 rounded-md hover:bg-blue-700">Categories</a>
            <a href="#components" className="block px-3 py-2 rounded-md hover:bg-blue-700">Components</a>
            <a href="#notable" className="block px-3 py-2 rounded-md hover:bg-blue-700">Notable Aircraft</a>
            <a href="#terminology" className="block px-3 py-2 rounded-md hover:bg-blue-700">Terminology</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e"
            alt="Aircraft in flight"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Discover the World of Aviation
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Explore the fascinating history, technology, and innovation behind aircraft that have shaped our world.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* History Section */}
        <section id="history" className="mb-20">
          <div className="flex items-center mb-6">
            <History className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold ml-3">History of Aviation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed">
                From the Wright brothers' first powered flight in 1903 to modern supersonic aircraft, aviation has come a long way. The development of aircraft has revolutionized transportation, warfare, and our understanding of aerodynamics.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The golden age of aviation in the 1920s and 1930s saw rapid technological advancement, setting the foundation for modern commercial aviation.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1529074963764-98f45c47aa42"
                alt="Vintage aircraft"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="mb-20">
          <div className="flex items-center mb-6">
            <Component className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold ml-3">Aircraft Categories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Commercial Aircraft</h3>
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
                alt="Commercial aircraft"
                className="rounded-lg mb-4"
              />
              <p className="text-gray-600">Designed for passenger and cargo transport, featuring advanced safety systems and comfort features.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Military Aircraft</h3>
              <img
                src="https://images.unsplash.com/photo-1517476033559-003bead3c1d3"
                alt="Military aircraft"
                className="rounded-lg mb-4"
              />
              <p className="text-gray-600">Built for combat, reconnaissance, and transport, incorporating cutting-edge technology and weapons systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Private Aircraft</h3>
              <img
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b"
                alt="Private aircraft"
                className="rounded-lg mb-4"
              />
              <p className="text-gray-600">Range from small single-engine planes to luxury business jets, offering flexibility and personalized travel.</p>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section id="components" className="mb-20">
          <div className="flex items-center mb-6">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold ml-3">Key Components</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Main Components</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Fuselage:</strong> The main body of the aircraft</li>
                  <li><strong>Wings:</strong> Generate lift and house fuel tanks</li>
                  <li><strong>Engines:</strong> Provide thrust for propulsion</li>
                  <li><strong>Landing Gear:</strong> Supports the aircraft during landing and takeoff</li>
                  <li><strong>Tail Assembly:</strong> Controls stability and direction</li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1579446565308-427218a2c60e"
                  alt="Aircraft components"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Notable Aircraft Section */}
        <section id="notable" className="mb-20">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold ml-3">Notable Aircraft</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Wright Flyer (1903)</h3>
              <p className="text-gray-600">The first successful powered aircraft, marking the beginning of controlled flight.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Boeing 747 (1969)</h3>
              <p className="text-gray-600">Revolutionary jumbo jet that transformed commercial aviation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Concorde (1976)</h3>
              <p className="text-gray-600">Supersonic passenger airliner that set new standards in aviation technology.</p>
            </div>
          </div>
        </section>

        {/* Terminology Section */}
        <section id="terminology" className="mb-20">
          <div className="flex items-center mb-6">
            <CircleHelp className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold ml-3">Aviation Terminology</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Basic Terms</h3>
              <dl className="space-y-3">
                <dt className="font-semibold">Aileron</dt>
                <dd className="text-gray-600 ml-4">Control surfaces on wings that control roll</dd>
                <dt className="font-semibold">Elevator</dt>
                <dd className="text-gray-600 ml-4">Control surface that controls pitch</dd>
                <dt className="font-semibold">Rudder</dt>
                <dd className="text-gray-600 ml-4">Control surface that controls yaw</dd>
              </dl>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Fun Facts</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• The average commercial jet aircraft is made up of 2.5 million parts</li>
                <li>• Aircraft can fly up to 43,000 feet above sea level</li>
                <li>• Modern jet engines have a thrust-to-weight ratio of almost 6:1</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Plane className="h-6 w-6" />
              <span className="ml-2 text-lg font-semibold">AviationHub</span>
            </div>
            <p className="text-sm">© 2025 AviationHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;