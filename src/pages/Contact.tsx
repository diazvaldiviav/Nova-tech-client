import { FC, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { contactService } from "../services/conctactService";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
  recaptchaToken: string;
}

const Contact: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
    "loading" | "success" | "error" | "recaptchaError"
  >("loading");
  const navigate = useNavigate();
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("El nombre es requerido")
      .min(2, "El nombre debe tener entre 2 y 50 caracteres")
      .max(50, "El nombre debe tener entre 2 y 50 caracteres")
      .matches(/^[a-zA-ZÀ-ÿ\s]*$/, "El nombre solo puede contener letras"),

    email: yup
      .string()
      .required("El email es requerido")
      .email("El formato del email no es válido")
      .max(100, "El email no puede exceder 100 caracteres"),

    subject: yup
      .string()
      .required("El asunto es requerido")
      .min(5, "El asunto debe tener entre 5 y 100 caracteres")
      .max(100, "El asunto debe tener entre 5 y 100 caracteres"),

    message: yup
      .string()
      .required("El mensaje es requerido")
      .min(20, "El mensaje debe tener entre 20 y 1000 caracteres")
      .max(1000, "El mensaje debe tener entre 20 y 1000 caracteres"),

    recaptchaToken: yup.string().required("El token de reCAPTCHA es requerido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange", // Valida en cambios
  });

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    console.log("Environment:", import.meta.env.MODE);
    console.log("ReCAPTCHA Key:", recaptchaKey); // Para debugging
    if (recaptchaKey) {
      setLoading(false);
    }
  }, [recaptchaKey]);

  if (!recaptchaKey) {
    console.error("ReCAPTCHA key is missing!");
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
      console.log("Enviando datos:", {
        name: data.name,
        email: data.email,
        subject: data.subject, // Asegúrate de que este campo existe
        message: data.message,
        recaptchaToken: captchaValue,
      });

      setLoading(true);
      setStatus("loading");
      const response = await contactService.sendContactForm({
        ...data,
        recaptchaToken: captchaValue,
      });

      if (response.success) {
        setStatus("success");
        console.log("Respuesta del servidor:", response);
        reset();
        setCaptchaValue(null);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        console.log("Error:", response.message);
        setIsSubmitting(false);
      }

      console.log("Estado de envío:", isSubmitting);
      console.log("Response:", response);
    } catch (error) {
      // Manejo tipado del error
      if (error instanceof Error) {
        setStatus("error");
        console.error("Error:", error);
      } else {
        setStatus("error");
        console.error("Error:", error);
      }
      setIsSubmitting(false);
    } finally {
      setLoading(false);
    }
  };

  // Actualizar el token de reCAPTCHA en el formulario
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    setValue("recaptchaToken", value || "");
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
    <ContactContainer ref={containerRef}>
      <ContactWrapper
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Contáctanos</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {errors.subject && (
            <span className="text-red-500 text-sm">
              {errors.subject.message}
            </span>
          )}
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
            onChange={handleCaptchaChange} // Usar el nuevo handler
          />

          <SubmitButton
            type="submit"
            disabled={isSubmitting || !captchaValue}
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
