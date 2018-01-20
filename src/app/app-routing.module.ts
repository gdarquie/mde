import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PageTextesComponent} from './pages/page-textes/page-textes.component';
import { PageProjetsComponent} from './pages/page-projets/page-projets.component';
import { PageAccueilComponent} from './pages/page-accueil/page-accueil.component';
import { PageProjetDetailComponent} from './pages/page-projet-detail/page-projet-detail.component';

const routes: Routes = [
    { path: 'textes', component: PageTextesComponent },
    { path: 'projets', component: PageProjetsComponent },
    { path: 'accueil', component: PageAccueilComponent },
    { path: 'projet/:id', component: PageProjetDetailComponent },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
