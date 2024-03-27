import styles from "./Footer.module.css";

import { roobertMedium } from "@/fonts/fonts";

import Logo from "@/icons/logo.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <a href="">
          <Logo />
        </a>
        <p className={styles.footer__p}>
          Car Finance Solicitors is trading names of Pearson Locke Ltd which is
          a limited company registered in England & Wales with registration
          number 12851925. A list of directors of the company is available for
          inspection at the registered office: 837 Manchester Road, Bradford,
          England, BD5 8LT. Authorised by the Solicitors Regulation Authority
          under Registration Number 807786. VAT number 384131407
        </p>
        {/* <a
          href="https://pearsonlocke.co.uk/privacy-policy/"
          target="_blank"
          className={styles.privacy}
        >
          Privacy
        </a> */}
        <div className={`${styles.footer__a} ${roobertMedium.className}`}>
          <div className="flex space-x-4 md:space-x-8">
            <a href="https://pearsonlocke.co.uk/about-us/" target="_blank">
              About Us
            </a>
            <a
              href="https://pearsonlocke.co.uk/privacy-policy/"
              target="_blank"
            >
              Privacy Policy
            </a>
          </div>
          <div className="flex space-x-8">
            <a
              href="https://pearsonlocke.co.uk/terms-conditions/"
              target="_blank"
            >
              Terms & Conditions
            </a>
            <a
              href="https://pearsonlocke.co.uk/complaints-policy/"
              target="_blank"
            >
              Complaints Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
