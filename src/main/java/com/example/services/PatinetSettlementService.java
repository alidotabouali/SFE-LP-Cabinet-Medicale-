package com.example.services;

import com.example.entities.PatinetSettlement;
import com.example.repsitories.PatientSettlementRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatinetSettlementService implements  IManipulate<PatinetSettlement>{
    @Autowired
    private PatientSettlementRepositorie patientSettlementRepositorie;
    @Override
    public PatinetSettlement insert(PatinetSettlement patinetSettlement) {
        try {
            return patientSettlementRepositorie.save(patinetSettlement);
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public PatinetSettlement update(Long id, PatinetSettlement patinetSettlement) {
        try {
            patientSettlementRepositorie.findById(id).orElse(null);
            patinetSettlement.setId(id);
            patientSettlementRepositorie.save(patinetSettlement);
            return patinetSettlement;
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public void delete(Long id) {
        try {
            patientSettlementRepositorie.deleteById(id);
        }catch (Exception e){
            e.getMessage();
        }
    }

    @Override
    public PatinetSettlement getOne(Long id) {
        try {
            Optional<PatinetSettlement> patinetSettlement = patientSettlementRepositorie.findById(id);
            return patinetSettlement.get();
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public List<PatinetSettlement> getAll() {
        try {
            return patientSettlementRepositorie.findAll();

        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }
}
