import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(to bottom, #0a0a0a, #1a1a1a);
`;

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: white;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #00ff00, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

export const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ServiceTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-align: center;
`;

export const ServiceButton = styled.button`
  width: 100%;
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 2px solid #00ff00;
  color: #00ff00;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: #00ff00;
    color: black;
  }
`;