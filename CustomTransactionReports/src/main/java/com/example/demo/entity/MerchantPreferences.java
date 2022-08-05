package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "merchantpreferences")
public class MerchantPreferences {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "preferid")
	private Integer preferId;
	
	@Column(name = "merchantid")
	private Integer merchantId;
	
	@Column(name = "upperlimit")
	private Integer upperLimit;
	
	@Column(name = "lowerlimit")
	private Integer lowerLimit;
	
	@Column(name = "pincode")
	private Long pinCode;
	
	@Column(name = "custname")
	private String custName;

	public Integer getPreferId() {
		return preferId;
	}

	public void setPreferId(Integer preferId) {
		this.preferId = preferId;
	}

	public Integer getMerchantId() {
		return merchantId;
	}

	public void setMerchantId(Integer merchantId) {
		this.merchantId = merchantId;
	}

	public Integer getUpperLimit() {
		return upperLimit;
	}

	public void setUpperLimit(Integer upperLimit) {
		this.upperLimit = upperLimit;
	}

	public Integer getLowerLimit() {
		return lowerLimit;
	}

	public void setLowerLimit(Integer lowerLimit) {
		this.lowerLimit = lowerLimit;
	}

	public Long getPinCode() {
		return pinCode;
	}

	public void setPinCode(Long pinCode) {
		this.pinCode = pinCode;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}


	public MerchantPreferences(Integer preferId, Integer merchantId, Integer upperLimit, Integer lowerLimit,
			Long pinCode, String custName) {
		super();
		this.preferId = preferId;
		this.merchantId = merchantId;
		this.upperLimit = upperLimit;
		this.lowerLimit = lowerLimit;
		this.pinCode = pinCode;
		this.custName = custName;
	}

	public MerchantPreferences() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
	
	
}