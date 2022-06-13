import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubscriptionDetail } from './subscription-detail.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionDetailService {
  
  

  constructor(private http:HttpClient) { }

  formData: SubscriptionDetail = new SubscriptionDetail();
  readonly baseUrl = 'https://localhost:7271/api/';


  postSubscriptionForm(url:any){
    return this.http.post(this.baseUrl + url, this.formData);
    console.log(this.formData);
    console.log("posting");
  }


  

  getUserById(url:any): Observable<any> {
    return this.http.get(this.baseUrl + url);

  }
  getUserList(url:any): Observable<any>{
    return this.http.get(this.baseUrl + url);
  }
}
