package com.example.demo.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.Merchant;

@RepositoryRestResource(path = "merchant")
@CrossOrigin("http://localhost:4200/")
public interface MerchantDAO extends JpaRepository<Merchant, Integer> {
	public List<Merchant> findBymerchantId(Integer id);
	public Page<Merchant> findBymerchantNameIgnoreCase(@RequestParam("name") String name, Pageable page);
	
}
