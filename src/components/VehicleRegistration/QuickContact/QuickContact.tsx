import React, { useState, useEffect } from "react";
import styles from "../modules/QuickContact.module.css";
import { RegisterProps } from "../interface";
import { roobertSemiBold, roobertMedium } from "@/fonts/fonts";
import Arrow from "@/icons/arrow.svg";
import CustomSelect from "../Input/select";
import { Controller, useForm } from "react-hook-form";
import { options } from "../FindCar/optionsData";

export const QuickContact: React.FC<RegisterProps> = ({ nextStep, register, control, formState }) => {
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(formState.isValid);
        console.log(formState)
    }, [formState.isValid]);

    const onSubmit = (data: any) => {
        console.log(data);
        nextStep();
    };

    return (
        <div className={styles.registration}>
            <h1 className={`${roobertSemiBold.className} ${styles.title}`}>
                Let&apos;s grab some quick information about <br /> you, starting with
                your name
            </h1>


                <div className="flex flex-col">
                    <label className={`${roobertSemiBold.className}`}>Title</label>
                    <Controller
                        control={control}
                        name="title"
                        defaultValue=""
                        rules={{ required: false }}
                        render={({ field }) => (
                            <CustomSelect
                                options={options}
                                placeholder="Please select your title"
                                onChange={(selectedOption: any, actionMeta: any) =>
                                    field.onChange(selectedOption.value)
                                }
                            />
                        )}
                    />
               
                </div>
                <div>
                    <label className={`${roobertSemiBold.className}`}>
                        What are your first name and last name
                    </label>
                    <div className="flex lg:flex-row flex-col gap-3">
                        <div className={styles.input__container}>
                            <input
                                placeholder={"First Name"}
                                className={styles.input}
                                {...register("firstName", { required: true, minLength:3 })}
                            />
                        {formState.errors.firstName && <p className={styles.red}>Please Correct Firstname</p>}
                        </div>
                        <div className={styles.input__container}>
                            <input
                                placeholder={"Last Name"}
                                className={styles.input}
                            {...register("lastName", { required: true, minLength:3 })}
                            />
                             {formState.errors.lastName && <p className={styles.red}>Please Correct Lastname</p>}
                        </div>
                    </div>
                </div>
                <div>
                    <label className={`${roobertSemiBold.className}`}>
                        Date of Birth
                    </label>
                    
                    <div className={styles.select__container}>
                        <Controller
                            control={control}
                            name="dayOfBirth"
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                                <CustomSelect
                                    placeholder="Date"
                                    options={Array.from({ length: 31 }, (_, index) => ({
                                        value: index + 1,
                                        label: `${index + 1}`,
                                    }))}
                                    onChange={(selectedOption: any, actionMeta: any) =>
                                        field.onChange(selectedOption.value)
                                    }
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="monthOfBirth"
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                                <CustomSelect
                                    placeholder="Month"
                                    options={Array.from({ length: 12 }, (_, index) => ({
                                        value: index + 1,
                                        label: `${index + 1}`,
                                    }))}
                                    onChange={(selectedOption: any, actionMeta: any) =>
                                        field.onChange(selectedOption.value)
                                    }
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="yearOfBirth"
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                                <CustomSelect
                                    placeholder="Year"
                                    options={Array.from({ length: 100 }, (_, index) => ({
                                        value: 2023 - index,
                                        label: `${2023 - index}`,
                                    }))}
                                    onChange={(selectedOption: any, actionMeta: any) =>
                                        field.onChange(selectedOption.value)
                                    }
                                />
                            )}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={!isFormValid}
                    onClick={nextStep}
                    className={`${roobertMedium.className} ${styles.button__text}`}
                >
                    <span>Next</span>
                    <Arrow />
                </button>

        </div>
    );
};
