import React from "react";
import styles from "./YouCould.module.css";
import { Takeback } from "../GetAdvice/Takeback";
import { roobertBold, roobertLight } from "@/fonts/fonts";
import CheckCircle from "@/icons/check-circle.svg";

export const YouCould = () => {
  return (
    <section id="scandal" className={styles.section}>
      <div className={styles.left__block}>
        <div className={styles.text__block}>
          <p
            className={`${styles.subtitle} ${roobertLight.className}`}
            data-aos="fade-down"
            data-aos-duration="900"
          >
            Takeback what&apos;s yours
          </p>

          <h1
            className={`${styles.title} ${roobertBold.className}`}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            You could be a victim <br /> of the scandal
          </h1>
        </div>
        <div className={styles.list}>
          <div
            className={styles.check__item}
            data-aos="fade-down"
            data-aos-duration="1100"
          >
            <div className="rounded-full bg-white p-1">
              <CheckCircle />
            </div>
            <p
              className={`${styles.check__item__text} ${roobertLight.className}`}
            >
              Claim compensation for current cars
            </p>
          </div>
          <div
            className={styles.check__item}
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <div className="rounded-full bg-white p-1">
              <CheckCircle />
            </div>
            <p
              className={`${styles.check__item__text} ${roobertLight.className}`}
            >
              Claim compensation for past cars
            </p>
          </div>
          <div
            className={styles.check__item}
            data-aos="fade-down"
            data-aos-duration="1300"
          >
            <div className="rounded-full bg-white p-1">
              <CheckCircle />
            </div>
            <p
              className={`${styles.check__item__text} ${roobertLight.className}`}
            >
              Panel of finance claim specialists
            </p>
          </div>
          <div
            className={styles.check__item}
            data-aos="fade-down"
            data-aos-duration="1400"
          >
            <div className="rounded-full bg-white p-1">
              <CheckCircle />
            </div>
            <p
              className={`${styles.check__item__text} ${roobertLight.className}`}
            >
              No obligation review of your case
            </p>
          </div>
          <div
            className={styles.check__item}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
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
        <div data-aos="fade-down" data-aos-duration="1600">
          <a className={styles.button} href="/vehicle-registration">
            Check my claim
          </a>
        </div>
      </div>
      <div
        className={styles.right__block}
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <img src="/images/scandal/car.png" alt="Car scandal" />
      </div>
    </section>
  );
};
