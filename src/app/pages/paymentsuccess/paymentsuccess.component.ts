import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrl: './paymentsuccess.component.css'
})
export class PaymentsuccessComponent implements OnInit {
  decodedData: any
  data: any;
  constructor(private route: ActivatedRoute, private service: ApiService) { }
  num = 1;
  ngOnInit(): void {


    this.route.queryParams.subscribe(params => {


      if (params['data']) {

        this.decodedData = params;
        const decodedString = atob(this.decodedData.data);
        this.data = JSON.parse(decodedString);
      }
    });
    this.callApi()
  }


  callApi(){
    this.service.verifyPayment(this.data).subscribe({
    next:data=>{
      console.log('success',data)
    },error:err=>{
      console.log(err)
    }
    })
  }
}
