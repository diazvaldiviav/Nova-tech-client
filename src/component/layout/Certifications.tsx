import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CertificationItem from './CertificationItem';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
}));

const CertificationsContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2rem',
});

const certifications = [
    {
        id: 1,
        name: 'Microsoft Certified: Azure Developer Associate',
        image: 'https://images.credly.com/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png'
      },
      {
        id: 3,
        name: 'AWS Certified Developer',
        image: 'https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png'
      },
     
  // Añade más certificaciones según necesites
];

const Certifications = () => {
  return (
    <SectionContainer>
      <Container>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            textAlign: 'center',
            mb: 2,
            fontWeight: 'bold',
          }}
        >
          Certificaciones
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            mb: 6,
          }}
        >
          Nuestros logros y reconocimientos profesionales
        </Typography>
        
        <CertificationsContainer>
          {certifications.map((cert, index) => (
            <CertificationItem 
              key={cert.id} 
              certification={cert} 
              index={index} 
            />
          ))}
        </CertificationsContainer>
      </Container>
    </SectionContainer>
  );
};

export default Certifications;