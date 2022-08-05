package com.example.demo.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "merchant")
public class Merchant {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "merchantid")
	private Integer merchantId;
	
	@Column(name = "merchantname")
	private String merchantName;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@OneToMany(mappedBy = "merchants")
	private Set<MerchantPreferences> merchprefer = new HashSet<>();
	
	public Merchant() {
		
	}

	public Integer getMerchantId() {
		return merchantId;
	}

	public void setMerchantId(Integer merchantId) {
		this.merchantId = merchantId;
	}

	public String getMerchantName() {
		return merchantName;
	}

	public void setMerchantName(String merchantName) {
		this.merchantName = merchantName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<MerchantPreferences> getMerchprefer() {
		return merchprefer;
	}

	public void setMerchprefer(Set<MerchantPreferences> merchprefer) {
		this.merchprefer = merchprefer;
	}

	public Merchant(Integer merchantId, String merchantName, String email, String password,
			Set<MerchantPreferences> merchprefer) {
		super();
		this.merchantId = merchantId;
		this.merchantName = merchantName;
		this.email = email;
		this.password = password;
		this.merchprefer = merchprefer;
	}


	
}
