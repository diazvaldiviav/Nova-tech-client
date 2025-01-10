import { FC, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/service';
import { servicesDetails } from '../data/serviceDetails';
import ServiceCard from '../component/layout/ServiceCardt';
import CombinedPackages from '../component/layout/CombinedPackages';
import PricingStrategy from '../component/layout/PricingStrategy';
import ParallaxBackground from '../component/Tools/ParallaxBackground';
import { 
  ServicesContainer, 
  ServicesGrid, 
  ServicesHeader,
  ServicesTitle,
  ServicesDescription 
} from '../styles/Services.main.styles';

const Prices: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <ServicesContainer ref={containerRef}>
      <ParallaxBackground />
      
      <ServicesHeader
        className="services-header"
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ServicesTitle className="services-title">
          Nuestros Precios
        </ServicesTitle>
        <ServicesDescription className="services-description">
          Soluciones tecnológicas innovadoras para impulsar tu negocio
        </ServicesDescription>
      </ServicesHeader>

      <ServicesGrid className="services-grid">
        {services.map((service, index) => {
          // Encontrar los detalles correspondientes al servicio
          const serviceDetail = servicesDetails.find(
            detail => detail.id === service.id
          );
          
          return (
            <ServiceCard
              key={service.id}
              service={service}
              serviceDetail={serviceDetail}
              index={index}
            />
          );
        })}
      </ServicesGrid>

      <CombinedPackages />
      <PricingStrategy />
    </ServicesContainer>
  );
};

export default Prices;