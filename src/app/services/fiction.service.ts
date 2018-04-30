import { Injectable } from '@angular/core';
import { Fiction } from '../classes/fiction';
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
export class FictionService {

    private fictionsUrl = 'http://127.0.0.1:8000/fictions';

    constructor( private http: HttpClient, private messageService: MessageService ) { }

    getFiction(fictionId): Observable<Fiction> {
        console.log('Get Fiction = '+fictionId);

        this.messageService.add('FictionService: fictions atteints');
        return this.http.get<Fiction>(this.fictionsUrl + '/' + fictionId );
    }

    getFictions(): Observable<Fiction[]> {
        this.messageService.add('FictionService: fictions atteints');
        return this.http.get<Fiction[]>(this.fictionsUrl)
            .pipe(
                catchError(this.handleError('getFictions', []))
        );
    }

    // getTextesFiction(fictionId): Observable<Texte[]> {
    //     return this.http.get<Texte[]>(this.fictionUrl + '=' + fictionId + '/textes')
    //         .pipe(
    //             catchError(this.handleError('getTextesFiction', []))
    //         );
    // }
    //
    // getEvenementsFiction(fictionId): Observable<Evenement[]> {
    //     return this.http.get<Evenement[]>(this.fictionsUrl + '=' + fictionId + '/evenements')
    //         .pipe(
    //             catchError(this.handleError('getEvenementsFiction', []))
    //         );
    // }
    //
    // getPersonnagesFiction(fictionId): Observable<Personnage[]> {
    //     return this.http.get<Personnage[]>(this.fictionsUrl + '=' + fictionId + '/personnages')
    //         .pipe(
    //             catchError(this.handleError('getPersonnagesFiction', []))
    //         );
    // }

    /** POST: add a new hero to the server */
    addFiction (fiction: Fiction): Observable<Fiction> {
        console.log(fiction);
        return this.http.post<Fiction>(this.fictionsUrl, fiction, httpOptions).pipe(
            catchError(this.handleError<Fiction>('addFiction'))
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
