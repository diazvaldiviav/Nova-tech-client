import axios from 'axios';
import api from './api';

// Definimos las interfaces
export interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  recaptchaToken: string;
}

export interface IContactResponse {
  success: boolean;
  message: string;
  ticketId?: number;
}

// Clase del servicio de contacto
export class contactService {
  private static readonly ENDPOINT = '/contact';

  /**
   * Envía un formulario de contacto al servidor
   * @param formData Datos del formulario
   * @returns Respuesta del servidor
   */
  public static async sendContactForm(formData: IContactForm): Promise<IContactResponse> {
    try {
      const response = await api.post<IContactResponse>(this.ENDPOINT, formData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Manejo específico de errores de Axios
        const message = error.response?.data?.message || 'Error al enviar el formulario';
        return {
          success: false,
          message
        };
      }
      // Manejo de otros tipos de errores
      return {
        success: false,
        message: 'Error inesperado al enviar el formulario'
      };
    }
  }
}