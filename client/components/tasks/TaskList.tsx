import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";

const TaskList = () => {
  const TASK_API_BASE_URL = "http://localhost:8080/api/tasks";
  const [loading, setLoading] = useState<boolean>(true);
  const [tasks, setTasks] = useState<any>(null);
  const [taskId, setTaskId] = useState<any>(null);
  const [task, setTask] = useState<any>({
    title: "",
    message: "",
    author: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(TASK_API_BASE_URL);
        setTasks(response);
      } catch (error: any) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(task.data);
  }, [task]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setTask({ ...task, [e.target.name]: value });
  };

  const clear = (e: any) => {
    e.preventDefault();
    setTask({
      title: "",
      message: "",
      author: "",
    });
  };

  const submitTask = (e: any) => {
    e.preventDefault();
    axios
      .post(TASK_API_BASE_URL, task)
      .then((response: any) => {
        console.log("POST Successful");
        console.log(response);
        window.location.reload();
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const editTask = async (e: any, id: any) => {
    e.preventDefault();
    setTaskId(id);
    console.log(id);
    try {
      const response = await axios.get(TASK_API_BASE_URL + "/" + id);
      setTask(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="container">
        <div className="bg-slate-900 container flex-col items-center flex text-white">
          Add/Edit Task
        </div>
        <div className="container flex justify-center bg-slate-700 text-white">
          <label>Title: </label>
          <input
            type="text"
            className="mx-2 text-black"
            name="title"
            value={task.title}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="container flex justify-center bg-slate-700 text-white">
          <label>Message: </label>
          <input
            type="text"
            className="mx-2 text-black"
            name="message"
            value={task.message}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="container flex justify-center bg-slate-700 text-white">
          <label>Author: </label>
          <input
            type="text"
            className="mx-2 text-black"
            name="author"
            value={task.author}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <button onClick={submitTask} className="w-6/12 bg-green-200 text-black">
          Submit
        </button>
        <button onClick={clear} className="w-6/12 bg-red-200 text-black">
          Clear
        </button>
      </div>

      <div>
        {!loading
          ? tasks.data.map((task: any) => (
              <div
                key={task.id}
                className="my-3 flex flex-col items-center bg-gradient-to-r from-slate-100 to-slate-50 p-8 rounded-2xl shadow-inner shadow-black"
              >
                <Task task={task} />
                <button
                  onClick={(e) => editTask(e, task.id)}
                  className="bg-green-200 text-black rounded-lg p-1 w-full"
                >
                  Edit
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default TaskList;
