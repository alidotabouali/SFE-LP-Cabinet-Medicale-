package com.example.repsitorie;

import com.example.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepositorie extends JpaRepository<Patient,Long> {
}
