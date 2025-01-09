import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.1)',
    }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      style={{
        width: '30px',
        height: '30px',
        border: '2px solid #00FF00',
        borderTopColor: 'transparent',
        borderRadius: '50%',
      }}
    />
  </Box>
);

export default LoadingSpinner;