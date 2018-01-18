import { Component, OnInit } from '@angular/core';
import { Projet } from '../../classes/projet';
import { Texte } from '../../classes/texte';
import { ProjetService} from '../../services/projet.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Personnage} from '../../classes/personnage';
import {Evenement} from '../../classes/evenement';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.css']
})
export class ProjetDetailComponent implements OnInit {

    projetId: string;
    projets: Projet[];
    textesProjet: Texte[];
    personnagesProjet: Personnage[];
    evenementsProjet: Evenement[];

    constructor(private http: HttpClient, private projetService: ProjetService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getProjetId();
        this.getTextesProjet();
        this.getPersonnagesProjet();
        this.getEvenementsProjet();
    }

    getProjetId(): void {
        this.route.params.subscribe(params => {
            this.projetId =  params['id'];
        });
    }

    getTextesProjet(): void {
        this.projetService.getTextesProjet(this.projetId)
            .subscribe(textesProjet => this.textesProjet = textesProjet);
    }

    getPersonnagesProjet(): void {
        this.projetService.getPersonnagesProjet(this.projetId)
            .subscribe(personnagesProjet => this.personnagesProjet = personnagesProjet);
    }

    getEvenementsProjet(): void {
        this.projetService.getEvenementsProjet(this.projetId)
            .subscribe(evenementsProjet => this.evenementsProjet = evenementsProjet);
    }


}
