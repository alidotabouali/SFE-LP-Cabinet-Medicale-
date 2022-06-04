package com.example.services;

import com.example.entities.Facture;
import com.example.repsitories.FactureRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FactureService implements IManipulate<Facture> {
    @Autowired
    private FactureRepositorie factureRepositorie;
    @Override
    public Facture insert(Facture facture) {
        try{

            return factureRepositorie.save(facture);
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public Facture update(Long id,Facture facture) {
        try{
            factureRepositorie.findById(id).orElse(null);
            facture.setId(id);
            factureRepositorie.save(facture);
            return facture;
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public void delete(Long id) {
        try{
            factureRepositorie.deleteById(id);
        }catch (Exception e){
            e.getMessage();
        }
    }

    @Override
    public Facture getOne(Long id) {
        try{
            Optional<Facture> facture=factureRepositorie.findById(id);
            return facture.get();
        }catch (Exception e){
            e.getMessage();
            return  null;
        }
    }

    @Override
    public List<Facture> getAll() {
        try{
            return  factureRepositorie.findAll();
        }catch (Exception e){
            e.getMessage();
            return  null;
        }
    }
}
