import { Box, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import LazyImage from './LazyImage';
import { Project } from '../../data/ProjectServices';

// Styled Components
const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '1200px',
  maxHeight: '90vh',
  backgroundColor: '#000',
  border: '1px solid #333',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,255,0,0.2)',
  padding: theme.spacing(4),
  overflow: 'auto',
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  color: 'white',
  backgroundColor: 'rgba(0,0,0,0.5)',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
}));

const ModalImage = styled(LazyImage)({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '20px',
});

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <ModalContainer>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      <ModalImage
        src={project.imageUrl}
        alt={project.title}
      />
      <Typography
        variant="h4"
        sx={{
          color: '#00FF00',
          marginBottom: 2,
          fontWeight: 'bold'
        }}
      >
        {project.title}
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          color: 'white',
          marginBottom: 3,
          lineHeight: 1.8
        }}
      >
        {project.description}
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, marginTop: 4 }}>
        {project.demoUrl && (
          <Button
            variant="contained"
            href={project.demoUrl}
            target="_blank"
            sx={{
              backgroundColor: '#00FF00',
              color: '#000',
              '&:hover': {
                backgroundColor: '#00CC00'
              }
            }}
          >
            Ver Demo
          </Button>
        )}
        {project.codeUrl && (
          <Button
            variant="outlined"
            href={project.codeUrl}
            target="_blank"
            sx={{
              color: '#00FF00',
              borderColor: '#00FF00',
              '&:hover': {
                borderColor: '#00CC00',
                backgroundColor: 'rgba(0,255,0,0.1)'
              }
            }}
          >
            Ver Código
          </Button>
        )}
      </Box>
    </ModalContainer>
  );
};

export default ProjectModal;