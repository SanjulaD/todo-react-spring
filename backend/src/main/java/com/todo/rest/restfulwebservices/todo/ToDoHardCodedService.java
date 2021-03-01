package com.todo.rest.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ToDoHardCodedService {

    private static final List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "testUname", "learn to dance", new Date(), false));
        todos.add(new Todo(++idCounter, "testUname", "learn to sing", new Date(), false));
        todos.add(new Todo(++idCounter, "testUname", "learn to play", new Date(), false));
    }

    public List<Todo> findALl() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if (todo == null) return null;

        if (todos.remove(todo)) {
            todos.remove(todo);
            return todo;
        }

        return null;
    }

    public Todo save(Todo todo) {
        if (todo.getId() == -1 || todo.getId() == 0) {
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }

}

