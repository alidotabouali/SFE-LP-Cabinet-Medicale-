package com.example.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Patient {
    @Autowired
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String CIN;
    private String name;
    private String lastname;
    private String gender;
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datebrith;
    private String address;
    private String Email;
    private String phonenumber;
    private Long fileno;
    @OneToMany(mappedBy = "patient")
    private Collection<RendezVous> rendesvous;
    @ManyToOne
    private Ordannance ordannance;
    @OneToMany(mappedBy = "patient")
    private Collection<Traitement> traitements;

}
