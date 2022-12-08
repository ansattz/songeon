import { Injectable } from '@angular/core';
import { ThemesService } from 'src/app/services/themes/themes.service';
import { WeatherService } from 'src/app/services/weather/weather.service';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

   static playlistUrl:string
   static playlistsData:any
   static myPlaylist:string

   setPlaylist(){
      PlaylistService.playlistUrl = "https://open.spotify.com/embed/playlist/" 
      + PlaylistService.myPlaylist
      + "?utm_source=generator&theme=0"
      console.log(PlaylistService.playlistUrl)
   }

   async playlist(){
      await new Promise(f => setTimeout(f, 1000))
      PlaylistService.playlistsData = ThemesService.themesData[WeatherService.mainWe]
      PlaylistService.myPlaylist = PlaylistService.playlistsData[WeatherService.descWe]
      this.setPlaylist()
   }
}
