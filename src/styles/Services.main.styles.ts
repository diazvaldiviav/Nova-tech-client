import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  background-color: #000; // Aseguramos el fondo negro
`;

export const ServicesHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  color: #fff;
  
  &.services-header { // Clase específica
    position: relative;
    z-index: 2;
  }
`;

export const ServicesTitle = styled.h1`
  &.services-title { // Clase específica
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #00ffff, #00ff00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Arial', sans-serif; // Aseguramos la fuente
  }
`;

export const ServicesDescription = styled.p`
  &.services-description { // Clase específica
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }
`;

export const ServicesGrid = styled.div`
  &.services-grid { // Clase específica
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  }
`;
