import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private userData: UsersDataService){
    this.userData.users().subscribe((data)=>{
      console.log(data)
    })
  }

  mata:any;

  getVal(data:any){
    data.name = data.fname +" " + data.lname
    delete data.fname;
    delete data.lname;
    this.mata = {...data, name: data.fname +" " + data.lname}
    
    console.log(typeof data)
    this.userData.postUsers(data).subscribe((data)=>{
      console.log(data)
    })
  }
}
