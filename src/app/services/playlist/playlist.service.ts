import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ThemesService } from 'src/app/services/themes/themes.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import {BackgroundService} from '../background/background.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

   constructor(private bg: BackgroundService){}

   playlistUrl!:string
   favoritePlaylistUrl!:string
   static itsFavPlaylist:boolean
   mainWeatherTheme:any
   playlistID!:string

   shareUrl$: Subject<string> = new Subject<string>

   setPlaylistUrl(){
      PlaylistService.itsFavPlaylist = false
      this.playlistUrl = "https://open.spotify.com/embed/playlist/" 
      + this.playlistID
      + "?utm_source=generator&theme=0"
      this.shareUrl$.next(this.playlistUrl)
   }

   setFavoritePlaylist(){
      PlaylistService.itsFavPlaylist = true
      this.favoritePlaylistUrl = "https://open.spotify.com/embed/playlist/" 
      + "6CHeafntix4NbfoETn5gE7"
      + "?utm_source=generator&theme=0"
      this.shareUrl$.next(this.favoritePlaylistUrl)
   }

   async playlist(){
      await new Promise(f => setTimeout(f, 1500))
      this.mainWeatherTheme = ThemesService.themesData[WeatherService.mainKeyFromData]
      this.playlistID = this.mainWeatherTheme[WeatherService.descriptionKeyFromData]

      // This method is also waiting the two variables from WeatherService
      this.bg.setUrlWeatherBackground()
      this.setPlaylistUrl()
   }
}
