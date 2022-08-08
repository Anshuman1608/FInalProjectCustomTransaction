import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService } from 'src/app/services/management.service';
import { TransactionProduct } from 'src/app/common/transaction-product';

@Component({
  selector: 'app-productvolumereport',
  templateUrl: './productvolumereport.component.html',
  styleUrls: ['./productvolumereport.component.css']
})
export class ProductvolumereportComponent implements OnInit {
  productreports : TransactionProduct[]
  constructor(private route : Router, private service : ManagementService) { }

  ngOnInit(): void {
    this.productVolumeReport();
  }

  productVolumeReport(){
    this.service.getQuantity().subscribe(data => {
      console.log(data)
     this.productreports = data
    })

  }

  gotoCustomerValueReport()
  {
    this.route.navigateByUrl("/customervaluereport")
  }

  gotoTransactionReport(){
    this.route.navigateByUrl("/transact")
  }

  gotoHome(){
    this.route.navigateByUrl("/transact")
  }

  logoutSession(){
    this.service.setUserLoggedOut()
    localStorage.clear()
    sessionStorage.clear()
    this.route.navigateByUrl("/")
  }
}
