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
  filterurl = "http://localhost:8080/api/transact/search/findByPreferences?merchantId="+this.merchantId+"&pinCode="+this.pincode+"&custName="+this.custname+"&upperlimit="+this.upper+"&lowerlimit="+this.lower
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
    return this.httpclient.get<getTransactionResponse>(this.filterurl).pipe(map(response => response._embedded.customTransactionses));
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
