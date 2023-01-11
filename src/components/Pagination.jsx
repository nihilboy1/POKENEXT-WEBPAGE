import styles from "../styles/Pagination.module.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <div className={styles.pagination_box}>
      {Array.from(Array(pages), (_, index) => (
        <button
          className={`${styles.button_box} ${
            currentPage === index ? styles.active : ""
          }`}
          onClick={() => setCurrentPage(index)}
          key={index}
          aria-label={`Ir para página ${index + 1}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
