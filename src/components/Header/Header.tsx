import styles from "./Header.module.css";
import Logo from "@/icons/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a data-aos="fade-down" href="">
          <Logo />
        </a>
        <nav className={styles.nav}>
          <a className={styles.a} data-aos="fade-down" data-aos-duration="900">
            About the scandal
          </a>
          <a className={styles.a} data-aos="fade-down" data-aos-duration="1000">
            The figures
          </a>
          <a className={styles.a} data-aos="fade-down" data-aos-duration="1100">
            FAQs
          </a>
          <button
            className={styles.nav__button}
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <a>Check My Claim</a>
          </button>
        </nav>
      </div>
    </header>
  );
};
