package com.example.controllers;

import com.example.entities.Patient;
import com.example.entities.RendezVous;
import com.example.repsitories.PatientRepositorie;
import com.example.services.PatientService;
import com.example.services.RendezVousService;
import lombok.AllArgsConstructor;
import org.apache.catalina.LifecycleState;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.Collection;
import java.util.List;

@Controller
@AllArgsConstructor
public class PatientController {
    private PatientService patientservice;
    private RendezVousService rendezVousService;
    private PatientRepositorie patientRepositorie;


    @GetMapping(path ="/user/tiemacab")
    public String tiemacab(){
        return "dashboard";
    }

    @GetMapping(path ="/")
    public String home(){
        return "redirect:/user/tiemacab";
    }



    // <---liste des patients--->
    @GetMapping(path = "/user/listpatient")
    public  String patients(Model model,
                            @RequestParam(name = "page",defaultValue = "0") int page,
                            @RequestParam(name="size",defaultValue = "15") int size,
                            @RequestParam(name="keyword",defaultValue = "") String keyword){
        Page<Patient> patients= patientRepositorie.findByCINContains(keyword, PageRequest.of(page,size));
        model.addAttribute("listPatinets",patients.getContent());
        model.addAttribute("pages",new int[patients.getTotalPages()]);
        model.addAttribute("currentPage",page);
        model.addAttribute("keyword",keyword);
        return "listpatient";
    }
    //   <---/liste des patients--->




    //   <---ajouter un patient--->
    @GetMapping(path="/admin/addpatient")
    public String addpatient(Model model){
        model.addAttribute("patient",new Patient());
        model.addAttribute("rdv",new RendezVous());
        return "addpatient";
    }
    @PostMapping(path = "/admin/addpatient")
    public  String save(@Valid Patient patient ,RendezVous rendezVous, BindingResult bindingResult,
                        @RequestParam(defaultValue = "0") int page,
                        @RequestParam(defaultValue = "") String keyword){
        if(bindingResult.hasErrors()) return "addpatient";
        patientservice.insert(patient);
        rendezVous.setPatient(patient);
        rendezVousService.insert(rendezVous);
        return "redirect:/user/listpatient?page="+page+"&keyword="+keyword;
    }
    //   <---/ajouter un patient--->



    //   <---modifier un patient--->
    @GetMapping(path = "/admin/editepatient")
    public String editepatient(Model model, Long id, String keyword, int page){
        Patient patient=patientservice.getOne(id);
        if(patient==null)throw new RuntimeException("patient introuvable");
        model.addAttribute("patient",patient);
        model.addAttribute("page",page);
        model.addAttribute("keyword",keyword);
        return "editepatient";
    }
    @PostMapping(path="/admin/editepatient")
    public  String edite(@Valid Patient patient,@Valid Long id,
                         @RequestParam(defaultValue = "0") int page,
                         @RequestParam(defaultValue = "") String keyword){
        patientservice.update(id,patient);
        return "redirect:/user/listpatient?page="+page+"&keyword="+keyword;
    }
    //   <---/modifier un patient--->



    //   <---suppremer un patient--->
    @GetMapping(path = "/admin/deletepatient")
    public String deletepatient(Long id, String keyword, int page){
        patientservice.delete(id);
        return "redirect:/user/listpatient?page="+page+"&keyword="+keyword;
    }
    //   <---/suppremer un patient--->







    @GetMapping(path="/user/profilepatient")
    public String profil(){
        return "profilepatient";
    }




}
