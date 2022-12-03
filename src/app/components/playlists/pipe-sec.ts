import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})

export class PipeSec implements PipeTransform {

   constructor(private sanitizer: DomSanitizer) { }
   transform(playlistUrl:string) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(playlistUrl);
   }
}
