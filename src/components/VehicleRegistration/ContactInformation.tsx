import { roobertBold, roobertLight, roobertMedium } from "@/fonts/fonts";
import styles from "./ContactInformation.module.css"

export const ContactInformation = () => {
  
    return ( 
        <div className={styles.registration}>
            <p className={`${roobertBold.className} text-[18px] text-center`}>
                Enter vehicle registration number
            </p>
            <p className={`${roobertLight.className} text-[18px] text-center`}>
                Enter the registration of the car and click “search”
            </p>
            <div className={styles.input_container}>
                {/* <Search /> */}
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
                    {/* <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={toggleCheckbox}
                    /> */}
                    <span className="slider"></span>
                </label>
                <p
                    className={`${styles.reg_vehicle} ${roobertMedium.className}`}
                    // onClick={toggleCheckbox}
                >
                    {/* {isChecked ? "Private Reg Vehicle?" : "Non-Private Reg Vehicle?"} */}
                </p>
            </div>
            <p className={`${styles.skip} ${roobertMedium.className}`}>
                Skip Registration Plate
            </p>
        </div>
     );
}
