import React, { useRef, useEffect, useState } from "react";
import styles from "../modules/Sign.module.css";
import { roobertLight, roobertMedium, roobertSemiBold } from "@/fonts/fonts";
import { RegisterProps } from "../interface";
import Reset from "@/icons/reset.svg";
import Secure from "@/icons/web_secured.svg";
import SignHere from "@/icons/sign_here.svg";
import Arrow from "@/icons/arrow.svg";
import SignaturePad from "signature_pad";

export const Sign: React.FC<RegisterProps> = ({
  register,
  unregister,
  nextStep,
  firstName,
  title,
}) => {
  const [isCheckedClaimLion, setIsCheckedClaimLion] = useState(true);
  const [isCheckedLetter, setIsCheckedLetter] = useState(true);
  const signaturePadRef = useRef<SignaturePad | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleCheckboxChangeClaimLion = () => {
    setIsCheckedClaimLion(!isCheckedClaimLion);
  };

  const handleCheckboxChangeLetter = () => {
    setIsCheckedLetter(!isCheckedLetter);
  };

  const handleClearSignature = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
    }
  };

  const handleSaveSignature = () => {
    if (signaturePadRef.current) {
      const signatureImage = signaturePadRef.current.toDataURL();
      console.log(signatureImage);

      register("signImage", { value: signatureImage });
    }
  };

  const handleReset = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
    }
    if (unregister) {
      unregister("signImage");
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d")?.scale(ratio, ratio);

      signaturePadRef.current = new SignaturePad(canvas, {
        dotSize: 0.5,
        minWidth: 0.5,
        maxWidth: 2.5,
      });

      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const resizeCanvas = () => {
    if (canvasRef.current && signaturePadRef.current) {
      const canvas = canvasRef.current;
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d")?.scale(ratio, ratio);
      signaturePadRef.current.clear();
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.red_container}>
          <p className={roobertLight.className}>
            {firstName}, based on the information provided, you could be owed up
            to £3,000, but we need you to complete below
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
          <p className={roobertSemiBold.className}>{firstName} signature</p>
          <canvas
            ref={canvasRef}
            width={Math.min(window.innerWidth * 0.8, 500)} 
            height={300}
            className={`border border-[#5DB7DE] rounded-[24px] w-full lh:h-[300px] h-[200px]`}
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
                handleSaveSignature();
                nextStep();
              }, 0);
            }}
            className={`${roobertMedium.className} ${styles.button__text}`}
          >
            <span>Sign & Complete</span>
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
};
