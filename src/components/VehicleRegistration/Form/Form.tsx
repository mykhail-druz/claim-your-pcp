"use client";
import {
  roobertBold,
  roobertLight,
  roobertMedium,
  roobertSemiBold,
} from "@/fonts/fonts";
import styles from "../modules/Form.module.css";
import { useEffect, useState } from "react";
import { FirstStepSearch } from "../FirstStep/FirstStepSearch";
import { ContactInformation } from "../Contact/ContactInformation";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { IFormInput } from "../interface";
import { NoLongerCard } from "../Components/NoLongerCard";
import { WillFind } from "../Components/WillFind";
import BackArrow from "@/icons/backArrow.svg";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export const VehicleRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, setValue } = useForm<IFormInput>();


  useEffect(() => {
    const formData = localStorage.getItem('formData');
    const savedStep = localStorage.getItem('currentStep');

    if (formData) {
      const parsedData = JSON.parse(formData);
      Object.keys(parsedData).forEach(key => {
        setValue(key, parsedData[key]);
      });
    }

    if (savedStep) {
      setCurrentStep(Number(savedStep));
    }

    setIsLoading(false);
  }, [setValue]);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    localStorage.setItem('formData', JSON.stringify(data));
    // Дополните логику для перехода к следующему шагу
  };
  const nextStep = () => {
    setAnimationClass("fade-out");
    setIsLoading(true)
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
      localStorage.setItem('currentStep', String(currentStep + 1)); 
      setAnimationClass("fade-in");
      setIsLoading(false)
    }, 500);
  };
  const backStep = () => {
    setAnimationClass("fade-out");

    setTimeout(() => {
      setCurrentStep(currentStep - 1);
      localStorage.setItem('currentStep', String(currentStep - 1));
      setAnimationClass("fade-in");
    }, 500);
  };

  let component;
  switch (currentStep) {
    case 0:
      component = <FirstStepSearch register={register} nextStep={nextStep} />;
      break;
    case 1:
      component = <ContactInformation register={register} nextStep={nextStep} />;
      break;
  
    default:
      component = null;
  }
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {isLoading ? (

          <Loader center
            backdrop
            content="Loading Form" /> 
        ) : (
          <>
            {currentStep > 0 && (
              <a onClick={() => backStep()} className={styles.back}>
                <BackArrow />
                <span style={{textDecoration:'none'}}>Go Back</span>
              </a>
            )}
            <h2 className={`${styles.h2} ${roobertBold.className}`}>
              Let&apos;s find the car you had a pcp agreement with
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={animationClass}>
                  {component}
              </div>
              <button type="button" onClick={nextStep}>
                Next Step
              </button>
            </form>
            {currentStep === 0 && (
              <div className={styles.desc_container}>
                <NoLongerCard />
                <WillFind />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
