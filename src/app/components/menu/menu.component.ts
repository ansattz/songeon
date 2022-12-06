import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {

   uLat!:number
   uLng!:number
   showFiller:boolean = false;
   userPosition: Array<any> = [this.uLng, this.uLat]
   
   constructor(private _pos: PositionService,
              private loc: LocationService ){}

   callPosition(){
      this._pos.getPosition().then(resp => {
         this.uLng = resp.lng
         this.uLat = resp.lat
         console.log(this.uLng)
         console.log(this.uLat)
      })
   }

// callLoc(){
//    console.log(this.uLat)
//    this.loc.getLoc() //this.loc.getLoc().subscribe((data) => console.log(data))
// }
}
