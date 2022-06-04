package com.example.services;

import com.example.entities.RendezVous;
import com.example.repsitories.RendezVousRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RendezVousService implements IManipulate<RendezVous>{
    @Autowired
    private RendezVousRepositorie rendezVousRepositorie;
    @Override
    public RendezVous insert(RendezVous rendezVous) {
        try {
            return rendezVousRepositorie.save(rendezVous);
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public RendezVous update(Long id, RendezVous rendezVous) {
        try {
            rendezVousRepositorie.findById(id).orElse(null);
            rendezVous.setId(id);
            rendezVousRepositorie.save(rendezVous);
            return rendezVous;
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public void delete(Long id) {
        try {
            rendezVousRepositorie.deleteById(id);
        }catch (Exception e){
            e.getMessage();
        }
    }

    @Override
    public RendezVous getOne(Long id) {
        try {
            Optional<RendezVous> rendezVous = rendezVousRepositorie.findById(id);
            return rendezVous.get();
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public List<RendezVous> getAll() {
        try {
            return rendezVousRepositorie.findAll();
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

}
