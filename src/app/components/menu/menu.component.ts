import {Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {Fiction} from '../../classes/fiction';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  fictionId: string;

  constructor(public dialog: MatDialog) {}

  @Input() fiction: object;
  @Input() titreMenu: string;

  ngOnInit() {
  }

  openDialog(): void {
   this.dialog.open(ModalComponent, {
      width: '650px',
      data: {
        titre: 'Ajout de fiction',
        isAjoutFiction: true,
        isEditionFiction: false
      }
    });
  }



}


