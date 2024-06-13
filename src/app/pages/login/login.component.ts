import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { JwtService } from '../../service/jwt.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private service: ApiService,private router:Router,private jwtService:JwtService) { }

  loginForm = this.builder.group({
    number: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  })

  login() {
  
    if (this.loginForm.invalid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill all details!",
      });
      return;
    }
    this.service.loginApi(this.loginForm.value).subscribe({
      next: data => {
        this.jwtService.saveToken(data.token)
        // localStorage.setItem('token', data.token);
        Swal.fire({
          title: "Good job!",
          text: "You are  login successfully",
          icon: "success"
        });
        this.router.navigate(['/dashboard'])
      },error:err=>{
        console.log(err)
      }
    })
  }
}
