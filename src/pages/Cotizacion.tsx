import React, { useRef, useState, useEffect } from "react";
import robotImage from '../assets/Images/roobot-mirando-derecha.png';
import { Service, serviceServices } from "../services/serviceServices";
import { quotationServices } from "../services/QuotationService";
import {
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  Select as MUISelect,
} from "@mui/material";
import { 
  QuotationContainer,
   QuotationWrapper, 
   InfoSection, ContentWrapper, 
   Title, 
   Subtitle, 
   StyledList, 
   RobotImage, 
   FormSection, 
   Form, 
   FormGroup, 
   Label, 
   Input, 
   Select, 
   TextArea, 
   SubmitButton, 
   CheckboxGroup } from "../styles/cotizacion.styles";



const QuotationForm: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        if (containerRef.current) {
          containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
       

        const fetchServices = async () => {
          try {
            const data = await serviceServices.getServices();
            console.log(data);
            setServices(data);
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Error fetching services');
          } finally {
            setLoading(false);
          }
        };

        fetchServices();
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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

                {services.map((service) => (
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
                  {services
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
                  {services
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
