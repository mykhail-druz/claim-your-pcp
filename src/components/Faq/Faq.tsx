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
        Have A Question On PCP Claims?
      </h1>
      <div>
        <Card
          title={"What exactly is a PCP Car Finance Claim?"}
          description={
            <span>
              A PCP (Personal Contract Purchase) car finance claim is raised
              when an individual believes they were not fully informed or misled
              about their PCP agreement’s terms.
              <br />
              <br />
              This can involve unclear information about interest rates,
              commission structures, or the final balloon payment, potentially
              leading to a claim for compensation.
            </span>
          }
        />
        <Card
          title={"How can I tell if my PCP car finance was mis-sold to me?"}
          description={
            <span>
              If you weren’t provided with complete information about the total
              cost of your agreement, if undisclosed high commissions influenced
              the deal, or if terms regarding mileage limits or balloon payments
              were not made clear, you might have been mis-sold PCP car finance.
              <br />
              <br />
              Examining your finance agreement for undisclosed terms or
              discrepancies is crucial in identifying mis-selling.
            </span>
          }
        />
        <Card
          title={"Who qualifies to make a claim against PCP Car Finance?"}
          description={
            <span>
              Individuals who entered into a PCP agreement before 2021 without
              full disclosure or understanding of the agreement’s implications,
              or who were misled about the financial terms, might have grounds
              for a claim. <br />
              <br />
              This encompasses not being informed about aspects like interest
              rates, commission structures, or the comprehensive terms and
              conditions of their finance agreement.
            </span>
          }
        />
        <Card
          title={"What are the steps to address a mis-sold PCP claim?"}
          description={
            <span>
              Begin by reviewing your finance agreement for any undisclosed
              terms. Compile all pertinent documentation and evidence of your
              communications with the finance provider. <br />
              <br />
              It’s advisable to seek professional advice from a legal expert
              specialising in PCP claims to understand your situation better and
              to explore your options.
              <br />
              <br />
              Should you decide to proceed, taking legal action to seek
              compensation is the next step.
            </span>
          }
        />
        <Card
          title={"How long does the PCP claim process take?"}
          description={
            <span>
              The duration of the PCP claim process can vary significantly
              depending on the complexity of your case, the responsiveness of
              your finance provider, and whether legal proceedings are
              necessary. <br />
              <br />
              Seeking our advice can provide a more precise timeline based on
              the specifics of your situation.
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
