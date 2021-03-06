import { Injectable } from '@angular/core';
import { Personnage } from '../classes/personnage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Payload} from '../classes/payload';
import {environment} from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class PersonnageService {
    private personnagesUrl = environment.apiUrl + '/personnages';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer ' + environment.token
        })
    };

    constructor(
        private http: HttpClient
    ) { }
    /**
     *
     * @param fictionId
     */
    getPayload(fictionId): Observable<Payload> {
        return this.http.get<Payload>(this.personnagesUrl + '/fiction/' + fictionId, this.httpOptions);
    }
    /** POST: ajouter un personnage */
    addPersonnage (personnage: Personnage): Observable<Personnage> {
        return this.http.post<Personnage>(this.personnagesUrl, personnage, httpOptions).pipe(
            catchError(this.handleError<Personnage>('addPersonnage'))
        );
    }

    /** DELETE: ajouter un personnage */
    deletePersonnage (personnageId): Observable<Personnage> {
        return this.http.delete<Personnage>(this.personnagesUrl + '/' + personnageId, httpOptions).pipe(
            catchError(this.handleError<Personnage>('deleteFiction'))
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
