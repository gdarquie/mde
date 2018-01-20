import { Injectable } from '@angular/core';
import { Projet } from '../classes/projet';
import {Texte} from '../classes/texte';
import {Personnage} from '../classes/personnage';
import {Evenement} from '../classes/evenement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjetService {

    private projetsUrl = 'http://127.0.0.1:8000/projets';
    private projetUrl = 'http://127.0.0.1:8000/projet';

    constructor( private http: HttpClient ) { }

    getProjet(projetId): Observable<Projet> {
        return this.http.get<Projet>(this.projetUrl + '=' + projetId );
    }

    getProjets(): Observable<Projet[]> {
        return this.http.get<Projet[]>(this.projetsUrl);
    }

    getTextesProjet(projetId): Observable<Texte[]> {
        return this.http.get<Texte[]>(this.projetUrl + '=' + projetId + '/textes');
    }

    getEvenementsProjet(projetId): Observable<Evenement[]> {
        return this.http.get<Evenement[]>(this.projetUrl + '=' + projetId + '/evenements');
    }

    getPersonnagesProjet(projetId): Observable<Personnage[]> {
        return this.http.get<Personnage[]>(this.projetUrl + '=' + projetId + '/personnages');
    }

}
