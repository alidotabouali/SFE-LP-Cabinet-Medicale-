package com.example.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Medecin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullname;
    private String address;
    private String email;
    private String phonenumber;
    @OneToMany(mappedBy = "medecin")
    private Collection<CertificatMedicale> certificatMedicales;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ordannance_id", referencedColumnName = "id")
    private Ordannance ordannance;

}
