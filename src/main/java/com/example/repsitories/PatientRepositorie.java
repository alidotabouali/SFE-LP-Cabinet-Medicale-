package com.example.repsitories;

import com.example.entities.Patient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepositorie extends JpaRepository<Patient,Long> {
    Page<Patient> findByCINContains(String keyword, Pageable pageable);
}
