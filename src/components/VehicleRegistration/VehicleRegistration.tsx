"use client";
import {
  roobertBold,
  roobertLight,
  roobertMedium,
  roobertSemiBold,
} from "@/fonts/fonts";
import styles from "./VehicleRegistration.module.css";

import Search from "@/icons/search.svg";
import { useEffect, useState } from "react";

export const VehicleRegistration = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const switchElement = document.querySelector(".switch") as HTMLElement;
    switchElement.style.borderColor = isChecked ? "#4CAF50" : "#ccc";
  }, [isChecked]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.h2} ${roobertBold.className}`}>
          Let’s find the car you had a pcp agreement with
        </h2>
        <div className={styles.registration}>
          <p className={`${roobertBold.className} text-[18px] text-center`}>
            Enter vehicle registration number
          </p>
          <p className={`${roobertLight.className} text-[18px] text-center`}>
            Enter the registration of the car and click “search”
          </p>
          <div className={styles.input_container}>
            <Search />
            <input
              type="text"
              className={`${styles.input} ${roobertMedium.className}`}
              placeholder="Enter vehicle registration number"
            />
            <button
              className={`${styles.input_button} ${roobertMedium.className}`}
            >
              Search
            </button>
          </div>
          <button className={`${styles.mobile_button}`}>Search</button>
          <div className="flex space-x-2 items-center">
            <label className="switch">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={toggleCheckbox}
              />
              <span className="slider"></span>
            </label>
            <p
              className={`${styles.reg_vehicle} ${roobertMedium.className}`}
              onClick={toggleCheckbox}
            >
              {isChecked ? "Private Reg Vehicle?" : "Non-Private Reg Vehicle?"}
            </p>
          </div>
          <p className={`${styles.skip} ${roobertMedium.className}`}>
            Skip Registration Plate
          </p>
        </div>
        <div className={styles.desc_container}>
          <div className={`${styles.desc_first} ${roobertLight.className}`}>
            <p>
              The car
              <span className={roobertSemiBold.className}>
                 no longer has to be in your possession,
              </span>{" "}
              nor does the finance agreement need to still be active
            </p>
          </div>
          <div className={`${styles.desc_second} ${roobertLight.className}`}>
            <p>
               We'll find all your paperwork for you, and help you 
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
