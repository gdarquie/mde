import { Component, OnInit } from '@angular/core';
import {Fiction} from '../../classes/fiction';
import { Texte } from '../../classes/texte';
import { FictionService} from '../../services/fiction.service';
import { PersonnageService} from '../../services/personnage.service';
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

    titre: string = 'Nom';
    description: string = 'Description';

    fictionId: string;
    fiction: Fiction;
    personnages: Personnage[];
    personnage: Personnage;

    constructor(
        private http: HttpClient,
        private fictionService: FictionService,
        private personnageService: PersonnageService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getFictionId();
        this.getFiction(this.fictionId);
    }

    getFictionId(): void {
        this.route.params.subscribe(params => {
            return this.fictionId =  params['id'];
        });
    }

    getFiction(fictionId): void {
        this.fictionService.getFiction(fictionId)
            .subscribe(fiction => this.fiction = fiction);
    }


    addPersonnage(titre: string, description: string, annee_naissance?: number, annee_mort?: number): void {
        titre = titre.trim();
        if (!titre) { return; }
        this.personnageService.addPersonnage({ titre, description, annee_naissance, annee_mort } as Personnage)
            .subscribe(personnage => {
                this.personnages.push(personnage);
            });
    }


}
