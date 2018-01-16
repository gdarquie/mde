import { Injectable } from '@angular/core';
import { Projet } from '../classes/projet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjetService {
    private projetsUrl = 'http://127.0.0.1:8000/projets';
    constructor( private http: HttpClient ) { }

    getProjets(): Observable<Projet[]> {
        return this.http.get<Projet[]>(this.projetsUrl);
    }

}
