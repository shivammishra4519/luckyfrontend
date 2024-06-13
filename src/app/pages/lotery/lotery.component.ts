import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lotery',
  templateUrl: './lotery.component.html',
  styleUrl: './lotery.component.css'
})
export class LoteryComponent {

  allLottery: any
  lotteries: any;
  constructor(private service: ApiService, private builder: FormBuilder) {
    service.getAllLottery().subscribe(res => {
      this.allLottery = res;
      console.log(res)
    })
    service.findLotteryStatus().subscribe(res => {
      this.lotteries = res;
      console.log(res)
    })
  }

  lotteryDeatils = this.builder.group({
    lotteryName: this.builder.control('', Validators.required),
    totalLuckyNumber: this.builder.control('', Validators.required),
    winingReturn: this.builder.control('', Validators.required),
    hours:this.builder.control(12,Validators.required),
    minutes:this.builder.control(0,Validators.required),
    period:this.builder.control('AM',Validators.required),
    timeDuration:this.builder.control('',Validators.required)
  })

  addLottery() {
    if (this.lotteryDeatils.invalid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill All details!",
      });
      return;
    }
    this.service.addLottery(this.lotteryDeatils.value).subscribe({
      next: data => {
        Swal.fire({
          title: "Good job!",
          text: "Lottery added successfully",
          icon: "success"
        });
        this.lotteryDeatils.reset();
        this.service.getAllLottery().subscribe(res => {
          this.allLottery = res;
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
  }


  getNumberWithInvestment(numbers: any[], type: string): string {
    if (numbers.length === 0) return '-';

    let investmentNumber = numbers[0].luckyNumber;
    let investmentAmount = numbers[0].totalAmount;

    for (let i = 1; i < numbers.length; i++) {
      if (type === 'min' && numbers[i].totalAmount < investmentAmount) {
        investmentAmount = numbers[i].totalAmount;
        investmentNumber = numbers[i].luckyNumber;
      }
      if (type === 'max' && numbers[i].totalAmount > investmentAmount) {
        investmentAmount = numbers[i].totalAmount;
        investmentNumber = numbers[i].luckyNumber;
      }
    }
    return investmentNumber;
  }

 
}

