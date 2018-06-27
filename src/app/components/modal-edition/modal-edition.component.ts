import { Component, OnInit, Input, Inject } from '@angular/core';
import { Fiction } from '../../classes/fiction';
import { FictionService } from '../../services/fiction.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {PageAccueilComponent} from '../../pages/page-accueil/page-accueil.component';

@Component({
  selector: 'app-modal-edition',
  templateUrl: './modal-edition.component.html',
  styleUrls: ['./modal-edition.component.css']
})
export class ModalEditionComponent implements OnInit {

  fictionId: string;
  fiction: Fiction;

  constructor(
    private fictionService: FictionService,
    public dialogRef: MatDialogRef<PageAccueilComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getFiction(this.data.fictionId);
  }

  /**
   * @param fictionId
   * @returns {object}
   */
  getFiction(fictionId): object {
    return this.fictionService.getFiction(fictionId)
      .subscribe(fiction => this.fiction = fiction);
  };

  onNoClick(): void {
    this.dialogRef.close();
  }

  editFiction(): void {
    //edition
    console.log('Edition réussie');
    this.dialogRef.close();
  }

}
