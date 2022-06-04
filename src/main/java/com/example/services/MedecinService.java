package com.example.services;

import com.example.entities.Medecin;
import com.example.repsitories.MedecinRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedecinService implements IManipulate<Medecin>{
    @Autowired
    private MedecinRepositorie medecinRepositorie;
    @Override
    public Medecin insert(Medecin medecin) {
        try{
            return  medecinRepositorie.save(medecin);
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public Medecin update(Long id,Medecin medecin) {
        try{
            medecinRepositorie.findById(id).orElse(null);
            medecin.setId(id);
            medecinRepositorie.save(medecin);
            return medecin;
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public void delete(Long id) {
        try{
            medecinRepositorie.deleteById(id);
        }catch (Exception e){
            e.getMessage();
        }
    }

    @Override
    public Medecin getOne(Long id) {
        try{
            Optional<Medecin> medecin =medecinRepositorie.findById(id);
            return medecin.get();
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public List<Medecin> getAll() {
            return null;

    }
}
