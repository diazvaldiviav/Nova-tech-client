import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Services from '../pages/Prices';
import Portfolio from '../pages/Portfolio';
import Cotizacion from '../pages/Cotizacion';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/cotizacion" element={<Cotizacion />} />
    </Routes>
  );
};

export default AppRoutes;