import React from "react";
import styles from "../modules/ThankYouForm.module.css";
import {
  roobertBold,
  roobertLight,
  roobertMedium,
  roobertSemiBold,
} from "@/fonts/fonts";
import { RegisterProps } from "../interface";
import DoubleArrow from "@/icons/DoubleArrow.svg";
import Arrow from "@/icons/arrow.svg";

export const ThankYouForm: React.FC<RegisterProps> = ({
  register,
  nextStep,
  onSubmit,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className="space-y-4">
          <h1 className={`${roobertBold.className} ${styles.title}`}>
            Thank you, Mr Goria
          </h1>
          <p className={`${roobertMedium.className} ${styles.subtitle}`}>
            Your PCP claim has been submitted successfully
          </p>
          <p className={`${roobertSemiBold.className} ${styles.desc}`}>
            Your car(s) :<span className="text-[#FF0000]">YH11WDF</span>
          </p>
        </div>
        <div className={styles.desc_container}>
          <p className={`${roobertLight.className}`}>
            Thank you for providing the relevant details for your potential PCP
            claim. We will review your application shortly to make sure that all
            the necessary information has been received. If we require any
            additional information, we will contact you in due course
          </p>

          <p
            className={`${roobertSemiBold.className} text-[24px] leading-[26px]`}
          >
            We have also sent a copy of this confirmation and your documents to
            the email address provided
          </p>
              </div>
              <div className={styles.desc_container__second}>
          <p className={`${roobertSemiBold.className} ${styles.whatNext}`}>What happens next?</p>
          <p className={`${roobertLight.className}`}>
            We will send a letter of complaint to your lender to establish if
            you are entitled to compensation. We will update you on the progress
            of your claim as soon as we know more
          </p>
          <p className={`${roobertSemiBold.className} ${styles.fastTrack}`}>
            want to fast track your claim ?
          </p>
          <p className={`${roobertLight.className}`}>
            In the meantime, if you have any queries, please do not hesitate to
            contact us using the details below:
          </p>
          <p>
            Email:
            <a href="mailto:pcpclaims@claimlionlaw.com">
              pcpclaims@claimlionlaw.com
            </a>
          </p>
          <p>
            Telephone: <a href="tel:0207 112 8616">0207 112 8616</a>
          </p>
                  <p>Other than that, all you have to do now is sit back, relax and enjoy the rest of your afternoon!</p>
              </div>
          <div className="flex space-x-2 items-center">
            <DoubleArrow />
            <h1 className={`${roobertSemiBold.className} text-[32px]`}>
              Fast track your claim
            </h1>
          </div>
          <p className={`${roobertLight.className} w-[82.5%] ml-auto`}>
            Answer an additional 8 questions below to help speed up the
            processing of your claim
          </p>
          <h2 className={`${roobertSemiBold.className} text-[24px] leading-[26px] text-center`}>
            What was the value of the vehicle?
          </h2>
              <div className={`${roobertLight.className} space-y-4`}>
                  <label className={styles.questionCard}>
                      <input {...register("costType")} type="radio" value="£5,000 - £10,000" />

                      <p>£5,000 - £10,000</p>
                  </label>
                  <label className={styles.questionCard}>
                      <input {...register("costType")} type="radio" value="£10,000 - £20,000" />

                      <p>£10,000 - £20,000</p>
                  </label>
                  <label className={styles.questionCard}>
                      <input {...register("costType")} type="radio" value="£20,000 - £30,000" />

                      <p>£20,000 - £30,000</p>
                  </label>
                  <label className={styles.questionCard}>
                      <input {...register("costType")} type="radio" value="£30,000 - £40,000" />

                      <p>£30,000 - £40,000</p>
                  </label>
                  <label className={styles.questionCard}>
                      <input {...register("costType")} type="radio" value="Over £40,000`" />

                      <p>Over £40,000</p>
                  </label>
              </div>
              <a
                  onClick={onSubmit}
                  className={`${roobertMedium.className} ${styles.button__text}`}
              >
                  <span>Next</span>
                  <Arrow />
              </a>
      </div>
    </div>
  );
};
