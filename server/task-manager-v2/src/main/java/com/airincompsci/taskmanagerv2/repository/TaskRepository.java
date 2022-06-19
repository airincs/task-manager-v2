package com.airincompsci.taskmanagerv2.repository;

import com.airincompsci.taskmanagerv2.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, Long> {
}
