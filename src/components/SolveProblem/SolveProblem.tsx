import React from "react";
import styles from "./SolveProblem.module.css";
import { roobertBold, roobertSemiBold } from "@/fonts/fonts";
import { Card } from "./Card";

export const SolveProblem = () => {
  return (
    <section className={styles.section}>
      <h1
        className={`${styles.title} ${roobertBold.className}`}
        data-aos="fade-down"
        data-aos-duration="900"
      >
        We help you solve <br />
        <span className="text-primary">the problem</span>
      </h1>
      <p
        className={styles.description}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        All of the figures are cited from
        <span className={styles.after}>&nbsp;this</span> article
      </p>
      <div
        className={styles.button__block}
        data-aos="fade-in"
        data-aos-duration="1100"
      >
        <a href="/" className={`${styles.button} ${roobertSemiBold.className}`}>
          Check my claim
        </a>
      </div>
      <div className={styles.card__block}>
        <Card
          dataAos="fade-in"
          dataAosDuration="1100"
          title={"£1,000"}
          desc={
            "Consumers often face extra costs for insurance products covering minor damages, which can add over £1,000 to their overall expenses"
          }
          bgColor={"#EDDFC3"}
          className={" lg:translate-x-[45px] lg:rotate-[5deg] rotate-[5deg]"}
        />
        <Card
          dataAos="fade-in"
          dataAosDuration="1200"
          title={"90%"}
          desc={
            "More than 90% of car finance deals now involve PCP credit, showing its overwhelming prevalence in the sector"
          }
          bgColor={"#D4F2FF"}
          className={
            "lg:translate-y-[90px] lg:rotate-[-5deg] translate-y-[-16px] rotate-[-3.5deg] self-end"
          }
        />
        <Card
          dataAos="fade-in"
          dataAosDuration="1300"
          title={"£ 41 Billon"}
          desc={
            "The total lending related to car finance in 2021, highlighting the significant scale of the car finance market"
          }
          bgColor={"#FFFCBF"}
          className={
            "lg:-translate-x-[45px] lg:-translate-y-[45px] lg:rotate-[-9deg] translate-y-[-9px] rotate-[9deg]"
          }
        />
      </div>
    </section>
  );
};
