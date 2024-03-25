import React from 'react';
import styles from '../modules/QuickContact.module.css';
import { RegisterProps } from '../interface';
import { roobertSemiBold, roobertMedium } from '@/fonts/fonts';
import Arrow from "@/icons/arrow.svg";
import CustomSelect from '../Input/select';

export const QuickContact: React.FC<RegisterProps> = ({ register, onSubmit }) => {
    return (
        <div className={styles.registration}>
            <h1 className={`${roobertSemiBold.className} ${styles.title}`}>
                Let&apos;s grab some quick information about <br /> you, starting with your name
            </h1>
            <div className='flex flex-col'>
                <label className={`${roobertSemiBold.className}`}>Title</label>
                <CustomSelect
                    options={[
                        { value: "Please select your title", label: "Please select your title", isDisabled: true },
                        { value: "Mr", label: "Mr" },
                        { value: "Mrs", label: "Mrs" },
                        { value: "Miss", label: "Miss" },
                        { value: "Ms", label: "Ms" },
                        { value: "Dr", label: "Dr" }
                    ]}
                    defaultValue={{ value: "Please select your title", label: "Please select your title", isDisabled: true }}
                    placeholder="Please select your title"
                    onChange={(value: any) => register("title", { value: value })} // Register "title" with new value
                />


            </div>
            <div>
                <label className={`${roobertSemiBold.className}`}>What are your first name and last name</label>
                <div className='flex lg:flex-row flex-col gap-3'>
                    <div className={styles.input__container}><input placeholder={"First Name"} className={styles.input} {...register("firstName")} /></div>
                    <div className={styles.input__container}><input placeholder={"Last Name"} className={styles.input} {...register("lastName")} /></div>
                </div>
            </div>
            <div>
                <label className={`${roobertSemiBold.className}`}>Date of Birth</label>
                <div className={styles.select__container}>
                    <CustomSelect
                        placeholder="Date"
                        options={Array.from({ length: 31 }, (_, index) => ({ value: index + 1, label: `${index + 1}` }))}
                        defaultValue={{ value: "", label: "Day" }}
                        onChange={(value: any) => register("dayOfBirth", { value: value })}
                    />

                    <CustomSelect
                        options={Array.from({ length: 12 }, (_, index) => ({ value: index + 1, label: `${index + 1}` }))}
                        defaultValue={{ value: "", label: "Month" }}
                        placeholder="Month"
                        onChange={(value: any) => register("monthOfBirth", { value: value })}
                    />

                    <CustomSelect
                        options={Array.from({ length: 100 }, (_, index) => ({ value: 2023 - index, label: `${2023 - index}` }))}
                        defaultValue={{ value: "", label: "Year" }}
                        placeholder="Year"
                        onChange={(value: any) => register("yearOfBirth", { value: value })}
                    />
                </div>
            </div>

            <a
                onClick={onSubmit}
                className={`${roobertMedium.className} ${styles.button__text}`}
            >
                <span>Next</span>
                <Arrow />
            </a>
        </div>
    );
};
