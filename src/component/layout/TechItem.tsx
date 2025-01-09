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

interface TechItemProps {
  item: {
    name: string;
    image: string;
  };
  index: number;
}

const TechItem = ({ item, index }: TechItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <LogoContainer>
      <Logo src={item.image} alt={item.name} />
    </LogoContainer>
    <Typography
      variant="body2"
      sx={{
        color: 'white',
        textAlign: 'center',
        mt: 1,
      }}
    >
      {item.name}
    </Typography>
  </motion.div>
);

export default TechItem;