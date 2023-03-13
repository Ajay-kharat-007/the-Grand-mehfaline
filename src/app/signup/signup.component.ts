import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private http:HttpClient){
  }

  getVal(data: any) {
    this.http.post('http://localhost:3000/users',data)
    console.log(data)
  }
}
