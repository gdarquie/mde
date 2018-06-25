import { Component, OnInit } from '@angular/core';
import {Fiction } from '../../classes/fiction';
import { Texte } from '../../classes/texte';
import { FictionService } from '../../services/fiction.service';
import { PersonnageService } from '../../services/personnage.service';
import { TexteService } from '../../services/texte.service';
import { EvenementService } from '../../services/evenement.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personnage } from '../../classes/personnage';
import { Evenement } from '../../classes/evenement';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-fiction-detail',
  templateUrl: './page-fiction-detail.component.html',
  styleUrls: ['./page-fiction-detail.component.css']
})
export class PageFictionDetailComponent implements OnInit {

  titre: string = 'Nom';
  description: string = 'Description';
  fictionId: string;
  fiction: Fiction;
  personnages: Personnage[];
  personnage: Personnage;
  textes: Texte[];
  texte: Texte;
  type: string;
  evenements: Evenement[];
  evenement: Evenement;
  private rootUrl = 'http://127.0.0.1:8000/';

  constructor(
    private http: HttpClient,
    private fictionService: FictionService,
    private personnageService: PersonnageService,
    private texteService: TexteService,
    private evenementService: EvenementService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getFictionId();
    this.getFiction(this.fictionId);
    this.getTextes(this.fictionId);
    this.getPersonnages(this.fictionId);
    this.getEvenements(this.fictionId);
  }

  goBack(): void {
    this.location.back();
  }

  getFictionId(): void {
    this.route.params.subscribe(params => {
      return this.fictionId =  params['id'];
    });
  }

  /**
   * @param fictionId
   * @returns {object}
   */
  getFiction(fictionId): object {
    return this.fictionService.getFiction(fictionId)
      .subscribe(fiction => this.fiction = fiction);
  };

  /**
   * @param fictionId
   * @returns {object}
   */
  getTextes(fictionId): object {
    return this.texteService.getTextes(fictionId)
      .subscribe(textes => this.textes = textes.slice(0, 9));
  };

  /**
   * @param {string} titre
   * @param {string} description
   * @param {number} fiction
   * @param {string} type
   */
  addTexte(titre: string, description: string, fiction: number, type: string): void {
    titre = titre.trim();
    description = description.trim();
    type = 'fragment';
    if (!titre || !description) { return; }
    this.texteService.addTexte({ titre, description, fiction, type } as Texte)
      .subscribe(texte => {
        this.textes.push(texte);
      });
  }

  /**
   * @param {Texte} texte
   */
  deleteTexte = function(texte: Texte): void {
    this.textes = this.textes.filter(t => t !== texte);
    this.texteService.deleteTexte(texte.id)
      .subscribe(textes => this.textes = textes.slice(0, 9));
  };

  saveTexte(): void {
    this.texteService.updateTexte(this.texte)
      .subscribe(() => this.goBack());
  }

  /**
   * @param fictionId
   * @returns {object}
   */
  getPersonnages(fictionId): object {
    return this.personnageService.getPersonnages(fictionId)
      .subscribe(personnages => this.personnages = personnages.slice(0, 29));
  };

  /**
   * @param {string} titre
   * @param {string} description
   * @param {number} fiction
   * @param {number} annee_naissance
   * @param {number} annee_mort
   */
  addPersonnage(titre: string, description: string, fiction: number, annee_naissance?: number, annee_mort?: number): void {
    titre = titre.trim();
    description = description.trim();
    if (!titre || !description) { return; }
    this.personnageService.addPersonnage({ titre, description, fiction, annee_naissance, annee_mort } as Personnage)
      .subscribe(personnage => {
        this.personnages.push(personnage);
      });
  }

  /**
   * @param {Personnage} personnage
   */
  deletePersonnage = function(personnage: Personnage): void {
    this.personnages = this.personnages.filter(p => p !== personnage);
    this.personnageService.deletePersonnage(personnage.id)
      .subscribe(personnages => this.personnages = personnages.slice(0, 9));
  };

  /**
   * @param fictionId
   * @returns {object}
   */
  getEvenements(fictionId): object {
    return this.evenementService.getEvenements(fictionId)
      .subscribe(evenements => this.evenements = evenements.slice(0, 9));
  };

  /**
   * @param {string} titre
   * @param {string} description
   * @param {number} fiction
   */
  addEvenement(titre: string, description: string, fiction: number): void {
    titre = titre.trim();
    description = description.trim();
    if (!titre || !description) { return; }
    this.evenementService.addEvenement({ titre, description, fiction } as Evenement)
      .subscribe(evenement => {
        this.evenements.push(evenement);
      });
  }

  /**
   * @param {Evenement} evenement
   */
  deleteEvenement = function(evenement: Evenement): void {
    this.evenements = this.evenements.filter(t => t !== evenement);
    this.evenementService.deleteEvenement(evenement.id)
      .subscribe(evenements => this.evenements = evenements.slice(0, 9));
  };

}

