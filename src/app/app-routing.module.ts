import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PageAccueilComponent} from './pages/page-accueil/page-accueil.component';
import {PageFictionTextesComponent} from './pages/page-fiction-textes/page-fiction-textes.component';
import {PageFictionPersonnagesComponent} from './pages/page-fiction-personnages/page-fiction-personnages.component';

const routes: Routes = [
    { path: 'accueil', component: PageAccueilComponent },
    { path: 'fiction/:id', component: PageFictionTextesComponent },
    { path: 'fiction/:id/textes', component: PageFictionTextesComponent },
    { path: 'fiction/:id/personnages', component: PageFictionPersonnagesComponent },
    // { path: 'fiction/:id/plan', component: PageFictionDetailComponent },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
