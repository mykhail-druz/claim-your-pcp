import {
  roobertBold,
  roobertLight,
  roobertMedium,
  roobertSemiBold,
} from "@/fonts/fonts";
import { RegisterProps } from "../interface";
import styles from "../modules/FindCar.module.css";
import Edit from "@/icons/edit.svg";
import { Controller } from "react-hook-form";
import CustomSelect from "../Input/select";
import { useState } from "react";
import { Unfortunately } from "../Unfortunately/Unfortunately";
import { options } from "./optionsData";

export const FindCar: React.FC<RegisterProps> = ({
  register,
  nextStep,
  carNumber,
  carModel,
  reset,
  control,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.section}>
      <div className="flex flex-col md:flex-row space-x-2">
        <p>Your Car registration Number is </p>
        <div className="flex space-x-2">
          <p className={`${roobertMedium}text-[#FF0000] text-[18px]`}>
            {carNumber}
          </p>
          <button onClick={() => reset()} className="flex items-center">
            <Edit /> <p className="text-[#5DB7DE]">Edit Registration</p>
          </button>
        </div>
      </div>
      <p className={roobertSemiBold.className}>Select your vehicle below</p>
      <label className={styles.carCard}>
        <input type="radio" value={carModel && carModel.carModel} />
        <p> {carModel && carModel.carModel}</p>
      </label>
      {/* <a className={`${styles.not_show} ${roobertLight}`}>
        My Vehicle is not showing or it is not eligible
      </a> */}
      <div className="w-[50%] h-[1px] bg-[#000000]" />
      <div>
        <p className={roobertBold.className}>
          Additional questions about{" "}
          <span className="text-[#FF0000]">{carNumber}</span>
        </p>
        <p>Who was your finance provider for this vehicle?</p>
        <div className="text-start">
          <Controller
            control={control}
            name="financeProvider"
            defaultValue=""
            rules={{ required: false }}
            render={({ field }) => (
              <CustomSelect
                {...field}
                padding
                options={options}
                placeholder="Select a finance provider"
                onChange={(selectedOption: any, actionMeta: any) =>
                  field.onChange(selectedOption.value)
                }
              />
            )}
          />
        </div>
        <div className="mt-8 items-center justify-center space-y-4">
          <p>was the vehicle financed between 2014 - 2020</p>
          <div className={styles.question__container}>
            <label className={styles.questionCard}>
              <input
                {...register("vehicleFinancedBetween")}
                type="radio"
                value="Yes"
                onClick={nextStep}
              />

              <p>Yes</p>
            </label>
            <label className={styles.questionCard}>
              <input
                {...register("vehicleFinancedBetween")}
                type="radio"
                value="No"
                onClick={openModal}
              />
              <p>No</p>
            </label>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Unfortunately register={register} closeModal={closeModal} />
      )}
    </div>
  );
};
