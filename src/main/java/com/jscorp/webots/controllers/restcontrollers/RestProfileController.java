package com.jscorp.webots.controllers.restcontrollers;

import com.jscorp.webots.entities.Profile;
import com.jscorp.webots.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author natalya_ezhkova@mail.ru
 */
@RestController
@RequestMapping("api/v1/profiles")
public class RestProfileController {

    private ProfileService profileService;

    @Autowired
    public void setProfileService(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/list")
    @ResponseBody
    public List<Profile> findAll(){
        return (List<Profile>)profileService.findAll();

    }
/*
    @GetMapping("/listDTO")
    @ResponseBody
    public List<ProfileDto> findAllDTOs(){
        return (List<ProfileDto>)profileService.findAllDto();

    }

 */

}
