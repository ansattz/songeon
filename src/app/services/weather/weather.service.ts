import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationService } from '../location/location.service';
import { PlaylistService } from '../playlist/playlist.service';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

   constructor(private http: HttpClient,
              public play: PlaylistService) { }
   theUrl!:string
   static mainWe:string
   static descWe:string 

   async getWeather(){
      await new Promise(f => setTimeout(f, 800));
      this.theUrl = "https://api.openweathermap.org/data/2.5/weather?q=" 
      + LocationService.userLocation["address"]["city"]
      + "&appid=2b425334302e4882839efd307f61b3fa"
      this.http.get(this.theUrl)
      .subscribe((data:any) => 
                 {WeatherService.mainWe = data["weather"][0]["main"],
                    WeatherService.descWe = data["weather"][0]["description"]})
      this.play.playlist()
   }
}
