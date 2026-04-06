package com.example.DTO;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

//Backend sends this to frontend (Response)
@Data
public class ReceiptResponseDto {
    private Long id;
    private String vendor;
    private Long amountPaid;
    private String category;
    private LocalDate date;
    private String notes;
    private String imageUrl;

}
