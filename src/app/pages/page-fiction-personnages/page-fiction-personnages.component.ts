import { Component, OnInit } from '@angular/core';
import {Fiction} from '../../classes/fiction';
import {FictionService} from '../../services/fiction.service';
import { PersonnageService } from '../../services/personnage.service';
import {ActivatedRoute} from '@angular/router';
import {Personnage} from '../../classes/personnage';

@Component({
  selector: 'app-page-fiction-personnages',
  templateUrl: './page-fiction-personnages.component.html',
  styleUrls: ['./page-fiction-personnages.component.css']
})
export class PageFictionPersonnagesComponent implements OnInit {

  fictionId: string;
  fiction: Fiction;
  personnages: Personnage[];
  personnage: Personnage;

  constructor(
    private route: ActivatedRoute,
    private fictionService: FictionService
    private personnageService: PersonnageService
  ) { }

  ngOnInit() {
    this.getFictionId();
    this.getFiction(this.fictionId);
    this.getPersonnages(this.fictionId);
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

}
