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
          © 2024 claim.yourpcp.co.uk is a trading name of ClaimLion Law.
          ClaimLion Law that is a trading name of BlackLion Law LLP, a limited
          liability partnership registered in England & Wales and regulated by
          the Solicitors Regulation Authority under SRA number: 518911. A list
          of the members of the LLP is displayed at our registered office at
          Berkeley Square House, Berkeley Square, London W1J 6BD
        </p>
        <a href="" className={styles.privacy}>
          Privacy
        </a>
        <div className={`${styles.footer__a}`}>
          <div className="flex space-x-4 md:space-x-8">
            <a href="">Daily Mail</a>
            <a href="">Auto Express</a>
            <a href="">The Guardian</a>
          </div>
          <div className="flex space-x-8">
            <a href="">Mirror</a>
            <a href="">The Times</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
