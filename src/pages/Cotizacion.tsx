import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import robotImage from '../assets/Images/roobot-mirando-derecha.png';
import { servicesDetails } from "../data/serviceDetails";
import { quotationServices } from "../services/QuotationService";
import {
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  Select as MUISelect,
} from "@mui/material";

// Styled Components
const QuotationContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-color: #1a1a1a;
`;

const QuotationWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  color: white;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RobotImage = styled.img`
  position: absolute;
  right: -50px;
  bottom: 50px;
  width: 300px;
  height: auto;
  opacity: 0.9;
  z-index: 1;
  
  @media (max-width: 1200px) {
    width: 250px;
    right: -30px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;


const FormSection = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  
  li {
    margin: 0.8rem 0;
    display: flex;
    align-items: center;
    
    &:before {
      content: "✓";
      color: #00ff00;
      margin-right: 10px;
      font-weight: bold;
    }
  }
`;

const Subtitle = styled.h3`
  color: #00ff00;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: white;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 2px solid #fff;
  background-color: #1a1a1a; // Cambiado de #222 a #1a1a1a
  color: white;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #00ff00;
  }
  
  &::placeholder {
    color: #666;
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #fff;
  background-color: #1a1a1a; // Cambiado de #222 a #1a1a1a
  color: white;
  width: 100%;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #00ff00;
  }
  
  option {
    background-color: #1a1a1a;
    color: white;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #fff;
  background-color: #1a1a1a;
  color: white;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #00ff00;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem;
  background-color: #00ff00;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

const QuotationForm: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
          containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, []);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    plan: "",
    extras: [] as string[],
    message: "",
  });

  const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;



const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await quotationServices.sendQuotation(formData);
      // Handle successful response
      console.log('Quotation sent:', response);
      // Here you can show a success message, clear the form, etc.
    } catch (error) {
      // Handle error
      console.error('Error sending quotation:', error);
      // Here you can show an error message
    }
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExtraChange = (extraName: string) => {
    setFormData((prev) => ({
      ...prev,
      extras: prev.extras.includes(extraName)
        ? prev.extras.filter((e) => e !== extraName)
        : [...prev.extras, extraName],
    }));
  };

  return (
    <QuotationContainer ref={containerRef}>
      <QuotationWrapper>
      <InfoSection>
  <ContentWrapper>
    <Title>Cotización</Title>
    <Subtitle style={{ color: '#00ff00' }}>Solicita tu Presupuesto</Subtitle>
    <p style={{ fontSize: '1.1rem', marginTop: '1rem', opacity: 0.9 }}>
      Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad.
    </p>

    <div style={{ marginTop: "3rem" }}>
      <Subtitle style={{ color: '#00ff00' }}>¿Por qué elegirnos?</Subtitle>
      <StyledList>
        <li>Soluciones personalizadas</li>
        <li>Tecnología de vanguardia</li>
        <li>Equipo experto</li>
        <li>Soporte continuo</li>
      </StyledList>
    </div>
  </ContentWrapper>
  
  <RobotImage 
    src={robotImage} // Necesitarás proporcionar la ruta correcta a tu imagen
    alt="Robot Assistant"
  />
</InfoSection>

        <FormSection>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Nombre</Label>
              <Input 
              type="text" 
              name="name" 
              placeholder="Tu nombre" 
              required 
              value={formData.name}
              onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Teléfono</Label>
              <Input
                type="tel"
                name="phone"
                placeholder="Tu número de teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Servicio</Label>
              <MUISelect
                name="service"
                value={formData.service}
                onChange={handleChange}
                label="Selecciona un servicio"
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <em style={{ color: '#666' }}>Selecciona un servicio</em>;
                  }
                  return selected;
                }}
                sx={{
                    color: 'white',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #fff',
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00ff00'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00ff00'
                    },
                    '.MuiSvgIcon-root': {
                      color: 'white'
                    },
                    // Eliminar el fondo blanco al enfocar
                    '&.Mui-focused': {
                      backgroundColor: '#1a1a1a'
                    }
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: '#1a1a1a',
                        '& .MuiMenuItem-root': {
                          color: 'white',
                          '&:hover': {
                            backgroundColor: '#333'
                          },
                          '&.Mui-selected': {
                            backgroundColor: '#2a2a2a',
                            '&:hover': {
                              backgroundColor: '#333'
                            }
                          }
                        }
                      }
                    }
                  }}
                required
              >
                <MenuItem value="" disabled>
                <em>Selecciona un servicio</em>
                </MenuItem>

                {servicesDetails.map((service) => (
                  <MenuItem key={service.id} value={service.title}>
                    {service.title}
                  </MenuItem>
                ))}
              </MUISelect>
            </FormGroup>

            {formData.service && (
              <FormGroup>
                <Label>Plan</Label>
                <Select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un plan</option>
                  {servicesDetails
                    .find((service) => service.title === formData.service)
                    ?.plans.map((plan) => (
                      <option key={plan.plan} value={plan.plan}>
                        {plan.plan}
                      </option>
                    ))}
                </Select>
              </FormGroup>
            )}

            {formData.service && (
              <FormControl component="fieldset" sx={{ mt: 2 }}>
                 <Label>Extras</Label>
                <CheckboxGroup>
                  {servicesDetails
                    .find((service) => service.title === formData.service)
                    ?.extras.map((extra) => (
                      <FormControlLabel
                        key={extra.name}
                        control={
                          <Checkbox
                            checked={formData.extras.includes(extra.name)}
                            onChange={() => handleExtraChange(extra.name)}
                            sx={{
                              color: "white",
                              '&.Mui-checked': {
                                color: "#00ff00",
                              },
                            }}
                            
                          />
                        }
                        label={extra.name}
                        sx={{
                          color: "white",
                        }}
                      />
                    ))}
                </CheckboxGroup>
              </FormControl>
            )}

            <FormGroup>
              <Label>Mensaje</Label>
              <TextArea
                name="message"
                placeholder="Describe tu proyecto..."
                required
                value={formData.message}
                onChange={handleChange}
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Cotización
            </SubmitButton>
          </Form>
        </FormSection>
      </QuotationWrapper>
    </QuotationContainer>
  );
};

export default QuotationForm;
