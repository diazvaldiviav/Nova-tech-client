import { FC } from 'react';
import { motion } from 'framer-motion';
import { combinedPackages, pricingStrategy } from '../../data/serviceDetails';
import styled from 'styled-components';

const PackagesSection = styled.section`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;

const PackagesTitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00ffff, #00ff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PackageCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;

  h3 {
    color: #00ffff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 2rem;
    color: #00ff00;
    margin: 1rem 0;
  }

  .services {
    color: rgba(255, 255, 255, 0.8);
    margin: 1rem 0;
  }

  .savings {
    color: #00ff00;
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;

const DiscountNote = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid rgba(0, 255, 255, 0.1);
`;

const CombinedPackages: FC = () => {
  return (
    <PackagesSection>
      <PackagesTitle>Paquetes Combinados</PackagesTitle>
      <PackagesGrid>
        {combinedPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{pkg.title}</h3>
            <div className="price">Desde ${pkg.basePrice.toLocaleString()}</div>
            <div className="services">
              <p>{pkg.description}</p>
              <ul>
                {pkg.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="savings">{pkg.savings}</div>
          </PackageCard>
        ))}
      </PackagesGrid>
      <DiscountNote>
        {pricingStrategy.discountConditions}
      </DiscountNote>
    </PackagesSection>
  );
};

export default CombinedPackages;