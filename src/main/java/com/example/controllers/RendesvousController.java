package com.example.controllers;

import com.example.entities.Patient;
import com.example.entities.RendezVous;
import com.example.repsitories.RendezVousRepositorie;
import com.example.services.PatientService;
import com.example.services.RendezVousService;
import lombok.AllArgsConstructor;
import net.bytebuddy.agent.builder.AgentBuilder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;


@Controller
@AllArgsConstructor
public class RendesvousController {
    private RendezVousService rendezVousService;
    private RendezVousRepositorie rendezVousRepositorie;
    private PatientService patientService;
    @GetMapping(path="/user/calendrier")
    public String listrdvs(Model model,
                           @RequestParam(name = "page",defaultValue = "0") int page,
                           @RequestParam(name="size",defaultValue = "15") int size,
                           @RequestParam(name = "date",defaultValue ="2000-06-30")  Date date){
        Page<RendezVous> rendezVous= rendezVousRepositorie.findByDateContains(date, PageRequest.of(page,size)) ;
        model.addAttribute("listrendezvous",rendezVous.getContent());
        model.addAttribute("pages",new int[rendezVous.getTotalPages()]);
        model.addAttribute("currentPage",page);
        model.addAttribute("date",date);
        return "calendrier";
    }


    //   <---liste de rendesVous pour un patient--->
    @GetMapping(path = "/user/rendesvous")
    public String rendesvous(Model model, Long id){
        Patient patient=patientService.getOne(id);
        Collection<RendezVous> rendezVousList=patient.getRendesvous();
        if(patient==null)throw new RuntimeException("patient introuvable");
        model.addAttribute("patient",patient);
        model.addAttribute("rendezVousList",rendezVousList);

        return "rendesvous";
    }
    //   <--- /liste de rendesVous pour un patient--->


    @PostMapping(path="/user/addrendesvous")
    public  String addrendesvous(@Valid RendezVous rendezVous){
        rendezVousService.insert(rendezVous);
        return "redirect:/user/rendesvous";
    }




    // <-- delete rendevous pour un seul patient -->
    @GetMapping(path = "/user/deleterendesvous")
    public String deleterendesvous(@Valid Long id,@Valid Long idPatient) {
        rendezVousService.delete(id);
        return "redirect:/user/rendesvous?id="+idPatient;
    }
    // <--/ delete rendevous pour un seul patient -->



    // <-- edite rendesvous pour un seul patient -->
    @GetMapping(path = "/user/editerendesvous")
    public String editerendesvous(Long id){


        return "redirect:/user/rendesvous";
    }
    // <-- //edite rendesvous pour un seul patient -->


}
