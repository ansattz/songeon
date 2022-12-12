import { Component, DoCheck, OnInit } from '@angular/core';
import { ThemesService } from 'src/app/services/themes/themes.service';
import { WeatherService } from 'src/app/services/weather/weather.service';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.sass']
})
export class BackgroundComponent implements DoCheck, OnInit {

   backgroundByPlaylist!:string

   ngOnInit(): void {
      this.backgroundByPlaylist= "https://mylivewallpapers.com/wp-content/uploads/Lifestyle/PREVIEW-Day-Dream.mp4"
   }

   ngDoCheck(): void {
      WeatherService.mainKeyFromData 
         ? this.backgroundByPlaylist = ThemesService.themesData["bg"][WeatherService.mainKeyFromData]
         : null
   }
}
