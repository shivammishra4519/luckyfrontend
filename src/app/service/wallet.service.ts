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

  registerRemitter(): Observable<any> {
    return this.http.post(`${this.url}wallet/register`, {}, { headers: this.getHeaders() });
  }

  verfiyOtp(data:any): Observable<any> {
    return this.http.post(`${this.url}wallet/verifiyOtp`, data, { headers: this.getHeaders() });
  }

  getAllBank(): Observable<any> {
    return this.http.post(`${this.url}wallet/getAllBank`, {}, { headers: this.getHeaders() });
  }

  addBankAccount(data:any): Observable<any> {
    return this.http.post(`${this.url}wallet/addaccount`, data, { headers: this.getHeaders() });
  }
  getaccounts(): Observable<any> {
    return this.http.post(`${this.url}wallet/getaccount`, {}, { headers: this.getHeaders() });
  }
  withDRaw(data:any): Observable<any> {
    return this.http.post(`${this.url}wallet/withdram`, data, { headers: this.getHeaders() });
  }

  withDrawHistory(): Observable<any> {
    return this.http.post(`${this.url}wallet/histroy`, {}, { headers: this.getHeaders() });
  }

  checkStatus(data:any): Observable<any> {
    return this.http.post(`${this.url}wallet/statuscheck`, data, { headers: this.getHeaders() });
  }

}
