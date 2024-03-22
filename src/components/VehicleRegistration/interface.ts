import { UseFormRegister } from "react-hook-form";

export interface IFormInput {
  firstName: string;
  phoneNumber: number;
  email: string;
  numberCar: string;
  question1: boolean;
  question2: boolean;
  question3: boolean;
  question4: boolean;
  question5: boolean;
}
export interface RegisterProps {
  register: UseFormRegister<IFormInput>;
  nextStep?:any;
  onSubmit?:any;
}
