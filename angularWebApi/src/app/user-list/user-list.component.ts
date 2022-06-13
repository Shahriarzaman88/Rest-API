import { Component, OnInit,  } from '@angular/core';
import { SubscriptionDetail } from '../shared/subscription-detail.model';
import { SubscriptionDetailService } from '../shared/subscription-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  

  constructor(public service: SubscriptionDetailService, private router: Router) { }

  subsUser:  SubscriptionDetail = new SubscriptionDetail();


  userList: SubscriptionDetail [] = []



  ngOnInit(): void {
    //this.getUserList();
  }

  getUser(id:any){
    
    this.service.getUserById("subscriptions/GetUserById/" + id).subscribe(

      (res) => {
        this.subsUser = res
        console.log("Submitted successfully to database");
        console.log(this.subsUser);
      },
      (err) => {
        console.log("Error");
      }

      )
        //this.router.navigate(['/GetUserById']);
      
  }

      //(res) => {
        //this.subsUser = res["body"]
        //console.log("Submitted successfully to database");
      //},
      //(err) => {
        //console.log("Error");
      //}
      
   
  
  
  
  
  
  getUserList(){
    console.log("Get User List start");
    this.service.getUserList("subscriptions/GetAllUser").subscribe(

      (res) => {
        this.userList = res
        console.log("Get User List Called");
        console.log(this.userList);
        
      },
      (err) => {
        console.log("Error");
      }
      
    )
    
    
    
  }

}

