import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrl: './payment-request.component.css'
})
export class PaymentRequestComponent {
  orders:any;
  constructor(private service: ApiService) { 
    service.onlinePaymentRequest().subscribe(res=>{
      this.orders=res;
    })
  }

  chechStatus(transaction: any) {
    this.service.paymentStatus({ order_id: transaction.order_id }).subscribe({
      next:data=>{
        if (data.result.status == 'SUCCESS') {
          
          this.service.verifyPayment(transaction).subscribe(res => {
            Swal.fire({
              title: "Good job!",
              text: "Status Upadted!",
              icon: "success"
            });
          }, error => {
         
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${error.error.message}`,
            });
          });
        } else {
          // this.toastr.warning('Payment Status:', data.result.status)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${data.result.status}`,
          });
        }
      },error:err=>{
      
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.error.message}`,
        });
        
      }
    })
  }
}

