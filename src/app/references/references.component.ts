import { Component, OnInit } from '@angular/core';

import { IReference } from './reference.model';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  references: IReference[] = [
    {
      name: 'Családi ház #1',
      description: 'Készülékcsere két munkanap alatt',
      imgDir: '/assets/images/references/csaladi-1',
      imgNames: [
        'cs1-1.jpg',
        'cs1-2.jpg',
        'cs1-3.jpg',
        'cs1-4.jpg'
      ]
    },
    {
      name: 'Családi ház #2',
      description: 'Kevert kör, direkt kör, napkollektor egy készülékben, akár lakótérben is lehetne',
      imgDir: '/assets/images/references/csaladi-2',
      imgNames: [
        'cs2-1.jpg',
        'cs2-2.jpg',
        'cs2-3.jpg'
      ]
    },
    {
      name: 'Családi ház #3',
      description: 'Direkt kör, kevert kör, uszodavezérlés, gyári elemekkel egyetlen szabályozóval',
      imgDir: '/assets/images/references/csaladi-3',
      imgNames: [
        'cs3-1.jpg',
        'cs3-2.jpg'
      ]
    },
    {
      name: 'Családi ház #4',
      description: 'Készülékcsere gyorsan és annyira nem is csúnya',
      imgDir: '/assets/images/references/csaladi-4',
      imgNames: [
        'cs4-1.jpg',
        'cs4-2.jpg',
        'cs4-3.jpg'
      ]
    },
    {
      name: 'Draeger Irodaház',
      description: 'Saunier Duval 2 db KKS 48',
      imgDir: '/assets/images/references/draeger-irodahaz',
      imgNames: [
        'di1.jpg',
        'di2.jpg',
        'di3.jpg',
        'di4.jpg',
        'di5.jpg'
      ]
    },
    {
      name: 'Márványmenyasszony Étterem',
      description: 'Vaillant 2 x 120 kW kaszkád, kivitelezési idő 4 munkanap',
      imgDir: '/assets/images/references/marvanymenyasszony',
      imgNames: [
        'mm1.jpg',
        'mm2.jpg',
        'mm3.jpg',
        'mm4.jpg'
      ]
    },
    {
      name: '"RÉS" Szociális és Kulturális Alapítvány',
      description: `FÉG Vestale modulok kiváltása, Vaillant atmoCraft 85 kW-os kazánnal,
      VIH 500 literes indirekt tárolóval, szabályozóval a bontástól a beüzemelésig 3 munkanap alatt`,
      imgDir: '/assets/images/references/res',
      imgNames: [
        'r1.jpg',
        'r2.jpg'
      ]
    },
    {
      name: 'Tiszta Forrás Alapítvány',
      description: 'Hőközpont, egyszerűsített készülékcsere',
      imgDir: '/assets/images/references/tiszta-forras',
      imgNames: [
        'tf1.jpg'
      ]
    }
  ];
}
