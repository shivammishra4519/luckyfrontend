import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  // decodedData: any
  // data: any;
  // constructor(private route: ActivatedRoute, private service: ApiService) { }
  // num = 1;
  // ngOnInit(): void {


  //   this.route.queryParams.subscribe(params => {


  //     if (params['data']) {

  //       this.decodedData = params;
  //       const decodedString = atob(this.decodedData.data);
  //       this.data = JSON.parse(decodedString);
  //     }
  //   });
  //   this.callApi()
  // }


  // callApi() {
  //   this.service.verifyPayment(this.data).subscribe({
  //     next: data => {
  //       Swal.fire({
  //         title: "Good job!",
  //         text: "Money Added SuccessFully!",
  //         icon: "success"
  //       });
  //     }, error: err => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Something went wrong Contact to admin!",
          
  //       });
  //     }
  //   })
  // }
}
