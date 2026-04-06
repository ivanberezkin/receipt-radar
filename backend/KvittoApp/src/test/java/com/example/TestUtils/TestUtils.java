package com.example.TestUtils;

import com.example.DTO.ReceiptRequestDto;
import com.example.Model.ReceiptEntity;

import java.time.LocalDate;


public class TestUtils {

    public static ReceiptEntity createTestReceipt() {
        return ReceiptEntity.builder().
                id(1L)
                .vendor("Ica")
                .amountPaid(500L)
                .category("Grocieries")
                .date(LocalDate.of(2026, 4, 6))
                .notes("test notes")
                .imageUrl(null)
                .build();
    }
    public static ReceiptRequestDto createTestRequestDto() {
        return ReceiptRequestDto.builder()
                .vendor("Ica")
                .amountPaid(500L)
                .category("Grocieries")
                .date(LocalDate.of(2026, 4, 6))
                .notes("test notes")
                .build();
    }


}
