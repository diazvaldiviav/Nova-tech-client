import styled from 'styled-components';
import robotImage from '../../assets/Images/robotmanosabierta.png'; // Ajusta la ruta según tu estructura

const BannerContainer = styled.div`
  width: 100%;
  background-color: #1a1a1a;
  padding: 4rem 2rem;
  display: flex;
  margin-top: 10rem;
  justify-content: center;
  max-width: 1400px;
  gap: 30rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  max-width: 500px;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    color: #00ff00;
    font-size: 1.5rem;
  }
  
  a {
    color: #00ff00;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #00cc00;
    }
  }
`;

const ContactBanner = () => {
  return (
    <BannerContainer>
      <ImageSection>
        <img src={robotImage} alt="Robot Assistant" />
      </ImageSection>
      
      <InfoSection>
        <Title>Nova Tech</Title>
        
        <ContactInfo>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <a href="mailto:sales@novatech.com">sales@novatech.com</a>
        </ContactInfo>
        
        <ContactInfo>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          <a href="tel:+1234567890">(888) 683-1337</a>
        </ContactInfo>
      </InfoSection>
    </BannerContainer>
  );
};

export default ContactBanner;