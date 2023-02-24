import { Component, OnInit } from '@angular/core';
import { imgOfTheDay } from 'src/model/imgOfTheDay';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  
  public title = 'quete Nasa';

  public imgOfTheDay?: imgOfTheDay;

  
  constructor(public nasaService : NasaService){
  }

  ngOnInit(): void {
   this.nasaService.getImageOfTheDay().subscribe(response => {
    this.imgOfTheDay = response
    console.log();
   })
  }
}