import { Component, OnInit } from '@angular/core';
import {Projet} from '../../classes/projet';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ProjetService} from '../../services/projet.service';
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-page-projet',
  templateUrl: './page-projet.component.html',
  styleUrls: ['./page-projet.component.css']
})
export class PageProjetComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private projetService: ProjetService,
        private route: ActivatedRoute,
        private location: Location,
        public dialog: MatDialog
    ) { }

    projetId: string;
    projet: Projet;

    ngOnInit() {
        this.getProjetId();
        this.getProjet(this.projetId);
    }
    getProjetId(): void {
        this.route.params.subscribe(params => {
            return this.projetId = params['id'];
        });
    }

    getProjet(projetId): void {
        this.projetService.getProjet(projetId)
            .subscribe(projet => this.projet = projet);
    }
}
