import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    SignupComponent,
    
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SignupModule { }
