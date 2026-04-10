package com.example.TestUtils;

import com.example.DTO.ReceiptRequestDto;
import com.example.Model.ReceiptEntity;

import java.time.LocalDate;


public class TestUtils {

    public static ReceiptEntity createTestReceipt() {
        return ReceiptEntity.builder().
                vendor("Ica")
                .amountPaid(500L)
                .category("Grocieries")
                .date(LocalDate.of(2026, 4, 6))
                .notes("test notes")
                .imageUrl(null)
                .build();
    }

    public static ReceiptEntity createTestReceipt2() {
        return ReceiptEntity.builder().
                vendor("Stadium")
                .amountPaid(5000L)
                .category("Sport")
                .date(LocalDate.of(2026, 3, 6))
                .notes("Stadium notes")
                .imageUrl(null)
                .build();
    }

    public static ReceiptEntity createTestReceipt3() {
        return ReceiptEntity.builder().
                vendor("Willys")
                .amountPaid(200L)
                .category("Groceries")
                .date(LocalDate.of(2026, 3, 10))
                .notes("Stadium notes")
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

    public static ReceiptRequestDto createTestRequestDto2() {
        return ReceiptRequestDto.builder()
                .vendor("Willys")
                .amountPaid(1000L)
                .category("Sport")
                .date(LocalDate.of(2026, 3, 30))
                .notes("Willys notes")
                .build();
    }


}
