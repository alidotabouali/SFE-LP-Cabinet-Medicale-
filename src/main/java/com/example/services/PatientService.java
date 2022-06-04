package com.example.services;

import com.example.entities.Patient;
import com.example.repsitories.PatientRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService implements IManipulate<Patient> {
    @Autowired
    private PatientRepositorie patientRepositorie;
    @Override
    public Patient insert(Patient patient) {
        try{
            return patientRepositorie.save(patient);
        }catch (Exception e){
            e.getMessage();
            return  null;
        }

    }

    @Override
    public Patient update(Long id, Patient patient) {
        try{
            patientRepositorie.findById(id).orElse(null);
            patient.setId(id);
            patientRepositorie.save(patient);
            return patient;
        }catch (Exception e){
            e.getMessage();
            return  null;
        }

    }

    @Override
    public void delete(Long id) {
        try{
            patientRepositorie.deleteById(id);
        }catch (Exception e){
            e.getMessage();
        }

    }

    @Override
    public Patient getOne(Long id) {
        try{
          Optional<Patient> patient = patientRepositorie.findById(id);
          return patient.get();
        }catch (Exception e){
            e.getMessage();
            return null;
        }
    }

    @Override
    public List<Patient> getAll() {
        try{
            return patientRepositorie.findAll();
        }catch (Exception e){
            e.getMessage();
            return null;
        }

    }
}
