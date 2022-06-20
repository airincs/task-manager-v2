import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskList = () => {
  const TASK_API_BASE_URL = "http://localhost:8080/api/tasks";
  const [loading, setLoading] = useState<boolean>(true);
  const [tasks, setTasks] = useState<any>(null);
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

  return (
    <div>
      <div></div>
    </div>
  );
};

export default TaskList;
