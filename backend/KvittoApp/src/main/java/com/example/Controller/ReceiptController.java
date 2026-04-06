package com.example.Controller;

import com.example.DTO.ReceiptRequestDto;
import com.example.DTO.ReceiptResponseDto;
import com.example.Model.ReceiptEntity;
import com.example.Repositories.ReceiptRepository;
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

    //Hämta från Databsen
    @GetMapping
    public ResponseEntity<List<ReceiptResponseDto>> getAllReceipts(){
        List<ReceiptResponseDto> receipts = receiptService.getAllReceipts();
        return ResponseEntity.ok(receipts);
    }

    //Lägga till i databsen
    @PostMapping
    public ResponseEntity<ReceiptResponseDto> createReceipt(@RequestBody ReceiptRequestDto newReceipt){
        ReceiptResponseDto createdReceipt = receiptService.createReceipt(newReceipt);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdReceipt);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReceipt(@PathVariable("id") Long id){
        receiptService.deleteReceiptById(id);
        return ResponseEntity.noContent().build();
    }

}
