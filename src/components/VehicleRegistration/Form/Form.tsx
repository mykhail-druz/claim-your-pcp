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
import { Questions } from "../AdditionalQuestions/Questions";
import { CardDetailThank } from "../Components/CardDetailThank";
import useFormPersist from "react-hook-form-persist";
import { Sign } from "../Sign/Sign";

export const VehicleRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, setValue, watch } = useForm<IFormInput>();

  useFormPersist("vehicleRegistrationForm", {
    watch,
    setValue,

    exclude: ["currentStep"],
  });

  const watchedValueCarNumber = watch("numberCar");
  const watchedFirstName = watch("firstName");

  useEffect(() => {
    const savedStep = localStorage.getItem("currentStep");

    if (savedStep) {
      setCurrentStep(Number(savedStep));
    }
    setIsLoading(false);
  }, [setValue]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    localStorage.setItem("currentStep", String(currentStep + 1));

    nextStep();
  };
  const nextStep = () => {
    setAnimationClass("fade-out");
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
      localStorage.setItem("currentStep", String(currentStep + 1));
      setAnimationClass("fade-in");
      setIsLoading(false);
    }, 500);
  };
  const backStep = () => {
    setAnimationClass("fade-out");
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep(currentStep - 1);
      localStorage.setItem("currentStep", String(currentStep - 1));
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
      component = (
        <ContactInformation register={register} nextStep={onSubmit} />
      );
      break;
    case 2:
      component = (
        <Questions
          register={register}
          nextStep={onSubmit}
          onSubmit={onSubmit}
        />
      );
      break;
    case 3:
      component = (
        <Sign firstName={watchedFirstName} register={register} nextStep={onSubmit} onSubmit={onSubmit} />
      );
      break;
    default:
      component = null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {isLoading ? (
          <div role="status" className="flex w-full">
            <svg
              aria-hidden="true"
              className="mx-auto inline w-8 h-8 animate-spin dark:fill-[#333]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#0267C1"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        ) : (
          <>
            {currentStep > 0 && (
              <a onClick={() => backStep()} className={styles.back}>
                <BackArrow />
                <span style={{ textDecoration: "none" }}>Go Back</span>
              </a>
            )}
            {currentStep <= 1 && (
              <h2 className={`${styles.h2} ${roobertBold.className}`}>
                Let&apos;s find the car you had a pcp agreement with
              </h2>
            )}
            {currentStep === 2 && (
              <p className={`${styles.yourCar} ${roobertSemiBold.className}`}>
                Your Car:
                <span className={styles.red}>{watchedValueCarNumber}</span>
              </p>
            )}
            {currentStep === 2 && <CardDetailThank />}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={animationClass}>{component}</div>
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
