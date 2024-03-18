import React from 'react'
import styles from './Featured.module.css'
import { roobertBold } from '@/fonts/fonts'
export const Featured = () => {
  return (
    <section className={styles.section}>
          <h1 className={`${styles.title} ${roobertBold.className}`}>As featured on</h1>
          <div className={styles.images__block}>
            <img src="/images/featured/image_1.png" alt="Daily Mail" />
              <img src="/images/featured/image_2.png" alt="Auto Express" />
              <img src="/images/featured/image_3.png" alt="The Guadrian" />
              <img src="/images/featured/image_4.png" alt="Mirror" />
              <img src="/images/featured/image_5.png" alt="The Times" />
          </div>
    </section>
  )
}