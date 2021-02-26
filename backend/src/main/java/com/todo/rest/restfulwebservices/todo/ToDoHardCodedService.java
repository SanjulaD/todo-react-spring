package com.todo.rest.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ToDoHardCodedService {

    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "testUname", "learn to dance", new Date(), false));
        todos.add(new Todo(++idCounter, "testUname", "learn to sing", new Date(), false));
        todos.add(new Todo(++idCounter, "testUname", "learn to play", new Date(), false));
    }

    public List<Todo> findALl() {
        return todos;
    }

}
