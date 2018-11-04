import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material';
import {ModalComponent} from '../../components/modal/modal.component';
import { Fiction } from '../../classes/fiction';
import { FictionService} from '../../services/fiction.service';
import {Collection} from '../../classes/collection';
import { HttpClient } from '@angular/common/http';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity:0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class PageAccueilComponent implements OnInit {

  fictions: Fiction[];
  items: Collection[];
  maFiction: Fiction;
  content: string;
  titreMenu = 'accueil';

  constructor(private http: HttpClient, private fictionService: FictionService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getMaFictionTest(7);
    this.getFictions();
  }

  //todo : à supprimer
  getMaFictionTest(fictionId): object {
      return this.fictionService.getFiction(fictionId)
          .subscribe(fiction => this.maFiction = fiction);
  };


  getFictions(): void {
    this.fictionService.getCollection()
      .subscribe(items => this.items = items.slice(0, 9));
  }

    /**
     * @param titre
     * @param description
     */
  addFiction(titre: string, description: string): void {
    titre = titre.trim();
    description = description.trim();

    if (!titre && !description) { return; }
    this.fictionService.addFiction({ titre, description } as Fiction)
      .subscribe(fiction => {
        this.fictions.push(fiction);
      });
  }

    /**
     * @param fiction
     */
  editFiction(fiction) {

    let titre = fiction.titre;
    let description = fiction.description;

    this.dialog.open(ModalComponent, {
      width: '650px',
      data: {
        titre: 'Edition de fiction',
        indexId: fiction.id,
        isAjoutFiction: false,
        isEditionFiction: true
      }
    });

  }

  removeFiction = function(fiction) {
    this.fictionService.deleteFiction(fiction.id)
      .subscribe(fictions => this.fictions );
    const index = this.fictions.indexOf(fiction);
    this.fictions.splice(index, 1);

  };

  openDialog(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '650px',
      data: {
        titre: 'Ajout de fiction',
        isAjoutFiction: true
      }
    });
  }

}

