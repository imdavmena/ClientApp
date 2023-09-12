import { Component } from '@angular/core';
import {  NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `<img ngSrc="/images/logo/rescate-24@2x.png" alt="rescate 24" loading="lazy">`

})
export class ImageComponent {

}
