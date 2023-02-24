import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';
import { imgOfTheDay } from 'src/model/imgOfTheDay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nasa';

  imgOfTheDay : imgOfTheDay = new imgOfTheDay("","","","","","","","");

  constructor(private nasaService : NasaService) {}

    ngOnInit() :void {
      this.nasaService.getImageOfTheDay().subscribe(
        (data : imgOfTheDay) => {
          console.log(data);
          this.imgOfTheDay = data;
        }
      )
    }
}