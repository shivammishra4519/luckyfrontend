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
  notifications: any[] = [];

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.service.getActiveNotification().subscribe({
      next: data => {
        this.notifications = data;
        console.log(data);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
