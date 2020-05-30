package com.jscorp.webots.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

/**
 * @author natalya_ezhkova@mail.ru
 */
@Entity
//@Validated
@Data
//@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "profile")
public class Profile {
//extends AbstractAuditable<User, Long>

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "patronymic")
    private String patronymic; //отчество patronymic

    //@DateTimeFormat
    //@Temporal(TemporalType.DATE)
//    @NotNull
    @Column(name = "birthdate")
    private Date birthdate; //день рождения

    @Column(name = "gender")//, nullable = false)
    public String gender;


    @Column(name = "phone")
    private String phone;

    @Column(name = "position")
    private String position;

    @Column(name = "VKlink")
    private String VKlink;

    @Column(name = "fbooklink")
    private String FBookLink;

    @OneToMany(mappedBy = "profile", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<UserImage> images;

}

