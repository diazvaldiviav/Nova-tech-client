import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import LazyImage from './LazyImage';
import { Project } from '../../data/ProjectServices';

// Styled Components
const CardContainer = styled(motion.div)({
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  aspectRatio: '16/9',
  cursor: 'pointer',
});

const ProjectImage = styled(LazyImage)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ProjectOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  '&:hover': {
    opacity: 1,
  },
});

const ProjectLogo = styled(LazyImage)({
  maxWidth: '50%',
  maxHeight: '50%',
  objectFit: 'contain',
  marginBottom: '1rem',
});

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onClick(project)}
    >
      <ProjectImage
        src={project.imageUrl}
        alt={project.title}
      />
      <ProjectOverlay className="overlay">
        <ProjectLogo
          src={project.logoUrl}
          alt={`${project.title} logo`}
        />
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'white',
            textAlign: 'center',
            px: 2
          }}
        >
          {project.title}
        </Typography>
      </ProjectOverlay>
    </CardContainer>
  );
};

export default ProjectCard;