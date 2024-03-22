import React from "react";
import styles from "./Faq.module.css";
import { roobertBold } from "@/fonts/fonts";
import { Card } from "./Card";

export const Faq = () => {
  return (
    <section id="FAQ" className={styles.section}>
      <h1
        className={`${styles.title} ${roobertBold.className}`}
        data-aos="fade-down"
      >
        Frequently asked <br /> questions
      </h1>
      <div>
        <Card
          title={"What is Pcp"}
          description={
            <span>
              Personal Contract Purchase (PCP) is effectively a personal loan
              which allows drivers to spread the payments for a car over a long
              period, typically two or three years <br />
              <br />
              However, unlike a normal personal loan, you won&apos;t be paying
              off the full value of the car and you won&apos;t necessarily own
              it at the end of the deal, unless you choose to pay the final
              balloon payment PCP is one of the more complex financial products
              available to help you buy a car, but it can be broken down into
              three main parts: the deposit, the amount you borrow and the
              balloon payment
            </span>
          }
        />
        <Card
          title={"What is Pcp"}
          description={
            <span>
              Personal Contract Purchase (PCP) is effectively a personal loan
              which allows drivers to spread the payments for a car over a long
              period, typically two or three years <br />
              <br />
              However, unlike a normal personal loan, you won&apos;t be paying
              off the full value of the car and you won&apos;t necessarily own
              it at the end of the deal, unless you choose to pay the final
              balloon payment PCP is one of the more complex financial products
              available to help you buy a car, but it can be broken down into
              three main parts: the deposit, the amount you borrow and the
              balloon payment
            </span>
          }
        />
        <Card
          title={"What is Pcp"}
          description={
            <span>
              Personal Contract Purchase (PCP) is effectively a personal loan
              which allows drivers to spread the payments for a car over a long
              period, typically two or three years <br />
              <br />
              However, unlike a normal personal loan, you won&apos;t be paying
              off the full value of the car and you won&apos;t necessarily own
              it at the end of the deal, unless you choose to pay the final
              balloon payment PCP is one of the more complex financial products
              available to help you buy a car, but it can be broken down into
              three main parts: the deposit, the amount you borrow and the
              balloon payment
            </span>
          }
        />
        <Card
          title={"What is Pcp"}
          description={
            <span>
              Personal Contract Purchase (PCP) is effectively a personal loan
              which allows drivers to spread the payments for a car over a long
              period, typically two or three years <br />
              <br />
              However, unlike a normal personal loan, you won&apos;t be paying
              off the full value of the car and you won&apos;t necessarily own
              it at the end of the deal, unless you choose to pay the final
              balloon payment PCP is one of the more complex financial products
              available to help you buy a car, but it can be broken down into
              three main parts: the deposit, the amount you borrow and the
              balloon payment
            </span>
          }
        />
        <Card
          title={"What is Pcp"}
          description={
            <span>
              Personal Contract Purchase (PCP) is effectively a personal loan
              which allows drivers to spread the payments for a car over a long
              period, typically two or three years <br />
              <br />
              However, unlike a normal personal loan, you won&apos;t be paying
              off the full value of the car and you won&apos;t necessarily own
              it at the end of the deal, unless you choose to pay the final
              balloon payment PCP is one of the more complex financial products
              available to help you buy a car, but it can be broken down into
              three main parts: the deposit, the amount you borrow and the
              balloon payment
            </span>
          }
        />
        <Card
          title={"What is Pcp"}
          description={
            <span>
              Personal Contract Purchase (PCP) is effectively a personal loan
              which allows drivers to spread the payments for a car over a long
              period, typically two or three years <br />
              <br />
              However, unlike a normal personal loan, you won&apos;t be paying
              off the full value of the car and you won&apos;t necessarily own
              it at the end of the deal, unless you choose to pay the final
              balloon payment PCP is one of the more complex financial products
              available to help you buy a car, but it can be broken down into
              three main parts: the deposit, the amount you borrow and the
              balloon payment
            </span>
          }
        />
      </div>
      <div className={styles.footer__block}>
        <div className={styles.first__footerblock}>
          <h1
            className={`${styles.title__footer} ${roobertBold.className}`}
            data-aos="fade-down"
          >
            Don&apos;t let them get away with it
          </h1>
          <p className={styles.description_firstblock} data-aos="fade-down">
            The PCP scandal should never have happened. The compensation you
            could be owed, per car, is the compensation you deserve
          </p>
        </div>
        <div className={styles.second__footerblock}>
          <p className={styles.description} data-aos="fade-down">
            Our panel of experts can help you get compensation
          </p>
        </div>
      </div>
    </section>
  );
};
