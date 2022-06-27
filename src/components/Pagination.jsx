import React from 'react'
import styles from "../styles/Pagination.module.css"

const Pagination = ({ pages, setCurrentPage }) => {
  return (
    <div className={styles.pagination_box}>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
          className={styles.button_box}
            value={index}
            onClick={e => {
              return setCurrentPage(Number(e.target.value))
            }}
            key={index}
          >
            {index + 1}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
