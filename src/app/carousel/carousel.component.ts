import { Component } from '@angular/core';

import { ISlide } from './slide.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides: ISlide[] = [
    {
      caption: 'Tüzeléstechnika',
      description: 'Üzembehelyezés, karbantartás, garanciális és garancián túli javítás.',
      url: '/assets/images/gas.png'
    },
    {
      caption: 'Fűtéstechnika',
      description: 'Fűtési rendszerek tisztítása, átmosása, inhibitorral történő feltöltése, lágyvizes rendszerfeltöltés.',
      url: '/assets/images/heatpump.png'
    },
    {
      caption: 'Solartechnika',
      description: 'Napkollektoros rendszerek beüzemelése, javítása, feltöltése, karbantartása, tisztítása.',
      url: '/assets/images/solar.png'
    },
    {
      caption: 'Klímatechnika',
      description: 'Klímaberendezések telepítése, karbantartása és javítása.',
      url: '/assets/images/airconditioner.png'
    }
  ]
}
