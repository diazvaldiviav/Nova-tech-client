import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const LogoContainer = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '50%',
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '120px',
  height: '120px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-5px)',
  },
}));

const Logo = styled('img')({
  width: '100%',
  height: 'auto',
  maxWidth: '80px',
});

interface CertificationItemProps {
  certification: {
    name: string;
    image: string;
  };
  index: number;
}

const CertificationItem = ({ certification, index }: CertificationItemProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.2 }}
  >
    <LogoContainer>
      <Logo src={certification.image} alt={certification.name} />
    </LogoContainer>
    <Typography
      variant="body2"
      sx={{
        color: 'white',
        textAlign: 'center',
        mt: 1,
      }}
    >
      {certification.name}
    </Typography>
  </motion.div>
);

export default CertificationItem;