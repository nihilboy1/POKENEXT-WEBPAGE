import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <picture>
        <img
          src="/images/header1.png"
          alt="background do header"
          className={styles.headerImage}
        />
      </picture>
      <div className={styles.buttonsBox}>
        <Link href="/">
          <button className={styles.button}>Home</button>
        </Link>
        <Link href="/about">
          <button className={styles.button}>About</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
