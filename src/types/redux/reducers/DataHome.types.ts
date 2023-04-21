export type DataHomeProps = {
  slug?: string | undefined;
  principal_section?: {
    background?: {
      imgix_url?: string | undefined;
      url?: string | undefined;
    };
    title?: string | undefined;
    descripction?: string | undefined;
    text_button_one?: string | undefined;
    text_button_two?: string | undefined;
  };
  section_two?: {
    banner_products?: {
      title?: string | undefined;
      background_img?: {
        imgix_url?: string | undefined;
        url?: string | undefined;
      };
      text_buttom?: string | undefined;
      category?: string | undefined;
      gender?: string[];
    }[];
  };
  newsletter: {
    description: string | undefined;
    text_button: string | undefined;
    title: string | undefined;
  };
  message: string | undefined;
};
