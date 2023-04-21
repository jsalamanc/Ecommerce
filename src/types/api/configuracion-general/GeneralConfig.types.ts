export type GeneralConfigProps = {
  metadata?: {
    general_notification: {
      message: string;
      is_active: boolean;
    };
    whatsapp: {
      phone: number;
      message: string;
    };
  };
};

export type CleanDataProps = {
  general_notification?: {
    message: string;
    is_active: boolean;
  };
  whatsapp?: {
    phone: number;
    message: string;
  };
};
