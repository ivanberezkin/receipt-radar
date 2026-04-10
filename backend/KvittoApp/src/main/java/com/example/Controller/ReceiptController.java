package com.example.Controller;

import com.example.DTO.ChartDataDto;
import com.example.DTO.ReceiptRequestDto;
import com.example.DTO.ReceiptResponseDto;
import com.example.Service.ReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/receipts")
@CrossOrigin(origins = "http://localhost:5173")
public class ReceiptController {

    @Autowired
    private ReceiptService receiptService;

    @GetMapping
    public ResponseEntity<List<ReceiptResponseDto>> getAllReceipts() {
        List<ReceiptResponseDto> receipts = receiptService.getAllReceipts();
        return ResponseEntity.ok(receipts);
    }

    @GetMapping("/period")
    public ResponseEntity<List<ReceiptResponseDto>> getReceiptsBetweenDate(
            @RequestParam("startDate") String startDate,
            @RequestParam("endDate") String endDate) {
        List<ReceiptResponseDto> receipts = receiptService.getAllReceiptsForACustomPeriod(startDate, endDate);
        return ResponseEntity.ok(receipts);
    }

    @GetMapping("/chart")
    public ResponseEntity<List<ChartDataDto>> findDailyTotalsForPeriod(
            @RequestParam("startDate") String startDate,
            @RequestParam("endDate") String endDate){
        List<ChartDataDto> results = receiptService.findDailyTotalsForPeriod(startDate, endDate);
        return ResponseEntity.ok(results);
    }

    //Lägga till i databsen
    @PostMapping
    public ResponseEntity<ReceiptResponseDto> createReceipt(@RequestBody ReceiptRequestDto newReceipt) {
        ReceiptResponseDto createdReceipt = receiptService.createReceipt(newReceipt);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdReceipt);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReceipt(@PathVariable("id") Long id) {
        receiptService.deleteReceiptById(id);
        return ResponseEntity.noContent().build();
    }

}
