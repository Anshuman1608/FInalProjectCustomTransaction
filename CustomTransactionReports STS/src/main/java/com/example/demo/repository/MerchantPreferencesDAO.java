package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.MerchantPreferences;

@RepositoryRestResource(path = "merchprefer")
@CrossOrigin("http://localhost:4200/")
public interface MerchantPreferencesDAO extends JpaRepository<MerchantPreferences, Integer>{
	public List<MerchantPreferences> findBymerchantId(@RequestParam("id") Integer id);
}
