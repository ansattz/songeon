import { Component, ViewEncapsulation} from '@angular/core';
import { BackgroundService } from 'src/app/services/background/background.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { PositionService } from 'src/app/services/position/position.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  encapsulation: ViewEncapsulation.None

})
export class MenuComponent {
   showFiller:boolean = false;

   constructor(public pos: PositionService,
              private play: PlaylistService,
              private bg: BackgroundService){}

   // Get position and set playist by local weather
   positionBtn(){
      this.pos.userPosition()
   }

   favoriteBtn(){
      this.play.setFavoritePlaylist()
   }

   chooseBackgroundBtn(path:string){
      this.bg.setUrlForBackground(path)
   }
}
