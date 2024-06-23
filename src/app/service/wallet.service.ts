import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviremont';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  
  constructor(private http: HttpClient) { }
  url = environment.url;

  private getHeaders(): HttpHeaders {
    let jwtToken: string | null = null;

    if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
      jwtToken = localStorage.getItem('token'); // Get the token from localStorage
      console.log('Token retrieved from localStorage:', jwtToken); // Log the retrieved token
    } else {
      console.warn('Token not found in localStorage.');
    }

    // Add error handling for null token
    if (jwtToken !== null) {
      // Handle the case where the token is found
      return new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    } else {
      // Handle the case where the token is not found
      // For example, you can return an HttpHeaders object without the Authorization header
      return new HttpHeaders();
    }
  }

  verifyNumber(): Observable<any> {
    return this.http.post(`${this.url}wallet/verifiy`, {}, { headers: this.getHeaders() });
  }

}
