import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagementService } from 'src/app/services/management.service';
import { Merchant } from 'src/app/common/merchant';
import { Merchantprefer } from 'src/app/common/merchantprefer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router, private service : ManagementService, private activeRoute: ActivatedRoute) { }
  merchantId = parseInt(localStorage.getItem("merchantId"))
  merchants : Merchant[]
  prefers : Merchantprefer[]
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => {
      this.getAllMerchants();
    });
  }


  getAllMerchants() {
    this.service.getAllMerchantDetails().subscribe(data => {
      this.merchants = data
    })

  }

  loginSubmit2(loginForm:any) {
    var flag: boolean = true;
    for (var Merchant of this.merchants)
    {
      if ((loginForm.email === Merchant.email) && (loginForm.password === Merchant.password))
      {
      this.service.merchant = (Merchant);
      const merchantid = Merchant.merchantId
      localStorage.setItem("merchantId",merchantid.toString())
      localStorage.setItem("loggedIn", 'true')
      this.listofMerchantPreferences(merchantid)
      this.route.navigateByUrl("/transact");
        break;
      }
      else {
        flag = false;
      }
    }
  }
  listofMerchantPreferences(merchantId){
    this.service.getAllPreferences(merchantId).subscribe(data => {
      this.prefers = data
      localStorage.setItem("upper",this.prefers[0].upperLimit.toString())
      localStorage.setItem("lower",this.prefers[0].lowerLimit.toString())
      localStorage.setItem("pincode",this.prefers[0].pincode.toString())
      localStorage.setItem("custname",this.prefers[0].custName)
    })
  }
}
