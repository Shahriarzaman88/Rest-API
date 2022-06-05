import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubscriptionDetailService } from '../shared/subscription-detail.service';




@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  constructor(public service: SubscriptionDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postSubscriptionForm().subscribe(
      (res) => {
        console.log("Submitted successfully to database");
      },
      (err) => {
        console.log("Error");
      }
    )
  }

}
