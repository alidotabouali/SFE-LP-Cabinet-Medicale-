package com.example.security.services;

import com.example.security.entities.AppRole;
import com.example.security.entities.AppUser;
import com.example.security.repositories.AppRoleRepository;
import com.example.security.repositories.AppUserRepository;
import groovy.util.logging.Slf4j;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.UUID;

@Service
@Slf4j // kay3tina wahad attribut permit de login
@AllArgsConstructor
@Transactional
public class SecurityServiceImpl implements SecurityService {
    private AppUserRepository appUserRepository;
    private AppRoleRepository appRoleRepository;
    private PasswordEncoder passwordEncoder;
    @Override
    public AppUser saveNewUser(String username, String password, String repasswword) {
        if(!password.equals(repasswword)) throw new RuntimeException("Password not match");
        String hashePWD=passwordEncoder.encode(password);
        AppUser appUser= new AppUser();
        appUser.setUserId(UUID.randomUUID().toString());
        appUser.setUsername(username);
        appUser.setPassword(hashePWD);
        appUser.setActive(true);
        AppUser savedAppUser=appUserRepository.save(appUser);
        return savedAppUser;
    }

    @Override
    public AppRole saveNewRole(String roleName, String description) {
        AppRole appRole=appRoleRepository.findByRoleName(roleName);
        if(appRole!=null) throw new RuntimeException("Role"+roleName+"already exist");
        appRole=new AppRole();
        appRole.setRoleName(roleName);
        appRole.setDescripption(description);
        AppRole saveAppRole=appRoleRepository.save(appRole);
        return saveAppRole;
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        AppUser appUser=appUserRepository.findByUsername(username);
        if(appUser==null) throw new RuntimeException("user nit found");
        AppRole appRole=appRoleRepository.findByRoleName(roleName);
        if(appRole==null) throw new RuntimeException("Role nit found");
        appUser.getAppRoles().add(appRole);

    }

    @Override
    public void removeRoleToUser(String username, String roleName) {
        AppUser appUser=appUserRepository.findByUsername(username);
        if(appUser==null) throw new RuntimeException("user nit found");
        AppRole appRole=appRoleRepository.findByRoleName(roleName);
        if(appRole==null) throw new RuntimeException("Role nit found");
        appUser.getAppRoles().remove(appRole);

    }

    @Override
    public AppUser loadUserByUserName(String username) {

        return appUserRepository.findByUsername(username);
    }
}
