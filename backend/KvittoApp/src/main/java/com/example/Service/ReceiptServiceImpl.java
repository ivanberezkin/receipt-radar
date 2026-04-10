package com.example.Service;

import com.example.DTO.ChartDataDto;
import com.example.DTO.ReceiptRequestDto;
import com.example.DTO.ReceiptResponseDto;
import com.example.Model.ReceiptEntity;
import com.example.Repositories.ReceiptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ReceiptServiceImpl implements ReceiptService{

    @Autowired
    private ReceiptRepository receiptRepository;



    @Override
    public List<ReceiptResponseDto> getAllReceipts() {
        return receiptRepository.findAll()
                .stream()
                .map(this::convertToDto).toList();
    }

    @Override
    public List<ReceiptResponseDto> getAllReceiptsForACustomPeriod(String startDate, String endDate) {
        return receiptRepository.findByDateBetween(formatStringToDate(startDate),formatStringToDate(endDate))
                .stream()
                .map(this::convertToDto).toList();
    }

    @Override
    public ReceiptResponseDto createReceipt(ReceiptRequestDto newReceipt) {
        ReceiptEntity savedReceipt = receiptRepository.save(convertToEntity(newReceipt));
        return convertToDto(savedReceipt);
    }

    @Override
    public void deleteReceiptById(Long id) {
        if(!receiptRepository.existsById(id)){
            throw new NoSuchElementException("ReceiptServiceImpl: Receipt not found with id: " + id );
        }
        receiptRepository.deleteById(id);
    }

    @Override
    public List<ChartDataDto> findDailyTotalsForPeriod(String startDate, String endDate) {
        LocalDate start = formatStringToDate(startDate);
        LocalDate end = formatStringToDate(endDate);
        if(start.isAfter(end)){
            throw new IllegalArgumentException("ReceiptServiceImpl: StartDate must be on or before EndDate");
        }
        return receiptRepository.findDailyTotalsForPeriod(start,end);
    }

    private LocalDate formatStringToDate(String dateToFormat){
        try {
            return LocalDate.parse(dateToFormat, DateTimeFormatter.ISO_LOCAL_DATE);
        } catch (DateTimeParseException e) {
            throw new IllegalArgumentException("ReceiptServiceImpl: Invalid date format. Expected: yyyy-MM-dd " + dateToFormat, e);
        }
    }

    private ReceiptResponseDto convertToDto(ReceiptEntity receipt){
        ReceiptResponseDto dto = new ReceiptResponseDto();
        dto.setId(receipt.getId());
        dto.setVendor(receipt.getVendor());
        dto.setDate(receipt.getDate());
        dto.setCategory(receipt.getCategory());
        dto.setNotes(receipt.getNotes());
        dto.setAmountPaid(receipt.getAmountPaid());
        dto.setImageUrl(receipt.getImageUrl());
        return dto;
    }

    private ReceiptEntity convertToEntity(ReceiptRequestDto dto){
        ReceiptEntity receipt = new ReceiptEntity();
        receipt.setVendor(dto.getVendor());
        receipt.setDate(dto.getDate());
        receipt.setCategory(dto.getCategory());
        receipt.setNotes(dto.getNotes());
        receipt.setAmountPaid(dto.getAmountPaid());
        return receipt;
    }


}
