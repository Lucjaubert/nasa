
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { imgOfTheDay } from 'src/model/imgOfTheDay';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

constructor(public http : HttpClient) { }

getImageOfTheDay(): Observable<imgOfTheDay>{
  return this.http.get<imgOfTheDay>("https://api.nasa.gov/planetary/apod?api_key=ECGzSWwv9LkjbfianNjobgD5fvVgdc0ue1UMHPHx")
}
}

