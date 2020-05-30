package com.jscorp.webots.controllers.thymeleafcontrollers;

import com.jscorp.webots.entities.User;
import com.jscorp.webots.services.UserServiceImpl;
import com.jscorp.webots.utils.SystemUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * @author natalya_ezhkova@mail.ru
 */

@Controller
@RequestMapping("/register")
public class RegistrationController {
    private UserServiceImpl userService;

    @Autowired
    public void setUserService(UserServiceImpl userService) {
        this.userService = userService;
    }

    @InitBinder
    public void initBinder(WebDataBinder dataBinder) {
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        dataBinder.registerCustomEditor(String.class, stringTrimmerEditor);
    }

    @GetMapping("/")
    public String showMyLoginPage(Model model) {
        model.addAttribute("systemUser", new SystemUser());
        return "registration-form";
    }

    @PostMapping("/process")
    public String processRegistrationForm(@Valid @ModelAttribute("systemUser") SystemUser systemUser, BindingResult bindingResult, Model model) {
        String username = systemUser.getUsername();
        if (bindingResult.hasErrors()) {
            return "registration-form";
        }
        User existing = userService.findOneByUsername(username);
        if (existing != null) {
            // theSystemUser.setUserName(null);
            model.addAttribute("systemUser", systemUser);
            model.addAttribute("registrationError", "User with current username is already exist");
            return "registration-form";
        }
        userService.save(systemUser);
        return "registration-confirmation";
    }
}
