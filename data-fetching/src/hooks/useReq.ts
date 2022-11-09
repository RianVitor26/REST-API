import { useEffect, useState } from "react";
import axios from "axios";

export function useReq<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isReq, setIsReq] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get(url)
        .then((response) => setData(response.data))
        .catch((err) => {
            setError(err)
        })
      .finally(() => {
        setIsReq(false);
      });
  }, []);

  return { data, isReq, error };
}
