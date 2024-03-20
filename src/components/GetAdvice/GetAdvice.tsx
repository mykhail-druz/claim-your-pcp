import React from "react";
import styles from "./GetAdvice.module.css";
import { roobertBold } from "@/fonts/fonts";
import { Takeback } from "./Takeback";

export const GetAdvice = () => {
  return (
    <section className={styles.section}>
      <div className={styles.text__block} data-aos="fade-down">
        <Takeback  />
        <h1 className={`${styles.title} ${roobertBold.className}`} data-aos="fade-down">
          Get expert advice
        </h1>
        <p className={styles.description} data-aos="fade-down">
          Our panel of experts are ready and waiting to help you with your
          claim. All of who are regulated by the Solicitors Regulation Authority
        </p>
        <a href="/" className={styles.button} data-aos="fade-down">
          Check my claim
        </a>
      </div>
      <div className={styles.image__block}>
        <img
          className={styles.image}
          src="/images/advice/advice.png"
          alt="Solicitors Regular Authority"
          data-aos="fade-down"
        />
      </div>
    </section>
  );
};
