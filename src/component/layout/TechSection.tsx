import { Box, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import TechItem from './TechItem';

const TechContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2rem',
  marginBottom: '4rem',
});

interface TechSectionProps {
  title: string;
  items: Array<{
    id: number;
    name: string;
    image: string;
  }>;
}

const TechSection = ({ title, items }: TechSectionProps) => (
  <Box sx={{ mb: 6 }}>
    <Typography
      variant="h5"
      sx={{
        color: '#00FF00',
        mb: 3,
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      {title}
    </Typography>
    <TechContainer>
      {items.map((item, index) => (
        <TechItem key={item.id} item={item} index={index} />
      ))}
    </TechContainer>
  </Box>
);

export default TechSection;