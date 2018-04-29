import { Injectable } from '@angular/core';
import { Projet } from '../classes/projet';
import {Texte} from '../classes/texte';
import {Personnage} from '../classes/personnage';
import {Evenement} from '../classes/evenement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { of } from 'rxjs/observable/of';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class ProjetService {

    private projetsUrl = 'http://127.0.0.1:8000/fictions';

    constructor( private http: HttpClient, private messageService: MessageService ) { }

    getProjet(projetId): Observable<Projet> {
        console.log('Get Projet = '+projetId);

        this.messageService.add('ProjetService: projets atteints');
        return this.http.get<Projet>(this.projetsUrl + '/' + projetId );
    }

    getProjets(): Observable<Projet[]> {
        this.messageService.add('ProjetService: projets atteints');
        return this.http.get<Projet[]>(this.projetsUrl)
            .pipe(
                catchError(this.handleError('getProjets', []))
        );
    }

    // getTextesProjet(projetId): Observable<Texte[]> {
    //     return this.http.get<Texte[]>(this.projetUrl + '=' + projetId + '/textes')
    //         .pipe(
    //             catchError(this.handleError('getTextesProjet', []))
    //         );
    // }
    //
    // getEvenementsProjet(projetId): Observable<Evenement[]> {
    //     return this.http.get<Evenement[]>(this.projetsUrl + '=' + projetId + '/evenements')
    //         .pipe(
    //             catchError(this.handleError('getEvenementsProjet', []))
    //         );
    // }
    //
    // getPersonnagesProjet(projetId): Observable<Personnage[]> {
    //     return this.http.get<Personnage[]>(this.projetsUrl + '=' + projetId + '/personnages')
    //         .pipe(
    //             catchError(this.handleError('getPersonnagesProjet', []))
    //         );
    // }

    /** POST: add a new hero to the server */
    addProjet (projet: Projet): Observable<Projet> {
        console.log(projet);
        return this.http.post<Projet>(this.projetsUrl, projet, httpOptions).pipe(
            catchError(this.handleError<Projet>('addProjet'))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
