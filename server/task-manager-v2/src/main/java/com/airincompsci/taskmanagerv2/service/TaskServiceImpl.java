package com.airincompsci.taskmanagerv2.service;

import com.airincompsci.taskmanagerv2.entity.TaskEntity;
import com.airincompsci.taskmanagerv2.model.Task;
import com.airincompsci.taskmanagerv2.repository.TaskRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskServiceImpl implements TaskService{

    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Task saveTask(Task task) {
        TaskEntity taskEntity = new TaskEntity();
        BeanUtils.copyProperties(task, taskEntity);
        taskRepository.save(taskEntity);
        return task;
    }

    @Override
    public List<Task> getAllTasks() {
        List<TaskEntity> taskEntities = taskRepository.findAll();
        List<Task> tasks = taskEntities.stream().map(taskEntity -> new Task(
                taskEntity.getId(),
                taskEntity.getTitle(),
                taskEntity.getMessage(),
                taskEntity.getAuthor()
        )).collect(Collectors.toList());
        return tasks;
    }

    @Override
    public Task getTaskById(Long id) {
        TaskEntity taskEntity = taskRepository.findById(id).get();
        Task task = new Task();
        BeanUtils.copyProperties(taskEntity, task);
        return task;
    }

    @Override
    public boolean deleteTask(Long id) {
        TaskEntity task = taskRepository.findById(id).get();
        taskRepository.delete(task);
        return true;
    }

    @Override
    public Task updateTask(Long id, Task task) {
        TaskEntity taskEntity = taskRepository.findById(id).get();
        taskEntity.setTitle(task.getTitle());
        taskEntity.setMessage(task.getMessage());
        taskEntity.setAuthor(task.getAuthor());
        taskRepository.save(taskEntity);
        return task;
    }
}
