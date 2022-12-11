import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PositionService } from 'src/app/services/position/position.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { ThemesService } from 'src/app/services/themes/themes.service';
import { WeatherService } from 'src/app/services/weather/weather.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']

})
export class MenuComponent implements OnInit{
   showFiller:boolean = false;
   backgroundByPlaylist!:string

   constructor(public pos: PositionService,
              private sanitizer: DomSanitizer){}


   ngOnInit(): void {
      this.backgroundByPlaylist = "https://mylivewallpapers.com/wp-content/uploads/Nature/PREVIEW-Pond-Silent-Summer.mp4"
   }


   // Playlist by weather
   player:any
   async positionBtn(){
      this.pos.userPosition()
      await new Promise(f => setTimeout(f, 2700))
      this.setWeatherPlayer()
   }

   setWeatherPlayer(){
      var playerDiv = document.querySelector('.playlist.box') as HTMLElement
      playerDiv.style.display = 'flex'
      var iframe = 
      `
         <iframe 
            src="${PlaylistService.playlistUrl}"
            width="300" 
            height="380" 
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
         </iframe>
      `
      this.player= this.sanitizer.bypassSecurityTrustHtml(iframe)
      this.backgroundByPlaylist = ThemesService.themesData["bg"][WeatherService.mainWe]
   }
}
