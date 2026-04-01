package com.example.Model;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "receipt")
@Data
public class Receipt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vendor;
    private Long amountPaid;
    private String category;
    private Date date;
    private String notes;

    private String imageUrl;



}
