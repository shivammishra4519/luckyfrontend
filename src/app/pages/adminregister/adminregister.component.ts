import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrl: './adminregister.component.css'
})
export class AdminregisterComponent {
  constructor(private builder: FormBuilder, private service: ApiService) { }
  adminForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    number: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    confirmPassword: this.builder.control('', Validators.required),
    pin: this.builder.control('', Validators.required),
  })

  submit() {
    if (this.adminForm.invalid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill all details!",
      });
      return ;
    }
    this.service.adminRegistration(this.adminForm.value).subscribe({
      next: data => {
        Swal.fire({
          title: "Good job!",
          text: "You are  registred successfully",
          icon: "success"
        });
        this.adminForm.reset();
      },
      error:err=>{
        console.log(err)
      }
    })
  }
}


