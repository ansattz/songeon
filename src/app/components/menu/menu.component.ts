import { Component } from '@angular/core';
import { PositionService } from 'src/app/services/position/position.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
   showFiller:boolean = false;

   constructor(public pos: PositionService){}

   // Get position and set playist by local weather
   positionBtn(){
      this.pos.userPosition()
   }
}
