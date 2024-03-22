import { roobertSemiBold } from '@/fonts/fonts'
import React from 'react'
import styles from '../modules/Form.module.css'
export const CardDetailThank = () => {
  return (
    <div className={styles.thakyou}>
          <p>Thank you. We&apos;ve got your car detail. Now for some quick fire questions in relation to circumstances when you took out the finances. <span className={roobertSemiBold.className}>&nbsp;Please read each question carefully as incorrect answers could negatively impact your claim</span></p>
    </div>
  )
}

