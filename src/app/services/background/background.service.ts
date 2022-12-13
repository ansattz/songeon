import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ThemesService } from '../themes/themes.service';
import { WeatherService } from '../weather/weather.service';


@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor() { }

  shareUrl$: Subject<string> = new Subject<string>
  setUrlForBackground(url:string){
     this.shareUrl$.next(url)
  }

  setUrlWeatherBackground(){
     this.shareUrl$.next(ThemesService.themesData["bg"][WeatherService.mainKeyFromData])
  }
}
