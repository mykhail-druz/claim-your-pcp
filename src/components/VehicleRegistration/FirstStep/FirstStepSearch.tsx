import React, { useEffect, useState } from "react";
import Search from "@/icons/search.svg";
import styles from "../modules/Form.module.css";
import { roobertBold, roobertLight, roobertMedium } from "@/fonts/fonts";
import { RegisterProps } from "../interface";
import convert from "xml-js";

export const FirstStepSearch: React.FC<RegisterProps> = ({
  register,
  nextStep,
  carNumber,
  setValue,
  skipRegistration,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [vehicleData, setVehicleData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleSearch = async () => {
    const registrationNumber = carNumber;
    const username = "pearsonlocke";
    try {
          const response = await fetch(`https://www.regcheck.org.uk/api/reg.asmx/Check?RegistrationNumber=${registrationNumber}&username=${username}`);
          if (!response.ok) {
              throw new Error('Failed to fetch vehicle data');
          }
          const textData = await response.text();
      //  console.log('====================================');
      //     console.log(textData);
      //  console.log('====================================');
//       const textData = `<?xml version="1.0" encoding="utf-8"?>

// <Vehicle xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://regcheck.org.uk">

//   <vehicleJson>{
//   "ABICode": "",
//   "Description": "BMW 520",
//   "RegistrationYear": 2011,
//   "CarMake": {
//     "CurrentTextValue": "BMW"
//   },
//   "CarModel": {
//     "CurrentTextValue": "520"
//   },
//   "EngineSize": {
//     "CurrentTextValue": ""
//   },
//   "FuelType": {
//     "CurrentTextValue": "Diesel"
//   },
//   "MakeDescription": "BMW",
//   "ModelDescription": "520",
//   "Immobiliser": {
//     "CurrentTextValue": ""
//   },
//   "NumberOfSeats": {
//     "CurrentTextValue": ""
//   },
//   "DriverSide": {
//     "CurrentTextValue": ""
//   },
//   "ImageUrl": "https://www.regcheck.org.uk/image.aspx/@Qk1XIDUyMA==",
//   "Colour": "Black",
//   "BodyStyle": {
//     "CurrentTextValue": ""
//   },
//   "VehicleInsuranceGroup": 14,
//   "VehicleInsuranceGroupOutOf": 20
// }</vehicleJson>

//   <vehicleData>

//     <ABICode />

//     <Description>BMW 520</Description>

//     <RegistrationYear>2011</RegistrationYear>

//     <CarMake>

//       <CurrentTextValue>BMW</CurrentTextValue>

//     </CarMake>

//     <CarModel>520</CarModel>

//     <BodyStyle>

//       <CurrentTextValue />

//     </BodyStyle>

//     <EngineSize>

//       <CurrentTextValue />

//     </EngineSize>

//     <FuelType>

//       <CurrentTextValue>Diesel</CurrentTextValue>

//     </FuelType>

//     <ModelDescription>520</ModelDescription>

//     <Immobiliser>

//       <CurrentTextValue />

//     </Immobiliser>

//   </vehicleData>

// </Vehicle>`;
      const covertData = convert.xml2js(textData);
      const carModel =
        covertData.elements[0].elements[1].elements[1].elements[0].text;
      setValue("carModel", {
        carModel: carModel,
        registationNumber: registrationNumber,
      });
      nextStep();
    } catch (error) {
      console.error("Error fetching vehicle data:", error);
      setError("Failed to fetch vehicle data. Please try again.");
    }
  };

  useEffect(() => {
    const switchElement = document.querySelector(".switch") as HTMLElement;
    switchElement.style.borderColor = isChecked ? "#4CAF50" : "#ccc";
  }, [isChecked]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(inputValue)
  };
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
          required
          {...register("numberCar", {
            required: true,
            minLength: 4,
            maxLength: 8,
          })}
          onChange={(e) => handleInputChange(e)}
        />
        <a
          // type="button"
          // disabled={!inputValue.trim()}
          onClick={()=>handleSearch()}
          className={`${styles.input_button} ${roobertMedium.className}`}
        >
          Search
        </a>
      </div>
      <a onClick={() => handleSearch()} className={`${styles.mobile_button}`}>Search</a>
      {/* {error && <p className="text-red-500">{error}</p>} */}
      <div className="flex space-x-2 items-center">
        <label className="switch">
          <input
            type="checkbox"
            checked={isChecked}

            {...register("privateReg")}
            onChange={() => toggleCheckbox()}
          />
          <span className="slider"></span>
        </label>
        <a
          className={`${styles.reg_vehicle} ${roobertMedium.className}`}
          onClick={() => toggleCheckbox()}
        >
          {isChecked ? "Private Reg Vehicle?" : "Non-Private Reg Vehicle?"}
        </a>
      </div>
      <div className="pt-4">
        <a
          onClick={() => skipRegistration()}
          className={`${styles.skip} ${roobertMedium.className}`}
        >
          Skip Registration Plate
        </a>
      </div>
    </div>
  );
};
