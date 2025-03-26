import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {},
  formData:[]
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData.push(action.payload);
    },
  },
});

export const { updateFormData } = contactSlice.actions;
export default contactSlice.reducer;
