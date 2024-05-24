import TreeMenu from "@/components/TreeMenu/TreeMenu";
import styles from "./tree-view.module.css";
import data from "../../data/tree-nodes.js";

function TreeView() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tree_menu}>
        <TreeMenu list={data} />
      </div>
    </div>
  );
}

export default TreeView;
