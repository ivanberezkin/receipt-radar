package com.example.Controller;

import com.example.Model.Receipt;
import com.example.Repositories.ReceiptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/receipts")
@CrossOrigin(origins = "http://localhost:3000")
public class ReceiptController {

    @Autowired
    private ReceiptRepository receiptRepository;

    //Hämta från Databsen
    @GetMapping
    public List<Receipt> getAllReceipts(){
        return receiptRepository.findAll();
    }

    //Lägga till i databsen
    @PostMapping
    public Receipt createReceipt(@RequestBody Receipt receipt){
        return receiptRepository.save(receipt);
    }

    @DeleteMapping("/{id}")
    public void deleteReceipt(@PathVariable Long id){
        receiptRepository.deleteById(id);
    }

}
