package com.jscorp.webots.repository;

import com.jscorp.webots.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author natalya_ezhkova@mail.ru
 */
@Repository
public  interface UserRepository extends JpaRepository<User, Long> {
    User findOneByPhone(String phone);
    User findOneByUsername(String username);
    boolean existsByPhone(String phone);
    boolean existsByUsername(String username);
}
