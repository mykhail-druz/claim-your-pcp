import React, { useRef, useEffect, useState } from "react";
import styles from "../modules/Sign.module.css";
import { roobertLight, roobertMedium, roobertSemiBold } from "@/fonts/fonts";
import { RegisterProps } from "../interface";
import Reset from "@/icons/reset.svg";
import Secure from "@/icons/web_secured.svg";
import SignHere from "@/icons/sign_here.svg";
import Arrow from "@/icons/arrow.svg";
// import SignaturePad from "signature_pad";
import { OtherCars } from "../OtherCars/OtherCars";
import { Controller } from "react-hook-form";
import SignaturePad from "react-signature-canvas";
import ReactSignatureCanvas from "react-signature-canvas";

export const Sign: React.FC<RegisterProps> = ({
  register,
  unregister,
  nextStep,
  firstName,
  title,
  carNumber,
  control
}) => {
  // @ts-ignore
  const [isCheckedClaimLion, setIsCheckedClaimLion] = useState(true);
  const [isCheckedLetter, setIsCheckedLetter] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sigCanvas = useRef<ReactSignatureCanvas>(null);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckboxChangeClaimLion = () => {
    setIsCheckedClaimLion(!isCheckedClaimLion);
  };

  const handleCheckboxChangeLetter = () => {
    setIsCheckedLetter(!isCheckedLetter);
  };

  const handleReset = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
    if (unregister) {
      unregister("signImage");
    }
  };

  const formatIntoPng = () => {
    if (sigCanvas.current) {
      const dataURL = sigCanvas.current.toDataURL();
      return dataURL;
    }
  };
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.red_container}>
          <p className={roobertLight.className}>
            {title} {firstName}, based on the information provided, you could be
            owed up to £3,000, but we need you to complete below
          </p>
        </div>
        <div className={styles.sign}>
          <p className={`${styles.sign_title} ${roobertSemiBold.className}`}>
            Sign & complete
          </p>
          <p>
            To finalize your claim, please sign in the box below. Your signature
            will be added to this document, allowing us to act on your behalf
            with matters concerning your claim
          </p>
          <p className={roobertSemiBold.className}>
            {title} {firstName} signature
          </p>
          <Controller
            name="signImage"
            control={control}
            render={({ field }) => (
              <SignaturePad
                ref={sigCanvas}
                // @ts-ignore
                onEnd={() => field.onChange(formatIntoPng())}
                penColor="black"
                canvasProps={{
                  // width: Math.min(window.innerWidth * 0.8, 500),
                  // height: 300,
                  style: { border: "1px solid black" },
                  className: "border border-[#5DB7DE] rounded-[24px] w-full lg:h-[300px] h-[200px]",
                }}
              />
            )}
          />
          <p className={`${roobertLight.className} text-[14px]`}>
            * Your signature should be as accurate as possible to avoid any
            delays in your claim
          </p>
          <div className={styles.sign_reset}>
            <div className="flex cursor-pointer" onClick={handleReset}>
              <Reset />
              <p className={`${styles.reset_p} ${roobertMedium.className}`}>
                Reset Signature
              </p>
            </div>
            <Secure />
          </div>
          <div className={styles.sign_here}>
            <SignHere />
          </div>
        </div>
        <div className={styles.checkboxContainer}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={isCheckedClaimLion}
              onChange={handleCheckboxChangeClaimLion}
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxCustom}></span>
            <p>
              I authorize ClaimLion Law to run a soft credit check on me to
              identify information to support my claim(s). I understand that
              this check will NOT affect my credit score
            </p>
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={isCheckedLetter}
              onChange={handleCheckboxChangeLetter}
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxCustom}></span>
            <p>
              I consent for my signature to be applied to a Letter of Authority
              to be sent with my Letter of Complaint to my Lender(s), and where
              applicable, a Financial Ombudsman Service application form
            </p>
          </label>
          <a
            onClick={() => {
              setTimeout(() => {
                nextStep();
                openModal();
              }, 0);
            }}
            className={`${roobertMedium.className} ${styles.button__text}`}
          >
            <span>Sign & Complete</span>
            <Arrow />
          </a>
        </div>

      </div>
      {isModalOpen && (
        <OtherCars
          register={register}
          carNumber={carNumber}
          closeModal={closeModal}
          nextStep={nextStep}
      
        />
      )}
    </div>
  );
};
