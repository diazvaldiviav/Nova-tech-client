import { motion } from 'framer-motion';
import styled from 'styled-components';

export const QuotationContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-color: #1a1a1a;
`;

export const QuotationWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  color: white;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RobotImage = styled.img`
  position: absolute;
  right: -50px;
  bottom: 50px;
  width: 300px;
  height: auto;
  opacity: 0.9;
  z-index: 1;
  
  @media (max-width: 1200px) {
    width: 250px;
    right: -30px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;


export const FormSection = styled.div`
  flex: 1;
  padding: 2rem;
`;

export const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  
  li {
    margin: 0.8rem 0;
    display: flex;
    align-items: center;
    
    &:before {
      content: "✓";
      color: #00ff00;
      margin-right: 10px;
      font-weight: bold;
    }
  }
`;

export const Subtitle = styled.h3`
  color: #00ff00;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: white;
  font-size: 1rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 2px solid #fff;
  background-color: #1a1a1a; // Cambiado de #222 a #1a1a1a
  color: white;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #00ff00;
  }
  
  &::placeholder {
    color: #666;
  }
`;

export const Select = styled.select`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #fff;
  background-color: #1a1a1a; // Cambiado de #222 a #1a1a1a
  color: white;
  width: 100%;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #00ff00;
  }
  
  option {
    background-color: #1a1a1a;
    color: white;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #fff;
  background-color: #1a1a1a;
  color: white;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #00ff00;
  }
`;

export const SubmitButton = styled(motion.button)`
  padding: 1rem;
  background-color: #00ff00;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;