/* eslint-disable @typescript-eslint/indent */
export type IndexDataProps = {
  metadata?: {
    principal_section: {
      title: string;
      descripction: string;
      background: {
        url: string;
        imgix_url: string;
      };
      text_button_one: string;
      text_button_two: string;
    };
    section_two: {
      banner_products: {
        background_img: {
          url: string;
          imgix_url: string;
        };
        title: string;
        text_button: string;
        category: string;
        gender: string[];
      }[];
    };
    newsletter: {
      title: string;
      description: string;
      text_button: string;
    };
  };
};

export type CleanDataProps = {
  principal_section?: {
    title: string;
    descripction: string;
    background: {
      url: string;
      imgix_url: string;
    };
    text_button_one: string;
    text_button_two: string;
  };
  section_two?: {
    banner_products: {
      background_img: {
        url: string;
        imgix_url: string;
      };
      title: string;
      text_button: string;
      category: string;
      gender: string[];
    }[];
  };
  newsletter?: {
    title: string;
    description: string;
    text_button: string;
  };
};
