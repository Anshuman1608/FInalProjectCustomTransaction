package com.example.demo.entity;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "customtransactions")
public class CustomTransactions {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "transactionid")
	private int transactionId;
	@Column(name = "custid")
	private int custId;
	@Column(name = "custname")
	private String custName;
	@Column(name = "merchantid")
	private int merchantId;
	@Column(name = "billingaddress")
	private String billingAddress;
	@Column(name = "timestamps")
	private String timeStamp;
	@Column(name = "pincode")
	private long pincode;
	@Column(name = "totalamount")
	private double totalAmount;
	@OneToMany
	@JoinColumn(name = "transactionid")
	private List<TransactionProduct> transactionProduct;

	public CustomTransactions() {
		super();
	}

	public CustomTransactions(int transactionId, int custId, String custName, int merchantId, String billingAddress,
			String timeStamp, long pincode, List<TransactionProduct> transactionProduct, double totalAmount) {
		super();
		this.transactionId = transactionId;
		this.custId = custId;
		this.custName = custName;
		this.merchantId = merchantId;
		this.billingAddress = billingAddress;
		this.timeStamp = timeStamp;
		this.pincode = pincode;
		this.transactionProduct = transactionProduct;
		this.totalAmount = totalAmount;
	}
	public double getTotalAmount() {
		return totalAmount;
	}
	
	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public int getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public int getMerchantId() {
		return merchantId;
	}

	public void setMerchantId(int merchantId) {
		this.merchantId = merchantId;
	}

	public String getBillingAddress() {
		return billingAddress;
	}

	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}

	public String getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(String timeStamp) {
		this.timeStamp = timeStamp;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	public List<TransactionProduct> getTransactionProduct() {
		return transactionProduct;
	}

	public void setTransactionProduct(List<TransactionProduct> transactionProduct) {
		this.transactionProduct = transactionProduct;
	}

	@Override
	public String toString() {
		return "CustomTransaction [transactionId=" + transactionId + ", custId=" + custId + ", custName=" + custName
				+ ", merchantId=" + merchantId + ", billingAddress=" + billingAddress + ", timeStamp=" + timeStamp
				+ ", pincode=" + pincode + ", TransactionCart=" + transactionProduct + "]";
	}

}
