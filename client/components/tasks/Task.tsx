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
    <div className={"flex justify-center flex-col min-w-full"}>
      <div className="font-bold">{task.title}</div>
      <div>{task.message}</div>
      <div className="font-light mt-2">Author: {task.author}</div>
      <button
        onClick={(e) => deleteTask(e, task.id)}
        className="bg-red-200 text-black rounded-lg p-1 w-full"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
