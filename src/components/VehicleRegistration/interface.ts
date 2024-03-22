import { UseFormRegister } from "react-hook-form";

export interface IFormInput {
  firstName: string;
  phoneNumber: number;
  email: string;
  numberCar:string;
}
export interface RegisterProps {
  register: UseFormRegister<IFormInput>;
  nextStep?:any;
}
