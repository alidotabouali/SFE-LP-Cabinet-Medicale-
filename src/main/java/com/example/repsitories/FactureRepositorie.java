package com.example.repsitories;

import com.example.entities.Facture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FactureRepositorie extends JpaRepository<Facture,Long> {
}
