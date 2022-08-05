package com.example.demo.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.AllTransactions;
import com.example.demo.entity.TransactionProduct;

@RepositoryRestResource(path = "transact")
@CrossOrigin("http://localhost:4200/")
public interface AllTransactionDAO extends JpaRepository<AllTransactions, Integer> {
	public List<AllTransactions> findBypinCode(long pincode);
	public Page<AllTransactions> findBytransactionId(@RequestParam("id") Integer id, Pageable page);
	public Page<AllTransactions> findBymerchantId(@RequestParam("id") Integer id, Pageable page);
	public List<AllTransactions> findBytimeStampGreaterThan(String date);
	public List<AllTransactions> findBytimeStampLessThan(String date);
}
