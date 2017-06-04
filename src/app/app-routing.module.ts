import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';

const appRoutes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'partners',
        component: PartnersComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'references',
        component: ReferencesComponent
    },
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: AboutComponent
    }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

export const routedComponents = [
    AboutComponent,
    PartnersComponent,
    ContactComponent,
    ReferencesComponent
];
