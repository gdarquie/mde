import { Component, OnInit } from '@angular/core';
import {Fiction } from '../../classes/fiction';
import { Texte } from '../../classes/texte';
import { FictionService } from '../../services/fiction.service';
import { PersonnageService } from '../../services/personnage.service';
import { TexteService } from '../../services/texte.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personnage } from '../../classes/personnage';
import { Evenement } from '../../classes/evenement';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-fiction-detail',
  templateUrl: './fiction-detail.component.html',
  styleUrls: ['./fiction-detail.component.css']
})
export class FictionDetailComponent implements OnInit {

  titre: string = 'Nom';
  description: string = 'Description';
  fictionId: string;
  fiction: Fiction;
  personnages: Personnage[];
  personnage: Personnage;
  textes: Texte[];
  texte: Texte;
  type: string;
  private rootUrl = 'http://127.0.0.1:8000/';

  constructor(
      private http: HttpClient,
      private fictionService: FictionService,
      private personnageService: PersonnageService,
      private texteService: TexteService,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit() {
      this.getFictionId();
      this.getFiction(this.fictionId);
      this.getTextes(this.fictionId);
      this.getPersonnages(this.fictionId);
  }

  goBack(): void {
    this.location.back();
  }

  getFictionId(): void {
      this.route.params.subscribe(params => {
          return this.fictionId =  params['id'];
      });
  }

  getFiction(fictionId): object {
      return this.fictionService.getFiction(fictionId)
          .subscribe(fiction => this.fiction = fiction);
  };

  getTextes(fictionId): object {
    return this.texteService.getTextes(fictionId)
      .subscribe(textes => this.textes = textes.slice(0, 9));
  };

  addTexte(titre: string, description: string, fiction: number, type: string): void {
    titre = titre.trim();
    description = description.trim();
    type = 'fragment';
    if (!titre && !description) { return; }
    this.texteService.addTexte({ titre, description, fiction, type } as Texte)
      .subscribe(texte => {
        this.textes.push(texte);
      });
  }

  deleteTexte = function(texte: Texte): void {
    this.textes = this.textes.filter(t => t !== texte);
    this.texteService.deleteTexte(texte.id)
      .subscribe(textes => this.textes = textes.slice(0, 9));
  };

  saveTexte(): void {
    this.texteService.updateTexte(this.texte)
      .subscribe(() => this.goBack());
  }

  addPersonnage(titre: string, description: string, fiction: number, annee_naissance?: number, annee_mort?: number): void {
    titre = titre.trim();
    if (!titre) { return; }
    this.personnageService.addPersonnage({ titre, description, fiction, annee_naissance, annee_mort } as Personnage)
      .subscribe(personnage => {
        this.personnages.push(personnage);
      });
  }

  deletePersonnage = function(personnage: Personnage): void {
    this.personnages = this.personnages.filter(p => p !== personnage);
    this.personnageService.deletePersonnage(personnage.id)
      .subscribe(personnages => this.personnages = personnages.slice(0, 9));
  };

  getPersonnages(fictionId): object {
    return this.personnageService.getPersonnages(fictionId)
      .subscribe(personnages => this.personnages = personnages.slice(0, 29));
  };

  getEvenements(fictionId): object {
    return this.evenementService.getEvenements(fictionId)
      .subscribe(evenements => this.textes = evenements.slice(0, 9));
  };


}
