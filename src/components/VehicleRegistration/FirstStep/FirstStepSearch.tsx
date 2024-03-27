import React, { useEffect, useState } from 'react';
import Search from "@/icons/search.svg";
import styles from '../modules/Form.module.css';
import { roobertBold, roobertLight, roobertMedium } from '@/fonts/fonts';
import { RegisterProps } from '../interface';
import { parseString } from 'xml2js';

export const FirstStepSearch: React.FC<RegisterProps> = ({ register, nextStep, carNumber, setValue }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [vehicleData, setVehicleData] = useState<any>(null); // State to store vehicle data
    const [error, setError] = useState<string | null>(null); // State to store error message

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const handleSearch = async () => {
        const registrationNumber = carNumber;
        const username = "dovek";
        try {
            const response = await fetch(`https://www.regcheck.org.uk/api/reg.asmx/Check?RegistrationNumber=${registrationNumber}&username=${username}`);
            if (!response.ok) {
                throw new Error('Failed to fetch vehicle data');
            }
            const textData = await response.text();
         console.log('====================================');
            console.log(textData);
         console.log('====================================');
            parseString(textData, (err, result) => {
                if (err) {
                    throw new Error('Failed to parse XML response');
                }
                // Extract the relevant data from the parsed JSON
                const jsonData = result?.Vehicle?.vehicleJson[0];
                if (!jsonData) {
                    throw new Error('No data found in the XML response');
                }
                // Register JSON data to form fields
                Object.keys(jsonData).forEach((key) => {
                    setValue(key, jsonData[key][0]);
                });
                setError(null);
                nextStep();
            });
        } catch (error) {
            console.error('Error fetching vehicle data:', error);
            setError('Failed to fetch vehicle data. Please try again.');
        }

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
                    onClick={handleSearch}
                    className={`${styles.input_button} ${roobertMedium.className}`}
                >
                    Search
                </button>
            </div>
            <button className={`${styles.mobile_button}`}>Search</button>
            {error && <p className="text-red-500">{error}</p>}
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
            <input type="hidden" {...register("vehicleData")} />
            <p className={`${styles.skip} ${roobertMedium.className}`}>
                Skip Registration Plate
            </p>
        </div>
    );
};
