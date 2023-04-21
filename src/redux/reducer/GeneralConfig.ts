import { GeneralConfigProps } from '@/types/redux/reducers/GeneralConfig';
import { createSlice } from '@reduxjs/toolkit';

const initialState: GeneralConfigProps = {
  general_notification: {
    is_active: false,
    message: undefined,
  },
  whatsapp: {
    phone: undefined,
    message: undefined,
  },
};

export const generalConfig = createSlice({
  name: 'generalConfig',
  initialState,
  reducers: {
    setData: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setData } = generalConfig.actions;

export default generalConfig.reducer;
