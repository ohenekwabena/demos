import styles from "./ImageGrid.module.css";
import ImageSlider from "./ImageSlider";
export default function ImageGrid({ data }) {
  return (
    <div className={styles.wrapper}>
      {data.map((item) => (
        <ImageSlider
          key={item["ProductID"]}
          images={item["Images"]}
          price={item["SalePrice"]}
          name={item["ProductName"]}
        />
      ))}
    </div>
  );
}
