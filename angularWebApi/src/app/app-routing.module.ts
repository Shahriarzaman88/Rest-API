import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { UserIdComponent } from './user-id/user-id.component';
import { UserListComponent } from './user-list/user-list.component';

const appRoutes: Routes = [ 
  { path: 'home', component: HomeComponent },
  {path:'GetAllUser', component: UserListComponent},
  {path:'GetUserById/:id', component: UserIdComponent},
  { path: 'subscriptions', component: SubscriptionFormComponent },
  //{ path: 'subsUser', component: SubscriptionFormComponent, children: [
    //{ path: ':id', component: SubsUserComponent  },
  //]  },

 
  
  //{ path: 'subscription', component: SubscriptionFormComponent, children:[
    //{ path: ':id', component: SubsUserComponent  },
  //]}, 
  //{path: 'not-found', component: PageNotFoundComponent},
  //{path: '**', redirectTo: '/not-found'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
