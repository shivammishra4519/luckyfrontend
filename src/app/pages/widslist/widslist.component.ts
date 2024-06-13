import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-widslist',
  templateUrl: './widslist.component.html',
  styleUrl: './widslist.component.css'
})
export class WidslistComponent {
  allwids:any;
  constructor(private service:ApiService){
    service.findWidsInfo().subscribe(res=>{
      console.log(res);
    this.allwids=res;
    })
  }
}
