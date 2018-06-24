import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TexteService } from './services/texte.service';
import { PersonnageService } from './services/personnage.service';
import { EvenementService } from './services/evenement.service';

import { AddFictionComponent } from './components/add-fiction/add-fiction.component';
import { ModalComponent } from './components/modal/modal.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageFictionDetailComponent } from './pages/page-fiction-detail/page-fiction-detail.component';
import { FictionDetailComponent } from './components/fiction-detail/fiction-detail.component';
import { FictionService } from './services/fiction.service';
import { FictionsComponent } from './components/fictions/fictions.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    FictionsComponent,
    PageAccueilComponent,
    FictionDetailComponent,
    MenuComponent,
    PageFictionDetailComponent,
    ModalComponent,
    AddFictionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
  ],
  providers: [TexteService, FictionService, PersonnageService, EvenementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
