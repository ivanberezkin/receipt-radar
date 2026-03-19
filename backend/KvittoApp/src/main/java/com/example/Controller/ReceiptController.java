package com.example.Controller;

import com.example.Model.Receipt;
import com.example.Repositories.ReceiptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/receipts")
@CrossOrigin(origins = "http://localhost:3000")
public class ReceiptController {

    @Autowired
    private ReceiptRepository receiptRepository;

    @GetMapping
    public List<Receipt> getAllReceipts(){
        return receiptRepository.findAll();
    }

    @PostMapping
    public Receipt createReceipt(@RequestBody Receipt receipt){
        return receiptRepository.save(receipt);
    }


}
