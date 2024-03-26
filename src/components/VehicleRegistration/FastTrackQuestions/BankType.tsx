import { roobertSemiBold } from '@/fonts/fonts';
import React, { useState } from 'react';
import styles from '../modules/FastTrackQuestions.module.css';
import { RegisterProps } from '../interface';

export const BankType: React.FC<RegisterProps> = ({ register, finalSumbit }) => {
    const [showAdditionalQuestions, setShowAdditionalQuestions] = useState(false);
    const [bankOption, setBankOption] = useState("");
    const handleNextQuestion = () => {
        setShowAdditionalQuestions(true); 
    };

    return (
        <div className="space-y-4 flex flex-col -mb-4">
            {!showAdditionalQuestions && <><p className={`${roobertSemiBold.className}`}>
                Did the car dealership provide you with a choice of lenders and finance types to pick from?
            </p>
                <div className="flex space-x-2 lg:w-[40%]">
                    <label className={styles.questionCard}>
                        <input {...register('bankOption')} type="radio" value="Yes" />
                        <p>Yes</p>
                    </label>
                    <label className={styles.questionCard}>
                        <input {...register('bankOption')} type="radio" value="No" />
                        <p>No</p>
                    </label>

                </div>
                <div className='bg-black h-[1.2px] border-0 w-[60%]'/>
                <p className={`${roobertSemiBold.className}`}>
                    Would you have requested further information had you been informed there was a commission
                    payment?
                </p>
                <div className="flex space-x-2 lg:w-[40%]">
                    <label className={styles.questionCard}>
                        <input {...register('haveRequested')} type="radio" value="Yes" />
                        <p>Yes</p>
                    </label>
                    <label className={styles.questionCard}>
                        <input {...register('haveRequested')} type="radio" value="No" />
                        <p>No</p>
                    </label>
                </div>
                <p className={`${roobertSemiBold.className}`}>
                    Would you have enquired about other finance options the dealership could offer you if you had
                    been informed there was a commission payment?
                </p>
                <div className="flex space-x-2 lg:w-[40%]">
                    <label className={styles.questionCard}>
                        <input {...register('haveEnquired')} type="radio" value="Yes" />
                        <p>Yes</p>
                    </label>
                    <label className={styles.questionCard}>
                        <input {...register('haveEnquired')} type="radio" value="No" />
                        <p>No</p>
                    </label>
                </div>
                <p className={`${roobertSemiBold.className}`}>
                    Would you have taken out the finance had you been informed there was a commission payment?
                </p>
                <div className="flex space-x-2 lg:w-[40%]">
                    <label className={styles.questionCard}>
                        <input {...register('takenOutFinance')} type="radio" value="Yes" />
                        <p>Yes</p>
                    </label>
                    <label className={styles.questionCard}>
                        <input {...register('takenOutFinance')} type="radio" value="No" />
                        <p>No</p>
                    </label>
                </div></>}
            {showAdditionalQuestions && ( 
                <div className="lg:w-[50%] mx-auto space-y-2"><p className={`${roobertSemiBold.className}`}> Would you like us to investigate the additional products you purchased that may have also been mis sold or unfair?</p>
                    <div className="flex space-x-2 lg:w-[80%]">
                        <label className={styles.questionCard__additional}>
                            <input {...register('youLikeInvestigate')} type="radio" value={"Yes"} onChange={() => setBankOption("Yes")} />
                            <p>Yes</p>
                        </label>
                        <label className={styles.questionCard__additional}>
                            <input {...register('youLikeInvestigate')} type="radio" value="No" onChange={() => setBankOption("No")} />
                            <p>No</p>
                        </label>
                    </div>
                    <div className='bg-black h-[1.2px] border-0 w-[60%]' />
                    {bankOption === "Yes" && ( 
                        <div className={styles.container__additional}>
                            <p className={`${roobertSemiBold.className}`}> Please select the relevant products that you purchased below</p>
                            <div className="flex flex-col space-y-2 lg:w-[100%]">

                                <label className={styles.questionCard__additional}>
                                    <input {...register('relevantProduct')} type="radio" value="Guaranteed Asset Protection (GAP)" />
                                    <p>Guaranteed Asset Protection (GAP)</p>
                                </label>
                                <label className={styles.questionCard__additional}>
                                    <input {...register('relevantProduct')} type="radio" value="Cosmetic (Scratch/ Dent) Insurance"  />
                                    <p>Cosmetic (Scratch/ Dent) Insurance</p>
                                </label>
                                <label className={styles.questionCard__additional}>
                                    <input {...register('relevantProduct')} type="radio" value="Extended Warranty" />
                                    <p>Extended Warranty</p>
                                </label>
                            </div>
                        </div>
                    )}
                    </div>)}
            {!showAdditionalQuestions && ( 
                        <button
                            onClick={handleNextQuestion}
                            className={`${roobertSemiBold.className
                                } ${styles.button__text} ${styles.nextButton}`}
                        >
                            <span>Next</span>
                        </button>
                    )}
            {showAdditionalQuestions && (
                <button
                    type='submit'
                    onClick={() => finalSumbit()}
                    className={`${roobertSemiBold.className
                        } ${styles.button__text} ${styles.nextButton}`}
                >
                    <span>Sumbit Form</span>
                </button>
            )}
                </div>
            );
};


