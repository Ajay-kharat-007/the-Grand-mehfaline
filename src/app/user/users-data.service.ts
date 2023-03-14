import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  url = 'http://localhost:3000/users'
  url2 = 'http://localhost:3000/hotels'
  url3 = 'http://localhost:3000/owners'

  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.url)
  }

  hotels(){
    return this.http.get(this.url2)
  }

  owners(){
    return this.http.get(this.url3)
  }

  postUsers(data:any){
    return this.http.post(this.url, data)
  }
}
