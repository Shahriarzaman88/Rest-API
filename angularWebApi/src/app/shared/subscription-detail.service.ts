import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubscriptionDetail } from './subscription-detail.model';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionDetailService {
  postSubscription() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  formData: SubscriptionDetail = new SubscriptionDetail();
  readonly baseUrl = 'https://localhost:7271/api/subscriptions';

  postSubscriptionForm(){
    return this.http.post(this.baseUrl, this.formData);
  }
}
