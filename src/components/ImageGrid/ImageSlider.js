"use client";
import React from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";
import { formatPrice } from "@/utils";

function ImageSlider({ images, price, name }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}>
          {images.map((image, index) => {
            const show = index === currentSlide ? 1 : 0;
            return (
              image && (
                <Image
                  key={image}
                  alt={name}
                  src={image}
                  className={styles.current_image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover", display: show ? "block" : "none" }}
                />
              )
            );
          })}
        </div>
        <div className={styles.indicator_wrapper}>
          {images.map((_, index) => {
            const active = index === currentSlide;
            return (
              <button
                key={index}
                className={`${styles.indicator} ${active ? styles.active : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.row}>
        <h3>{name}</h3>
        <p className={styles.price}>{formatPrice(price)}</p>
      </div>
    </div>
  );
}

export default ImageSlider;
