package com.example.Repositories;


import com.example.Model.ReceiptEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface ReceiptRepository extends JpaRepository<ReceiptEntity, Long> {

    List<ReceiptEntity> findByDateBetween(LocalDate start, LocalDate end);

}
