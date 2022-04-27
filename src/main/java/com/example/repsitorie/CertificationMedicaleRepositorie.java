package com.example.repsitorie;

import com.example.entities.CertificatMedicale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificationMedicaleRepositorie extends JpaRepository<CertificatMedicale,Long> {
}
