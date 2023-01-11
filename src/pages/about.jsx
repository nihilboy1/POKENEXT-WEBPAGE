import styles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.contentBox}>
      <h1 className={styles.codedBy}>
        Coded by {""}
        <span className={styles.spanNihil}>
          <p>
            <a target={`_blank`} href="https://github.com/nihilboy1">
              @Nihilboy
            </a>
          </p>
        </span>
      </h1>
      <div>
        <Image
          src="/images/charizard.png"
          alt="Pokemon Charizard"
          width={350}
          height={350}
          className={styles.chariImage}
        />
      </div>
    </div>
  );
};

export default About;
