import { roobertBold, roobertLight, roobertMedium, roobertSemiBold } from "@/fonts/fonts";
import styles from "../modules/ContactInformation.module.css";
import { IFormInput, RegisterProps } from "../interface";
import { Input } from "../Input/input";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import Phone from '@/icons/phone.svg'
import Mail from '@/icons/mail.svg'
import Arrow from '@/icons/arrow.svg'

export const ContactInformation: React.FC<RegisterProps> = ({ register, nextStep }) => {
  return (
    <div className={styles.registration}>
      <h1 className={`${styles.title} ${roobertBold.className}`}>
        Your contact information
      </h1>
      <div className={styles.inputs}>
        <Input label_title={'Name'}  label_desc={"Please Provide your name"} placeholder="First Name" label={"firstName"} register={register} required={false} />
        <Input label_title={'Mobile telephone number'} label_desc={"We'll update you about your claim via SMS"} placeholder="Phone" label={"phoneNumber"} register={register} required={false} icon={<Phone/>} />
        <Input label_title={'Email address'} label_desc={"We'll update you about your claim via email"} placeholder="Phone" label={"email"} register={register} required={false} icon={<Mail/>} />
      </div>
   
      <a onClick={() => nextStep()} className={`${roobertMedium.className} ${styles.button__text}`}><span>Next</span><Arrow/></a>

    </div>
  );
};
