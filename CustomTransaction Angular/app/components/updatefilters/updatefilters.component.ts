import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Merchantprefer } from 'src/app/common/merchantprefer';

@Component({
  selector: 'app-updatefilters',
  templateUrl: './updatefilters.component.html',
  styleUrls: ['./updatefilters.component.css']
})
export class UpdatefiltersComponent implements OnInit {
  editable : boolean = false
  prefers : Merchantprefer = new Merchantprefer(0,0,0,0,0,"")
  constructor(private service : ManagementService, private route : Router, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.getPreferenceByMerchId())
  }
  onSubmit(): void{
    if(this.editable){
      this.service.updatePreference(this.prefers).subscribe(() =>
      this.route.navigateByUrl("/transact"))
    }
    else{this.service.savePreference(this.prefers).subscribe(() =>{
      this.route.navigateByUrl("/transact")
    })}
  }
  getPreferenceByMerchId (){
    const merchantId = +this.activateRoute.snapshot.paramMap.get("merchantid");
    console.log(merchantId)
    if(merchantId > 0)
    {
      this.editable = true
      this.service.getPreferenceById(merchantId).subscribe((data =>{
        console.log(data)
          this.prefers = data;
      }))
    }
  }
  gotoCompleteReport(){
    this.route.navigateByUrl("/completereport")
  }
  logoutSession(){
    this.service.setUserLoggedOut()
    localStorage.clear()
    sessionStorage.clear()
    this.route.navigateByUrl("/")
  }

  gotoHome(){
    this.route.navigateByUrl("transact")
  }
}
