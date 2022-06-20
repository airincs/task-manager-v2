package com.airincompsci.taskmanagerv2.model;

import lombok.*;

@NoArgsConstructor @AllArgsConstructor @Getter @Setter
@Builder
public class Task {
    private long id;
    private String title;
    private String message;
    private String author;
}
