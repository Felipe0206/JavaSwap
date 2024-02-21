"use client"
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faCog, faWallet, faBars, faExchangeAlt, faHandHoldingUsd, faImages, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showSubSections, setShowSubSections] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    if (selectedSection === section) {
      setShowSubSections(!showSubSections);
    } else {
      setSelectedSection(section);
      setShowSubSections(true);
    }
  };

  useEffect(() => {
    // Añade un evento para manejar el scroll y actualizar la posición del componente
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const offset = window.scrollY;

      if (navbar) {
        if (offset > 50) {
          navbar.style.position = 'fixed';
          navbar.style.top = '0';
          navbar.style.left = '0';
          navbar.style.width = '100%';
          navbar.style.zIndex = '1000';
        } else {
          navbar.style.position = 'static';
        }
      }
    };

    // Registra el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const SubSections = ({ section }) => {
    if (section === "Swap") {
      return (
        <div className={`absolute bg-gray-800 text-white rounded-md p-2 ${showSubSections && selectedSection === section ? 'block' : 'hidden'}`}>
          <a href="#" className="block">Exchange</a>
          <a href="#" className="block">Liquidity</a>
          <a href="#" className="block">Bridge</a>
        </div>
      );
    } else if (section === "Earn") {
      return (
        <div className={`absolute bg-gray-800 text-white rounded-md p-2 ${showSubSections && selectedSection === section ? 'block' : 'hidden'}`}>
          <a href="#" className="block">Farms</a>
          <a href="#" className="block">Pools</a>
        </div>
      );
    } else if (section === "NFT") {
      return (
        <div className={`absolute bg-gray-800 text-white rounded-md p-2 ${showSubSections && selectedSection === section ? 'block' : 'hidden'}`}>
          <a href="#" className="block">Overview</a>
          <a href="#" className="block">Collections</a>
          <a href="#" className="block">Activity</a>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {/* Barra de navegación principal */}
      <nav id="navbar" className="bg-white p-4 w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <img src="/logo.svg" alt="Logo" className="h-8 mr-4" />
            
            {/* Secciones de navegación */}
            <div className="flex space-x-4 hidden md:flex"> {/* Ocultar en dispositivos móviles */}
              {/* Sección Swap */}
              <div className="relative group">
                <a href="#" className="text-gray-800" onMouseDown={() => handleSectionClick("Swap")}>Swap</a>
                <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-xs" />
                <SubSections section="Swap" />
              </div>

              {/* Sección Earn */}
              <div className="relative group">
                <a href="#" className="text-gray-800" onMouseDown={() => handleSectionClick("Earn")}>Earn</a>
                <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-xs" />
                <SubSections section="Earn" />
              </div>

              {/* Sección NFT */}
              <div className="relative group">
                <a href="#" className="text-gray-800" onMouseDown={() => handleSectionClick("NFT")}>NFT</a>
                <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-xs" />
                <SubSections section="NFT" />
              </div>
            </div>
          </div>

          {/* Iconos de idiomas, ajustes y conexión a la billetera */}
          <div className="flex items-center space-x-4">
            {/* Icono de idiomas */}
            <FontAwesomeIcon icon={faLanguage} className="text-gray-800 text-lg cursor-pointer" />
            {/* Icono de ajustes */}
            <FontAwesomeIcon icon={faCog} className="text-gray-800 text-lg cursor-pointer" />
            {/* Botón de conexión a la billetera */}
            <button 
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-red-400 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              style={{ background: 'linear-gradient(to right, rgb(255, 232, 141) 0%, rgb(255, 232, 141) 1.01%, rgb(183, 91, 89) 69.72%, rgb(155, 34, 68) 100%)' }}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Barra de navegación para dispositivos móviles */}
      <nav className="bg-white p-4 w-full md:hidden fixed bottom-0 left-0 z-10 flex justify-around">
        {/* Iconos de Swap, Earn, NFT y botón de tres puntos */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <a href="#" className="text-gray-800" onClick={() => setSelectedSection("Swap")}>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faExchangeAlt} className="text-lg cursor-pointer" />
                <span className="text-sm">Swap</span>
              </div>
            </a>
          </div>
          <div className="relative group">
            <a href="#" className="text-gray-800" onClick={() => setSelectedSection("Earn")}>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faHandHoldingUsd} className="text-lg cursor-pointer" />
                <span className="text-sm">Earn</span>
              </div>
            </a>
          </div>
          <div className="relative group">
            <a href="#" className="text-gray-800" onClick={() => setSelectedSection("NFT")}>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faImages} className="text-lg cursor-pointer" />
                <span className="text-sm">NFT</span>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
