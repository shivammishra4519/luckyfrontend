import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wid',
  templateUrl: './wid.component.html',
  styleUrls: ['./wid.component.css']
})
export class WidComponent implements OnInit {
  allLottery: any;
  
  selectedItems: SelectedItem[] = [];
  amount :any;
isDataAvailable=false;

  constructor(private service: ApiService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.service.getAllCurrentLotterry().subscribe({
      next:data=>{
        this.allLottery = data;
        if(data.length <=0){
          this.isDataAvailable= false;
        }else{
          this.isDataAvailable=true
        }
     
      },error:err=>{
        this.isDataAvailable= false;
      }
    });

    const time = new Date();
   
  }

 

  onItemClick(lucky: string, lottery: any) {
    const index = this.selectedItems.findIndex(item => item.lucky === lucky && item.lotteryId === lottery.lotteryId);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      const obj: SelectedItem = {
        lucky: lucky,
        lotteryId: lottery.lotteryId,
        lotteryName: lottery.lotteryName
      };
      this.selectedItems.push(obj);
    }
    console.log('Selected items:', this.selectedItems);
  }

  isSelected(lucky: string, lottery: any): boolean {
    return this.selectedItems.some(item => item.lucky === lucky && item.lotteryId === lottery.lotteryId);
  }

  submit() {
    if (this.amount <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Amount cannot be less than 1!",
      });
      return;
    }
    const leng = this.selectedItems.length;
    const totalAmount = leng * this.amount;
    const data = {
      amount: this.amount,
      totalAmount: totalAmount,
      lotteryArrya: this.selectedItems
    };
    Swal.fire({
      title: "Are you sure?",
      text: `Total Amount : ${totalAmount}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.saveWidInfo(data).subscribe({
          next: data => {
            Swal.fire({
              title: "Success!",
              text: "Your wid confirmed.",
              icon: "success"
            });
          },
          error: err => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Error is: ${err.error.message}`,
            });
          }
        });
      }
    });
  }

  
}

interface SelectedItem {
  lucky: string;
  lotteryId: string;
  lotteryName: string;
}
