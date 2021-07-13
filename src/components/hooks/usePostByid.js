import { useEffect, useState } from "react";
import API from "../../helpers/API";

function usePostById(id) {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    if (id) {
      API.get(`posts/${id}`)
        .then(res => {
          setData(res.data.data);
          setLoaded(true);
        })
        .catch(() => {
          setLoaded(false);
        });
    }
  }, [id]);

  const resetLoading = val => {
    setLoaded(val);
  };

  const resetData = val => {
    setData(val);
  };

  return { data, loaded, resetLoading, resetData };
}

export default usePostById;
