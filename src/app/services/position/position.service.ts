import { Injectable } from '@angular/core';
import { LocationService } from '../location/location.service';

@Injectable({
   providedIn: 'root'
})
export class PositionService {

   constructor(public loc: LocationService) { }
   static uLat:number
   static uLng:number

   async getPosition():Promise<any>{
      return new Promise((resolve) => {
         navigator.geolocation.getCurrentPosition(resp => {
            resolve({lng: resp.coords.longitude,
                    lat: resp.coords.latitude},
                   )
         })
      })
   }

   userPosition(){
      this.getPosition().then(resp => {
         PositionService.uLng = resp.lng
         PositionService.uLat = resp.lat
         this.loc.getLocation()         
      })

   }
}
