import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LocationService } from 'src/app/services/location/location.service';
import { PositionService } from 'src/app/services/position/position.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
   constructor(public pos: PositionService,
              public loc: LocationService,
              private sanitizer: DomSanitizer){}


   showFiller:boolean = false;
   player:any

   async positionBtn(){
      this.pos.userPosition()
      await new Promise(f => setTimeout(f, 2500));
      var iframe = 
      `
      <iframe class="playlist weather"
        src="${PlaylistService.playlistUrl}"
        width="300" 
        height="380" 
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>`

      this.player= this.sanitizer.bypassSecurityTrustHtml(iframe);
   }
}
