import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface FormState {
  currentStep: number;
}

// Define the initial state using that type
const initialState: FormState = {
  currentStep: 0,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    // You can add more reducers here for other actions
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentStep } = formSlice.actions;

export default formSlice;
