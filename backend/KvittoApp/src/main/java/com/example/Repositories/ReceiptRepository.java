package com.example.Repositories;


import com.example.Model.ReceiptEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface ReceiptRepository extends JpaRepository<ReceiptEntity, Long> {

    List<ReceiptEntity> findByDateBetween(Date start, Date end);

}
