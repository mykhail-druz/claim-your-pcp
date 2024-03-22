import styles from "./Header.module.css";
import Logo from "@/icons/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a href="">
        <Logo />
        </a>
        <nav className={styles.nav}>
          <a className={styles.a}>About the scandal</a>
          <a className={styles.a}>The figures</a>
          <a className={styles.a}>FAQs</a>
          <button className={styles.nav__button}>
            <a href="/vehicle-number">Check My Claim</a>
          </button>
        </nav>
      </div>
    </header>
  );
};
