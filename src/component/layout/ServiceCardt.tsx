import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../../data/service';
import { ServiceDetail } from '../../data/serviceDetails';
import { 
  Card, 
  IconContainer, 
  Title, 
  Description, 
  ActionButton,
  PlansList,
  PlanItem,
  ExtrasList,
  ExtrasItem,
  FeaturesList,
  FeatureItem 
} from '../../styles/ServiceCard.styles';

interface ServiceCardProps {
  service: Service;
  serviceDetail?: ServiceDetail;
  index: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ service, serviceDetail, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className="service-card"
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: isExpanded ? 1 : 1.05,
        boxShadow: '0 8px 30px rgba(0,255,255,0.1)'
      }}
    >
      <IconContainer className="service-icon-container">
        <motion.span
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {service.icon}
        </motion.span>
      </IconContainer>
      <Title className="service-title">{service.title}</Title>
      <Description className="service-description">{service.description}</Description>
      
      <AnimatePresence>
        {isExpanded && serviceDetail && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <PlansList className="service-plans-list">
              {serviceDetail.plans.map((plan, idx) => (
                <PlanItem key={idx} className="service-plan-item">
                  <h4>{plan.plan}</h4>
                  <p>{plan.description}</p>
                  <span>${plan.price}</span>
                </PlanItem>
              ))}
            </PlansList>

            <ExtrasList className="service-extras-list">
              <h4>Extras disponibles:</h4>
              {serviceDetail.extras.map((extra, idx) => (
                <ExtrasItem key={idx} className="service-extra-item">
                  {extra.name} - ${extra.price}
                </ExtrasItem>
              ))}
            </ExtrasList>

            <FeaturesList className="service-features-list">
              {serviceDetail.features.map((feature, idx) => (
                <FeatureItem key={idx} className="service-feature-item">
                  ✓ {feature}
                </FeatureItem>
              ))}
            </FeaturesList>
          </motion.div>
        )}
      </AnimatePresence>

      <ActionButton
        className="service-action-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Ver menos' : service.buttonText}
      </ActionButton>
    </Card>
  );
};

export default ServiceCard;