package com.todo.rest.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
//http://localhost:4200/
public class HelloWorldControllder {

    //GET
    //URI - /hello-world
    // Method - Hello World
    @GetMapping(path = "/hello-world")
    public String helloWorld() {
        return "Hello World";
    }

}
