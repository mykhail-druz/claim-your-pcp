import React, { ReactNode } from 'react'
import styles from '../modules/Input.module.css'
import { Path, UseFormRegister } from "react-hook-form"
import { IFormInput } from '../interface'
import { roobertSemiBold } from '@/fonts/fonts'

type InputProps = {
    label_desc:string;
    label_title: string;
    label: Path<IFormInput>
    register: UseFormRegister<IFormInput>
    required: boolean;
    placeholder?:string;
    icon?:ReactNode;
}

export const Input = ({ label, label_desc, register, required, label_title, placeholder, icon }: InputProps) => (
    <div className={styles.input__section}>
        <label className={styles.label}><p className={`${styles.input__title} ${roobertSemiBold.className}`}>{label_title}</p><p className={styles.input__desc}>{label_desc}</p></label>
        <div className={styles.input__container}><div className={styles.input__icon}>{icon}</div><input placeholder={placeholder} className={` ${icon ? styles.input__withicon : styles.input}`} {...register(label, { required })} /></div>
    </div>
)
