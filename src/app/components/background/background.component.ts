import { Component, DoCheck } from '@angular/core';
import { ThemesService } from 'src/app/services/themes/themes.service';
import { WeatherService } from 'src/app/services/weather/weather.service';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.sass']
})
export class BackgroundComponent implements DoCheck {

   backgroundByPlaylist:string = "https://mylivewallpapers.com/wp-content/uploads/Nature/PREVIEW-Pond-Silent-Summer.mp4"

   ngDoCheck(): void {
      if(WeatherService.mainWe !== undefined){
         this.backgroundByPlaylist = ThemesService.themesData["bg"][WeatherService.mainWe]
      }
   }
}
