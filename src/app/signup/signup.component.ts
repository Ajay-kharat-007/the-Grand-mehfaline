import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { UsersDataService } from './users-data.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  constructor(private usersData:UsersDataService){}



  signupForm = new FormGroup({
    fname : new FormControl('', [Validators.required, Validators.minLength(2)]),
    lname : new FormControl('', [Validators.required, Validators.minLength(2)]),
    dob : new FormControl('', [Validators.required]),
    gender : new FormControl('', [Validators.required]),
    phone : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required,Validators.email]),
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required,] ),
    cpassword : new FormControl('', [Validators.required,] ),
  })


  get fname(){
    return this.signupForm.get('fname')
  }
  get lname(){
    return this.signupForm.get('lname')
  }

  get dob(){
    return this.signupForm.get('dob')
  }

  get phone(){
    return this.signupForm.get('phone')
  }

  get email(){
    return this.signupForm.get('email')
  }

  get gender(){
    return this.signupForm.get('gender')
  }

  get username(){
    return this.signupForm.get('username')
  }

  get password(){
    return this.signupForm.get('password')
  }

  get cpassword(){
    return this.signupForm.get('cpassword')
  }

  value:any;
  tanaya:any;

  signupUser(){
    console.log(this.signupForm.value)
    this.value = {...this.signupForm.value, fullname : this.signupForm.value.fname + " " + this.signupForm.value.lname}
    delete this.value.fname
    delete this.value.lname
    delete this.value.cpassword
    this.tanaya = {
      fullname : this.value.fullname,
      phone : this.value.phone,
      gender : this.value.gender,
      dob : this.value.dob,
      email : this.value.email,
      username : this.value.username,
      password : this.value.password
    }
    
    this.usersData.postUsers(this.tanaya).subscribe((data)=>{
      console.log(data)
    })
  }
  
  resetValue(item:any){
    setTimeout(() => {
      return item.click()
    }, 500);
  }

}
