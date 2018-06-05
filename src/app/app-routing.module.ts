import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PageAccueilComponent} from './pages/page-accueil/page-accueil.component';
import { PageFictionDetailComponent} from './pages/page-fiction-detail/page-fiction-detail.component';

const routes: Routes = [
    { path: 'accueil', component: PageAccueilComponent },
    { path: 'fiction/:id', component: PageFictionDetailComponent },
    { path: 'fiction/:id/textes', component: PageFictionDetailComponent },
    { path: 'fiction/:id/personnages', component: PageFictionDetailComponent },
    { path: 'fiction/:id/evenements', component: PageFictionDetailComponent },
    { path: 'fiction/:id/plan', component: PageFictionDetailComponent },
    // { path: 'fiction/:id/plan', component: PageFictionPlanComponent },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
