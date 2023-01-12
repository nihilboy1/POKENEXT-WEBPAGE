import styles from "../styles/Clouds.module.css";

const Clouds = () => {
  return (
    <div className={styles.backgroundWrap}>
      <div className={styles.cloud1}>
        Oi
        <div className={styles.cloud}></div>
      </div>

      <div className={styles.cloud2}>
        <div className={styles.cloud}></div>
      </div>

      <div className={styles.cloud3}>
        <div className={styles.cloud}></div>
      </div>

      <div className={styles.cloud4}>
        <div className={styles.cloud}></div>
      </div>

      <div className={styles.cloud5}>
        <div className={styles.cloud}></div>
      </div>
    </div>
  );
};

export default Clouds;
