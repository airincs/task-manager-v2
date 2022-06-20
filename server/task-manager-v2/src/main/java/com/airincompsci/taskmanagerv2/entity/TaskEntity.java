package com.airincompsci.taskmanagerv2.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class TaskEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String message;
    private String author;


}
