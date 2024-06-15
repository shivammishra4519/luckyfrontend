import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-payement-gatway-api',
  templateUrl: './add-payement-gatway-api.component.html',
  styleUrl: './add-payement-gatway-api.component.css'
})
export class AddPayementGatwayApiComponent {
  tokenData: any;
  constructor(private service: ApiService) {

    service.getToken().subscribe({
      next: data => {
        this.tokenData = data;
      }
    })
  }
  commissionData: any;

  isSmsSend = false;
  isUserSetting = false;
  token: any;

  sendSms() {

    this.isSmsSend = true;
    this.isUserSetting = false;

  };

  userSetting() {

    this.isSmsSend = false;
    this.isUserSetting = true;

  };


  onSubmit() {
    if (this.token) {
      this.service.addToken({ token: this.token }).subscribe({
        next: data => {
          Swal.fire({
            title: "Good job!",
            text: "Token Added Successfully",
            icon: "success"
          });
          this.token=''
          this.service.getToken().subscribe({
            next: data => {
              this.tokenData = data;
            }
          })
        },
        error: err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.error.message}`,

          });
        }
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Token Can Not Blank!",

      });
    }
  }

  deleteToken(data: any) {
    this.service.deleteToken(data).subscribe({
      next: data => {
        Swal.fire({
          title: "Good job!",
          text: "Token delete Successfully",
          icon: "success"
        });
        this.service.getToken().subscribe({
          next: data => {
            this.tokenData = data;
          }
        })
      },
      error:err=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.error.message}`,
        });
      }
    })
  }
}
