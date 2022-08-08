import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service';
import { Router } from '@angular/router';
import { CustomTransactions } from 'src/app/common/custom-transactions';

@Component({
  selector: 'app-completereport',
  templateUrl: './completereport.component.html',
  styleUrls: ['./completereport.component.css']
})
export class CompletereportComponent implements OnInit {
  transactions: CustomTransactions[]
  constructor(private service : ManagementService, private route : Router) { }

  ngOnInit(): void {
  }


  completeReport(completeform: any){
    this.service.getAlltransactionstilldate(completeform.startdate, completeform.enddate).subscribe(data => {
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
