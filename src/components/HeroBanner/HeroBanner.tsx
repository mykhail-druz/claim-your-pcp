import React from 'react'
import styles from './HeroBanner.module.css'
import { roobertBold, roobertLight, roobertSemiBold } from '@/fonts/fonts'
export const HeroBanner = () => {
  return (
    <section className={styles.section}>
        <div className={styles.text__block}>
              <h1 className={`${styles.title} ${roobertBold.className}`}>Ever bought a car <br /> on <span className='text-primary'>finance?</span></h1>
              <p className={`${styles.desc} ${roobertLight.className}`}>If you did so between 2014 - 2020 you could be owed an average refund of £
                  3,000per car in compensation
</p>
              <div className={styles.button__block}>
                  <a href="/" className={`${styles.button} ${roobertSemiBold.className}`}>
                      Check my claim
                  </a>
              </div>
        </div>
        <div className={styles.car__block}>
                <img src="/images/scandal/car_animation.png" className={styles.img} alt="Car" />
        </div>
    </section>
  )
}

