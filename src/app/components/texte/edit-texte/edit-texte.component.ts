import { Component, OnInit, Input, Inject } from '@angular/core';
import { Texte } from '../../../classes/texte';
import { TexteService } from '../../../services/texte.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../../modal/modal.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-texte',
  templateUrl: './edit-texte.component.html',
  styleUrls: ['./edit-texte.component.css']
})
export class EditTexteComponent implements OnInit {

  texte: Texte;
  textes: Texte[];

  @Input() indexId;

  constructor(
    private texteService: TexteService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getTexte(this.data.indexId);
    console.log(this.getTexte(this.data.indexId));
  }

  getTexte(texteId): object {
    return this.texteService.getTexte(texteId)
      .subscribe(texte => this.texte = texte);
  }

  /**
   *
   * @param {string} titre
   * @param {string} description
   */
  editTexte(titre: string, description: string): void {

    const id = this.texte.id;
    const fictionId = this.texte.fictionId;
    const type = this.texte.type;

    this.texteService.putTexte({ id, titre, description, fictionId, type } as Texte)
      .subscribe();
    this.dialogRef.close();
  }
}
