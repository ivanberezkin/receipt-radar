package com.example.Controller;

import com.example.Model.ReceiptEntity;
import com.example.Repositories.ReceiptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/receipts")
@CrossOrigin(origins = "http://localhost:5173")
public class ReceiptController {

    @Autowired
    private ReceiptRepository receiptRepository;

    //Hämta från Databsen
    @GetMapping
    public List<ReceiptEntity> getAllReceipts(){
        return receiptRepository.findAll();
    }

    //Lägga till i databsen
    @PostMapping
    public ReceiptEntity createReceipt(@RequestBody ReceiptEntity receiptEntity){
        return receiptRepository.save(receiptEntity);
    }

    @DeleteMapping("/{id}")
    public void deleteReceipt(@PathVariable("id") Long id){
        if(receiptRepository.existsById(id)){
            receiptRepository.deleteById(id);
        }
    }

}
