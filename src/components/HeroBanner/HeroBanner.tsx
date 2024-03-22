import React from "react";
import Image from "next/image";
import styles from "./HeroBanner.module.css";
import { roobertBold, roobertLight, roobertSemiBold } from "@/fonts/fonts";
import Magnet from "@/icons/magnet.svg";
import Champ from "@/icons/champ.svg";
import Wifi from "@/icons/wifi.svg";

export const HeroBanner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.text__block}>
        <h1
          className={`${styles.title} ${roobertBold.className}`}
          data-aos="fade-down"
          data-aos-duration="1300"
        >
          Ever bought a car <br /> on{" "}
          <span className="text-primary">finance?</span>
        </h1>
        <p
          className={`${styles.desc} ${roobertLight.className}`}
          data-aos="fade-down"
          data-aos-duration="1400"
        >
          If you did so between 2014 - 2020 you could be owed an average refund
          of £ 3,000per car in compensation
        </p>
        <div
          className={styles.button__block}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <a
            href="/"
            className={`${styles.button} ${roobertSemiBold.className}`}
          >
            Check my claim
          </a>
        </div>
      </div>
      <div
        className={styles.car__block}
        data-aos="fade-up"
        data-aos-duration="1600"
      >
        <img
          src="/images/scandal/car_animation.png"
          className={styles.img}
          alt="Car"
        />
      </div>
      <div className={styles.icons_container}>
        <div
          className={`${styles.magnet} ${roobertSemiBold.className}`}
          data-aos="fade-right"
          data-aos-duration="1600"
        >
          <Magnet />
          <p>Easy Claim Process</p>
        </div>
        <div
          className={`${styles.champ} ${roobertSemiBold.className}`}
          data-aos="fade-left"
          data-aos-duration="1800"
        >
          <Champ />
          <p>No Win, No Fee</p>
        </div>
        <div
          className={`${styles.wifi} ${roobertSemiBold.className}`}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <Wifi />
          <p>Entirely Online</p>
        </div>
      </div>
      <Image className="hidden md:block absolute right-0 bottom-16" src="/images/trustpilot.webp" width={225} height={200} alt="Trustpilot"/>
    </section>
  );
};
