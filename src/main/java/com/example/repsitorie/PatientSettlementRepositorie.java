package com.example.repsitorie;

import com.example.entities.PatinetSettlement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientSettlementRepositorie extends JpaRepository<PatinetSettlement,Long> {
}
