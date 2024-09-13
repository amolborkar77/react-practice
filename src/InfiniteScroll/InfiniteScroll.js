//  Build an Infinite Scroll Component: Develop a component that loads more data
// as the user scrolls down the page.
import React, { useEffect, useState } from "react";

import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );

      const data = await response.json();
      setData((prevData) => [...prevData, ...data]);
      setLoading(false);
    };

    fetchData();

    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading
      ) {
        return;
      }
      setPage((prevPage) => prevPage + 1);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <div>
      <h1>Infinite Scroll</h1>
      <ul>
        {data.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
