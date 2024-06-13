import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-register-distributor',
  templateUrl: './register-distributor.component.html',
  styleUrl: './register-distributor.component.css'
})
export class RegisterDistributorComponent {
constructor(private builder:FormBuilder, private service: ApiService){}

distributorRegistrationForm=this.builder.group({
  name:this.builder.control('',Validators.required),
  number:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required),
  confirmPassword:this.builder.control('',Validators.required),
  pin:this.builder.control('',Validators.required),
})

submit(){
  if (this.distributorRegistrationForm.invalid) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill all details!",
    });
    return;
  }

  this.service.distributorRegistration(this.distributorRegistrationForm.value).subscribe({
    next:data=>{
      Swal.fire({
        title: "Good job!",
        text: " user registred successfully",
        icon: "success"
      });
      this.distributorRegistrationForm.reset()
    },
    error:err=>{
      console.log(err)
    }
  })
}
}
