package com.example.Service;

import com.example.DTO.ReceiptRequestDto;
import com.example.DTO.ReceiptResponseDto;
import com.example.Model.ReceiptEntity;
import com.example.Repositories.ReceiptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

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
        receiptRepository.deleteById(id);
    }

    private Date formatStringToDate(String dateToFormat){
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        try {
            return formatter.parse(dateToFormat);
        } catch (ParseException e) {
            throw new RuntimeException(e);
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
