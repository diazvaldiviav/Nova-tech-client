import { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  ContactInfo,
  SocialLinks,
  QuickLinks,
  NewsletterForm,
  Copyright
} from '../../styles/Footer.styles';

const Footer: FC = () => {
  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implementar lógica de suscripción
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Contacto</h3>
          <ContactInfo>
            <p>📞 +1 234 567 890</p>
            <p>📧 info@novatech.com</p>
            <p>📍 123 Tech Street, Digital City</p>
          </ContactInfo>
          <SocialLinks>
            <a href="#" aria-label="Facebook">📱</a>
            <a href="#" aria-label="Twitter">💻</a>
            <a href="#" aria-label="LinkedIn">📲</a>
            <a href="#" aria-label="Instagram">📱</a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Enlaces Rápidos</h3>
          <QuickLinks>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/portfolio">Portafolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <h3>Legal</h3>
          <QuickLinks>
            <li><Link to="/privacy">Política de Privacidad</Link></li>
            <li><Link to="/terms">Términos de Servicio</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <h3>Newsletter</h3>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="Tu correo electrónico" required />
            <button type="submit">Suscribirse</button>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} Nova Tech. Todos los derechos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;