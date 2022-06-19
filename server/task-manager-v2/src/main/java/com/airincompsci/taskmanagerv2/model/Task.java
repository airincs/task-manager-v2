package com.airincompsci.taskmanagerv2.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor @AllArgsConstructor @Getter @Setter
public class Task {
    private long id;
    private String title;
    private String message;
    private String author;
}
