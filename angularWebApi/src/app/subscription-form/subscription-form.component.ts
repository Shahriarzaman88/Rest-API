import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubscriptionDetailService } from '../shared/subscription-detail.service';
import { SubscriptionDetail } from '../shared/subscription-detail.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  constructor(public service: SubscriptionDetailService, private router: Router) { }

  
  subsUser = {id: 0 , firstName: '', lastName: '', email: '', company: ''}

  userList = []

  ngOnInit(): void {
    console.log("Init Start");
    this.getUserList();
  }

  onSubmit(form:NgForm){
    this.service.postSubscriptionForm("subscriptions").subscribe(
      (res) => {
        console.log("Submitted successfully to database");
      },
      (err) => {
        console.log("Error");
      }
    )
    this.router.navigate(['/home']);
    
  }

  getUser(id:any){
    
    this.service.getUserById("subscriptions").subscribe(

      (res) => {
        this.subsUser = res.body
        console.log("Submitted successfully to database");
        console.log(this.subsUser);
      },
      (err) => {
        console.log("Error");
      }

      //(res) => {
        //this.subsUser = res["body"]
        //console.log("Submitted successfully to database");
      //},
      //(err) => {
        //console.log("Error");
      //}
      
    )
  }
  
  getUserList(){
    console.log("Get User List start");
    this.service.getUserList("subscriptions/GetAllUser").subscribe(

      (res) => {
        this.userList = res
        console.log("Get User List Called");
        console.log(this.userList, "User List");
      },
      (err) => {
        console.log("Error");
      }

     
      
    )
  }


}
