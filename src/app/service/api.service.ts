import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviremont';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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

  adminRegistration(data: any): Observable<any> {
    return this.http.post(`${this.url}api/register`, data,);
  }

  loginApi(data: any): Observable<any> {
    return this.http.post(`${this.url}api/login`, data,);
  }

  distributorRegistration(data: any): Observable<any> {
    return this.http.post(`${this.url}user/distributor/register`, data, { headers: this.getHeaders() });
  }

  userRegistration(data: any): Observable<any> {
    return this.http.post(`${this.url}user/user/register`, data, { headers: this.getHeaders() });
  }

  addLottery(data: any): Observable<any> {
    return this.http.post(`${this.url}lottery/add`, data, { headers: this.getHeaders() });
  }

  getAllLottery(): Observable<any> {
    return this.http.post(`${this.url}lottery/get`, {}, { headers: this.getHeaders() });
  }

  getUsers(): Observable<any> {
    return this.http.post(`${this.url}user/get/user`, {}, { headers: this.getHeaders() });
  }

  getDistributor(): Observable<any> {
    return this.http.post(`${this.url}user/get/distributor`, {}, { headers: this.getHeaders() });
  }

  saveWidInfo(data: any): Observable<any> {
    return this.http.post(`${this.url}lottery/save/widinfo`, data, { headers: this.getHeaders() });
  }
  findWidsInfo(): Observable<any> {
    return this.http.post(`${this.url}lottery/find/widinfo`, {}, { headers: this.getHeaders() });
  }


  findLotteryStatus(): Observable<any> {
    return this.http.post(`${this.url}lottery/find/lottery/status`, {}, { headers: this.getHeaders() });
  }
  allWidsWithTotal(): Observable<any> {
    return this.http.post(`${this.url}lottery/find/wids`, {}, { headers: this.getHeaders() });
  }
  allWidsWidsByNumber(data: any): Observable<any> {
    return this.http.post(`${this.url}lottery/find/wids/number`, data, { headers: this.getHeaders() });
  }

  findWidsForUser(): Observable<any> {
    return this.http.post(`${this.url}lottery/find/wids/user`, {}, { headers: this.getHeaders() });
  }

  announceWinner(data: any): Observable<any> {
    return this.http.post(`${this.url}lottery/announce/winner`, data, { headers: this.getHeaders() });
  }

  getWalletBalance(): Observable<any> {
    return this.http.post(`${this.url}user/get/wallet`, {}, { headers: this.getHeaders() })
  }

  getAllWinners(): Observable<any> {
    return this.http.post(`${this.url}lottery/list/winner`, {}, { headers: this.getHeaders() })
  }

  getAllUsersByRole(data:any): Observable<any> {
    return this.http.post(`${this.url}user/get/users/role`, data, { headers: this.getHeaders() })
  }

  setCommession(data:any): Observable<any> {
    return this.http.post(`${this.url}user/set/commession`, data, { headers: this.getHeaders() })
  }

  getCommession(): Observable<any> {
    return this.http.post(`${this.url}user/view/commession`, {}, { headers: this.getHeaders() })
  }

  addMoney(data:any):Observable<any>{
    return this.http.post(`${this.url}api/payment`, data, { headers: this.getHeaders() })
  }


  verifyPayment(data:any):Observable<any>{
    return this.http.post(`${this.url}api/verfiy`, data, { headers: this.getHeaders() })
  }

  addToken(data:any):Observable<any>{
    return this.http.post(`${this.url}api/token/add`, data, { headers: this.getHeaders() })
  }

  getToken():Observable<any>{
    return this.http.post(`${this.url}api/token/get`, {}, { headers: this.getHeaders() })
  }
  deleteToken(data:any):Observable<any>{
    return this.http.post(`${this.url}api/token/delete`, data, { headers: this.getHeaders() })
  }

  transections():Observable<any>{
    return this.http.post(`${this.url}api/transectio/history`, {}, { headers: this.getHeaders() })
  }

  onlinePaymentRequest():Observable<any>{
    return this.http.post(`${this.url}api/request/payment`, {}, { headers: this.getHeaders() })
  }
  paymentStatus(data:any):Observable<any>{
    return this.http.post(`${this.url}api/status/payment`, data, { headers: this.getHeaders() })
  }

}
