import { Component } from '@angular/core';
import { WalletService } from '../../service/wallet.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {
  accounts: any;
  constructor(private service: WalletService, private builder: FormBuilder) {
    service.getaccounts().subscribe({
      next: data => {
        this.accounts = data;
        console.log(data)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  withdrawForm = this.builder.group({
    accountNumber: this.builder.control('0', Validators.required),
    amount: this.builder.control('', Validators.required),
  })
  onSubmit(): void {
    const accountNumber = this.withdrawForm.value.accountNumber;
    if (accountNumber == '0') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Select Account",
      })
      return;
    }
    const amount: any = this.withdrawForm.value.amount;
    if (amount <= 100) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Amount must be greater then 100",
      })
      return;
    }
    this.service.withDRaw(this.withdrawForm.value).subscribe({
      next:data=>{
        Swal.fire({
          title:`${data.message}`,
          icon: "success"
        });
        console.log(data);
      },
      error:err=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.error.message}`,
        })
      }
    })
  }
}
