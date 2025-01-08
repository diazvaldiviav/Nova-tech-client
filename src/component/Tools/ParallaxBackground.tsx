import { FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 255, 255, 0.05) 100%
  );
  z-index: -1;
`;

const ParallaxBackground: FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return <Background style={{ y }} />;
};

export default ParallaxBackground;