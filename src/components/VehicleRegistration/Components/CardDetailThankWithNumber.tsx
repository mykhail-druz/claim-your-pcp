import { roobertBold, roobertSemiBold } from '@/fonts/fonts'
import React from 'react'
import styles from '../modules/Form.module.css'
interface CardDetailThankWithNumberProps {
 carNumber:string | any 
}
export const CardDetailThankWithNumber: React.FC<CardDetailThankWithNumberProps> = ({ carNumber }) => {
  return (
    <div className={styles.thakyou}>
      <p>Thank you. You have successfully added the registration <span className={roobertBold.className}>{carNumber}</span> , meaning your claim could potentially be worth up to 3000 , depending on factors within your agreement</p>
    </div>
  )
}

