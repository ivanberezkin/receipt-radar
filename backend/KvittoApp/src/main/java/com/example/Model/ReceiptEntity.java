package com.example.Model;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "receipt")
@Data
public class ReceiptEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vendor;
    private Long amountPaid;
    private String category;
    private LocalDate date;
    private String notes;

    private String imageUrl;



}
