import styles from "../../pages/allPosts/allPosts.module.scss";
import { useCallback } from "react";

function Pagination({ page, len, setPage }) {
  const prevPage = useCallback(() => {
    setPage(p => p - 1);
  }, []);

  const nextPage = useCallback(() => {
    setPage(p => p + 1);
  }, []);
  return (
    <ul className={styles.pagination_posts}>
      <button disabled={page === 1} onClick={prevPage}>
        prev
      </button>
      <button disabled={len < 15} onClick={nextPage}>
        next
      </button>

      <div>current page: {page}</div>
    </ul>
  );
}

export default Pagination;
