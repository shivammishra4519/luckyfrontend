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
  currentLottery: any = [];
  selectedItems: SelectedItem[] = [];
  amount = 0;
  length = this.currentLottery.length;

  constructor(private service: ApiService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.service.getAllLottery().subscribe(res => {
      this.allLottery = res;
      console.log(res);
      this.seduleLottery();
    });

    const time = new Date();
    console.log(time.getMinutes());
  }

  seduleLottery() {
    for (let lottery of this.allLottery) {
      const startTime = lottery.hours;
      const period = lottery.period;
      const timeDuration = lottery.timeDuration;
      const date = new Date();
      const getHours = date.getHours();
      let currentPeriod = 'AM';
      let currentTime = getHours;
      if (getHours > 12) {
        currentPeriod = 'PM';
        currentTime = getHours - 12;
      }
      if (currentTime === startTime && currentPeriod === period) {
        this.currentLottery.push(lottery);
      }
    }
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
