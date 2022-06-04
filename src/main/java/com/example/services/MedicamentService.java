package com.example.services;

import com.example.entities.Medicament;
import com.example.repsitories.MedicamentRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicamentService implements IManipulate<Medicament> {
    @Autowired
    private MedicamentRepositorie medicamentRepositorie;
    @Override
    public Medicament insert(Medicament medicament) {
        try {

            return medicamentRepositorie.save(medicament);
        }catch(Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public Medicament update(Long id, Medicament medicament) {
        try {
            medicamentRepositorie.findById(id).orElse(null);
            medicament.setId(id);
            medicamentRepositorie.save(medicament);
            return  medicament;
        }catch(Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public void delete(Long id) {
        try {
            medicamentRepositorie.deleteById(id);
        }catch(Exception e){
            e.getMessage();
        }
    }

    @Override
    public Medicament getOne(Long id) {
        try {
            Optional<Medicament> medicament = medicamentRepositorie.findById(id);
            return medicament.get();
        }catch(Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public List<Medicament> getAll() {
        try {
            return medicamentRepositorie.findAll();
        }catch(Exception e){
            e.getMessage();
            return null;
        }
    }
}
