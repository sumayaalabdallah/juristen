export interface ContactUsResponse {
    success: boolean;
    result: null | {
      name: string;
      email: string;
      phone: string;
      attachment: File;       
      message: string;
      updated_at: string;
      created_at: string;
      id: number;
    };
    message: string | {
      [key: string]: string[];
    };
  }
