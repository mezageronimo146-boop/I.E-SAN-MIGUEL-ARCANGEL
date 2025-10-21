import React, { useState } from 'react';
import { BookOpen, Utensils, Music, Palette, Trophy, Cpu, ChevronRight, Menu, X, Search } from 'lucide-react';

const JulumitoSchool = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const centers = [
    {
      id: 1,
      title: "Gastronomía",
      icon: <Utensils className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      sublines: ["Transformación de alimentos", "Cocina ancestral"],
      details: ["Café", "Platos Típicos de la región"],
      areas: ["Matemáticas", "Química", "Ciencias Naturales", "Ciencias Sociales", "Ética"],
      responsables: ["Miguel Ortega", "William Ruiz", "Lizeth Rodríguez", "Diego Tafur", "Doris Sauca"]
    },
    {
      id: 2,
      title: "Música y Canto",
      icon: <Music className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-600",
      sublines: ["Chirimía", "Banda Marcial"],
      areas: ["Ciencias Sociales"],
      catedras: ["Competencias Ciudadanas", "Cátedra Popayán", "Cátedra Paz"],
      responsables: ["Huber Pino", "Pablo Wolfran Zuñiga"]
    },
    {
      id: 3,
      title: "Arte",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-400 to-purple-600",
      sublines: ["Pintura", "Tejido", "Bordado", "Bisutería"],
      areas: ["Ciencias Sociales", "Artística"],
      catedras: ["Competencias Ciudadanas", "Cátedra Popayán"],
      responsables: ["Rosanna Pérez", "Gloria de Fátima Vega", "Deyanira Palechor", "Lauro Absalon Tobar"]
    },
    {
      id: 4,
      title: "Deportes y Cultura",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-green-400 to-teal-600",
      sublines: ["Literatura", "Teatro", "Danza", "Ajedrez", "Aeróbicos", "Microfútbol y Voleibol", "Bilingüismo", "Procesos Escritores", "Oralidad"],
      areas: ["Lengua Castellana", "Educación Física", "Inglés"],
      catedras: ["Uso del tiempo libre", "Cátedra Popayán", "Educación Sexual", "Afrocolombianidad"],
      responsables: ["Oscar Piamba", "Lina Becerra", "Juliana Calvache", "Wilson Vásquez", "Patricia Valencia", "Johana Espinosa", "Andrea Dorado", "Camilo Bazán"]
    },
    {
      id: 5,
      title: "Tecnología, Programación y Robótica",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-600",
      sublines: ["Proyectos STEM+"],
      areas: ["Matemáticas", "Tecnología"],
      catedras: ["Uso del tiempo libre"],
      responsables: ["Jahnn Cardey Gómez G", "Hamer Moreno"]
    }
  ];

  const filteredCenters = centers.filter(center => {
    const search = searchTerm.toLowerCase();
    const titleMatch = center.title.toLowerCase().includes(search);
    const sublineMatch = center.sublines.some(subline => 
      subline.toLowerCase().includes(search)
    );
    return titleMatch || sublineMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-10 h-10 text-yellow-400" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Institución Educativa Julumito</h1>
                <p className="text-blue-200 text-sm">Resolución No. 01418 de octubre 04 de 2005</p>
              </div>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-700 border-t border-blue-600">
            <div className="container mx-auto px-4 py-4">
              <h3 className="text-yellow-400 font-bold mb-3">Centros de Interés</h3>
              <div className="space-y-2">
                {centers.map((center) => (
                  <button
                    key={center.id}
                    onClick={() => {
                      setSelectedCenter(center);
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 bg-blue-600 hover:bg-blue-500 p-3 rounded-lg transition-colors"
                  >
                    <div className="text-yellow-400">
                      {center.icon}
                    </div>
                    <span className="text-left font-medium">{center.title}</span>
                    <ChevronRight className="w-5 h-5 ml-auto" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Centros de Interés 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Descubre y desarrolla tu pasión con nuestros programas especializados
          </p>
          <div className="inline-block bg-white text-blue-800 px-6 py-3 rounded-full font-semibold shadow-lg">
            Inicio: Jueves 4 de septiembre, 10:15 AM - 12:00 M
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="container mx-auto px-4 py-16">
        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por centro de interés o sublínea..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-700 shadow-md transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros Centros de Interés
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Espacios de aprendizaje donde potenciamos talentos y desarrollamos habilidades únicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCenters.map((center) => (
            <div
              key={center.id}
              onClick={() => setSelectedCenter(center)}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${center.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  {center.icon}
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
                <h4 className="text-2xl font-bold">{center.title}</h4>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Sublíneas:</p>
                  <ul className="space-y-1">
                    {center.sublines.slice(0, 3).map((subline, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {subline}
                      </li>
                    ))}
                    {center.sublines.length > 3 && (
                      <li className="text-sm text-gray-500 italic">
                        +{center.sublines.length - 3} más...
                      </li>
                    )}
                  </ul>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {searchTerm && filteredCenters.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-600 mb-2">No se encontraron resultados</h4>
            <p className="text-gray-500">Intenta con otro término de búsqueda</p>
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedCenter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className={`bg-gradient-to-br ${selectedCenter.color} p-8 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  {selectedCenter.icon}
                  <h3 className="text-3xl font-bold">{selectedCenter.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedCenter(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-1 h-6 bg-blue-600 mr-3"></span>
                  Sublíneas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCenter.sublines.map((subline, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      {subline}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCenter.details && (
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-1 h-6 bg-yellow-500 mr-3"></span>
                    Especialidades
                  </h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {selectedCenter.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-yellow-500 mr-2">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-1 h-6 bg-green-600 mr-3"></span>
                  Áreas Involucradas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCenter.areas.map((area, idx) => (
                    <span key={idx} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCenter.catedras && (
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-1 h-6 bg-purple-600 mr-3"></span>
                    Cátedras Involucradas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCenter.catedras.map((catedra, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                        {catedra}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-1 h-6 bg-orange-600 mr-3"></span>
                  Docentes Responsables
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedCenter.responsables.map((responsable, idx) => (
                    <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {responsable.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-gray-800 font-medium">{responsable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h5 className="font-bold text-lg mb-2 text-yellow-400">Contacto</h5>
              <p className="text-blue-200 text-sm">NIT: 817005077-3</p>
              <p className="text-blue-200 text-sm">DANE: 219001003773</p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-2 text-yellow-400">Ubicación</h5>
              <p className="text-blue-200 text-sm">Popayán, Cauca</p>
              <p className="text-blue-200 text-sm">Colombia</p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-2 text-yellow-400">Secretaría</h5>
              <p className="text-blue-200 text-sm">Educación, Cultura y Deporte</p>
              <p className="text-blue-200 text-sm">Popayán</p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-blue-700">
            <p className="text-blue-300 text-sm">© 2025 Institución Educativa Julumito - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JulumitoSchool;