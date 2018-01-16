import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ProjetsComponent} from './components/projets/projets.component';
import { TextesComponent} from './components/textes/textes.component';
import { PageAccueilComponent} from './pages/page-accueil/page-accueil.component';
import { ProjetDetailComponent} from './components/projet-detail/projet-detail.component';

const routes: Routes = [
    { path: 'textes', component: TextesComponent },
    { path: 'projets', component: ProjetsComponent },
    { path: 'accueil', component: PageAccueilComponent },
    { path: 'projet/:id', component: ProjetDetailComponent },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
