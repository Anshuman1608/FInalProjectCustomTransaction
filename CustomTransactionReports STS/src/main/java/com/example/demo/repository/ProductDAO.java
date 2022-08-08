package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.Product;



@RepositoryRestResource(path = "product")
@CrossOrigin("http://localhost:4200/")
public interface ProductDAO extends JpaRepository<Product, Integer> {

	List<Product> findByProductId(@RequestParam("productId") Integer productId);
	@Query(value = "select * from product where productid in (select productid from transactionproduct where transactionid=:transactionId);", nativeQuery=true)
	List<Product> productByTransactionId(@RequestParam("transactionId")Integer transactionId);
}
