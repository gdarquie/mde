import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog } from '@angular/material';
import {ModalComponent} from '../../components/modal/modal.component';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

