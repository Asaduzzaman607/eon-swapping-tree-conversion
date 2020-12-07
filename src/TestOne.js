import React from "react";
import { useState } from "react";

const List = ({ items }) => {
  const [sortItem, setSortItem] = useState(items);

  const handleClick = (i) => {
    const newSortItem = [...sortItem];
    const temp = newSortItem[i];
    newSortItem[i] = newSortItem[0];
    newSortItem[0] = temp;
    setSortItem(newSortItem);
  };

  return (
    <ol>
      {sortItem.map((item, i) => (
        <li key={i} onClick={() => handleClick(i)}>
          {item}
        </li>
      ))}
    </ol>
  );
};

export default function App() {
  return (
    <div>
      <List items={["A", "B", "C", "D", "E"]} />
    </div>
  );
}
