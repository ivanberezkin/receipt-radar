package com.example.Service;

import com.example.DTO.ReceiptResponseDto;
import com.example.Model.ReceiptEntity;
import com.example.Repositories.ReceiptRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ReceiptServiceImplTest {

    @Mock
    private ReceiptRepository receiptRepository;

    @InjectMocks
    private ReceiptServiceImpl receiptService;

    @Test
    void getAllReceipts_ShouldReturnListOfDtos(){
        ReceiptEntity testReceipt = new ReceiptEntity();
        testReceipt.setId(1L);
        testReceipt.setVendor("Ica");
        testReceipt.setAmountPaid(500L);

        when(receiptRepository.findAll()).thenReturn(List.of(testReceipt));

        List<ReceiptResponseDto> result = receiptService.getAllReceipts();
        assertEquals(1, result.size());
        assertEquals(testReceipt.getVendor(), result.getFirst().getVendor());
    }

    @Test
    void createNewReceiptTest(){

    }


}