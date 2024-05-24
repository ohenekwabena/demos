import React from "react";
import MenuItem from "./MenuItem";

function TreeMenu({ list = [] }) {
  return <ul>{list && list.length > 0 && list.map((item, index) => <MenuItem key={item.id} item={item} />)}</ul>;
}

export default TreeMenu;
