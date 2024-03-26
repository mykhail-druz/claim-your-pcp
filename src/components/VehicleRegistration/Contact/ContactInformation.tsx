import React, { useEffect, useState } from "react";
import styles from "../modules/ContactInformation.module.css";
import { IFormInput, RegisterProps } from "../interface";
import { Input } from "../Input/input";
import { useForm } from "react-hook-form";
import Phone from '@/icons/phone.svg';
import Mail from '@/icons/mail.svg';
import Arrow from '@/icons/arrow.svg';
import { roobertMedium } from "@/fonts/fonts";

export const ContactInformation: React.FC<RegisterProps> = ({ nextStep, formState, register, trigger }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(formState.isValid);
    console.log(formState)
  }, [formState.isValid]);

  
  return (
    <div className={styles.registration}>
      <h1 className={`${styles.title}`}>
        Your contact information
      </h1>
      <div className={styles.inputs}>
        <Input trigger={trigger} label_title={'Name'} label_desc={"Please Provide your name"} placeholder="First Name" label={"firstName"} register={register} required={{ required: true, minLength: 3,maxLength:30 }} />
        {formState.errors.firstName && <p className="red">Please write correct Firstname</p>}
        <Input label_title={'Mobile telephone number'} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" label_desc={"We'll update you about your claim via SMS"} placeholder="Phone" label={"phoneNumber"} register={register} required={{ required: true, minLength: 3, pattern: /[0-9]{3}-[0-9]{3}-[0-9]{4}/, valueAsNumber: true, }} type="tel" icon={<Phone />} />
        {formState.errors.phone && <p className="red">Please write correct phone</p>}
        <Input label_title={'Email address'} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" label_desc={"We'll update you about your claim via email"} placeholder="Email" label={"email"} register={register} required={{ required: true, minLength: 3, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ }} icon={<Mail />} />
        {formState.errors.email && <p className="red">Please write correct mail</p>}
      </div>

      <button
        type="button"
        onClick={() => { nextStep() }}
        className={`${roobertMedium.className} ${styles.button__text}`}
      >
        <span>Next</span>
        <Arrow />
      </button>
    </div>
  );
};
