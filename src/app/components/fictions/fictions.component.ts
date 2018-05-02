import { Component, OnInit } from '@angular/core';
import { Fiction } from '../../classes/fiction';
import { FictionService} from '../../services/fiction.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {trigger, style, transition, animate, keyframes, query, stagger} from "@angular/animations";

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

    constructor(private http: HttpClient, private fictionService: FictionService) { }

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

}
