import axios from 'axios';

const API_BASE_URL = 'https://localhost:7280/api';

interface ServicePlan {
  plan: string;
  description: string;
  price: number | string;
}

interface ServiceExtra {
  name: string;
  description: string;
  price: number;
}

export interface Service {
  id: number;
  title: string;
  mainDescription: string;
  icon: string;
  plans: ServicePlan[];
  extras: ServiceExtra[];
  features: string[];
  buttonText: string;
}

export const serviceServices = {
  // Get all services
  getServices: async (): Promise<Service[]> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Service`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error fetching services');
      }
      throw new Error('Unexpected error while fetching services');
    }
  },

  // Get service by ID
  getServiceById: async (id: number): Promise<Service> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Service/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error fetching service');
      }
      throw new Error('Unexpected error while fetching service');
    }
  }
};