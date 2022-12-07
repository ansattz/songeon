import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {

   static uLat:number
   static uLng:number
   showFiller:boolean = false;
   
   constructor(private _pos: PositionService,
              private loc: LocationService ){}

   callPosition(){
      this._pos.getPosition().then(resp => {
         MenuComponent.uLng = resp.lng
         MenuComponent.uLat = resp.lat
         console.log(MenuComponent.uLng)
         console.log(MenuComponent.uLat)
      })
   }

 callLoc(){
    this.loc.getLoc().subscribe((data) => console.log(data))
 }
}
