package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.CustomTransactions;


@RepositoryRestResource(path = "transact")
@CrossOrigin("http://localhost:4200/")
public interface CustomTransactionDAO extends JpaRepository<CustomTransactions, Integer> {
	@Query(value = "select * from customtransactions t where t.timestamps > :t1 and t.timestamps < :t2 ;", nativeQuery = true)
	List<CustomTransactions> getByTimestamps(@RequestParam("t1") String t1,@RequestParam("t2") String t2);
	
	@Query(value = "select * from customtransactions t where t.merchantid = :merchantId and (t.custname like %:custName% or t.pincode like %:pinCode% or (t.totalamount <= :upperlimit and t.totalamount >= :lowerlimit)) ;", nativeQuery = true)
	List<CustomTransactions> findByPreferences(@RequestParam("merchantId") Integer merchantId, @RequestParam("pinCode") Integer pinCode, @RequestParam("custName") String custName, @RequestParam("upperlimit") Integer upperlimit, @RequestParam("lowerlimit") Integer lowerlimit);
	
	List<CustomTransactions> findByCustNameContainsIgnoreCase(@RequestParam("name") String name);
	
	List<CustomTransactions> findByPincode(@RequestParam("pincode") Long pincode);
	
	List<CustomTransactions> findBytotalAmountLessThan(@RequestParam("upperLimit") Double upperLimit);
	
	List<CustomTransactions> findBytotalAmountGreaterThan(@RequestParam("lowerLimit") Double lowerLimit);
	
	List<CustomTransactions> findBymerchantId(@RequestParam("merchantId") Integer merchantId);
	
//	List<CustomTransactions> findByTimeStampBetween(@RequestParam("t1") String t1, @RequestParam("t2") String t2);
	
	List<CustomTransactions> findByTransactionProductTransactionId(@RequestParam("id") Integer id);
	
	@Query(value = "select t.transactionid,t.custid,t.custname,t.merchantid,t.billingaddress,t.timestamps,t.pincode,sum(t.totalamount) as totalamount from customtransactions t where t.timestamps > :t1 and timestamps < :t2 group by t.custid ", nativeQuery = true)
	List<CustomTransactions> findcustomervaluereport(@RequestParam("t1") String t1, @RequestParam("t2") String t2);
	//	@Query(value = "select t.transactionid from customtransactions t where t.merchantid = :merchanid", nativeQuery = true)
//	Integer getTrasnsactionId(@RequestParam("merchantid") Integer merchantid);

}

