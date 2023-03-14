import { Component } from '@angular/core';
import { UsersDataService } from '../users-data.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  hotels: any;
  owners: any;
  total_hotel = ['some', "some2"]

  one: any;
  two: any;
  three: any;
  four: any;
  five: any;
  six: any;

  html:any;

  constructor(private hotelData: UsersDataService) {

    this.hotelData.hotels().subscribe((data) => {
      console.log(data)
      this.hotels = data
    })

    this.hotelData.owners().subscribe((data) => {
      console.log(data)
      this.owners = data
    })

    setTimeout(() => {
      this.one = this.owners[0].hotel
      this.total_hotel.push(...this.one)
      this.two = this.owners[1].hotel
      this.total_hotel.push(...this.two)
      this.three = this.owners[2].hotel
      this.total_hotel.push(...this.three)
      this.four = this.owners[3].hotel
      this.total_hotel.push(...this.four)
      this.five = this.owners[4].hotel
      this.total_hotel.push(...this.five)
      this.six = this.owners[5].hotel
      this.total_hotel.push(...this.six)
      this.total_hotel.push(...this.hotels)
      this.total_hotel.shift()
      this.total_hotel.shift()
      console.log(this.total_hotel)
    }, 1000);

    setTimeout(() => {
      this.total_hotel.map((elem)=>{
        console.log(elem)
        //     this.html += `
        //     <div class="box" *ngFor="let item of hotels">
        //     <h1 style="text-align: center;">${elem.name}</h1>
        //     <hr>
        //     <p>Total rooms : {{item.trooms}}</p>
        //     <p>Available rooms : {{item.arooms}}</p>
        //     <p>Special Dish : {{item.sDish}}</p>
        //     <p>Location : {{item.address}}</p>
        //     <div>
        //         <button>Book Hotel</button>
        //     </div>
        // </div>
        //     `
      })
    }, 1000);
  }
}
