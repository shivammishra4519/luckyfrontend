import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { JwtService } from '../service/jwt.service';


export const adminAuthGuard: CanActivateFn = (route, state) => {
  const jwtService = inject(JwtService);
  const router = inject(Router);

  const role = jwtService.getRole();
  if (role === 'admin') {
    return true;
  } else {
    // Redirect to a different page if the user is not an admin
    router.navigate(['/dashboard/home']);
    return false;
  }
};
