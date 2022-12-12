import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ThemesService } from 'src/app/services/themes/themes.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

   playlistUrl!:string
   mainWeatherTheme:any
   playlistID!:string
   shareUrl$: Subject<string> = new Subject<string>

   setPlaylistUrl(){
      this.playlistUrl = "https://open.spotify.com/embed/playlist/" 
      + this.playlistID
      + "?utm_source=generator&theme=0"
      this.shareUrl$.next(this.playlistUrl)
   }

   async playlist(){
      await new Promise(f => setTimeout(f, 1500))
      this.mainWeatherTheme = ThemesService.themesData[WeatherService.mainKeyFromData]
      this.playlistID = this.mainWeatherTheme[WeatherService.descriptionKeyFromData]
      this.setPlaylistUrl()
   }
}
