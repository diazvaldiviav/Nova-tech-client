import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(to bottom, #0a0a0a, #1a1a1a);
`;

export const ContactWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff00;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #00ff00;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 0.875rem;
`;

export const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: #00ff00;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`;