import React from 'react'
import styles from '../modules/Form.module.css'
import { roobertLight, roobertSemiBold } from '@/fonts/fonts'

export const NoLongerCard = () => {
  return (
      <div className={`${styles.desc_first} ${roobertLight.className}`}>
          <p>
              The car
              <span className={roobertSemiBold.className}>
                  &nbsp;no longer has to be in your possession,&nbsp;
              </span>
              nor does the finance agreement need to still be active
          </p>
      </div>
  )
}

