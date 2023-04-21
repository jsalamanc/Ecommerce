export type GeneralConfigProps = {
  general_notification: {
    is_active: boolean;
    message: string | undefined;
  };
  whatsapp: {
    phone: string | undefined;
    message: string | undefined;
  };
};
