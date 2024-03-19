"use client";
import {
  roobertBold,
  roobertLight,
  roobertMedium,
  roobertSemiBold,
} from "@/fonts/fonts";
import styles from "./VehicleRegistration.module.css";


import { useEffect, useState } from "react";
import { FirstStepSearch } from "./FirstStepSearch";
import { ContactInformation } from "./ContactInformation";


export const VehicleRegistration = () => {
const [currentStep, setCurrentStep] = useState(0)

const nextStep = () => {
  setCurrentStep(currentStep + 1)
  console.log('====================================');
  console.log(currentStep);
  console.log('====================================');
 
}
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.h2} ${roobertBold.className}`}>
          Let&apos;s find the car you had a pcp agreement with
        </h2>
        <form action="">
        
          {currentStep === 0 && (<FirstStepSearch />)
          }
          {currentStep === 1 && (<ContactInformation />)
          }
          <a  onClick={() => nextStep()}>next step</a>
        </form>
        <div className={styles.desc_container}>
          <div className={`${styles.desc_first} ${roobertLight.className}`}>
            <p>
              The car
              <span className={roobertSemiBold.className}>
                 no longer has to be in your possession,
              </span>
              nor does the finance agreement need to still be active
            </p>
          </div>
          <div className={`${styles.desc_second} ${roobertLight.className}`}>
            <p>
               We&apos;ll find all your paperwork for you, and help you
              <span className={roobertSemiBold.className}>
                claim back an average of £3,000 per car
              </span>
               on the interest and fees you paid on eligible agreements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
