import Header from "./Header";
import Items from "./items";
import Footer from "./Footer";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Programming Front End/ BackEnd"
    },
    {
      id: 2,
      checked: false,
      item: "Programming Algorithms & Datastructures"
    },
    {
      id: 3,
      checked: false,
      item: "Programming Machine Learning"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };
  return (
    <div className="App">
      <Header />
      <Items
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}
