package com.example.Repositories;


import com.example.DTO.ChartDataDto;
import com.example.Model.ReceiptEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ReceiptRepository extends JpaRepository<ReceiptEntity, Long> {

    List<ReceiptEntity> findByDateBetween(LocalDate start, LocalDate end);

    @Query("SELECT new com.example.DTO.ChartDataDto(r.date, SUM(r.amountPaid)) FROM ReceiptEntity r where r.date BETWEEN :start AND :end group by r.date order by r.date ASC")
    List<ChartDataDto> findDailyTotalsForPeriod(
            @Param("start") LocalDate start,
            @Param("end") LocalDate end);
}
