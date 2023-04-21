import { DataHomeProps } from '@/types/redux/reducers/DataHome.types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: DataHomeProps = {
  slug: undefined,
  principal_section: {
    background: {
      imgix_url: undefined,
      url: undefined,
    },
    title: undefined,
    descripction: undefined,
    text_button_one: undefined,
    text_button_two: undefined,
  },
  section_two: {
    banner_products: [],
  },
  newsletter: {
    description: undefined,
    text_button: undefined,
    title: undefined,
  },
  message: undefined,
};

export const dataHome = createSlice({
  name: 'dataHome',
  initialState,
  reducers: {
    setData: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setData } = dataHome.actions;

export default dataHome.reducer;
