import styled, { keyframes } from 'styled-components';


const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #00ff00; }
  50% { box-shadow: 0 0 20px #00ff00; }
  100% { box-shadow: 0 0 5px #00ff00; }
`;

export const BannerContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9));
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #00ff00, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: transparent;
  border: 2px solid #00ff00;
  color: #00ff00;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${glowAnimation} 2s infinite;

  &:hover {
    background: #00ff00;
    color: black;
    transform: scale(1.05);
  }
`;

export const ContactInfo = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: white;
  font-size: 1rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

