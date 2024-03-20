import React from "react";
import styles from "./Featured.module.css";
import { roobertBold } from "@/fonts/fonts";
export const Featured = () => {
  return (
    <section className={styles.section}>
      <h1
        className={`${styles.title} ${roobertBold.className}`}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        As featured on
      </h1>
      <div className={styles.images__block}>
        <img
          src="/images/featured/image_1.png"
          alt="Daily Mail"
          data-aos="fade-down"
          data-aos-duration="1100"
        />
        <img
          src="/images/featured/image_2.png"
          alt="Auto Express"
          data-aos="fade-down"
          data-aos-duration="1200"
        />
        <img
          src="/images/featured/image_3.png"
          alt="The Guadrian"
          data-aos="fade-down"
          data-aos-duration="1300"
        />
        <img
          src="/images/featured/image_4.png"
          alt="Mirror"
          data-aos="fade-down"
          data-aos-duration="1400"
        />
        <img
          src="/images/featured/image_5.png"
          alt="The Times"
          data-aos="fade-down"
          data-aos-duration="1500"
        />
      </div>
    </section>
  );
};
