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

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { PageProjetsComponent } from './pages/page-projets/page-projets.component';
import { PageProjetDetailComponent } from './pages/page-projet-detail/page-projet-detail.component';
import { PageTextesComponent } from './pages/page-textes/page-textes.component';
import { ModalComponent } from './components/modal/modal.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    TextesComponent,
    ProjetsComponent,
    PageAccueilComponent,
    ProjetDetailComponent,
    MenuComponent,
    PageProjetsComponent,
    PageProjetDetailComponent,
    PageTextesComponent,
    ModalComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [TexteService, ProjetService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
