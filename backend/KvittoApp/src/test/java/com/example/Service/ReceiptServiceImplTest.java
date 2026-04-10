package com.example.Service;

import com.example.DTO.ReceiptRequestDto;
import com.example.DTO.ReceiptResponseDto;
import com.example.Model.ReceiptEntity;
import com.example.Repositories.ReceiptRepository;
import com.example.TestUtils.TestUtils;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ReceiptServiceImplTest {

    @Mock
    private ReceiptRepository receiptRepository;

    @InjectMocks
    private ReceiptServiceImpl receiptService;

    @Test
    void getAllReceipts_ShouldReturnListOfDtos(){
        ReceiptEntity testReceipt = TestUtils.createTestReceipt();

        when(receiptRepository.findAll()).thenReturn(List.of(testReceipt));

        List<ReceiptResponseDto> result = receiptService.getAllReceipts();
        assertEquals(1, result.size());
        assertEquals(testReceipt.getVendor(), result.getFirst().getVendor());
    }

    @Test
    void createReceipt_ShouldReturnResponseDto(){
        ReceiptRequestDto request = TestUtils.createTestRequestDto();
        ReceiptEntity testReceipt = TestUtils.createTestReceipt();
        when(receiptRepository.save(any(ReceiptEntity.class))).thenReturn(testReceipt);
        ReceiptResponseDto result = receiptService.createReceipt(request);
        assertEquals(testReceipt.getVendor(), result.getVendor());
    }

    @Test
    void testDeleteReceiptById(){
        receiptService.deleteReceiptById(1L);
        verify(receiptRepository).deleteById(1L);
    }



}