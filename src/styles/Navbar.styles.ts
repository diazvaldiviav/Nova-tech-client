import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ff00;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00ff00;
  }
`;

export const CTAButton = styled(motion.button)`
  padding: 0.5rem 1.5rem;
  background: transparent;
  border: 2px solid #00ff00;
  color: #00ff00;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #00ff00;
    color: black;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  padding: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavLink = styled(motion.a)`
  display: block;
  color: white;
  text-decoration: none;
  padding: 1rem;
  text-align: center;
  transition: color 0.3s ease;

  &:hover {
    color: #00ff00;
  }
`;