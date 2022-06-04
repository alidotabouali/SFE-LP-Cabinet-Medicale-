package com.example.controllers;

import com.example.security.entities.AppUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SecurityController {
    @GetMapping("/403")
    public String error403(){
        return "403";
    }

    @GetMapping("/500")
    public String error500(){
        return "500";
    }

    @GetMapping(path="/login")
    public String login(AppUser appUser, Model model){
        model.addAttribute("appuser",appUser);
        return "login";
    }

    @GetMapping(path="/logout")
    public String logout(){
        return "logout";
    }
}
