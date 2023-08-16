import React from "react";
import ItemsList from "./itemList";


const Items = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginBottom: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Items;
