import React from 'react'
import styles from '../modules/Form.module.css'
import { roobertLight, roobertSemiBold } from '@/fonts/fonts'

export const WillFind = () => {
    return (
        <div className={`${styles.desc_second} ${roobertLight.className}`}>
            <p>
                We&apos;ll find all your paperwork for you, and help you
                <span className={roobertSemiBold.className}>
                    &nbsp; claim back an average of £3,000 per car
                </span>&nbsp;
                on the interest and fees you paid on eligible agreements
            </p>
        </div>
    )
}

