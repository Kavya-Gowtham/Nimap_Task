import React, { useState, useEffect } from "react";

function Tasks() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("http://jsonplaceholder.typicode.com/todos");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          {item.id} {item.title} {item.completed}
          <button>Delete</button>
        </p>
      ))}
      <button>Add Item</button>
    </div>
  );
}
export default Tasks;
