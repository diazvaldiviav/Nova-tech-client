import { Box, Container, Typography, Button, IconButton, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useState} from 'react';
import { projects } from '../../data/ProjectServices';
import { Project } from '../../data/ProjectServices';
import CloseIcon from '@mui/icons-material/Close';


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


  const ModalImage = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  });
  
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
  
const WorkContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: '#000',
  minHeight: '100vh',
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
}));

const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(6),
}));

const FilterButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 4),
  borderRadius: '8px',
  color: 'white',
  '&.active': {
    backgroundColor: '#00FF00',
    color: '#000',
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
  },
}));

const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const ProjectCard = styled(motion.div)(() => ({
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  aspectRatio: '16/9',
  cursor: 'pointer',
  '&:hover': {
    '& .overlay': {
      opacity: 0.3,
    },
  },
}));

const ProjectImage = styled('img')({
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
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.3s ease',
  opacity: 0.7,
});

const ProjectLogo = styled('img')({
  maxWidth: '50%',
  maxHeight: '50%',
  objectFit: 'contain',
});

// Componente principal
const OurWork = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'desktop'>('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    

    const filteredProjects = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);

      const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
      };

     
  
    const filterButtons = [
      { id: 'all', label: 'Mostrar Todo' },
      { id: 'web', label: 'Sitios Web' },
      { id: 'mobile', label: 'Apps Móviles' },
      { id: 'desktop', label: 'Software de Escritorio' },
    ];
  return (
    <WorkContainer>
      <Container>
        <HeaderSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                marginBottom: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Nuestro Trabajo
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.6
              }}
            >
              En Nova Tech, tenemos el privilegio de trabajar con diversas empresas
              en diferentes sectores tecnológicos. Nuestra experiencia se extiende
              a múltiples dominios, adaptando nuestros servicios a las necesidades
              únicas de cada cliente.
            </Typography>
          </motion.div>
        </HeaderSection>

        <FilterContainer>
          {filterButtons.map((button) => (
            <FilterButton
              key={button.id}
              className={activeFilter === button.id ? 'active' : ''}
              onClick={() => setActiveFilter(button.id as typeof activeFilter)}
            >
              {button.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleProjectClick(project)}
            >
              <ProjectImage
                src={project.imageUrl}
                alt={project.title}
              />
              <ProjectOverlay className="overlay">
                <Box sx={{ textAlign: 'center' }}>
                  <ProjectLogo
                    src={project.logoUrl}
                    alt={`${project.title} logo`}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      mt: 2,
                      fontSize: '1.1rem',
                      fontWeight: 500
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      mt: 1
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectsGrid>

          {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <ModalContainer>
            <CloseButton onClick={handleCloseModal}>
              <CloseIcon />
            </CloseButton>

            {selectedProject && (
              <>
                <ModalImage
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                />
                
                <Typography
                  variant="h4"
                  id="project-modal-title"
                  sx={{
                    color: '#00FF00',
                    marginBottom: 2,
                    fontWeight: 'bold'
                  }}
                >
                  {selectedProject.title}
                </Typography>

                <Typography
                  variant="body1"
                  id="project-modal-description"
                  sx={{
                    color: 'white',
                    marginBottom: 3,
                    lineHeight: 1.8
                  }}
                >
                  {selectedProject.description}
                </Typography>

                  {/* Puedes añadir más detalles del proyecto aquí */}
                  <Box sx={{ display: 'flex', gap: 2, marginTop: 4 }}>
                  <Button
                    variant="contained"
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
                  <Button
                    variant="outlined"
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
                </Box>
              </>
            )}

      </ModalContainer>
        </motion.div>
      </Modal>
      </Container>
    </WorkContainer>
  );
};

export default OurWork;