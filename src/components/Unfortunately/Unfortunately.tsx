"use client"
import React, { useEffect } from "react";
import styles from "./Unfortunately.module.css";
import { roobert, roobertSemiBold } from "@/fonts/fonts";
import Logo from "@/icons/logo.svg";
import Arrow from "@/icons/arrow.svg"

export const Unfortunately = () => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <Logo />
          <p className={`${styles.title} ${roobertSemiBold.className}`}>
            Unfortunately, we can&apos;t help
          </p>
          <p className={`${styles.desc_first} ${roobert.className}`}>
            The vehicle&apos;s finance must have been between 2014 - 2020 for it to
            be eligible for a claim. We apologise for any inconvenience caused
          </p>
          <p className={`${styles.desc_second} ${roobertSemiBold.className}`}>
            If this choice was made in error, please click the button below to
            return to the form
          </p>
        </div>
        <button className={styles.button}><p>Go Back</p> <Arrow/> </button>
      </div>
    </section>
  );
};
