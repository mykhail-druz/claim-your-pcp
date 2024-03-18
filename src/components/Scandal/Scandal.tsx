import React from "react";
import styles from "./Scandal.module.css";
import { roobertBold } from "@/fonts/fonts";
export const Scandal = () => {
  return (
    <section className={styles.section}>
      <h1 className={`${styles.title} ${roobertBold.className}`}>
        Bigger scandal <br /> than PPI
      </h1>
      <p className={`${styles.desc}`}>
        Millions have already claimed their compensation on mis-sold PPI
        don&apos;t miss your chance to claim your compensation for mis-sold car
        finance
      </p>
      <div>
        <a className={styles.button} href="/">
          Check my claim
        </a>
      </div>
    </section>
  );
};
