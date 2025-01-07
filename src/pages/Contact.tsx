import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { contactService } from "../services/conctactService";
import { useNavigate } from "react-router-dom";
import {
  ContactContainer,
  ContactWrapper,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  ErrorMessage,
  SubmitButton,
} from "../styles/Contact.styles";
import FormLoadingAnimation from "../component/Tools/FormLoadingAnimation";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
    "loading" | "success" | "error" | "recaptchaError"
  >("loading");
  const navigate = useNavigate();
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    console.log('Environment:', import.meta.env.MODE); 
    console.log('ReCAPTCHA Key:', recaptchaKey); // Para debugging
    if (recaptchaKey) {
      setLoading(false);
    }
  }, [recaptchaKey]);

  if (!recaptchaKey) {
    console.error('ReCAPTCHA key is missing!');
    return <div>Error: ReCAPTCHA configuration missing</div>;
  }

  

  const onSubmit = async (data: FormData) => {
    if (!captchaValue) {
      setStatus("recaptchaError");
      setLoading(true);
      return;
    }

    setIsSubmitting(true);
    try {
      setLoading(true);
      setStatus("loading");
      const response = await contactService.sendContactForm({
        ...data,
        recaptchaToken: captchaValue,
      });

      if (response.success) {
        setStatus("success");
        reset();
        setCaptchaValue(null);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      // Manejo tipado del error
      if (error instanceof Error) {
        setStatus("error");
        console.error("Error:", error);
      } else {
        setStatus("error");
        console.error("Error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setLoading(false);
    if (status === "success") {
      setTimeout(() => {
        navigate("/");
      }, 3000);

      // Aquí puedes agregar lógica adicional después del éxito
    }

    if (status === "recaptchaError") {
      setStatus("loading"); // Reseteamos el estado
    }
  };

  return (
    <ContactContainer>
      <ContactWrapper
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Contáctanos</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>Nombre</Label>
            <Input
              {...register("name", { required: "El nombre es requerido" })}
              placeholder="Tu nombre"
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input
              {...register("email", {
                required: "El email es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Asunto</Label>
            <Input
              {...register("subject", { required: "El asunto es requerido" })}
              placeholder="Asunto del mensaje"
            />
            {errors.subject && (
              <ErrorMessage>{errors.subject.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Mensaje</Label>
            <TextArea
              {...register("message", { required: "El mensaje es requerido" })}
              placeholder="Tu mensaje..."
            />
            {errors.message && (
              <ErrorMessage>{errors.message.message}</ErrorMessage>
            )}
          </FormGroup>

          <ReCAPTCHA
        sitekey={recaptchaKey}
        onChange={(value: string | null) => setCaptchaValue(value)}
      />

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </SubmitButton>
        </Form>
      </ContactWrapper>
      <FormLoadingAnimation
        open={loading}
        status={status}
        onClose={handleCloseDialog}
      />
    </ContactContainer>
  );
};

export default Contact;
