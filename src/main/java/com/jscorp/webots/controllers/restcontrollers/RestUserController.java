package com.jscorp.webots.controllers.restcontrollers;


import com.jscorp.webots.dtos.UserDto;
import com.jscorp.webots.entities.User;
import com.jscorp.webots.errors.ResourceNotFoundException;
import com.jscorp.webots.repository.UserRepository;
import com.jscorp.webots.services.UserServiceImpl;
import com.jscorp.webots.utils.SystemUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

/**
 * @author natalya_ezhkova@mail.ru
 */

@RestController
@RequestMapping("api/v1/users")
public class RestUserController {
    private UserServiceImpl userService;
    @Autowired
    public void setUserService(UserServiceImpl userService) {
        this.userService = userService;
    }

    private UserRepository userRepository;
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @PostMapping("/registration")
    @ResponseStatus(HttpStatus.CREATED)
    public User saveUser(@RequestBody SystemUser systemUser, BindingResult
            bindingResult) throws ResourceNotFoundException {
        String username = systemUser.getUsername();
        if (bindingResult.hasErrors()) {
            throw new ResourceNotFoundException("Invalid username");
        }
        User existing = userService.findOneByUsername(username);
        if (existing != null) {
            // theSystemUser.setUserName(null);
            throw new ResourceNotFoundException("User with this username already exists");
        }

        return userService.save(systemUser);
    }


    @GetMapping("/registrationConfirmation/{id}")
    public UserDto registrationConfirmation(@PathVariable Long id){
        User user= new User();
        if (user != null) {
            user = userService.findById(id);
        }
        UserDto userDto = makeDTO(user);
        return userDto;
    }

    @GetMapping("/{id}")
    public User findByOne(@PathVariable Long id) throws ResourceNotFoundException {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User hasn't been found:" +id));
    }


    private UserDto makeDTO(User user){
        return UserDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .build();

    }
}
