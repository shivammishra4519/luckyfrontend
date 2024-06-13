import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-distrbutorlist',
  templateUrl: './distrbutorlist.component.html',
  styleUrl: './distrbutorlist.component.css'
})
export class DistrbutorlistComponent {
  users:any;
  constructor(private service: ApiService) {
    service.getDistributor().subscribe({
      next:data=>{
        console.log(data);
        this.users=data;
      },
      error:err=>{
        console.log(err)
      }
    })
   }
}
