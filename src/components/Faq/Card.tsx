"use client";
import React, { ReactNode, useState } from "react";
import styles from "./Faq.module.css";
import Arrow from "@/icons/arrow.svg";
import { roobertBold } from "@/fonts/fonts";

interface CardProps {
  title: string;
  description: ReactNode;
}
export const Card: React.FC<CardProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`${styles.card}`} onClick={toggleOpen} data-aos="fade-down">
      <div className={styles.card_title__container}>
        <h3
          className={`${isOpen ? styles.title_open : styles.title_closed} ${
            roobertBold.className
          }`}
        >
          {title}
        </h3>
        <div
          className={`${
            isOpen ? styles.arrow_container_open : styles.arrow_container_closed
          }`}
        >
          <Arrow
            className={`${isOpen ? styles.arrow_open : styles.arrow_closed}`}
          />
        </div>
      </div>

      <p className={`${isOpen ? styles.open : styles.card_desc}`}>
        {description}
      </p>
    </div>
  );
};
