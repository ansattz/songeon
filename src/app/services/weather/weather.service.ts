import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlaylistService } from '../playlist/playlist.service';
import { PositionService } from '../position/position.service';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

   constructor(private http: HttpClient,
              private play: PlaylistService) { }
   static mainKeyFromData:string
   static descriptionKeyFromData:string 

   weatherAPI(theUrl:string){
      return this.http.get(theUrl).toPromise()
   }

   getWeather(){
      const theUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" 
      + String(PositionService.userLatitude) 
      + "&lon=" 
      + String(PositionService.userLongitude)
      + "&appid=2b425334302e4882839efd307f61b3fa"
      this.weatherAPI(theUrl)
      .then((data:any) => 
                 {WeatherService.mainKeyFromData = data["weather"][0]["main"],
                    WeatherService.descriptionKeyFromData = data["weather"][0]["description"]}).catch((error) => {console.log(error)})

      this.play.playlist()
   }
}
