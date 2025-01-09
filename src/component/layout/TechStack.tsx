import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TechSection from './TechSection';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
}));

const techStack = {
  frontend: [
    { id: 1, name: 'React', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { id: 2, name: 'TypeScript', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { id: 3, name: 'JavaScript', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  ],
  backend: [
    { id: 1, name: '.NET', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg' },
    { id: 2, name: 'C#', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
    { id: 3, name: 'Entity Framework', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg' },
    { id: 4, name: 'Swift', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg' },
  ],
  database: [
    { id: 1, name: 'SQL Server', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { id: 2, name: 'MongoDB', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  ],
};

const TechStack = () => {
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
          Stack Tecnológico
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            mb: 6,
          }}
        >
          Las tecnologías que utilizamos para crear soluciones robustas
        </Typography>

        <TechSection title="Frontend" items={techStack.frontend} />
        <TechSection title="Backend" items={techStack.backend} />
        <TechSection title="Base de Datos" items={techStack.database} />
      </Container>
    </SectionContainer>
  );
};

export default TechStack;