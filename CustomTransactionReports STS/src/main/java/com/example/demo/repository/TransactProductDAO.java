package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.Product;
import com.example.demo.entity.TransactionProduct;
@Repository
@RepositoryRestResource(path = "transactioncart")
@CrossOrigin("http://localhost:4200/")
public interface TransactProductDAO extends JpaRepository<TransactionProduct, Integer> {

	List<TransactionProduct> findByProductProductId(@RequestParam("productId") Integer productId);
//	@Query(value = "select productid from transactionproduct where transactionid = :transactionId" ,nativeQuery = true)
//	List<String> findbyTransactionid(@RequestParam("transactionId")Integer transactionId);


	
	
	
}
