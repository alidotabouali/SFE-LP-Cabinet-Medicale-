package com.example.repsitories;

import com.example.entities.Medicament;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicamentRepositorie extends JpaRepository<Medicament,Long> {
}
