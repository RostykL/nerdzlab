import { useCallback } from "react";
import { Button, Static } from "../../styled/general.styled";
import { Wrapper } from "./pagination.styled";

function Pagination({ page, len, setPage }) {
  const prevPage = useCallback(() => {
    setPage(p => p - 1);
  }, []);

  const nextPage = useCallback(() => {
    setPage(p => p + 1);
  }, []);
  return (
    <Wrapper>
      <Static>Page #{page}</Static>
      <Button disabled={page === 1} onClick={prevPage}>
        prev
      </Button>
      <Button disabled={len < 15} onClick={nextPage}>
        next
      </Button>
    </Wrapper>
  );
}

export default Pagination;
