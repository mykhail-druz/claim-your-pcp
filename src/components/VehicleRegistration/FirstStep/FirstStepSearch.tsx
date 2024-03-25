import React from 'react'
import Search from "@/icons/search.svg"; 
import styles from '../modules/Form.module.css'
import { roobertBold, roobertLight, roobertMedium } from '@/fonts/fonts';
import { useEffect, useState } from "react";
import { RegisterProps } from '../interface';


export const FirstStepSearch: React.FC<RegisterProps> = ({ register, nextStep,onSubmit }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        const switchElement = document.querySelector(".switch") as HTMLElement;
        switchElement.style.borderColor = isChecked ? "#4CAF50" : "#ccc";
    }, [isChecked]);

  return (
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
                  {...register("numberCar")}
              />
              <button
                  onClick={nextStep}
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
  )
}
