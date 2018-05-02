import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PageAccueilComponent} from './pages/page-accueil/page-accueil.component';
import { PageFictionDetailComponent} from './pages/page-fiction-detail/page-fiction-detail.component';

const routes: Routes = [
    { path: 'accueil', component: PageAccueilComponent },
    { path: 'fiction/:id', component: PageFictionDetailComponent },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
