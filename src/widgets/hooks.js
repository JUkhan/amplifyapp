import { useState, useEffect } from "react";

export function useStream(stream, initialState) {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    const sub = stream.subscribe((res) => {
      setData(res);
    });
    return () => {
      sub?.unsubscribe();
    };
  }, []);

  return data;
}
