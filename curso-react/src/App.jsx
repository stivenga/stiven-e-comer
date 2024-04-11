import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products'; // Importamos la página de productos

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} /> {/* Configuramos la ruta "/products" */}
      </Routes>
    </Router>
  );
}

export default App; // Asegúrate de exportar el componente principal
