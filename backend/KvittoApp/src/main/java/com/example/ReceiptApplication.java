package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


    @SpringBootApplication // Denna annotering gör all "magi" - den hittar dina Controllers och JPA-filer
    public class ReceiptApplication {

        public static void main(String[] args) {
            SpringApplication.run(ReceiptApplication.class, args);
        }

    }

