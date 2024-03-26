import React, { useState } from "react";
import { RegisterProps } from "../interface";
import styles from "../modules/FastTrackQuestions.module.css";
import { roobertMedium, roobertSemiBold } from "@/fonts/fonts";
import Arrow from "@/icons/arrow.svg";
import { BankType } from "./BankType";

export const FastTrackQuestions: React.FC<RegisterProps> = ({
    register,
    nextStep,
    carNumber,
    finalSumbit
}) => {
    const [financeType, setFinanceType] = useState("");
    const [showRadioOptions, setShowRadioOptions] = useState(false); 


    const handleFinanceTypeChange = (value:any) => {
        setFinanceType(value);
        setShowRadioOptions(true); 
    };

    const handleGoBack = () => {
        setShowRadioOptions(false); 
        setFinanceType(""); 
    };

    
    const renderRadioOptions = () => {
        if (!showRadioOptions) return null; 

        switch (financeType) {
            case "Cash":
                return (
                    <div className="space-y-2">
                        <p className={`${roobertSemiBold.className}`}>Did the car dealership provide you with a choice of lenders and finance types to pick from?</p>
                        <div className="flex space-x-2 lg:w-[40%]"><label className={styles.questionCard}>
                            <input {...register("cashOption")} type="radio" value="Yes" />
                            <p>Yes</p>
                        </label>
                        <label className={styles.questionCard}>
                            <input {...register("cashOption")} type="radio" value="No" />
                            <p>No</p>
                            </label></div>
                    </div>
                );
            case "Card":
                return (
                   <div className="space-y-2">
                        <p className={`${roobertSemiBold.className}`}>Did the car dealership provide you with a choice of lenders and finance types to pick from?</p>
                        <div className="flex space-x-2 lg:w-[40%]">  <label className={styles.questionCard}>
                            <input {...register("cardOption")} type="radio" value="Yes" />
                            <p>Yes</p>
                        </label>
                        <label className={styles.questionCard}>
                            <input {...register("cardOption")} type="radio" value="No" />
                            <p>No</p>
                            </label></div>
                    </div>
                );
            case "Bank":
                return (
                    <BankType register={register} finalSumbit={finalSumbit}/>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.section}>
            <div className={styles.container__title}>
                <p className={`${styles.title} ${roobertSemiBold.className}`}>
                    Fast track questions for:{" "}
                    <span className="text-[#EAC885]">{carNumber}</span>
                </p>
            </div>
           

            <div className={styles.content}>
                {!showRadioOptions && (
                    <>
                        <h1 className={`${styles.title} ${roobertSemiBold.className}`}>
                            How did you pay for your finance?
                        </h1>
                        <div className={styles.question__list}>
                            <label className={styles.questionCard}>
                                <input
                                    type="radio"
                                    value="Cash"
                                    {...register("typeFinance")}
                                    onClick={() => { handleFinanceTypeChange("Cash") }}
                                    checked={financeType === "Cash"}
                                    
                                />
                                <p>Cash</p>
                            </label>
                            <label className={styles.questionCard}>
                                <input
                                    type="radio"
                                    value="Card"
                                    
                                    checked={financeType === "Card"}
                                    {...register("typeFinance")}
                                    onClick={() => { handleFinanceTypeChange("Card") }}
                                />
                                <p>Card</p>
                            </label>
                            <label className={styles.questionCard}>
                                <input
                                    type="radio"
                                    value="Bank"
                                    { ...register("typeFinance") }
                                    onClick={() => { handleFinanceTypeChange("Bank") }}
                           
                                    checked={financeType === "Bank"}
                                />
                                <p>Bank</p>
                            </label>
                        </div>
                    </>
                )}

                {renderRadioOptions()}
<div className="w-full space-y-4">
                {showRadioOptions && (
                <button onClick={handleGoBack} className={`${roobertMedium.className} ${styles.button__outline__text}`}>
                    <span>Go Back To Options</span>
                </button>
            )}
                    {showRadioOptions && financeType !== "Bank" && (
                        <button

                            type="submit"
                            onClick={() => finalSumbit()}
                            className={`${roobertMedium.className} ${styles.button__text}`}
                        >
                            <span>Sumbit Form</span>
                            <Arrow />
                        </button>
                    ) }
                </div>
            </div>
        </div>
    );
};
