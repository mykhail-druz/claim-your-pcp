"use client";
import React, { useEffect, useState } from "react";
import styles from "../modules/OtherCars.module.css";
import { roobert, roobertSemiBold } from "@/fonts/fonts";
import Logo from "@/icons/logo.svg";
import Close from "@/icons/close.svg";
import { RegisterProps } from "../interface";

interface OtherCarsProps extends RegisterProps {
  closeModal: () => void;
}

export const OtherCars: React.FC<OtherCarsProps> = ({
  register,
  carNumber,
  closeModal,
  nextStep,
}) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <Logo />
          <p className={`${styles.title} ${roobertSemiBold.className}`}>
            Your car(s): <span className="text-[#FF0000]">{carNumber}</span>
          </p>
          <div className="flex flex-col justify-center items-center space-y-2">
            <p
              className={`${styles.title} ${roobertSemiBold.className} w-[70%]`}
            >
              Have you had any other cars on finance between 2014 - 2020?
            </p>
            <div className={styles.question__container}>
              <label className={styles.questionCard}>
                <input
                  {...register("questionOtherCars")}
                  type="radio"
                  value="Yes"
                  onClick={nextStep}
                />
                <p>Yes</p>
              </label>
              <label className={styles.questionCard}>
                <input
                  {...register("questionOtherCars")}
                  type="radio"
                  value="No"
                  onClick={nextStep}
                />
                <p>No</p>
              </label>
            </div>
          </div>
        </div>
        <button className={styles.close} onClick={closeModal}>
          <Close />
        </button>
      </div>
    </section>
  );
};
