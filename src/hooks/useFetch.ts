"use client";

import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  //   reset all
  const reset = () => {
    setError("");
    setData(null);
  };

  const fetchData = async (fetchUrl: string) => {
    reset();
    setIsLoading(true);
    try {
      const res = await fetch(fetchUrl);
      const data = await res.json();
      setData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { fetchData, reset, isLoading, data, error };
};

export default useFetch;
