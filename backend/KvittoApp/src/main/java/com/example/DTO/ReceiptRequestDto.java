package com.example.DTO;


import lombok.Data;

import java.util.Date;

//Frontend sends this to API (Request)
@Data
public class ReceiptRequestDto {
    private String vendor;
    private Long amountPaid;
    private String category;
    private Date date;
    private String notes;
}
