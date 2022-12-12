import { Injectable } from '@angular/core';
import {WeatherService} from '../weather/weather.service';

@Injectable({
   providedIn: 'root'
})
export class PositionService {

   constructor(public weather: WeatherService) { }
   static userLatitude:number
   static userLongitude:number

   async getPosition():Promise<any>{
      return new Promise((resolve) => {
         navigator.geolocation.getCurrentPosition(response => {
            resolve({lng: response.coords.longitude,
                    lat: response.coords.latitude},
                   )
         })
      })
   }

   userPosition(){
      this.getPosition().then(resp => {
         PositionService.userLongitude = resp.lng
         PositionService.userLatitude = resp.lat
         this.weather.getWeather()         
      })
   }
}
