import { Component } from '@angular/core';
import { WalletService } from '../../service/wallet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdrawhistory',
  templateUrl: './withdrawhistory.component.html',
  styleUrl: './withdrawhistory.component.css'
})
export class WithdrawhistoryComponent {
  transactionData:any;
constructor(private service:WalletService){
  service.withDrawHistory().subscribe(res=>{
    this.transactionData=res
    console.log(res)
  })
}

checkStatus(item: any) {
  this.service.checkStatus(item).subscribe({
    next:data=>{
      Swal.fire({
        title:`${data.message}`,
        icon: "success"
      });
    },error:err=>{
      console.log(err)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.error.error}`,
      })
    }
  })
}
}
