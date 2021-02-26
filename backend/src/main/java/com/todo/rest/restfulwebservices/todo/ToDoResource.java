package com.todo.rest.restfulwebservices.todo;

import com.todo.rest.restfulwebservices.todo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ToDoResource {

    @Autowired
    private ToDoHardCodedService todoService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllToDos(@PathVariable String username) {
    return todoService.findALl();
    }

}
