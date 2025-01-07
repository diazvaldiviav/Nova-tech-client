import axios from 'axios';
import api from './api';

// Definimos las interfaces
export interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  recaptchaToken: string | null;
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
      // Asegúrate de que los datos estén en el formato correcto
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        recaptchaToken: formData.recaptchaToken
      };
  
      console.log('Payload formateado:', payload);
      
      const response = await api.post<IContactResponse>(this.ENDPOINT, payload);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error response:', error.response?.data);
        return {
          success: false,
          message: error.response?.data?.message || 'Error al enviar el formulario'
        };
      }
      return {
        success: false,
        message: 'Error inesperado al enviar el formulario'
      };
    }
  }


}