import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-widslistbynum',
  templateUrl: './widslistbynum.component.html',
  styleUrl: './widslistbynum.component.css'
})
export class WidslistbynumComponent {
  investmentSummary: any = [];
  lotteryId: any;
  winingReturn:any;
  constructor(private route: ActivatedRoute, private service: ApiService) {
    this.route.queryParams.subscribe(params => {
      this.lotteryId = params['lotteryId'];

      const dataPrms = params
      service.allWidsWidsByNumber(dataPrms).subscribe({
        next: data => {
          this.investmentSummary = data.allInvestments;
          this.winingReturn=data.winingReturn;

        }, error: err => {
          console.log(err)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.error.message}`,
          });
        }
      })
    });
  }

  ngOnInit(): void {

  }

  winner(data: any) {
    data.lotteryId=this.lotteryId
    this.service.announceWinner(data).subscribe({
      next:data=>{
        Swal.fire({
          title: "Good job!",
          text: "winner Announced !",
          icon: "success"
        })
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
