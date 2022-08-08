import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service';
import { Router } from '@angular/router';
import { CustomTransactions } from 'src/app/common/custom-transactions';

@Component({
  selector: 'app-customervaluereport',
  templateUrl: './customervaluereport.component.html',
  styleUrls: ['./customervaluereport.component.css']
})
export class CustomervaluereportComponent implements OnInit {

  transactions : CustomTransactions[]
  constructor(private service : ManagementService, private route : Router) { }

  ngOnInit(): void {
  }

  customerValueReport(completeform: any){
    this.service.getAllcustomerreport(completeform.startdate, completeform.enddate).subscribe(data => {
      console.log(data)
     this.transactions = data
    })

  }

  gotoProductVolume(){
    this.route.navigateByUrl("/productvolume")
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
