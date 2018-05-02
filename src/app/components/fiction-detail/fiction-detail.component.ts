import { Component, OnInit } from '@angular/core';
import {Fiction} from '../../classes/fiction';
import { Texte } from '../../classes/texte';
import { FictionService} from '../../services/fiction.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Personnage} from '../../classes/personnage';
import {Evenement} from '../../classes/evenement';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiction-detail',
  templateUrl: './fiction-detail.component.html',
  styleUrls: ['./fiction-detail.component.css']
})
export class FictionDetailComponent implements OnInit {

    fictionId: string;
    fiction: Fiction;
    fictions: Fiction[];
    // textesFiction: Texte[];
    // personnagesFiction: Personnage[];
    // evenementsFiction: Evenement[];

    constructor(private http: HttpClient, private fictionService: FictionService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getFictionId();
        this.getFiction(this.fictionId);
        // this.getTextesFiction(this.fictionId);
        // this.getPersonnagesFiction(this.fictionId);
        // this.getEvenementsFiction(this.fictionId);
    }

    getFictionId(): void {
        this.route.params.subscribe(params => {
            this.fictionId =  params['id'];
        });
    }

    getFiction(fictionId): void {
        this.fictionService.getFiction(fictionId)
            .subscribe(fiction => this.fiction = fiction);
    }
    //
    // getTextesFiction(fictionId): void {
    //     this.fictionService.getTextesFiction(fictionId)
    //         .subscribe(textesFiction => this.textesFiction = textesFiction);
    // }
    //
    // getPersonnagesFiction(fictionId): void {
    //     this.fictionService.getPersonnagesFiction(fictionId)
    //         .subscribe(personnagesFiction => this.personnagesFiction = personnagesFiction);
    // }
    //
    // getEvenementsFiction(fictionId): void {
    //     this.fictionService.getEvenementsFiction(fictionId)
    //         .subscribe(evenementsFiction => this.evenementsFiction = evenementsFiction);
    // }

}
