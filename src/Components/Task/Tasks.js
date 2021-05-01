import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Button from "@material-ui/core/Button";

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
      name: "Id",
      selector: "id",
    },
    {
      name: "Title",
      selector: "title",
    },
    {
      name: "completed",
      selector: "completed",
      cell: (row) => <span>{row.completed ? "True" : "False"}</span>,
    },
    {
      name: "",
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
    <div>
      <h1>TASK List</h1>
      <DataTable
        columns={columns}
        data={task}
        pagination={true}
        paginationPerPage="10"
      />
    </div>
  );
}
export default Tasks;
