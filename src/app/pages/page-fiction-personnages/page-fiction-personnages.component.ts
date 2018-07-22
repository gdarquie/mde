import { Component, OnInit } from '@angular/core';
import {Fiction} from '../../classes/fiction';
import {FictionService} from '../../services/fiction.service';
import { PersonnageService } from '../../services/personnage.service';
import {ActivatedRoute} from '@angular/router';
import {Personnage} from '../../classes/personnage';
import {ModalComponent} from '../../components/modal/modal.component';
import {MatDialog} from '@angular/material';

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
  titreMenu = 'personnages';

  constructor(
    private route: ActivatedRoute,
    private fictionService: FictionService,
    private personnageService: PersonnageService,
    public dialog: MatDialog
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
      .subscribe(personnages => this.personnages = personnages.slice(0, 99));
  };

  /**
   * @param {Personnage} personnage
   */
  deletePersonnage = function(personnage: Personnage): void {
    this.personnages = this.personnages.filter(p => p !== personnage);
    this.personnageService.deletePersonnage(personnage.id)
      .subscribe(personnages => this.personnages = personnages.slice(0, 99));
  };

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '650px',
      data: {
        titre: 'Ajout de personnage',
        indexId: this.fictionId,
        isAjoutPersonnage: true
      }
    });
  }

}
