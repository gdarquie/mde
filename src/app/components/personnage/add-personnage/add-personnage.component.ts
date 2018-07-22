import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from '../../../classes/personnage';
import { PersonnageService } from '../../../services/personnage.service';
import { HttpClient } from '@angular/common/http';
import {ModalComponent} from '../../modal/modal.component';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-personnage',
  templateUrl: './add-personnage.component.html',
  styleUrls: ['./add-personnage.component.css']
})
export class AddPersonnageComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private personnageService: PersonnageService,
    public dialogRef: MatDialogRef<ModalComponent>,
  ) {}

  personnage: Personnage;
  personnages: Personnage[];
  content: string;

  @Input() indexId;

  ngOnInit() {
  }

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
    console.log(fiction);
    this.personnageService.addPersonnage({ titre, description, fiction, annee_naissance, annee_mort } as Personnage)
      .subscribe(personnage => {
        this.personnages.push(personnage);
      });
    this.dialogRef.close();
  }

}
