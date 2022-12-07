import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

   constructor(private http: HttpClient) { }
   theUrl:string = ""

   getLoc(){
      this.theUrl = "https://nominatim.openstreetmap.org/reverse?lat=" 
      + String(MenuComponent.uLat) 
      + "&lon=" 
      + String(MenuComponent.uLng) 
      + "&format=json"
      return this.http.get(this.theUrl)
   }
}
