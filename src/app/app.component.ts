import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newapp';

userData:any=[
  {EmployeeName:"sandeep",Experience:"3years"},
  {EmployeeName:"Akash",Experience:"8years"},
  {EmployeeName:"Rajan",Experience:"13years"}
];
   

getCurrentUseradd(user) :void {
  console.log(user);
}
  
  getCurrentUser(user) :void {
    console.log(user);
  }
  
  getCurrentUsernew(user) :void {
    console.log(user);
  }
  constructor(){
    console.log(this.userData);
}
}