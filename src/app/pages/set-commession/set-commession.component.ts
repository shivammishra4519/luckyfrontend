import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-set-commession',
  templateUrl: './set-commession.component.html',
  styleUrl: './set-commession.component.css'
})
export class SetCommessionComponent implements OnInit {
  commissionData:any;
  constructor(private builder: FormBuilder, private service: ApiService) {
    this.userSetting();
  }
  ngOnInit(): void {
this.service.getCommession().subscribe({
  next:data=>{
    this.commissionData=data;
    console.log(data)
  },
  error:err=>{
    console.log(err)
  }
})
  }

  info = this.builder.group({
    role: this.builder.control('alluser'),
    user: this.builder.control('0'),
    commession: this.builder.control('', Validators.required)
  })

  isSmsSend = false;
  isUserSetting = false;
  usersData = null;

  sendSms() {

    this.isSmsSend = true;
    this.isUserSetting = false;

  };

  userSetting() {

    this.isSmsSend = false;
    this.isUserSetting = true;

  };



  onSubmit() {
    // setCommession
    if (this.info.invalid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill All Details",
      });
      return;
    }
    this.service.setCommession(this.info.value).subscribe({
      next:data=>{
        Swal.fire({
          title: "Good job!",
          text: "Commession Updated Successfully!",
          icon: "success"
        });
      },error:err=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.error.message}`,
        });
      }
    })
  }

  onSelectUser() {
    const role = this.info.value.role;
    if (role == '0') {
      this.usersData = null;
      return
    }
    this.service.getAllUsersByRole(this.info.value).subscribe({
      next: data => {
        this.usersData = data;
      },
      error: err => {
        console.log(err)
      }
    })

  }
}
