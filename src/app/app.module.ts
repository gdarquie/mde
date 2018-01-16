import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TextesComponent } from './components/textes/textes.component';
import { TexteService } from './services/texte.service';
import {ProjetService} from './services/projet.service';
import { ProjetsComponent } from './components/projets/projets.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';

import { AppRoutingModule } from './app-routing.module';
import { ProjetDetailComponent } from './components/projet-detail/projet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TextesComponent,
    ProjetsComponent,
    PageAccueilComponent,
    ProjetDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TexteService, ProjetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
