import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  constructor(private builder:FormBuilder, private service: ApiService){}
  userRegistrationForm=this.builder.group({
    name:this.builder.control('',Validators.required),
    number:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required),
    confirmPassword:this.builder.control('',Validators.required),
    pin:this.builder.control('',Validators.required),
  })
  
  submit(){
    if (this.userRegistrationForm.invalid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill all details!",
      });
      return;
    }
  
    this.service.userRegistration(this.userRegistrationForm.value).subscribe({
      next:data=>{
        Swal.fire({
          title: "Good job!",
          text: " user registred successfully",
          icon: "success"
        });
        this.userRegistrationForm.reset()
      },
      error:err=>{
        console.log(err)
      }
    })
  }
}
