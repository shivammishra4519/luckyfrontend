import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrl: './addmoney.component.css'
})
export class AddmoneyComponent {
  amount: any;
  showModal: boolean = true;

  constructor(private service :ApiService) { }

  ngOnInit(): void {
  }

  proceed() {
   this.service.addMoney({amount:this.amount}).subscribe(
    {
      next: (res) => {
        
        if (res  && res.paymentUrl) {
          window.location.href = res.paymentUrl;
        } else {
          alert('failed to get url')
        }
      },
      error: (err) => {
        console.log(err)
        alert('Error Processing Payment')
      }
    }
   )
    this.showModal = false;
  }
}


