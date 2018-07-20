import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  titre: string;
  isEditionFiction: boolean;
  isAjoutFiction: boolean;
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class ModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  @Input() modalTitre;
  fictionId = this.data.fictionId;

}
