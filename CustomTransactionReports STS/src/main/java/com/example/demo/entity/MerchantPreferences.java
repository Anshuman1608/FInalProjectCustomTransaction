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
	private Integer merchantPrefId;
	@Column(name = "merchantid")
	private Integer merchantId;
	@Column(name = "pincode")
	private long pincode;
	@Column(name = "upperlimit")
	private double upperLimit;
	@Column(name = "lowerlimit")
	private double lowerLimit;
	@Column(name = "custname")
	private String custName;

	public MerchantPreferences() {
	}

	public MerchantPreferences(Integer merchantId, long pincode, double upperLimit, double lowerLimit, String custName,Integer merchantPrefId) {
		super();
		this.merchantId = merchantId;
		this.pincode = pincode;
		this.upperLimit = upperLimit;
		this.lowerLimit = lowerLimit;
		this.custName = custName;
		this.merchantPrefId = merchantPrefId;
	}
	
	public Integer getMerchantPrefId() {
		return merchantPrefId;
	}
	
	public void setMerchantPrefId(Integer merchantPrefId) {
		this.merchantPrefId = merchantPrefId;
	}

	public Integer getMerchantId() {
		return merchantId;
	}

	public void setMerchantId(Integer merchantId) {
		this.merchantId = merchantId;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	public double getUpperLimit() {
		return upperLimit;
	}

	public void setUpperLimit(double upperLimit) {
		this.upperLimit = upperLimit;
	}

	public double getLowerLimit() {
		return lowerLimit;
	}

	public void setLowerLimit(double lowerLimit) {
		this.lowerLimit = lowerLimit;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	@Override
	public String toString() {
		return "MerchantPreferences [merchantId=" + merchantId + ", pincode=" + pincode + ", upperLimit=" + upperLimit
				+ ", lowerLimit=" + lowerLimit + ", custName=" + custName + "]";
	}

}
