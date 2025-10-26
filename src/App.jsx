import React, { useState } from 'react';
import { BookOpen, Utensils, Music, Palette, Trophy, Cpu, ChevronRight, Menu, X, Search } from 'lucide-react';

const JulumitoSchool = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubline, setSelectedSubline] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const centers = [
    {
      id: 1,
      title: "Gastronomía",
      icon: <Utensils className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      sublines: [
        {
          name: "Transformación de alimentos",
          images: [
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
          ]
        },
        {
          name: "Cocina ancestral",
          images: [
            "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
            "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800"
          ]
        }
      ],
      details: ["Café", "Platos Típicos de la región"],
      areas: ["Matemáticas", "Química", "Ciencias Naturales", "Ciencias Sociales", "Ética"],
      responsables: ["Miguel Ortega", "William Ruiz", "Lizeth Rodríguez", "Diego Tafur", "Doris Sauca"]
    },
    {
      id: 2,
      title: "Música y Canto",
      icon: <Music className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-600",
      sublines: [
        {
          name: "Chirimía",
          images: [
            "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800"
          ]
        },
        {
          name: "Banda Marcial",
          images: [
            "https://images.unsplash.com/photo-1571609942892-7d4c6b8e8b7e?w=800",
            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800",
            "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800"
          ]
        }
      ],
      areas: ["Ciencias Sociales"],
      catedras: ["Competencias Ciudadanas", "Cátedra Popayán", "Cátedra Paz"],
      responsables: ["Huber Pino", "Pablo Wolfran Zuñiga"]
    },
    {
      id: 3,
      title: "Arte",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-400 to-purple-600",
      sublines: [
        {
          name: "Pintura",
          images: [
            "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
            "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800"
          ]
        },
        {
          name: "Tejido",
          images: [
            "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800",
            "https://images.unsplash.com/photo-1591089430516-ea5b0d4e9c65?w=800"
          ]
        },
        {
          name: "Bordado",
          images: [
            "https://images.unsplash.com/photo-1612442443556-09b5b309e637?w=800",
            "https://images.unsplash.com/photo-1612442443832-05dcbacf9878?w=800"
          ]
        },
        {
          name: "Bisutería",
          images: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
            "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"
          ]
        }
      ],
      areas: ["Ciencias Sociales", "Artística"],
      catedras: ["Competencias Ciudadanas", "Cátedra Popayán"],
      responsables: ["Rosanna Pérez", "Gloria de Fátima Vega", "Deyanira Palechor", "Lauro Absalon Tobar"]
    },
    {
      id: 4,
      title: "Deportes y Cultura",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-green-400 to-teal-600",
      sublines: [
        {
          name: "Literatura",
          images: [
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800"
          ]
        },
        {
          name: "Teatro",
          images: [
            "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800",
            "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800"
          ]
        },
        {
          name: "Danza",
          images: [
            "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
            "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800"
          ]
        },
        {
          name: "Ajedrez",
          images: [
            "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800",
            "https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=800"
          ]
        },
        {
          name: "Aeróbicos",
          images: [
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
          ]
        },
        {
          name: "Microfútbol y Voleibol",
          images: [
            "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800",
            "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800"
          ]
        },
        {
          name: "Bilingüismo",
          images: [
            "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800",
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
          ]
        },
        {
          name: "Procesos Escritores",
          images: [
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
            "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800"
          ]
        },
        {
          name: "Oralidad",
          images: [
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
            "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=800"
          ]
        }
      ],
      areas: ["Lengua Castellana", "Educación Física", "Inglés"],
      catedras: ["Uso del tiempo libre", "Cátedra Popayán", "Educación Sexual", "Afrocolombianidad"],
      responsables: ["Oscar Piamba", "Lina Becerra", "Juliana Calvache", "Wilson Vásquez", "Patricia Valencia", "Johana Espinosa", "Andrea Dorado", "Camilo Bazán"]
    },
    {
      id: 5,
      title: "Tecnología, Programación y Robótica",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-600",
      sublines: [
        {
          name: "Proyectos STEM+",
          images: [
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
            "https://images.unsplash.com/photo-1563968743333-044cef800494?w=800"
          ]
        }
      ],
      areas: ["Matemáticas", "Tecnología"],
      catedras: ["Uso del tiempo libre"],
      responsables: ["Jahnn Cardey Gómez G", "Hamer Moreno"]
    }
  ];

  const filteredCenters = centers.filter(center => {
    const search = searchTerm.toLowerCase();
    const titleMatch = center.title.toLowerCase().includes(search);
    const sublineMatch = center.sublines.some(subline => 
      subline.name.toLowerCase().includes(search)
    );
    return titleMatch || sublineMatch;
  });

  const handleSublineClick = (subline) => {
    setSelectedSubline(subline);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedSubline && currentImageIndex < selectedSubline.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

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
                        {subline.name}
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
                    <button
                      key={idx}
                      onClick={() => handleSublineClick(subline)}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 hover:shadow-md transition-all cursor-pointer"
                    >
                      {subline.name} ({subline.images.length} fotos)
                    </button>
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

      {/* Image Gallery Modal */}
      {selectedSubline && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-[60] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">{selectedSubline.name}</h3>
                <p className="text-blue-200 text-sm mt-1">
                  Foto {currentImageIndex + 1} de {selectedSubline.images.length}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedSubline(null);
                  setCurrentImageIndex(0);
                }}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="relative bg-gray-900">
              <img
                src={selectedSubline.images[currentImageIndex]}
                alt={`${selectedSubline.name} - Foto ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover"
              />
              
              {/* Navigation Buttons */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  disabled={currentImageIndex === 0}
                  className={`bg-black bg-opacity-50 text-white p-3 rounded-full transition-all ${
                    currentImageIndex === 0
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:bg-opacity-70 hover:scale-110'
                  }`}
                >
                  <ChevronRight className="w-6 h-6 transform rotate-180" />
                </button>
                <button
                  onClick={nextImage}
                  disabled={currentImageIndex === selectedSubline.images.length - 1}
                  className={`bg-black bg-opacity-50 text-white p-3 rounded-full transition-all ${
                    currentImageIndex === selectedSubline.images.length - 1
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:bg-opacity-70 hover:scale-110'
                  }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="p-4 bg-gray-100">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {selectedSubline.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex
                        ? 'border-blue-600 scale-105'
                        : 'border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
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