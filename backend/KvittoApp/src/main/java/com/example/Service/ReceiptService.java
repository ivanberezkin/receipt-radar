package com.example.Service;

import com.example.DTO.ReceiptRequestDto;
import com.example.DTO.ReceiptResponseDto;
import com.example.Model.ReceiptEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ReceiptService {

    List<ReceiptResponseDto> getAllReceipts();

    List<ReceiptResponseDto> getAllReceiptsForACustomPeriod(String startDate, String endDate);

    ReceiptResponseDto createReceipt(ReceiptRequestDto newReceipt);

    void deleteReceiptById(Long id);

}
