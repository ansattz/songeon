import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

   @Input() uLat!: MenuComponent
   @Input() uLng!: MenuComponent

   constructor(private http: HttpClient) { }

   theUrl:string = ""
   getLoc(){
      this.theUrl = "https://nominatim.openstreetmap.org/reverse?lat=" + String(this.uLat) + "&lon=" + String(this.uLng) + "&format=json"
      return console.log(this.theUrl) // this.http.get(this.theUrl)
   }
}
