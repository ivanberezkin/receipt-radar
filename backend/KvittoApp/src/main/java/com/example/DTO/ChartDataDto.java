package com.example.DTO;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ChartDataDto {
    private long amountPaid;
    private LocalDate date;
}
