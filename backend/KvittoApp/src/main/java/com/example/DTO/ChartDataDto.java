package com.example.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class ChartDataDto {
    private LocalDate date;
    private long amountPaid;
}
