import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = 'Annus János';
  phone = '+36-70-605-8516';
  email = 'janos.annus@gmail.com';
  url = 'www.annus-epuletgepeszet.hu';
}
