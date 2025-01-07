import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #0a0a0a;
  color: white;
  padding: 4rem 2rem 2rem;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const FooterSection = styled.div`
  h3 {
    color: #00ff00;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #00ff00;
    }
  }
`;

export const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.8rem;
    
    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #00ff00;
      }
    }
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    color: white;
    border-radius: 4px;
  }

  button {
    padding: 0.8rem;
    background: #00ff00;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #00cc00;
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
`;