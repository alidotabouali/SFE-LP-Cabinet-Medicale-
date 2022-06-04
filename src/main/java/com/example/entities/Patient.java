package com.example.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Patient {
    @Autowired
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String CIN;
    private String fullname;
    private String gender;
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datebrith;
    private String address;
    private String Email;
    private String phonenumber;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fileno;
    @OneToMany(mappedBy = "patient",cascade = CascadeType.REMOVE)
    private Collection<RendezVous> rendesvous;
    @OneToMany(mappedBy = "patient",cascade = CascadeType.REMOVE)
    private Collection<Ordannance>  ordannance;
    @OneToMany(mappedBy = "patient",cascade = CascadeType.REMOVE)
    private Collection<Traitement> traitements;


}
