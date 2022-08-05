package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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

	public Merchant() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Merchant(Integer merchantId, String merchantName, String email, String password) {
		super();
		this.merchantId = merchantId;
		this.merchantName = merchantName;
		this.email = email;
		this.password = password;
	}

}
