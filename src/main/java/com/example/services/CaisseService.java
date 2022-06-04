package com.example.services;

import com.example.entities.Caisse;
import com.example.repsitories.CaisseRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CaisseService implements IManipulate<Caisse> {
    @Autowired
    private CaisseRepositorie caisseRepositorie;
    @Override
    public Caisse insert(Caisse caisse) {
        try{
            return caisseRepositorie.save(caisse);
        }catch (Exception e){
            e.getMessage();
            return  null;
        }
    }

    @Override
    public Caisse update(Long id,Caisse caisse) {
        try{
            caisseRepositorie.findById(id).orElse(null);
            caisse.setId(id);
            caisseRepositorie.save(caisse);
            return caisse;
        }catch (Exception e){
            e.getMessage();
            return  null;
        }
    }

    @Override
    public void delete(Long id) {
        try{
             caisseRepositorie.deleteById(id);
        }catch (Exception e){
            e.getMessage();
        }
    }

    @Override
    public Caisse getOne(Long id) {
        try{
            Optional<Caisse> caisse = caisseRepositorie.findById(id);
            return caisse.get();
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public List<Caisse> getAll() {
        try{
            return caisseRepositorie.findAll();
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }
}
