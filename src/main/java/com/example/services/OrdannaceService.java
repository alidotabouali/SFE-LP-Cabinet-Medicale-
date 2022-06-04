package com.example.services;

import com.example.entities.Ordannance;
import com.example.repsitories.OrdannanceRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrdannaceService implements IManipulate<Ordannance>{
    @Autowired
    private OrdannanceRepositorie ordannanceRepositorie;
    @Override
    public Ordannance insert(Ordannance ordannance) {
        try{
            return ordannanceRepositorie.save(ordannance);
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public Ordannance update(Long id, Ordannance ordannance) {
        try{
            ordannanceRepositorie.findById(id);
            ordannance.setId(id);
            ordannanceRepositorie.save(ordannance);
            return ordannance;
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public void delete(Long id) {
        try{
            ordannanceRepositorie.deleteById(id);
        }catch (Exception e){
            e.getMessage();
        }
    }

    @Override
    public Ordannance getOne(Long id) {
        try{
            Optional<Ordannance> ordannance=ordannanceRepositorie.findById(id);
            return ordannance.get() ;
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public List<Ordannance> getAll() {
        try{
            return ordannanceRepositorie.findAll();
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }
}
