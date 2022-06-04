package com.example.services;

import java.util.List;

public interface IManipulate<Object>{
    public Object insert(Object object);
    public Object update(Long id,Object object);
    public void delete(Long id);
    public Object getOne(Long id);
    public List<Object> getAll();

}
