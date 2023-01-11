import styles from "../styles/Pagination.module.css";

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  // return pagination component
  return (
    <div className={styles.paginationBox}>
      <p>Pages</p>
      <div className={styles.innerPaginationBox}>
        {createPaginationButtons(totalPages, setCurrentPage, currentPage)}
      </div>
    </div>
  );
};

//helper function to create pagination buttons
const createPaginationButtons = (totalPages, setCurrentPage, currentPage) => {
  let paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        className={`${styles.buttonBox} ${
          currentPage === i ? styles.active : ""
        }`}
        onClick={() => setCurrentPage(i)}
        key={i}
        aria-label={`Ir para página ${i}`}
        disabled={currentPage === i}
      >
        {i}
      </button>
    );
  }
  return paginationButtons;
};

export default Pagination;
