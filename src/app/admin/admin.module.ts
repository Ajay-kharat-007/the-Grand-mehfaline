import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    LoginComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatIconModule
  ]
})
export class AdminModule { }
