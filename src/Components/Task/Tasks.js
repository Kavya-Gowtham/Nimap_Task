import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Button from "@material-ui/core/Button";
import "./Task.css";

function Tasks() {
  const [task, setTask] = useState("");
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result, "result");
          setTask(result);
        },
        (error) => {
          console.log(error, "error");
        }
      );
  }, []);
  const deleteOnClick = (row) => () => {
    console.log(row, "row");
    const deletedData = task.filter((val) => val.id !== row.id);
    setTask(deletedData);
  };
  const columns = [
    {
      selector: "id",
    },
    {
      selector: "title",
    },
    {
      selector: "completed",
      cell: (row) => <span>{row.completed ? "True" : "False"}</span>,
    },
    {
      selector: "id",
      cell: (row) => (
        <Button
          variant="contained"
          color="secondary"
          className="full-width"
          onClick={deleteOnClick(row)}
        >
          Delete
        </Button>
      ),
    },
  ];
  return (
    <div className="task-list">
      <DataTable
        columns={columns}
        data={task}
        pagination={true}
        paginationPerPage="10"
        noHeader={true}
      />
      <button className="add-btn">Add Task</button>
    </div>
  );
}
export default Tasks;
