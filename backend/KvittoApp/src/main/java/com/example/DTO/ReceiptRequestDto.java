package com.example.DTO;


import lombok.Data;

import java.time.LocalDate;

//Frontend sends this to API (Request)
@Data
public class ReceiptRequestDto {
    private String vendor;
    private Long amountPaid;
    private String category;
    private LocalDate date;
    private String notes;
}
