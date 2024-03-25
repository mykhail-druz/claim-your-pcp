import { UseFormRegister, UseFormUnregister } from "react-hook-form";

export interface IFormInput {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  numberCar: string;
  title: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
  question1: boolean;
  question2: boolean;
  question3: boolean;
  question4: boolean;
  question5: boolean;
  costType: boolean;
  signImage: string;
}
export interface RegisterProps {
  register: UseFormRegister<IFormInput>;
  unregister?: UseFormUnregister<IFormInput> | null; // Добавляем unregister
  nextStep?: any;
  onSubmit?: any;
  firstName?: string;
  title?: string;
}