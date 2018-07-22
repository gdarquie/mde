import { Component, OnInit, Input } from '@angular/core';
import {Texte} from '../../../classes/texte';
import { TexteService } from '../../../services/texte.service';
import { HttpClient } from '@angular/common/http';
import {ModalComponent} from '../../modal/modal.component';
import {MatDialogRef} from '@angular/material';
import {Fiction} from '../../../classes/fiction';

@Component({
  selector: 'app-add-texte',
  templateUrl: './add-texte.component.html',
  styleUrls: ['./add-texte.component.css']
})
export class AddTexteComponent implements OnInit {

  constructor(
    private texteService: TexteService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<ModalComponent>,

  ) { }

  textes: Texte[];
  texte: Texte;

  @Input() indexId;

  ngOnInit() {
  }

  /**
   * @param {string} titre
   * @param {string} description
   * @param {number} fictionId
   * @param {string} type
   */
  addTexte(titre: string, description: string, fictionId: number, type: string): void {
    titre = titre.trim();
    description = description.trim();
    type = 'fragment';

    if (!titre || !description) { return; }
    this.texteService.addTexte({ titre, description, fictionId, type } as Texte)
      .subscribe(texte => {
        this.textes.push(texte);
      });
    this.dialogRef.close();
  }
}
