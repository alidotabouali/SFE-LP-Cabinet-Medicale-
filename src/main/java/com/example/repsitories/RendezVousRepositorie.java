package com.example.repsitories;

import com.example.entities.Patient;
import com.example.entities.RendezVous;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Date;

public interface RendezVousRepositorie extends JpaRepository<RendezVous,Long> {

    Page<RendezVous> findByDateContains( Date date, Pageable pageable);
}
