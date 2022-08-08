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
	private int merchantId;
	@Column(name = "merchantname")
	private String merchantName;
	@Column(name = "email")
	private String email;
	@Column(name = "password")
	private String password;

	public Merchant() {
	}

	public Merchant(int merchantId, String merchantName, String email, String password) {
		super();
		this.merchantId = merchantId;
		this.merchantName = merchantName;
		this.email = email;
		this.password = password;
	}

	public int getMerchantId() {
		return merchantId;
	}

	public void setMerchantId(int merchantId) {
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

	@Override
	public String toString() {
		return "Merchant [merchantId=" + merchantId + ", merchantName=" + merchantName + ", email=" + email
				+ ", password=" + password + "]";
	}

}
