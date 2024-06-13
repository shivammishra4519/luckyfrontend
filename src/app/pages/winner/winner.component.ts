import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrl: './winner.component.css'
})
export class WinnerComponent {
  lotteries: any[] = [];
  constructor(private service:ApiService) { 

  }


  ngOnInit(): void {
    this.service.getAllWinners().subscribe(data => {
      this.lotteries = data.map((item:any) => ({
        ...item,
        createdAt: this.convertToIST(item.createdAt),
        date: this.convertToIST(item.date)
      }));
    });
  }

  convertToIST(dateString: string): { date: string, time: string } {
    const date = new Date(dateString);
    const options = { timeZone: 'Asia/Kolkata', hour12: false };
  

    const datePart = date.toLocaleDateString('en-IN', options);
    const timePart = date.toLocaleTimeString('en-IN', options);
    console.log(datePart)
    return { date: datePart, time: timePart };
  }
}
