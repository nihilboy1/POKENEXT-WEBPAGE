import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_box}>
      <p className={styles.footer_text}>
        <span className={styles.footer_span}>PokeNext</span> 2022 &copy;
      </p>
    </footer>
  );
};

export default Footer;
