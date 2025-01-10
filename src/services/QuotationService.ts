import axios from 'axios';

const API_BASE_URL = 'https://localhost:7280/api';

interface QuotationData {
  name: string;
  email: string;
  phone: string;
  service: string;
  plan: string;
  extras: string[];
  message: string;
}

export const quotationServices = {
  // Send a new quotation
  sendQuotation: async (quotationData: QuotationData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/quotations`, quotationData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error sending quotation');
      }
      throw new Error('Unexpected error while sending quotation');
    }
  },

  // Get all quotations
  getQuotations: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/quotations`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error getting quotations');
      }
      throw new Error('Unexpected error while getting quotations');
    }
  }
};