import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  &.service-card { // Clase específica
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const IconContainer = styled.div`
  &.service-icon-container { // Clase específica
    font-size: 3rem;
    margin-bottom: 1rem;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 255, 255, 0.1);
    border-radius: 50%;
  }
`;

export const Title = styled.h3`
  &.service-title { // Clase específica
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1rem;
    font-family: 'Arial', sans-serif;
    font-weight: 600;
  }
`;

export const Description = styled.p`
  &.service-description { // Clase específica
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    font-size: 1rem;
  }
`;

export const ActionButton = styled(motion.button)`
  &.service-action-button { // Clase específica
    background: linear-gradient(45deg, #00ffff, #00ff00);
    border: none;
    border-radius: 25px;
    padding: 0.8rem 1.5rem;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;

    &:hover {
      background: linear-gradient(45deg, #00ff00, #00ffff);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(0, 255, 255, 0.5);
    }
  }
`;


// ... estilos anteriores se mantienen ...

export const PlansList = styled.div`
  &.service-plans-list {
    margin: 1rem 0;
    width: 100%;
  }
`;

export const PlanItem = styled.div`
  &.service-plan-item {
    padding: 1rem;
    border: 1px solid rgba(0, 255, 255, 0.1);
    border-radius: 8px;
    margin-bottom: 0.5rem;
    
    h4 {
      color: #00ffff;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
    }
    
    span {
      display: block;
      color: #00ff00;
      font-weight: bold;
      margin-top: 0.5rem;
    }
  }
`;

export const ExtrasList = styled.div`
  &.service-extras-list {
    margin: 1rem 0;
    
    h4 {
      color: #00ffff;
      margin-bottom: 0.5rem;
    }
  }
`;

export const ExtrasItem = styled.div`
  &.service-extra-item {
    color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem 0;
    font-size: 0.9rem;
  }
`;

export const FeaturesList = styled.ul`
  &.service-features-list {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
  }
`;

export const FeatureItem = styled.li`
  &.service-feature-item {
    color: rgba(255, 255, 255, 0.8);
    padding: 0.3rem 0;
    font-size: 0.9rem;
  }
`;
