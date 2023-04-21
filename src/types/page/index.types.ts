/* eslint-disable @typescript-eslint/indent */

export type IndexProps =
  | {
      slug?: string;
      principal_section?: {
        background?: {
          imgix_url?: string;
          url?: string;
        };
        title?: string;
        descripction?: string;
        text_button_one?: string;
        text_button_two?: string;
      };
      section_two?: {
        banner_products?: {
          title?: string;
          background_img?: {
            imgix_url?: string;
            url?: string;
          };
          text_buttom?: string;
          category?: string;
          gender?: string[];
        }[];
      };
      message: string;
    }
  | undefined;
