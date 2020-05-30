package com.jscorp.webots.controllers.thymeleafcontrollers;

import com.jscorp.webots.entities.Profile;
import com.jscorp.webots.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author natalya_ezhkova@mail.ru
 */
@Controller
@RequestMapping("/profile")
public class ProfileControler {
    @Autowired
    public void setProfileService(ProfileService profileService) {
        this.profileService = profileService;
    }

    private ProfileService profileService;
    @GetMapping("/")
    public String showAllProfiles(Model model) {
         Profile profile = new Profile();
        model.addAttribute("profile", profile);
        model.addAttribute("profiles", profileService.findAll());
        return "profiles";
    }
}
