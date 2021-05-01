import React, { useState, useEffect } from "react";
import "./Task.css";

function Tasks() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("http://jsonplaceholder.typicode.com/todos");
    const items = await data.json();
    console.log(items.completed);
    setItems(items);
  };
  return (
    <div className="task-list">
      {items.map((item) => (
        <React.Fragment>
          <button className="delete-btn">Delete</button>
          <p id="task" key={item.id}>
            <p>{item.id}</p> <p>{item.title}</p> <p>{item.completed}</p>
          </p>
        </React.Fragment>
      ))}
      <button className="add-btn">Add Item</button>
    </div>
  );
}
export default Tasks;
