package com.example.Service;

import com.example.DTO.ChartDataDto;
import com.example.DTO.ReceiptRequestDto;
import com.example.DTO.ReceiptResponseDto;

import java.util.List;

public interface ReceiptService {

    List<ReceiptResponseDto> getAllReceipts();

    List<ReceiptResponseDto> getAllReceiptsForACustomPeriod(String startDate, String endDate);

    ReceiptResponseDto createReceipt(ReceiptRequestDto newReceipt);

    void deleteReceiptById(Long id);

    List<ChartDataDto> findDailyTotalsForPeriod(String startDate, String endDate);

}
