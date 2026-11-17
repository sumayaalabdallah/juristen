export interface ContactUsBody {
  name: string;
  email: string;
  phone: string;
  attachment: File | null;       
  message: string;
  }
