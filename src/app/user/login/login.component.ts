import { Component } from '@angular/core';
import { UsersDataService } from '../users-data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usersname: any;
  use = [""]
  pass = [""]

  constructor(private userData: UsersDataService) {
    this.userData.users().subscribe((data) => {
      console.log(data);
      this.usersname = data

      this.usersname.map((elem: any) => {
        console.log(elem.username)
        this.use.push(elem.username)
        this.pass.push(elem.password)
      });
      this.use.shift()
      this.pass.shift()
      console.log(this.use)
      console.log(this.pass)
    })
  }

  loginAdmin(item: any) {
    console.log(item.username)
    console.log(item.pass)
    if(item.username == 'tanaya007' && item.pass == 'Tanaya@123'){
       location.href = 'http://localhost:4200/user/home'
    }else {
      location.href = 'http://localhost:4200/dsk'
    }
  }
}
