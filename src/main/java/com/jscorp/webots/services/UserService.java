package com.jscorp.webots.services;

import com.jscorp.webots.entities.User;
import com.jscorp.webots.utils.SystemUser;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

/**
 * @author natalya_ezhkova@mail.ru
 */

@Service
public interface UserService extends UserDetailsService {
    User findByPhone(String phone);
    User findOneByUsername(String username);
    User findById(Long id);
    boolean isUserExist(String phone);
    User save(SystemUser systemUser);
}
