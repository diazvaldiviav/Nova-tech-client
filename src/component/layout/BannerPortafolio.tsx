import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Componentes estilizados
const BannerContainer = styled(Box)(() => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: '#000',
    position: 'relative',
    overflow: 'hidden', // Para controlar el desbordamiento de la imagen
  }));
  
  const ContentWrapper = styled(Container)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    padding: theme.spacing(6),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: theme.spacing(4),
    },
  }));
  
  const TextSection = styled(Box)(({ theme }) => ({
    flex: '0 0 45%',
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      flex: '1 1 100%',
      paddingRight: 0,
    },
  }));
  
  const MockupContainer = styled(Box)(({ theme }) => ({
    flex: '0 0 55%',
    position: 'relative',
    right: '-10%', // Hace que la imagen sobresalga
    transform: 'perspective(1000px) rotateY(-10deg)', // Añade efecto 3D
    [theme.breakpoints.down('md')]: {
      right: 0,
      width: '100%',
      transform: 'none',
      marginTop: theme.spacing(4),
    },
  }));
  
  const Mockup = styled('img')(() => ({
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,255,0,0.15)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02) translateX(-10px)',
    },
  }));
  
  const StatsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(4),
    marginTop: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: theme.spacing(3),
    },
  }));
  
 

const BannerPortafolio = () => {
  return (
    <BannerContainer>
  <ContentWrapper>
    <TextSection>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h1" 
          sx={{ 
            color: '#00FF00',
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 'bold',
            mb: 2 
          }}
        >
          Nuestros Proyectos
        </Typography>
        
        <Typography 
          variant="h2"
          sx={{ 
            color: 'rgba(255,255,255,0.9)',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            mb: 4 
          }}
        >
          Transformando ideas en soluciones digitales
        </Typography>

        <StatsContainer>
            
          {/* Stats items aquí */}
        </StatsContainer>
      </motion.div>
    </TextSection>

    <MockupContainer>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Mockup 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
          alt="Development Setup"
        />
      </motion.div>
    </MockupContainer>
  </ContentWrapper>
</BannerContainer>
  );
};

export default BannerPortafolio;