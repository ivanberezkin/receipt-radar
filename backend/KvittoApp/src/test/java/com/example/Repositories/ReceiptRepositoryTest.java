package com.example.Repositories;


import com.example.Model.ReceiptEntity;
import com.example.TestUtils.TestUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
public class ReceiptRepositoryTest {

    @Autowired
    ReceiptRepository receiptRepository;

    @BeforeEach
    void setUp() {
        receiptRepository.save(TestUtils.createTestReceipt());
        receiptRepository.save(TestUtils.createTestReceipt2());
        receiptRepository.save(TestUtils.createTestReceipt3());
    }

    @Test
    void testGetAllReceiptsForACustomPeriod(){
        LocalDate startDate = LocalDate.parse("2026-03-01", DateTimeFormatter.ISO_LOCAL_DATE);
        LocalDate endDate = LocalDate.parse("2026-03-31", DateTimeFormatter.ISO_LOCAL_DATE);

        List<ReceiptEntity> results = receiptRepository.findByDateBetween(startDate,endDate);
        assertEquals(2, results.size());
        List<String> vendors = results.stream().map(ReceiptEntity::getVendor).toList();
        assertTrue(vendors.contains("Stadium"));
        assertTrue(vendors.contains("Willys"));
    }

}
