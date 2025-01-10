import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {
  NavbarContainer,
  NavContent,
  Logo,
  NavLinks,
  NavLink,
  CTAButton,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink
} from '../../styles/Navbar.styles';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { title: 'Inicio', path: '/' },
    { title: 'Servicios', path: '/services' },
    { title: 'Portafolio', path: '/portfolio' },
    { title: 'Sobre Nosotros', path: '/about' },
    { title: 'Blog', path: '/blog' },
    { title: 'Precios', path: '/pricing' },
    { title: 'Contacto', path: '/contact' }
  ];

  return (
    <NavbarContainer>
      <NavContent>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            NOVA TECH
          </Link>
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              as={Link}
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/cotizacion')}
          >
            Solicitar Cotización
          </CTAButton>
        </NavLinks>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavContent>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <MobileNavLink
                key={item.path}
                as={Link}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item.title}
              </MobileNavLink>
            ))}
            <MobileNavLink
              as="button"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ x: 10 }}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                color: '#00ff00'
              }}
            >
              Solicitar Cotización
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;