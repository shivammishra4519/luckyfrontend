import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DataSharingService } from '../../service/data-sharing.service';
import { ApiService } from '../../service/api.service';
import { JwtService } from '../../service/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  isSidebarOpen = false;
  isDarkMode = false;
  wallet: number = 0; // Ensure wallet is initialized to avoid undefined errors
role:any;
  constructor(public dataService: DataSharingService, private service: ApiService, private jwtService: JwtService,private router:Router) { 
     this.role=jwtService.getRole();
     
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.isDarkMode = localStorage.getItem('theme') === 'dark';
    }

    // Subscribe to wallet updates
    this.dataService.wallet$.subscribe(wallet => {
      this.wallet = wallet;
    });

    // Initial wallet check
    this.checkAmount();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', 'dark');
      }
    } else {
      document.body.classList.remove('dark-mode');
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('theme');
      }
    }
  }

  checkAmount() {
    this.service.getWalletBalance().subscribe({
      next: data => {
        this.dataService.setWallet(data.amount);
      },
      error: err => {
        console.error('Failed to fetch wallet balance', err);
      }
    });
  }
  logout() {
    this.jwtService.destroyToken()
    this.router.navigate(['/login'])
  }

  addMoney(){
    this.router.navigate(['/dashboard/add-money'], { queryParams: { openModal: true } });
  }
 
}
