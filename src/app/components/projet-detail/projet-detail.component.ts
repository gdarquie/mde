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
    projet: Projet;
    projets: Projet[];
    textesProjet: Texte[];
    personnagesProjet: Personnage[];
    evenementsProjet: Evenement[];

    constructor(private http: HttpClient, private projetService: ProjetService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getProjetId();
        this.getProjet(this.projetId);
        this.getTextesProjet(this.projetId);
        this.getPersonnagesProjet(this.projetId);
        this.getEvenementsProjet(this.projetId);
    }

    getProjetId(): void {
        this.route.params.subscribe(params => {
            this.projetId =  params['id'];
        });
    }

    getProjet(projetId): void {
        this.projetService.getProjet(projetId)
            .subscribe(projet => this.projet = projet);
    }

    getTextesProjet(projetId): void {
        this.projetService.getTextesProjet(projetId)
            .subscribe(textesProjet => this.textesProjet = textesProjet);
    }

    getPersonnagesProjet(projetId): void {
        this.projetService.getPersonnagesProjet(projetId)
            .subscribe(personnagesProjet => this.personnagesProjet = personnagesProjet);
    }

    getEvenementsProjet(projetId): void {
        this.projetService.getEvenementsProjet(projetId)
            .subscribe(evenementsProjet => this.evenementsProjet = evenementsProjet);
    }


}
