import axiosInstance from '@/connectivity/axios/axiosInstance';
import type { ContactUsBody } from '../types/ContactUsBodyType';
import type { ContactUsResponse } from '../types/ContactUsType';

export const submitContactForm = async (data: ContactUsBody): Promise<ContactUsResponse> => {
  const formData = new FormData();

  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  formData.append('message', data.message);
  if (data.attachment) {
    formData.append('attachment', data.attachment);
  }
  try {
    const response = await axiosInstance.post<ContactUsResponse>('/consultation_request', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
