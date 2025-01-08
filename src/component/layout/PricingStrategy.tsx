import { FC } from 'react';
import { motion } from 'framer-motion';
import { pricingStrategy } from '../../data/serviceDetails';
import styled from 'styled-components';

const StrategySection = styled.section`
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;

const StrategyTitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00ffff, #00ff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StrategyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
`;

const DiscountHighlight = styled.div`
  background: rgba(0, 255, 255, 0.1);
  border-left: 4px solid #00ffff;
  padding: 1rem 2rem;
  margin: 1rem 0;
  border-radius: 0 8px 8px 0;
`;

const NotesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;

  li {
    margin: 1rem 0;
    padding-left: 1.5rem;
    position: relative;
    color: rgba(255, 255, 255, 0.8);

    &:before {
      content: "→";
      position: absolute;
      left: 0;
      color: #00ffff;
    }
  }
`;

const PricingStrategy: FC = () => {
  return (
    <StrategySection>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <StrategyTitle>Estrategia de Precios</StrategyTitle>
        <StrategyContent>
          <DiscountHighlight>
            <h3>Descuento por Servicios Múltiples</h3>
            <p>{pricingStrategy.discountConditions}</p>
            <p>Descuento aplicable: {pricingStrategy.multiServiceDiscount}%</p>
          </DiscountHighlight>

          <NotesList>
            {pricingStrategy.additionalNotes.map((note, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {note}
              </motion.li>
            ))}
          </NotesList>
        </StrategyContent>
      </motion.div>
    </StrategySection>
  );
};

export default PricingStrategy;