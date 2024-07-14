import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notfications',
  templateUrl: './notfications.component.html',
  styleUrl: './notfications.component.css'
})
export class NotficationsComponent {
  message: any;
  messageData: any;
  type: any;
  constructor(private service: ApiService) { 
    this.getNotificitions()
  }

  onSubmit() {
    if (!this.type) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill Type",
      });
      return
    }
    if (!this.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Message Can not be Blank",
      });
      return;
    }
    
    this.service.saveNotification({type:this.type,message:this.message}).subscribe({
      next:data=>{
        Swal.fire({
          title: "Good job!",
          text: "Message Saved Successfully!",
          icon: "success"
        });
        this.getNotificitions()
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


  deleteToken(item: any) { }



  getNotificitions(){
    this.service.getAllNotification().subscribe({
      next:data=>{
        this.messageData=data;
        console.log(data)
      },
      error:err=>{
        console.log(err)
      }
    })
  }


  upadteStatus(data: any) {
   
    data.item.status = data.status;
    this.service.updateStausNotification(data.item).subscribe({
      next: data => {
        this.getNotificitions()
        Swal.fire({
          title: "Good job!",
          text: "status update!",
          icon: "success"
        });
      },
      error: err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.error.message}`,
          
        });
      }
    })
  }
}
