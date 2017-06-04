import { Component } from '@angular/core';

import { IPartner } from './partner.model';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partners: IPartner[] = [
    {
      name : 'Vaillant',
      description : 'Kondenzációs készülékek',
      logo : '/assets/images/logos/vaillant.png',
      url : 'http://www.vaillant.hu'
    },
    {
      name : 'Saunier Duval',
      description : 'Kondenzációs készülékek',
      logo : '/assets/images/logos/saunier_duval.png',
      url : 'http://www.saunierduval.hu'
    },
    {
      name : 'Viessmann',
      description : 'Komplett fűtési rendszerek',
      logo : '/assets/images/logos/viessmann.png',
      url : 'http://www.viessmann.hu'
    },
    {
      name : 'Chaffoteaux',
      description : 'Gázkészülékek',
      logo : '/assets/images/logos/chaffoteaux.png',
      url : 'http://www.chaffoteaux.fr'
    },
    {
      name : 'Fernox',
      description : 'Vízkezelés',
      logo : '/assets/images/logos/fernox.png',
      url : 'http://www.fernox.hu'
    },
    {
      name : 'Bosch',
      description : 'Fűtéstechnika',
      logo : '/assets/images/logos/bosch.png',
      url : 'http://www.bosch.hu'
    },
    {
      name : 'Junkers',
      description : 'Fűtéstechnika',
      logo : '/assets/images/logos/junkers.png',
      url : 'http://www.junkers.hu'
    }
  ];

  navigateToPartner(partner: IPartner) {
    window.open(partner.url, '_blank');
  }
}
