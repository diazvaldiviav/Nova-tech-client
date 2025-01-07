import React from 'react';
import { Dialog, Box, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface FormLoadingAnimationProps {
  open: boolean;
  status: 'loading' | 'success' | 'error' | 'recaptchaError';
  onClose: () => void;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#00ff00',
    padding: theme.spacing(4),
    maxWidth: '400px',
    textAlign: 'center',
    border: '1px solid #00ff00',
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
  }
}));

const AnimationBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
}));

const FormLoadingAnimation: React.FC<FormLoadingAnimationProps> = ({ 
  open, 
  status, 
  onClose 
}) => {
  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <>
            <CircularProgress 
              size={60} 
              thickness={4} 
              sx={{ color: '#00ff00' }} 
            />
            <Typography variant="h6" sx={{ color: '#00ff00' }}>
              Procesando tu mensaje...
            </Typography>
          </>
        );
      case 'success':
        return (
          <>
            <CheckCircleOutlineIcon sx={{ fontSize: 60, color: '#00ff00' }} />
            <Typography variant="h6" sx={{ color: '#00ff00' }}>
              ¡Mensaje enviado con éxito!
            </Typography>
            <Typography variant="body1" sx={{ color: '#00ff9d' }}>
              Nos pondremos en contacto contigo pronto.
            </Typography>
          </>
        );
      case 'error':
        return (
          <>
            <ErrorOutlineIcon sx={{ fontSize: 60, color: '#ff0000' }} />
            <Typography variant="h6" sx={{ color: '#ff0000' }}>
              Error al enviar el mensaje
            </Typography>
            <Typography variant="body1" sx={{ color: '#ff0000' }}>
              Por favor, intenta nuevamente.
            </Typography>
          </>
        );
      case 'recaptchaError':
        return (
          <>
            <Typography variant="h6" sx={{ color: '#ff0000' }}>
              Hay un error con el captcha, asegurate de haberlo completado correctamente.
            </Typography>
          </>
        );
    }
  };

  return (
    <StyledDialog 
      open={open} 
      onClose={status !== 'loading' ? onClose : undefined}
    >
      <AnimationBox>
        {renderContent()}
      </AnimationBox>
    </StyledDialog>
  );
};

export default FormLoadingAnimation;