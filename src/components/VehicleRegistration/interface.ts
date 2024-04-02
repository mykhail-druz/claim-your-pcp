import { UseFormRegister, UseFormUnregister } from "react-hook-form";

export interface IFormInput {
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  email: string | null;
  numberCar: string | null;
  financeProvider: string;
  vehicleFinancedBetween: boolean | null;
  title: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
  question1: boolean | null;
  question2: boolean | null;
  question3: boolean | null;
  question4: boolean | null;
  question5: boolean | null;
  costType: boolean | null;
  questionOtherCars: boolean | null;
  signImage: string | null;
  typeFinance: string;
  bankOption: string;
  cardOption: string;
  cashOption: string;
  haveRequested: boolean | null;
  haveEnquired: boolean | null;
  takenOutFinance: boolean | null;
  youLikeInvestigate: boolean | null;
  relevantProduct: string;
  vehicleData: any;
  carModel: any;
  privateReg: boolean;
}

export interface RegisterProps {
  register: UseFormRegister<IFormInput>;
  unregister?: UseFormUnregister<IFormInput> | null;
  nextStep?: any;
  onSubmit?: any;
  firstName?: any;
  title?: any;
  carNumber?: any;
  control?: any;
  formState?: any;
  finalSumbit?: any;
  trigger?: any;
  setValue?: any;
  carModel?: any;
  reset?: any;
  skipRegistration?:any;
}
