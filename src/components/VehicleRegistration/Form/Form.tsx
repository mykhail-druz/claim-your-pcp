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
import { Questions } from "../AdditionalQuestions/Questions";
import { CardDetailThank } from "../Components/CardDetailThank";
import useFormPersist from 'react-hook-form-persist'

export const VehicleRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, setValue, watch } = useForm<IFormInput>();


    useFormPersist("vehicleRegistrationForm", {
      watch,
      setValue,

      exclude: ['currentStep']
    });


  const watchedValueCarNumber = watch('numberCar');

  useEffect(() => {
    const savedStep = localStorage.getItem('currentStep');

    if (savedStep) {
      setCurrentStep(Number(savedStep));
    }
    setIsLoading(false);
  }, [setValue]);



  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    localStorage.setItem('currentStep', String(currentStep + 1));
    

    nextStep();
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
    setIsLoading(true)
    setTimeout(() => {
      setCurrentStep(currentStep - 1);
      localStorage.setItem('currentStep', String(currentStep - 1));
      setAnimationClass("fade-in");
      setIsLoading(false);
    }, 500);
  };

  let component;
  switch (currentStep) {
    case 0:
      component = <FirstStepSearch register={register} nextStep={onSubmit} />;
      break;
    case 1:
      component = <ContactInformation register={register} nextStep={onSubmit} />;
      break;
      case 2:
      component = <Questions register={register} nextStep={onSubmit} onSubmit={onSubmit} />;
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
              {currentStep <= 1 && <h2 className={`${styles.h2} ${roobertBold.className}`}>
              Let&apos;s find the car you had a pcp agreement with
            </h2>}
              {currentStep === 2 && (
                <p className={`${styles.yourCar} ${roobertSemiBold.className}`}>Your Car:<span className={styles.red}>{watchedValueCarNumber}</span></p>
              )}
              {currentStep === 2 && (
                <CardDetailThank />
              )}
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
