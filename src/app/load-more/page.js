"use client";
import React from "react";
import sourceData from "../../data/nike-shoes.json";
import styles from "./load-more.module.css";
import ImageGrid from "@/components/ImageGrid";

function LoadMore() {
  const [startIndex, setStartIndex] = React.useState(0);
  const [endIndex, setEndIndex] = React.useState(20);
  const [data, setData] = React.useState([]);

  const loadMoreData = () => {
    setStartIndex(endIndex);
    setEndIndex(endIndex + 20);
  };

  const paginateData = () => {
    const newData = sourceData.slice(startIndex, endIndex);
    setData([...data, ...newData]);
  };

  const disable = data.length === 100;

  React.useEffect(() => {
    paginateData();
  }, [startIndex, endIndex]);

  return (
    <div className={styles.wrapper}>
      <ImageGrid data={data} />
      <button className={styles.load_button} disabled={disable} onClick={loadMoreData}>
        {disable ? "Limit reached" : "Load More"}
      </button>
    </div>
  );
}

export default LoadMore;
