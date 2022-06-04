package com.example;

import com.example.security.services.SecurityService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@SpringBootApplication
public class ProjetApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjetApplication.class, args);
    }
}
