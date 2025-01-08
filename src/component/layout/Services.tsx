import { FC } from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/service';
import { useNavigate } from 'react-router-dom';
import {
  ServicesSection,
  ServicesContainer,
  SectionTitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
} from '../../styles/Services.styles';
import styled from 'styled-components';

const FloatingButton = styled(motion.button)`
  position: absolute;
  bottom: -50px;
  right: 30px;
  background: linear-gradient(45deg, #00ffff, #00ff00);
  color: #000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
  z-index: 10;
  white-space: nowrap;

   @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    bottom: -100px;
  }

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 255, 255, 0.4);
  }
`;

const Services: FC = () => {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <ServicesSection>
      <ServicesContainer>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Nuestros Servicios</SectionTitle>
        </motion.div>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              as={motion.div}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      

        <FloatingButton
          as={motion.button}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate('/services')}
        >
          Ver todos los servicios →
        </FloatingButton>
       
      </ServicesContainer>
     
    </ServicesSection>
  );
};

export default Services;