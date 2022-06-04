package com.example.services;

import com.example.entities.Traitement;
import com.example.repsitories.TraitementRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TraitementService implements IManipulate<Traitement>{
    @Autowired
    private TraitementRepositorie traitementRepositorie;
    @Override
    public Traitement insert(Traitement traitement) {
        try {
            return traitementRepositorie.save(traitement);
        }catch(Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public Traitement update(Long id, Traitement traitement) {
        try {
            traitementRepositorie.findById(id).orElse(null);
            traitement.setId(id);
            traitementRepositorie.save(traitement);
            return traitement;
        }catch(Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public void delete(Long id) {
        try {
            traitementRepositorie.deleteById(id);
        }catch(Exception e){
            e.getMessage();
        }
    }

    @Override
    public Traitement getOne(Long id) {
        try {
            Optional<Traitement> traitement = traitementRepositorie.findById(id);
            return traitement.get();
        }catch(Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public List<Traitement> getAll() {
        try {
            return traitementRepositorie.findAll();
        }catch(Exception e){
            e.getMessage();
            return null;
        }
    }
}
