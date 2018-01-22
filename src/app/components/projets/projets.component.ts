import { Component, OnInit } from '@angular/core';
import { Projet } from '../../classes/projet';
import { ProjetService} from '../../services/projet.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

    projets: Projet[];

    constructor(private http: HttpClient, private projetService: ProjetService) { }

    ngOnInit() {
        this.getProjets();
    }

    getProjets(): void {
        this.projetService.getProjets()
            .subscribe(projets => this.projets = projets.slice(1, 10));
    }

    addProjet(titre: string, description: string): void {
        console.log('Oui, lancée!!');
        description = description.trim();
        titre = 'test';
        if (!description) { return; }
        this.projetService.addProjet({ titre, description } as Projet)
            .subscribe(projet => {
                this.projets.push(projet);
            });
    }

}
