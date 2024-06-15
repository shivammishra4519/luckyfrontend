import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { JwtService } from '../../service/jwt.service';

@Component({
  selector: 'app-transections',
  templateUrl: './transections.component.html',
  styleUrl: './transections.component.css'
})
export class TransectionsComponent {
  transactions:any;
  role:any;
  number:any;
  constructor(private service: ApiService,private jwt:JwtService) { 
    this.role=jwt.getRole();
    this.number=jwt.getNumber()
    service.transections().subscribe({
      next:data=>{
      
        this.transactions=data
      },
      error:err=>{
        console.log('err',err)
      }
    })
  }
  isCredited(transaction: any): boolean {
    return transaction.receiverId === this.number;
  }

  isDebited(transaction: any): boolean {
    return transaction.senderId === this.number;
  }
}
