import { FC, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {
  BannerContainer,
  ContentWrapper,
  Title,
  CTAButton,
} from '../../styles/Banner.styles';

const Banner: FC = () => {
  useEffect(() => {
    // Aquí inicializaremos particles.js
    // Lo implementaremos en el siguiente paso
  }, []);

  return (
    <BannerContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ContentWrapper>
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>NOVA TECH WEBSITE DEVELOPMENT</Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Typewriter
              options={{
                strings: ['Automatizamos y desarrollamos soluciones digitales para impulsar tu negocio'],
                autoStart: true,
                loop: false,
                delay: 50,
                wrapperClassName: 'typewriter-text'
              }}
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <CTAButton>
              Solicita una cotización gratuita
            </CTAButton>
          </motion.div>

         
        </ContentWrapper>
      </motion.div>
    </BannerContainer>
  );
};

export default Banner;