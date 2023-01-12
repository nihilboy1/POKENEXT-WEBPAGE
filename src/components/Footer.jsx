import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerBox}>
      <p className={styles.footerText}>
        <span className={styles.footerSpan}>PokeNext</span> 2023 &copy;
      </p>
    </footer>
  );
};

export default Footer;
