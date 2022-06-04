package com.example.services;

import com.example.entities.CertificatMedicale;
import com.example.repsitories.CertificationMedicaleRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CertificatMedicaleService implements IManipulate<CertificatMedicale>{
    @Autowired
    private CertificationMedicaleRepositorie certificationMedicaleRepositorie;
    @Override
    public CertificatMedicale insert(CertificatMedicale certificatMedicale) {
        try{
            return  certificationMedicaleRepositorie.save(certificatMedicale);
        }catch (Exception e){
            e.getMessage();
            return  null;
        }
    }

    @Override
    public CertificatMedicale update(Long id,CertificatMedicale certificatMedicale) {
        try{
            certificationMedicaleRepositorie.findById(id).orElse(null);
            certificatMedicale.setId(id);
            certificationMedicaleRepositorie.save(certificatMedicale);
            return  certificatMedicale;
        }catch (Exception e){
            e.getMessage();
            return  null;
        }
    }

    @Override
    public void delete(Long id) {
        try{
            certificationMedicaleRepositorie.deleteById(id);
        }catch (Exception e){
            e.getMessage();
        }
    }

    @Override
    public CertificatMedicale getOne(Long id) {
        try{
            Optional<CertificatMedicale> certificatMedicale =certificationMedicaleRepositorie.findById(id);
            return certificatMedicale.get();
        }catch (Exception e){
            e.getMessage();
            return  null;
        }
    }

    @Override
    public List<CertificatMedicale> getAll() {
        try{
            return certificationMedicaleRepositorie.findAll();
        }catch (Exception e){
            e.getMessage();
            return  null;
        }
    }
}
