import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
   constructor(private http: HttpClient) { }

   static themesData:any
   theUrl!:string
   getThemes(){
      this.theUrl = "https://6391097c0bf398c73a994a59.mockapi.io/theme/"
      this.http.get(this.theUrl)
      .subscribe((data:any) => ThemesService.themesData = data[0])
   }
}
