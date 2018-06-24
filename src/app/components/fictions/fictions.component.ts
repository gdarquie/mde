import { Component, OnInit } from '@angular/core';
import { Fiction } from '../../classes/fiction';
import { FictionService} from '../../services/fiction.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {trigger, style, transition, animate, keyframes, query, stagger} from "@angular/animations";
import {MatDialog} from '@angular/material';

import {ModalComponent} from '../../components/modal/modal.component';
import {ModalEditionComponent} from '../../components/modal-edition/modal-edition.component';


@Component({
    selector: 'app-fictions',
    templateUrl: './fictions.component.html',
    styleUrls: ['./fictions.component.css'],
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
export class FictionsComponent implements OnInit {

    fictions: Fiction[];
    displayText: string = 'Display Texte';
    buttonText: string = 'Valider';

    constructor(private http: HttpClient, private fictionService: FictionService, public dialog: MatDialog) { }

    ngOnInit() {
        this.getFictions();
    }

    getFictions(): void {
        this.fictionService.getFictions()
            .subscribe(fictions => this.fictions = fictions.slice(0, 9));
    }

    addFiction(titre: string, description: string): void {
        titre = titre.trim();
        description = description.trim();

        if (!titre && !description) { return; }
        this.fictionService.addFiction({ titre, description } as Fiction)
            .subscribe(fiction => {
                this.fictions.push(fiction);
            });
    }

    editFiction(fiction) {
      console.log('Edition de la fiction = '+fiction.id);
      let titre = fiction.titre;
      let description = fiction.description;
      console.log(titre+' et '+description);
      this.dialog.open(ModalEditionComponent, {
        width: '650px',
      });

    }

    removeFiction = function(fiction) {
        this.fictionService.deleteFiction(fiction.id)
            .subscribe(fictions => this.fictions = fictions.slice(0, 9));
        const index = this.fictions.indexOf(fiction);
        this.fictions.splice(index, 1);

    };

    openDialog(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '650px',
    });
  }

}
