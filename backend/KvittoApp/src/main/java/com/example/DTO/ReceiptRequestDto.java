package com.example.DTO;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

//Frontend sends this to API (Request)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReceiptRequestDto {
    private String vendor;
    private Long amountPaid;
    private String category;
    private LocalDate date;
    private String notes;
}
