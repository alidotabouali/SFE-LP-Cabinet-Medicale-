package com.example.repsitorie;

import com.example.entities.Caisse;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CaisseRepositorie  extends JpaRepository<Caisse ,Long> {
}
