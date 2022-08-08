import { Component, OnInit } from '@angular/core';
import { CustomTransactions } from 'src/app/common/custom-transactions';
import { ManagementService } from 'src/app/services/management.service';
import { LoginComponent } from '../login/login.component';
import { Merchantprefer } from 'src/app/common/merchantprefer';
import { Merchant } from 'src/app/common/merchant';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  prefers : Merchantprefer[]
  products : Product[]
  searchPinCode : number
  searchName : string
  searchLowerLimit : number
  searchUpperLimit : number
  merchantId = parseInt(localStorage.getItem("merchantId"))
  transactions : CustomTransactions[]
  constructor(private service : ManagementService, private activeRoute : ActivatedRoute, private route : Router) { }

  ngOnInit(): void {
    this.listofTransactions();
    // this.listofProducts();
  }



  listofTransactions(){
    this.service.getAllTransactions().subscribe(data => {
      console.log(data)
      this.transactions = data
  //   localStorage.setItem("transactionId",this.transactions[0].transactionId.toString())
    })
  }
  // listofProducts(){
  //   this.service.getAllProduct().subscribe(data => {
  //     console.log(data)
  //     this.products = data
  //     localStorage.setItem("transactionId",this.transactions[0].transactionId.toString())
  //   })
  // }

  getTransactionByName()
    {
      this.service.getByCustName(this.searchName).subscribe(data =>{
        console.log(data)
        this.transactions = data
      })
    }
  getTransactionByUpperLimit()
  {
    this.service.getByUpperLimit(this.searchUpperLimit).subscribe(data => {
      this.transactions = data
    })
  }
  getTransactionByLowerLimit(){
    this.service.getByLowerLimit(this.searchLowerLimit).subscribe(data => {
      this.transactions = data
    })
  }
  getTransactionByPincode(){
    this.service.getByPinCode(this.searchPinCode).subscribe(data => {
      this.transactions = data
    })
  }

  logoutSession(){
    this.service.setUserLoggedOut()
    localStorage.clear()
    sessionStorage.clear()
    this.route.navigateByUrl("/")
  }

  updateFilter(merchantId : number){
   this.route.navigateByUrl("/updateFilter/"+merchantId)
  }

  gotoProductVolume(){
    this.route.navigateByUrl("/productvolume")
  }

  gotoCompleteReport(){
    this.route.navigateByUrl("/completereport")
  }
  gotoCustomerValueReport()
  {
    this.route.navigateByUrl("/customervaluereport")
  }
}
