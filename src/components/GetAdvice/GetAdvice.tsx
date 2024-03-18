import React from "react";
import styles from "./GetAdvice.module.css";
import { roobertBold, roobertLight } from "@/fonts/fonts";

export const GetAdvice = () => {
  return (
    <section className={styles.section}>
      <div className={styles.text__block}>
        <p className={`${styles.subtitle} ${roobertLight.className}`}>
          Takeback what&apos;s yours
        </p>
        <h1 className={`${styles.title} ${roobertBold.className}`}>
          Get expert advice
        </h1>
        <p className={styles.description}>
          Our panel of experts are ready and waiting to help you with your
          claim. All of who are regulated by the Solicitors Regulation Authority
        </p>
        <a href="/" className={styles.button}>
          Check my claim
        </a>
      </div>
      <div className={styles.image__block}>
        <img
          className={styles.image}
          src="/images/advice/advice.png"
          alt="Solicitors Regular Authority"
        />
      </div>
    </section>
  );
};
