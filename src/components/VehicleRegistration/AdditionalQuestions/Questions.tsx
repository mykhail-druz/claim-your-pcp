import React from "react";
import styles from "../modules/AdditionalQuestions.module.css";
import { RegisterProps } from "../interface";
import { roobertBold, roobertMedium, roobertSemiBold } from "@/fonts/fonts";
import Arrow from "@/icons/arrow.svg";

export const Questions: React.FC<RegisterProps> = ({ register, nextStep, onSubmit }) => {
  return (
    <div className={styles.registration}>
      <div className={styles.question__list}>
        <div className={styles.question__item}>
          <p className={`${styles.input__title} ${roobertSemiBold.className}`}>
            Question 1
          </p>
          <p className={styles.input__desc}>
            Were you aware that the car dealership received commission for
            arranging the finance to purchase the car?
          </p>
          <div className={styles.question__container}>
            <label className={styles.questionCard}>
              <input {...register("question1")} type="radio" value="Yes" />

              <p>Yes</p>
            </label>
            <label className={styles.questionCard}>
              <input {...register("question1")} type="radio" value="No" />

              <p>No</p>
            </label>
          </div>
        </div>
        <div className={styles.question__item}>
          <p className={`${styles.input__title} ${roobertSemiBold.className}`}>
            Question 2
          </p>
          <p className={styles.input__desc}>
            Were you provided with documentation that contained information
            about the commission the car dealership would receive?
          </p>
          <div className={styles.question__container}>
            <label className={styles.questionCard}>
              <input {...register("question2")} type="radio" value="Yes" />

              <p>Yes</p>
            </label>
            <label className={styles.questionCard}>
              <input {...register("question2")} type="radio" value="No" />

              <p>No</p>
            </label>
          </div>
        </div>
        <div className={styles.question__item}>
          <p className={`${styles.input__title} ${roobertSemiBold.className}`}>
            Question 3
          </p>
          <p className={styles.input__desc}>
            Did you trust the car dealership to find the best finance for you?
          </p>
          <div className={styles.question__container}>
            <label className={styles.questionCard}>
              <input {...register("question3")} type="radio" value="Yes" />

              <p>Yes</p>
            </label>
            <label className={styles.questionCard}>
              <input {...register("question3")} type="radio" value="No" />

              <p>No</p>
            </label>
          </div>
        </div>
        <div className={styles.question__item}>
          <p className={`${styles.input__title} ${roobertSemiBold.className}`}>
            Question 4
          </p>
          <p className={styles.input__desc}>
            Have you recently submitted a diesel claim or have you already had a
            successful diesel claim for this car?
          </p>
          <div className={styles.question__container}>
            <label className={styles.questionCard}>
              <input {...register("question4")} type="radio" value="Yes" />

              <p>Yes</p>
            </label>
            <label className={styles.questionCard}>
              <input {...register("question4")} type="radio" value="No" />

              <p>No</p>
            </label>
          </div>
        </div>
        <div className={styles.question__item}>
          <p className={`${styles.input__title} ${roobertSemiBold.className}`}>
            Question 5
          </p>
          <p className={styles.input__desc}>
            Are you currently in an IVA, bankruptcy or other debt management
            arrangement?
          </p>
          <div className={styles.question__container}>
            <label className={styles.questionCard}>
              <input {...register("question5")} type="radio" value="Yes" />

              <p>Yes</p>
            </label>
            <label className={styles.questionCard}>
              <input {...register("question5")} type="radio" value="No" />

              <p>No</p>
            </label>
          </div>
        </div>
      </div>
      <a
              onClick={() => onSubmit()}
        className={`${roobertMedium.className} ${styles.button__text}`}
      >
        <span>Next</span>
        <Arrow />
      </a>
    </div>
  );
};
