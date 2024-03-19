import React from "react";
import styles from "./YouCould.module.css";
import { Takeback } from "../GetAdvice/Takeback";
import { roobertBold, roobertLight } from "@/fonts/fonts";
import CheckCircle from "@/icons/check-circle.svg";

export const YouCould = () => {
  return (
    <section className={styles.section}>
      <div className={styles.left__block}>
        <div className={styles.text__block}>

                  <p className={`${styles.subtitle} ${roobertLight.className}`}>
                      Takeback what&apos;s yours
                  </p>
                 
          <h1 className={`${styles.title} ${roobertBold.className}`}>
            You could be a victim <br /> of the scandal
          </h1>
        </div>
        <div className={styles.list}>
          <div className={styles.check__item}>
            <div className="rounded-full bg-white p-1">
              <CheckCircle />
            </div>
            <p
              className={`${styles.check__item__text} ${roobertLight.className}`}
            >
              Claim compensation for current cars
            </p>
          </div>
          <div className={styles.check__item}>
            <div className="rounded-full bg-white p-1">
              <CheckCircle />
            </div>
            <p
              className={`${styles.check__item__text} ${roobertLight.className}`}
            >
              Claim compensation for past cars
            </p>
          </div>
          <div className={styles.check__item}>
            <div className="rounded-full bg-white p-1">
              <CheckCircle />
            </div>
            <p
              className={`${styles.check__item__text} ${roobertLight.className}`}
            >
              Panel of finance claim specialists
            </p>
          </div>
          <div className={styles.check__item}>
            <div className="rounded-full bg-white p-1">
              <CheckCircle />
            </div>
            <p
              className={`${styles.check__item__text} ${roobertLight.className}`}
            >
              No obligation review of your case
            </p>
          </div>
          <div className={styles.check__item}>
            <div className="rounded-full bg-white p-1">
              <CheckCircle />
            </div>
            <p
              className={`${styles.check__item__text} ${roobertLight.className}`}
            >
              Easy claim process
            </p>
          </div>
        </div>
        <div>
          <a className={styles.button} href="/">
            Check my claim
          </a>
        </div>
      </div>
      <div className={styles.right__block}>
        <img src="/images/scandal/car.png" alt="" />
      </div>
    </section>
  );
};
