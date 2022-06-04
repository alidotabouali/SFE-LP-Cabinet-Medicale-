package com.example.security.services;

import com.example.security.entities.AppRole;
import com.example.security.entities.AppUser;

public interface SecurityService {
    AppUser saveNewUser(String username,String password, String repasswword);
    AppRole saveNewRole(String roleName,String description);
    void addRoleToUser(String username, String roleName);
    void removeRoleToUser(String username, String roleName);
    AppUser loadUserByUserName(String username);
}
