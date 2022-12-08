import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PositionService } from '../position/position.service';
import { WeatherService } from '../weather/weather.service';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

   constructor(private http: HttpClient,
              public weather: WeatherService) { }
   theUrl!:string
   static userLocation:any

   getLocation(){
      this.theUrl = "https://nominatim.openstreetmap.org/reverse?lat=" 
      + String(PositionService.uLat) 
      + "&lon=" 
      + String(PositionService.uLng) 
      + "&format=json"
      this.http.get(this.theUrl).subscribe((data) => LocationService.userLocation = data)
      this.weather.getWeather()
   }
}
