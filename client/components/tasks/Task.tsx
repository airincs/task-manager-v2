import React, { useState } from "react";
import axios from "axios";

type AppProps = {
  task: any;
};

const Task = ({ task }: AppProps) => {
  const [taskId, setTaskId] = useState<any>(null);
  const TASK_API_BASE_URL = "http://localhost:8080/api/tasks";
  const deleteTask = (e: any, id: any) => {
    e.preventDefault();
    axios
      .delete(TASK_API_BASE_URL + "/" + id)
      .then((response: any) => {
        console.log("DELETED Successfully");
        console.log(response);
        window.location.reload();
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const editTask = (e: any, id: any) => {
    e.preventDefault();
    setTaskId(id);
  };

  return (
    <div>
      <div>{task.title}</div>
      <div>{task.message}</div>
      <div>{task.author}</div>
      <button
        onClick={(e) => deleteTask(e, task.id)}
        className="bg-red-200 text-black"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
