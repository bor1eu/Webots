package com.jscorp.webots.services;

import com.jscorp.webots.entities.Profile;
import com.jscorp.webots.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author natalya_ezhkova@mail.ru
 */
@Service
public class ProfileService {
    @Autowired
    public void setProfileRepository(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    private ProfileRepository profileRepository;

    public List<Profile> findAll() {
        return (List<Profile>)profileRepository.findAll();
    }

 //   public List<Profile> findAllDto() {
  //      return (List<ProfileDto>)profileRepository.findAll();
 //   }



}
