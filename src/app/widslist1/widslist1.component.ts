import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widslist1',
  templateUrl: './widslist1.component.html',
  styleUrl: './widslist1.component.css'
})
export class Widslist1Component {
  data:any;
  constructor(private service: ApiService,private router:Router) { 
    service.allWidsWithTotal().subscribe(res=>{
      this.data=res;
      console.log(res)
    })
  }
  naviagte(data:any){
    const data1= { lotteryId: data };
    this.router.navigate(['/dashboard/wid-list2'], { queryParams: data1 });
    
  }
}
