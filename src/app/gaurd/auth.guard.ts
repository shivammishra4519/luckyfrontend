import { CanActivateFn, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtService } from '../service/jwt.service';
// Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private jwtService: JwtService, private router: Router) { }

  canActivate: CanActivateFn = (route, state) => {
    const token = this.jwtService.getToken();
    if (token && !this.jwtService.isTokenExpired(token)) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirect to login page if not authenticated
      return false;
    }
  };
}
