import React from "react";
import styles from "./Scandal.module.css";
import { roobertBold } from "@/fonts/fonts";
export const Scandal = () => {
  return (
    <section className={styles.section}>
      <h1
        className={`${styles.title} ${roobertBold.className}`}
        data-aos="fade-down"
        data-aos-duration="900"
      >
        Bigger scandal <br /> than PPI
      </h1>
      <p
        className={`${styles.desc}`}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Millions have already claimed their compensation on mis-sold PPI
        don&apos;t miss your chance to claim your compensation for mis-sold car
        finance
      </p>
      <div>
        <a
          className={styles.button}
          href="/"
          data-aos="fade-down"
          data-aos-duration="1100"
        >
          Check my claim
        </a>
      </div>
    </section>
  );
};
