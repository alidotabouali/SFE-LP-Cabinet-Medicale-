package com.example.repsitorie;

import com.example.entities.Traitement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TraitementRepositorie extends JpaRepository<Traitement,Long> {
}
