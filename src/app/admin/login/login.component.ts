import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginAdmin(item:any){
    console.log(item)
    console.log(item.username)
    console.log(item.pass)
    if(item.username === "Tanaya"){
      if(item.pass === "Tanaya@123"){
        location.href = 'http://localhost:4200/admin/main'
      }else{
        alert("Wrong PassWord !!")
      }
    }else {
      location.href = 'https://google.com'
    }
  }
}
