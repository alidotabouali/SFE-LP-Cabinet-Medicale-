package com.example.security.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class AppUser {
    @Id
    private String userId;
    @Column(unique = true)@NotEmpty
    @Size(min=3,max = 13)
    private String username;
    private String password;
    private boolean active;
    @ManyToMany(fetch= FetchType.EAGER)
    private List<AppRole> appRoles=new ArrayList<>();
}
