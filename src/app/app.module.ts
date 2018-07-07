import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TexteService } from './services/texte.service';
import { PersonnageService } from './services/personnage.service';
import { EvenementService } from './services/evenement.service';

import { AddFictionComponent } from './components/add-fiction/add-fiction.component';
import { EditFictionComponent } from './components/edit-fiction/edit-fiction.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalEditionComponent } from './components/modal-edition/modal-edition.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageFictionDetailComponent } from './pages/page-fiction-detail/page-fiction-detail.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { FictionService } from './services/fiction.service';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { PageFictionTextesComponent } from './pages/page-fiction-textes/page-fiction-textes.component';
import { PageFictionPersonnagesComponent } from './pages/page-fiction-personnages/page-fiction-personnages.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [PageFictionTextesComponent, PageFictionPersonnagesComponent]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    MenuComponent,
    PageFictionDetailComponent,
    ModalComponent,
    ModalEditionComponent,
    AddFictionComponent,
    EditFictionComponent,
  ],
  entryComponents: [ModalComponent, ModalEditionComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [TexteService, FictionService, PersonnageService, EvenementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
