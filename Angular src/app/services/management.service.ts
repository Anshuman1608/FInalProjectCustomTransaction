import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs' ;
import { Merchant } from '../common/merchant';
import { CustomTransactions } from '../common/custom-transactions';
import { TransactionProduct } from '../common/transaction-product';
import { Merchantprefer } from '../common/merchantprefer';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  merchant : Merchant
  prefer : Merchantprefer
  merchantId = parseInt(localStorage.getItem("merchantId"))
  upper = parseInt(localStorage.getItem("upper"))
  lower = parseInt(localStorage.getItem("lower"))
  pincode = parseInt(localStorage.getItem("pincode"))
  custname = localStorage.getItem("custname")
  transactionId = parseInt(localStorage.getItem("transactionId"))
  transactionurl = "http://localhost:8080/api/transact/search/findBymerchantId?merchantId="+this.merchantId
  merchanturl = "http://localhost:8080/api/merchant";
  transacturl = "http://localhost:8080/api/transact/search/findBymerchantId?merchantId=";
  preferurl = "http://localhost:8080/api/merchprefer/search/findBymerchantId?id=";
  producturl = "http://localhost:8080/api/product/search/productByTransactionId?transactionId=";
  preferenceurl = "http://localhost:8080/api/merchprefer/";
  constructor(private httpclient : HttpClient) { }
  isUserLoggedIn = false;

  getLoggedStatus(){
    return this.isUserLoggedIn;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }

  setUserLoggedOut(){
    this.isUserLoggedIn = false;
  }


  getAllMerchantDetails() : Observable<Merchant[]>{
    return this.httpclient.get<getMerchantResponse>(this.merchanturl).pipe(map(response => response._embedded.merchants));
  }
  getAllTransactions() : Observable<CustomTransactions[]>{
    return this.httpclient.get<getTransactionResponse>(this.transactionurl).pipe(map(response => response._embedded.customTransactionses));
  }
  getAllPreferences(merchantId) : Observable<Merchantprefer[]>{
    return this.httpclient.get<getMerchantPreferenceResponse>(this.preferurl+merchantId).pipe(map(response => response._embedded.merchantPreferenceses));
  }
  getAllProduct() : Observable<Product[]>{
    return this.httpclient.get<getProductResponse>(this.producturl+this.transactionId).pipe(map(response => response._embedded.products))
  }
  getPreferenceById(merchantId : number): Observable<Merchantprefer>{
    const prefersurl = "http://localhost:8080/api/merchprefer/search/findBymerchantId?id="+merchantId
    return this.httpclient.get<Merchantprefer>(prefersurl);
  }

  getAlltransactionstilldate(t1 : string, t2 : string): Observable<CustomTransactions[]>
  {
    const completeReportUrl = "http://localhost:8080/api/transact/search/getByTimestamps?t1="+t1+"&t2="+t2;
    return this.httpclient.get<getTransactionResponse>(completeReportUrl).pipe(map(response => response._embedded.customTransactionses));
  }

  getByCustName(custName : string) : Observable<CustomTransactions[]>{
    const transactByNameUrl = "http://localhost:8080/api/transact/search/findByCustNameContainsIgnoreCase?name="+ custName
    return this.httpclient.get<getTransactionResponse>(transactByNameUrl).pipe(map(response=> response._embedded.customTransactionses));
  }

  getByUpperLimit(upperLimit : number) : Observable<CustomTransactions[]>{
    const transactByUpperLimitUrl = "http://localhost:8080/api/transact/search/findBytotalAmountLessThan?upperLimit="+upperLimit
    return this.httpclient.get<getTransactionResponse>(transactByUpperLimitUrl).pipe(map(response=> response._embedded.customTransactionses));
  }

  getByLowerLimit(lowerLimit : number) : Observable<CustomTransactions[]>{
    const transactByLowerLimitUrl = "http://localhost:8080/api/transact/search/findBytotalAmountGreaterThan?lowerLimit="+lowerLimit
    return this.httpclient.get<getTransactionResponse>(transactByLowerLimitUrl).pipe(map(response=> response._embedded.customTransactionses));
  }

  getByPinCode(pinCode : number) : Observable<CustomTransactions[]>{
    const transactByPinCodeUrl = "http://localhost:8080/api/transact/search/findByPincode?pincode="+pinCode
    return this.httpclient.get<getTransactionResponse>(transactByPinCodeUrl).pipe(map(response=> response._embedded.customTransactionses));
  }

  updatePreference(prefers : Merchantprefer)
  {
    const httpOptions =
    {
      headers : new HttpHeaders
      ({
        'Content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };

    return this.httpclient.put<Merchantprefer>(this.preferenceurl+`${prefers.merchantPrefId}`,prefers,httpOptions)

  }
  savePreference(prefers : Merchantprefer)
  {
    console.log(prefers)

    const httpOptions =
    {
      headers : new HttpHeaders
      ({
        'Content-type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.httpclient.post<Merchantprefer>(this.preferenceurl,prefers,httpOptions)
  }

  getAllcustomerreport(t1 : string , t2 : string): Observable<CustomTransactions[]>
  {
    const completeReportUrl = "http://localhost:8080/api/transact/search/findcustomervaluereport?t1="+t1+"&t2="+t2;
    return this.httpclient.get<getTransactionResponse>(completeReportUrl).pipe(map(response => response._embedded.customTransactionses));
  }

  getQuantity():Observable<TransactionProduct[]>{
    const quantityUrl = "http://localhost:8080/api/transactioncart/search/productvolumereport"
    return this.httpclient.get<getTransactionProductResponse>(quantityUrl).pipe(map(response => response._embedded.transactionProducts));
  }
}

interface getMerchantResponse{
  _embedded : {
    merchants : Merchant[]
  }
}

interface getTransactionResponse{
  _embedded : {
    customTransactionses : CustomTransactions[]
  }
}
interface getMerchantPreferenceResponse{
  _embedded : {
    merchantPreferenceses : Merchantprefer[]
  }
}
interface getProductResponse{
  _embedded : {
    products : Product[]
  }
}

interface getTransactionProductResponse{
  _embedded : {
    transactionProducts : TransactionProduct[]
  }
}
