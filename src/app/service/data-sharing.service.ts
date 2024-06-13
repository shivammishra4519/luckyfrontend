import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private walletSubject = new BehaviorSubject<number>(0); // Initialize with default value
  wallet$ = this.walletSubject.asObservable();

  constructor(private service: ApiService) {
    this.checkWalletBalance();
  }

  setWallet(amount: number) {
    this.walletSubject.next(amount);
  }

  checkWalletBalance() {
    this.service.getWalletBalance().subscribe({
      next: data => {
        const amount = parseFloat(data.amount.toFixed(2)); // Ensure the amount is a float
        this.setWallet(amount);
      },
      error: err => {
        console.error('Failed to check wallet balance', err);
      }
    });
  }
}
