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
          <ul id="task" key={item.id}>
            <li>{item.id}</li> <li>{item.title}</li> <li>{item.completed}</li>
          </ul>
        </React.Fragment>
      ))}
      <button className="add-btn">Add Task</button>
    </div>
  );
}
export default Tasks;
