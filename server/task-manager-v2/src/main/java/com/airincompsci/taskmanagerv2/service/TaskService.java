package com.airincompsci.taskmanagerv2.service;

import com.airincompsci.taskmanagerv2.model.Task;

import java.util.List;

public interface TaskService {
    Task saveTask(Task task);

    List<Task> getAllTasks();

    Task getTaskById(Long id);

    boolean deleteTask(Long id);

    Task updateTask(Long id, Task task);
}
