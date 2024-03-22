import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slice";

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

// Inferred type: {form: FormState}
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: Dispatch<Action<string>>
export type AppDispatch = typeof store.dispatch;
