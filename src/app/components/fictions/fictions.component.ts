import { Component, OnInit } from '@angular/core';
import { Projet } from '../../classes/fiction';
import { ProjetService} from '../../services/projet.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fictions',
  templateUrl: './fictions.component.html',
  styleUrls: ['./fictions.component.css']
})
export class ProjetsComponent implements OnInit {

    projets: Projet[];

    constructor(private http: HttpClient, private projetService: ProjetService) { }

    ngOnInit() {
        this.getProjets();
    }

    getProjets(): void {
        this.projetService.getProjets()
            .subscribe(projets => this.projets = projets.slice(0, 9));
    }

    addProjet(titre: string, description: string): void {
        titre = titre.trim();
        description = description.trim();

        if (!titre && !description) { return; }
        this.projetService.addProjet({ titre, description } as Projet)
            .subscribe(projet => {
                this.projets.push(projet);
            });
    }

}
