import { useEffect, useState } from "react";
import { api } from "../api/api";

export const Counter = ({ name }) => {
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     fetchCount();
  //   }, []);

  //   const fetchCount = async () => {
  //     const res = await fetch(`http://localhost:8080/api/v1/count/${name}`);
  //     const data = await res.json();

  //     setCount(data.value || 0);
  //   };

  //   const incrementCount = async () => {
  //     const res = await fetch(
  //       `http://localhost:8080/api/v1/count/${name}?value=${count + 1}`,
  //       {
  //         method: "POST",
  //       }
  //     );

  //     fetchCount();
  //   };

  const { data, isFetching, isLoading } = api.useGetCountQuery({ name });
  const [setCount] = api.useSetCountMutation();

  console.log(data, isFetching, isLoading);

  return (
    <button onClick={() => setCount({ name, value: data.value + 1 })}>
      {isLoading ? "Loading..." : ""}
      {isFetching ? "fetching..." : ""}
      {`${name} ${data?.value}`}
    </button>
  );
};
