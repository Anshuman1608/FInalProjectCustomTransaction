package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "transactionproduct")
public class TransactionProduct {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tpid")
	private Integer transProductId;
	@Column(name = "quantity")
	private Integer quantity;
	
	@Column(name = "transactionid")
	private Integer transactionId;
	
	@Column(name = "productid")
	private Integer productId;
	@JoinColumn(name = "transactionid" , insertable = false, updatable = false)
	@ManyToOne(targetEntity = CustomTransactions.class, fetch = FetchType.EAGER)	
	private CustomTransactions customTransaction;
	@OneToOne
	@JoinColumn(name = "productid", insertable = false, updatable = false)
	private Product product;

	public TransactionProduct() {

	}

	public TransactionProduct(Integer productId,Integer transProductId,Integer transactionId, Integer quantity, CustomTransactions customTransaction, Product product) {
		super();
		this.transProductId = transProductId;
		this.quantity = quantity;
		this.customTransaction = customTransaction;
		this.product = product;
		this.transactionId = transactionId;
		this.productId = productId;
	}
	
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId)
	{
		this.productId = productId;
	}
	
	public Integer getTransactionId() {
		return transactionId;
	}
	public void setTransaction(Integer transactionId) {
		this.transactionId = transactionId;
	}

	public Integer getTransProductId() {
		return transProductId;
	}

	public void setTransProductId(Integer transProductId) {
		this.transProductId = transProductId;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public CustomTransactions getCustomTransaction() {
		return customTransaction;
	}

	public void setCustomTransaction(CustomTransactions customTransaction) {
		this.customTransaction = customTransaction;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "TransactionCart [transProductId=" + transProductId + ", quantity=" + quantity + ", customTransaction="
				+ customTransaction + ", product=" + product + "]";
	}

}
