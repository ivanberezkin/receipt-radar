package com.example.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "receipt")
@Builder
@NoArgsConstructor
@AllArgsConstructor
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
