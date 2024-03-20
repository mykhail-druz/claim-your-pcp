import React from "react";
import styles from "./SolveProblem.module.css";
import { roobertBold } from "@/fonts/fonts";

interface CardProps {
  title: string;
  desc: string;
  bgColor: string;
  className: string;
  dataAos?: string;
  dataAosDuration?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  desc,
  bgColor,
  className,
  dataAos,
  dataAosDuration,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className={`${styles.cardBg} ${className}`}
    >
      <h1
        className={`${styles.card__title} ${roobertBold.className}`}
        data-aos={dataAos}
        data-aos-duration={dataAosDuration}
      >
        {title}
      </h1>
      <p
        className={`${styles.card__desc}`}
        data-aos={dataAos}
        data-aos-duration={dataAosDuration}
      >
        {desc}
      </p>
    </div>
  );
};
