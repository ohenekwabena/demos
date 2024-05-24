"use client";
import React from "react";
import TreeMenu from "./TreeMenu";
import styles from "./MenuItem.module.css";
import { Plus, Minus } from "react-feather";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <div>
        <p>
          {item.name}
          {item.children && item.children.length > 0 && (
            <button className={styles.tree_button} onClick={() => setDisplayCurrentChildren(!displayCurrentChildren)}>
              {displayCurrentChildren ? <Minus /> : <Plus />}
            </button>
          )}
        </p>
      </div>
      {item.children && item.children.length > 0 && displayCurrentChildren && <TreeMenu list={item.children} />}
    </div>
  );
}
export default MenuItem;
