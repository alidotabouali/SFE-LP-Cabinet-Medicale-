package com.example.repsitorie;

import com.example.entities.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedecinRepositorie extends JpaRepository<Medecin,Long> {
}
