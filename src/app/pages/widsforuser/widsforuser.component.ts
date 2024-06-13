import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-widsforuser',
  templateUrl: './widsforuser.component.html',
  styleUrl: './widsforuser.component.css'
})
export class WidsforuserComponent {
  lotteryData: any;
  constructor(private service: ApiService) {
    service.findWidsForUser().subscribe({
      next: data => {
        this.lotteryData = data
        console.log(this.lotteryData)
      },error:err=>{
        console.log(err)
      }

    })
  }
}
